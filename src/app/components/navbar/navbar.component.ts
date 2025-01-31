import { Component } from '@angular/core';
import { StaticProductsService } from '../../services/static-products.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  providers:[StaticProductsService],
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private _StaticProductsService:StaticProductsService){
    
  }



  
}
