import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {

  products :Iproduct[]
  constructor() { 
    this.products = [
      {id: 1, name: 'HP 1', price: 1000000, quantity: 0, imgUrl: 'https://fakeimg.pl/350x200/?text=Hello', catId: 1},
      {id: 2, name: 'DELL 2', price: 2000000, quantity: 13, imgUrl: 'https://fakeimg.pl/350x200/?text=Hello', catId: 2},
      {id: 3, name: 'LENOVO 3', price: 30000, quantity: 7, imgUrl: 'https://fakeimg.pl/350x200/?text=Hello', catId: 1},
      {id: 4, name: 'HP 4', price: 400, quantity: 2, imgUrl: 'https://fakeimg.pl/350x200/?text=Hello', catId: 2},
      {id: 5, name: 'DELL 5', price: 500, quantity: 10, imgUrl: 'https://fakeimg.pl/350x200/?text=Hello', catId: 1},
      {id: 6, name: 'LENOVO 6', price: 600, quantity: 4, imgUrl: 'https://fakeimg.pl/350x200/?text=Hello', catId: 2},
      {id: 7, name: 'HP 7', price: 700000000000, quantity: 6, imgUrl: 'https://fakeimg.pl/350x200/?text=Hello', catId: 1},
      {id: 8, name: 'DELL 8', price: 800, quantity: 8, imgUrl: 'https://fakeimg.pl/350x200/?text=Hello', catId: 2},
    ]
  }

  getAllProducts():Iproduct[] {
    return this.products;
  }

  getProductById(id:number):Iproduct | null{
     let foundedPrd = this.products.find((prd)=> prd.id == id) 
     return foundedPrd?foundedPrd:null;
  }

  getProductsByCatId(catId:number){
    if(catId == 0){
      return this.products; 
    }
    else{
      return this.products.filter((prd)=> prd.catId == catId)
    }
  }

  mapProductsToId():number[] {
    return this.products.map((prod)=>prod.id)
  }

}
 