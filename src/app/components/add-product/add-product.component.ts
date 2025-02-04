import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icategory } from '../../models/icategory';

@Component({
  selector: 'app-add-product',
  imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  categories:Icategory[];
  constructor(){
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
}
