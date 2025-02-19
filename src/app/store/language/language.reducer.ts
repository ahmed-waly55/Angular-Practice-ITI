import { createReducer, on } from "@ngrx/store";
import { languageAction } from "./language.action";

const languageIntial = localStorage.getItem('lang')? localStorage.getItem('lang') : 'en'
export const languageReducer = createReducer(
    languageIntial,
    on(languageAction,(state,action)=>action.lang )
)