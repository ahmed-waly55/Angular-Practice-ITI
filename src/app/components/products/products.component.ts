import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighligtCardDirective } from '../../directives/highligt-card.directive';

// import dirctive name HighligtCardDirective 

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,HighligtCardDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:Iproduct[];
  categories:Icategory[];
  selectedCatId:number = 0;
  totalOrder:number = 0;




  constructor(){
    this.products = [
      {id: 1, name: 'Product 1', price: 100, quantity: 0, imgUrl: 'https://fakeimg.pl/350x200/?text=Hello', catId: 1},
      {id: 2, name: 'Product 2', price: 200, quantity: 3, imgUrl: 'https://fakeimg.pl/350x200/?text=Hello', catId: 2},
      {id: 3, name: 'Product 3', price: 300, quantity: 7, imgUrl: 'https://fakeimg.pl/350x200/?text=Hello', catId: 1},
      {id: 4, name: 'Product 4', price: 400, quantity: 2, imgUrl: 'https://fakeimg.pl/350x200/?text=Hello', catId: 2},
      {id: 5, name: 'Product 5', price: 500, quantity: 10, imgUrl: 'https://fakeimg.pl/350x200/?text=Hello', catId: 1},
      {id: 6, name: 'Product 6', price: 600, quantity: 4, imgUrl: 'https://fakeimg.pl/350x200/?text=Hello', catId: 2},
      {id: 7, name: 'Product 7', price: 700, quantity: 6, imgUrl: 'https://fakeimg.pl/350x200/?text=Hello', catId: 1},
      {id: 8, name: 'Product 8', price: 800, quantity: 8, imgUrl: 'https://fakeimg.pl/350x200/?text=Hello', catId: 2},
    ]

    this.categories = [
      {id: 1, name: 'Category 1'},
      {id: 2, name: 'Category 2'},
    ]
  }


  buy(count:string,price:number , quantity:number){
   if(+count > quantity){
     alert('Not enough quantity in stock');
   }
   else{
    this.totalOrder += +count * price;

  }
  }


}
