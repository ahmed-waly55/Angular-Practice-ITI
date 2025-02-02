import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighligtCardDirective } from '../../directives/highligt-card.directive';
import { SquarePipe } from '../../pipes/square.pipe';
import { StaticProductsService } from '../../services/static-products.service';
import { Router } from '@angular/router';

// import dirctive name HighligtCardDirective 

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,HighligtCardDirective,SquarePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges{

  products:Iproduct[];
  // categories:Icategory[];
  // selectedCatId:number = 0;
  filteredProducts:Iproduct[];
  totalOrder:number = 0;
  productName:string[] = [];
  productPrice:number[] = [];
  myDate:Date = new Date();
  num:number = 4;
  // nameId:number[] = [];
  // lastNumber:number = 0;
  // lastNumber = this.nameId[nameId - 1];
  countInp:Number[] = [];

// 1 - publisher -- > define event 
  @Output() onTotalPriceChanged:EventEmitter<number>


  @Input() recievedCatId:number = 0

  constructor(private _StaticProductsService:StaticProductsService, private _Router:Router){

    // 1.1 - intaial value 
    this.onTotalPriceChanged = new EventEmitter<number>();

    this.products = this._StaticProductsService.getAllProducts();
   
    this.filteredProducts = this.products
  }
  ngOnChanges() {
    // this.filterProducts();

    this.filteredProducts = this._StaticProductsService.getProductsByCatId(this.recievedCatId)

  }


  buy(count:string,price:number , quantity:number){
   if(+count > quantity){
     alert('Not enough quantity in stock');
   }
   else{
    this.totalOrder += +count * price;

    // 2 - fire event 
    this.onTotalPriceChanged.emit(this.totalOrder)

  }
  }

  addOrder(name:string , quantity:string , price:number){
   if(quantity === ""){
     alert('Please enter a quantity');
     
   }
   else{
    this.productName.push(name);
    this.productPrice.push(price * +quantity);
    this.countInp.push(+quantity);
    console.log(this.productName);
   }
    // this.filterProducts();
    // this.nameId +=1
    // this.nameId.push(id)
    // lastNumber = this.nameId.length - 1;
    // console.log(this.lastNumber)

  }



  // filterProducts() {
  //   // if (this.selectedCatId == 0) {
  //   //   this.filteredProducts = this.products;
  //   // } else {
  //   //   this.filteredProducts = this.products.filter((prd) => {
  //   //     return prd.catId == this.selectedCatId; 
  //   //   });
  //   // }

  //      if (this.recievedCatId == 0) {
  //     this.filteredProducts = this.products;
  //   } else {
  //     this.filteredProducts = this.products.filter((prd) => {
  //       return prd.catId == this.recievedCatId; 
  //     });
  //   }
  // }


  navigateToDetails(id:number){
    // this._Router.navigateByUrl(`/details/${id}`)
    this._Router.navigate(['/details',id])
  }


}
