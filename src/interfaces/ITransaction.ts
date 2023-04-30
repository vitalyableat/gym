export interface ITransaction {
  id: number;
  time: string;
  price: number;
  type: TransactionTypeEnum;
  userId: number;
}

export interface TransactionDTO {
  id: number;
  time: string;
  price: number;
  type: TransactionTypeEnum;
  user: string;
}

export enum TransactionTypeEnum {
  WORKOUT = 'WORKOUT',
  SUBSCRIPTION = 'SUBSCRIPTION'
}
