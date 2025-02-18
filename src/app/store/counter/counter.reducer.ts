import { createReducer, on } from "@ngrx/store";
import { increaseCounter } from "./counter.action";


const intialState = 0 // intial Value 
export const counterReducer = createReducer(intialState,on(increaseCounter,(state)=> state + 1 ))   