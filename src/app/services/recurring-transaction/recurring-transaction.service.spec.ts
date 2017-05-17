import { TestBed, inject } from '@angular/core/testing';

import { RecurringTransactionService } from './recurring-transaction.service';

describe('RecurringTransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecurringTransactionService]
    });
  });

  it('should be created', inject([RecurringTransactionService], (service: RecurringTransactionService) => {
    expect(service).toBeTruthy();
  }));
});
