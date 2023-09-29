import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IAppState } from 'src/store/app.state';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.css']
})
export class DisplayContadorComponent {
constructor(private store: Store<{app: IAppState}>)
{}

 counter$ = this.store.select('app').pipe(
  map(e => e.counter)
 );

ngOnInit(): void{
}

}
