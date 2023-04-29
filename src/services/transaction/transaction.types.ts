import { ITransaction } from '../../interfaces';

export interface ITransactionService {
  endpoint: 'transactions';
  transactions$: ITransaction[];
  getTransactions: (from: string, to: string) => void;
}
