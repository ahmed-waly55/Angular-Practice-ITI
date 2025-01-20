import { Component } from '@angular/core';
import { Istore } from '../../models/istore';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  myStore:Istore;

  constructor(){
    this.myStore  = {
      name: 'H & M',
      imgUrl: 'https://fakeimg.pl/350x200/ff0000,128/000,255',
      branches: ['CAIRO','SHARKIA','ALX']
      
    }
  }
}
