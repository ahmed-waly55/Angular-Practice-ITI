import { Component, OnInit } from '@angular/core';
import { StaticProductsService } from '../../services/static-products.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { languageAction } from '../../store/language/language.action';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,AsyncPipe],
  templateUrl: './navbar.component.html',
  providers:[StaticProductsService],
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  language$:Observable<string>
  currentLang!:string
  isUserLogined!:boolean;
  counter$:Observable<number> // the best case name var Observable write end name $
  constructor(private _userAuth:UserAuthService,private _Store:Store<{counter:number,language:string}>){
    this.counter$ = this._Store.select("counter");
    this.language$ = this._Store.select('language')
    this.language$.subscribe((lang)=>{
      this.currentLang= lang
    })
  }
  ngOnInit(): void {
    // this.isUserLogined = this._userAuth.getUserLogged();

    this._userAuth.getAuthSubject().subscribe({
      next:(status)=>{
        this.isUserLogined = status;
      },

    })
  }

  changeLang(){
    this._Store.dispatch(languageAction({lang:(this.currentLang == 'en')? 'ar': 'en'}))
  }


  
}
