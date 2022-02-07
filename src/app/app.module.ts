import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalogClockComponent } from './Clock-Smart-Component/Analog-Clock/analog-clock.component';
import { ClockSmartComponent } from './Clock-Smart-Component/clock-smart-component';

import { ClockSmartModule } from './Clock-Smart-Component/clock-smart.module';
import { DigitalClockComponent } from './Clock-Smart-Component/Digital-Clock/digital-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockSmartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClockSmartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
