import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, decrementaContador, incrementaContador } from 'src/store/app.state';

import { map } from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   constructor(private store: Store<{ app: IAppState}>)
   {}
   
   counter$ = this.store.select('app')
   .pipe(
      map(e => e.counter)
    );
  
    incrementaContador(){
      this.store.dispatch(incrementaContador())
    }
    
    decrementaContador(){
      this.store.dispatch(decrementaContador())
    }
}
