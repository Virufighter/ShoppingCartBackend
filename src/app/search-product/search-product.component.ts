import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
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
