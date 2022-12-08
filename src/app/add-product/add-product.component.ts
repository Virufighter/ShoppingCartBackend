import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  description=""
  name=""
  price=""
  image=""
  category=""
  constructor(private api:ApiService){}

  readvalue=()=>
  {
    
     let data:any={
      
      "name":this.name,
      "description":this.description,
      "price":this.price,
      "image":this.image,
      "category":this.category
    }
    console.log(data)
    this.api.addEmployee(data).subscribe(
      (response:any)=>{
        
        console.log(response)
        if (response.status=="success") {
          alert("product added Successfully")
      }
    }
    )
    
  }

}
