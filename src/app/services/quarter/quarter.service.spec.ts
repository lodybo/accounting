import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import { TestBed, inject } from '@angular/core/testing';
import { MockAngularFireDatabase } from '../../mocks/MockAngularFireDatabase';

import { QuarterService } from './quarter.service';

const databaseSeed = require('../../../assets/seed.json');

fdescribe('QuarterService', () => {
  let service: QuarterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuarterService, {
        provide: AngularFireDatabase, useClass: MockAngularFireDatabase
      }]
    });
  });

  beforeEach(inject([QuarterService], (quarterService) => {
    service = quarterService;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list with quarters', () => {
    const call = service.get();
    call.subscribe((quarters) => {
      expect(quarters).toEqual(databaseSeed.quarters);
    });
  });

  it('should also return the specified quarter if asked for it', () => {
    const call = service.get('qu201701011030quarter1');
    call.subscribe((quarters) => {
      expect(quarters).toEqual(databaseSeed.quarters['qu201701011030quarter1']);
    });
  });
});
