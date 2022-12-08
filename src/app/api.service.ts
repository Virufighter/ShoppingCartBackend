import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addEmployee=(d:any)=>{
    return this.http.post("http://localhost:8080/add",d)

  }
  viewEmployee=()=>{
    return this.http.get("http://localhost:8080/view")
  }
  searchEmployee=(d:any)=>{
    return this.http.post("http://localhost:8080/search",d)

  }
  addReg=(d:any)=>{
    return this.http.post("http://localhost:8080/addreg",d)

  }
  viewReg=()=>{
    return this.http.get("http://localhost:8080/viewreg")
  }
}
