import { Component, OnInit } from '@angular/core';
import { StaticProductsService } from '../../services/static-products.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  providers:[StaticProductsService],
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  isUserLogined!:boolean;
  constructor(private _userAuth:UserAuthService){
    
  }
  ngOnInit(): void {
    // this.isUserLogined = this._userAuth.getUserLogged();

    this._userAuth.getAuthSubject().subscribe({
      next:(status)=>{
        this.isUserLogined = status;
      },

    })
  }




  
}
