import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from './components/footer/footer.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';

  dir:string = 'ltr'
  language$:Observable<string>
  constructor(private _store:Store<{language:string}>){
    this.language$ = this._store.select('language');
    this.language$.subscribe((lang)=> {
      this.dir=(lang == 'en')? 'ltr':'rtl'
    })
  }



}
