import { action, makeObservable, observable } from 'mobx';
import { privateApi } from '../index';
import { ITransaction } from '../../interfaces';
import { ITransactionService } from './transaction.types';

class TransactionService implements ITransactionService {
  endpoint = 'transactions' as const;
  transactions$: ITransaction[] = [];

  constructor() {
    makeObservable(this, {
      transactions$: observable,
      setTransactions: action
    });
  }

  setTransactions(transactions: ITransaction[]) {
    this.transactions$ = transactions;
  }

  async getTransactions(from: string, to: string) {
    const { data } = await privateApi.get(this.endpoint + '/' + from + '/' + to);
    this.setTransactions(data);
  }
}

export const transactionService = new TransactionService();
