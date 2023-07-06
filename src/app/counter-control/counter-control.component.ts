import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter.actions';
// import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.css']
})
export class CounterControlComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  // increase() {
  //   this.counterService.increment();
  // }

  // decrease() {
  //   this.counterService.decrement();
  // }

  increase() {
    this.store.dispatch(increment());
  }

  decrease() {
    this.store.dispatch(decrement());
  }

}
