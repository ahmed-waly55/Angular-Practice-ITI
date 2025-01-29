import { Component } from '@angular/core';
import { StaticProductsService } from '../../services/static-products.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  providers:[StaticProductsService],
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private _StaticProductsService:StaticProductsService){
    
  }

}
