import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:'<h1>Hello inclide {{title}}</h1>',
  standalone: false,
  // styleUrl: './app.component.css'
  styles:[`h1{color:green;}`]
})
export class AppComponent {
  title = 'angular';
}
 