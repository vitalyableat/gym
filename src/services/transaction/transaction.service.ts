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
      setCards: action
    });
  }

  setCards(transactions: ITransaction[]) {
    this.transactions$ = transactions;
  }

  async getTransactions(from: string, to: string) {
    const { data } = await privateApi.get(this.endpoint + '/' + from + '/' + to);
    this.setCards(data);
  }
}

export const transactionService = new TransactionService();
