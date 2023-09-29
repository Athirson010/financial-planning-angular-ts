import { state } from "@angular/animations";
import { createAction, createReducer, on } from "@ngrx/store";

export interface IAppState{
    counter: number;
}

export const appInitialState: IAppState = {
    counter: 0
}

export const incrementaContador = createAction('[App] Aumenta contador');
export const decrementaContador = createAction('[App] Reduz contador');

//Faz a criação do reduncer
export const appReducer = createReducer(
    appInitialState,
    on(incrementaContador, (state) => {
        state = {
            ...state,
            counter: state.counter + 1
        }
        return state;
    }),
    on(decrementaContador, (state) => {
        state = {
            ...state,
            counter: state.counter - 1
        }
        return state;
    }),
    
)