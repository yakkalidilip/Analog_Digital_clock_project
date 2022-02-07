import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockSmartComponent } from './clock-smart-component';

describe('ClockSmartComponentComponent', () => {
  let component: ClockSmartComponent;
  let fixture: ComponentFixture<ClockSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockSmartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
