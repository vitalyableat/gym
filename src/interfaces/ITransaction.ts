export interface ITransaction {
  id: number;
  time: string;
  price: number;
  type: TransactionTypeEnum;
  userFullName: number;
}

export enum TransactionTypeEnum {
  CROSSFIT = 'CROSSFIT',
  FITNESS = 'FITNESS',
  PILATES = 'PILATES',
  GYM = 'GYM',
  YOGA = 'YOGA',
  GROUP = 'GROUP',
  ZUMBA = 'ZUMBA',
  ONE_MONTH = 'ONE_MONTH',
  THREE_MONTH = 'THREE_MONTH',
  SIX_MONTH = 'SIX_MONTH',
  ONE_YEAR = 'ONE_YEAR'
}
