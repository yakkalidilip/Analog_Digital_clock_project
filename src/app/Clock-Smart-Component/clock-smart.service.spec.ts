import { TestBed } from '@angular/core/testing';

import { ClockSmartService } from './clock-smart.service';

describe('ClockSmart.Service.TsService', () => {
  let service: ClockSmartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClockSmartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
