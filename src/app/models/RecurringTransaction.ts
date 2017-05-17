export interface RecurringTransaction {
  amount: number;
  day: number;
  id: string;
  name: string;
  owner: string;
  recurrence: 'dayly' | 'monthly' | 'yearly';
  vat21: number;
  vat6: number;
}
