import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  admin=""
  password=""

  constructor(private r:Router,private api:ApiService){
    api.viewReg().subscribe(
      (response:any)=>{
        this.data=response
      }
    )
  }
  
  login=()=>{
    let f:any
    for(let i=0;i<this.data.length;i++){
    if (this.admin==this.data[i].email && this.password==this.data[i].password) {
      f=true
      // this.r.navigate(['/uview'])
      
    } else {
      // alert("ivalid creditials")
      
    }
  }if(f==true){
    this.r.navigate(['/uview'])
  }else{alert("invalid creditials")}

  }
  data:any=[]

}
