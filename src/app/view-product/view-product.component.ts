import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  constructor(private api:ApiService){
    api.viewEmployee().subscribe(
      (response:any)=>{
        this.data=response;

      }
    )
  }
  data:any=[]

}
