import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AnalogClockComponent } from './Analog-Clock/analog-clock.component';
import { ClockSmartComponent } from './clock-smart-component';
import { DigitalClockComponent } from './Digital-Clock/digital-clock.component';



@NgModule({
    declarations: [
        AnalogClockComponent,
        DigitalClockComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    exports: [
        AnalogClockComponent,
        DigitalClockComponent
    ]
})
export class ClockSmartModule { }
