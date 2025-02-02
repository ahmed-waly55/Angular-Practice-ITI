import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductsService } from '../../services/static-products.service';
import { Iproduct } from '../../models/iproduct';
import { CommonModule,Location } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  currentId:number = 0;
  product:Iproduct | null = null;
  idsArr:number[];
  currentIdIndex:number = 0;

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _staticProduct:StaticProductsService,
    private _location:Location,
    private _router:Router,

  ){
    this.idsArr = this._staticProduct.mapProductsToId();
  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap)=>{
      this.currentId = Number(paramMap.get('id'));
      this.product = this._staticProduct.getProductById(this.currentId);
    });

    // this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'));

  }

goBack(){
this._location.back();
}

next(){
  // let idsArr = this._staticProduct.mapProductsToId();

  
 this.currentIdIndex = this.idsArr.findIndex((id)=> id == this.currentId)
  if(this.currentIdIndex != this.idsArr.length - 1){
    this._router.navigateByUrl(`/details/${this.idsArr[this.currentIdIndex + 1]}`)
  }
 

} 

prev(){
   this.currentIdIndex = this.idsArr.findIndex((id)=> id == this.currentId)

  if(this.currentIdIndex !== 0){
    this._router.navigateByUrl(`/details/${this.idsArr[this.currentIdIndex - 1]}`)

  }



}

}
