import { Component } from '@angular/core';
// import { CounterService } from '../service/counter.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {

  // constructor(private counterService: CounterService) { }
  // counterServiceSub?: Subscription;
  // ngOnInit(): void {
  //   this.counterServiceSub = this.counterService.counterChanged.subscribe((newVal) => {
  //     this.count = newVal;
  //   });
  // }

  // ngOnDestroy(): void {
  //   if (this.counterServiceSub) {
  //     this.counterServiceSub.unsubscribe();
  //   }
  // }

  count$: Observable<number>;
  doubleCount$: Observable<number>;
  constructor(private store: Store<{counter: number}>){
    this.count$ = store.select(selectCount);
    this.doubleCount$ = store.select(selectDoubleCount);
  }

}
