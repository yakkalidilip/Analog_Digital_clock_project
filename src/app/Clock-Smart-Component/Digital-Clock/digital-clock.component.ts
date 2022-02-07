import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ClockSmartService } from '../clock-smart.service';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnChanges {
  date: any;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
  time: any;

  constructor(private clockSmartService: ClockSmartService) { }

  @Input() dynamicCurrentTime: moment.Moment;

  ngOnChanges(changes: SimpleChanges): void {
    this.hour = this.dynamicCurrentTime.hour();
    this.minute = this.dynamicCurrentTime.minute();
    this.second = this.dynamicCurrentTime.seconds();
    this.time = `${this.getFormat(this.hour)}:${this.getFormat(this.minute)}`;
  }

  getFormat(num: number) {
    return this.clockSmartService.format(num);
  }
}
