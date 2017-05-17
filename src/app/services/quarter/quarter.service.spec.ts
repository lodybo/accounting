import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Rx';
import { TestBed, inject } from '@angular/core/testing';

import { QuarterService } from './quarter.service';

const databaseSeed = require('../../../assets/seed.json');

describe('QuarterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuarterService, {
        provide: AngularFireDatabase, useClass: MockAngularFireDatabase
      }]
    });
  });

  it('should be created', inject([QuarterService], (service: QuarterService) => {
    expect(service).toBeTruthy();
  }));
});

class MockAngularFireDatabase {
  list() {
    return Observable.create((observer) => {
      observer.next(databaseSeed);
      observer.complete();
    });
  }
}
