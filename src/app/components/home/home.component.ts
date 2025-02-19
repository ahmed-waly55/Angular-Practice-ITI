import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decreaseCounter, increaseCounter } from '../../store/counter/counter.action';

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

  increaseCounterVal(){
    this._store.dispatch(increaseCounter())
  }


  decreaseCounterVal(){
    this._store.dispatch(decreaseCounter())
  }

}
 