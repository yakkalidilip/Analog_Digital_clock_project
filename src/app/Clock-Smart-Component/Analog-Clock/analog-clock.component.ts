import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { analogClockDeg, analogClockEnum } from './analog-clock-data';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnChanges {
  hourHandStyle: any;
  minuteHandStyle: any;
  secondHandStyle: any;

  date: any;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;

  @Input() dynamicCurrentTime: moment.Moment;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      this.hour = this.dynamicCurrentTime.hour();
      this.minute = this.dynamicCurrentTime.minute();
      this.second = this.dynamicCurrentTime.seconds();
      this.animateAnalogClock();
  }

  animateAnalogClock() {
    this.hourHandStyle = {
      transform: `${analogClockEnum.translate3d} ${analogClockEnum.rotate}${analogClockEnum.openBracket}${this.hour * analogClockDeg.hourRotationDegHH + this.minute * analogClockDeg.minuteRotationDegHH + this.second * analogClockDeg.secondRotationDegHH
        }${analogClockEnum.deg}${analogClockEnum.closedBracket}`,
    };

    this.minuteHandStyle = {
      transform: `${analogClockEnum.translate3d} ${analogClockEnum.rotate}${analogClockEnum.openBracket}${this.minute * analogClockDeg.minuteRotationDegMH + this.second * analogClockDeg.secondRotationDegMH
        }${analogClockEnum.deg}${analogClockEnum.closedBracket}`,
    };

    this.secondHandStyle = {
      transform: `${analogClockEnum.translate3d} ${analogClockEnum.rotate}${analogClockEnum.openBracket}${this.second * analogClockDeg.secondRotationDegSH}${analogClockEnum.deg}${analogClockEnum.closedBracket}`,
    };
  }
}
