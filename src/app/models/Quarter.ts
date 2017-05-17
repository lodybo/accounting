import { Transaction } from './Transaction';

export interface Quarter {
  id: string;
  current: boolean;
  quarter: number;
  transactions: Transaction[];
  year: number;
}
