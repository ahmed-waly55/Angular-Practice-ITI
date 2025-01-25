import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [ProductsComponent, FormsModule , CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  // subscriber 
recievedTotalPrice:number = 0;

categories:Icategory[];
selectedCatId:number = 0;
constructor(){
  this.categories = [
    {id: 1, name: 'Category 1'},
    {id: 2, name: 'Category 2'},
  ]
}
  
// subscriber 
calcTotalPrice(total:number){
  this.recievedTotalPrice = total;
}
}
