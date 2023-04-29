export interface ITransaction {
  id: number;
  time: string;
  price: number;
  type: TransactionTypeEnum;
  userId: number;
}

export enum TransactionTypeEnum {
  WORKOUT = 'WORKOUT',
  SUBSCRIPTION = 'SUBSCRIPTION'
}
