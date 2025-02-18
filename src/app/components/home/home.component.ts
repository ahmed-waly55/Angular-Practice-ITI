import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  // count!:number;
  counter:Observable<number>
  constructor(private _store:Store<{counter:number}>){
    this.counter = _store.select("counter")
    // this.counter.subscribe((newVal)=>{
    //   this.count = newVal
    // })
  }




}
