import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isUserLogged:boolean;

  constructor(private _userAuth:UserAuthService){
    this.isUserLogged = this._userAuth.getUserLogged();
  }

  login(){
    this._userAuth.login();

    this.isUserLogged = this._userAuth.getUserLogged();
  }

  logout(){
    this._userAuth.logout();
    this.isUserLogged = this._userAuth.getUserLogged();
  }
}
