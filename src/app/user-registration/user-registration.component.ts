import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  name=""
  address=""
  phno=""
  email=""
  uname=""
  password=""
  cpassword=""
  constructor(private api:ApiService){}

  readvalues=()=>
  {
    let data={"name":this.name,"address":this.address,"phno":this.phno,"email":this.email,"uname":this.uname,"password":this.password,"cpassword":this.cpassword}
    console.log(data)
    this.api.addReg(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Course added Successfully")
      }
    }
    )
  }

}
