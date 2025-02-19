import { createReducer, on } from "@ngrx/store";
import { decreaseCounter, increaseCounter } from "./counter.action";


const intialState = 0 // intial Value 
export const counterReducer = createReducer(intialState,on(increaseCounter,(state)=> state + 1 ),
on(decreaseCounter,(state)=> state==0?state : state - 1 )
)   
