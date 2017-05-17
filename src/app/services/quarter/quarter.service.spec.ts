import { TestBed, inject } from '@angular/core/testing';

import { QuarterService } from './quarter.service';

describe('QuarterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuarterService]
    });
  });

  it('should be created', inject([QuarterService], (service: QuarterService) => {
    expect(service).toBeTruthy();
  }));
});
