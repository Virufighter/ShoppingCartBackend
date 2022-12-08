import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  admin=""
  password=""
  constructor(private r:Router){}

  login=()=>{
    if (this.admin=="admin" && this.password=="12345") {
      this.r.navigate(['/add'])
      
    } else {
      alert("ivalid creditials")
      
    }

  }
}
