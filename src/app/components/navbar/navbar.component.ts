import { Component, OnInit } from '@angular/core';
import { StaticProductsService } from '../../services/static-products.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,AsyncPipe],
  templateUrl: './navbar.component.html',
  providers:[StaticProductsService],
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  isUserLogined!:boolean;
  counter$:Observable<number> // the best case name var Observable write end name $
  constructor(private _userAuth:UserAuthService,private _Store:Store<{counter:number}>){
    this.counter$ = this._Store.select("counter")
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
