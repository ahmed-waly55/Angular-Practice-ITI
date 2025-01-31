import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticProductsService } from '../../services/static-products.service';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  currentId:number = 0;
  product:Iproduct | null = null;

  constructor(private _activatedRoute:ActivatedRoute, private _staticProduct:StaticProductsService){

  }
  ngOnInit(): void {
    this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'));

   this.product = this._staticProduct.getProductById(this.currentId)
  }


}
