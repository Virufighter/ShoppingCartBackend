import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usersearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css']
})
export class UsersearchComponent {
  name=""
  sdata:any=[]
  
  constructor(private api:ApiService){}
  readValue=()=>{
    let data={"name":this.name}
    console.log(data)
    this.api.searchEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("no result found")
        } else {
          this.sdata=response
        }
      }
    )
  }

}
