import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { map, Observable, of, share, Subject, Subscription, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockSmartService {

  constructor() {
   }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

  getTimer() {
    const timerObservable = timer(0, 1000)
    .pipe(
      map(() => moment()),
      share()
    );
    return timerObservable
  }
}
