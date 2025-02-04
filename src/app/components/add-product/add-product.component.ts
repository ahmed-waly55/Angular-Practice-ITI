import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Icategory } from '../../models/icategory';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  categories:Icategory[];
  newProduct:Iproduct= {} as Iproduct;
  constructor(
    private _ApiProductService:ApiProductsService,
    private _router:Router
  ){
    this.categories = [
      {
        id: 1,
        name: "electronics",
          },
      {
        id: 2,
        name: "jewelery",
          }
    ]
  }

  addNewProduct(){
    this._ApiProductService.addProduct(this.newProduct).subscribe({
      next: (res)=>{
        alert("Done");
        this._router.navigate(['/products']);

      },
      error: (err)=>{}
    })
  }
}
