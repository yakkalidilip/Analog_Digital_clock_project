import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import { map, share, Subscription, timer } from 'rxjs';
import { ClockSmartService } from './clock-smart.service';

@Component({
  selector: 'app-clock-smart-component',
  templateUrl: './clock-smart-component.html',
  styleUrls: ['./clock-smart-component.scss']
})
export class ClockSmartComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  currentTime: moment.Moment;

  constructor(private clockSmartService: ClockSmartService) { }

  ngOnInit(): void {
    this.getTime();
  }

  getTime() {
      this.clockSmartService.getTimer().subscribe(time => {
          this.currentTime = time;
        });
  }

  // unsubscribe the subscription to avoid memory leaks
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
