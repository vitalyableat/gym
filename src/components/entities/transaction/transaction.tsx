import { FC } from 'react';
import * as S from './transaction.styles';
import { Text } from '../../ui';
import { TransactionProps } from './transaction.types';
import { TRANSACTION_TYPE_NAMES } from '../../../constants';

export const Transaction: FC<TransactionProps> = ({ transaction }) => {
  return (
    <S.Transaction>
      <Text type="header" bold center>
        Транзакция
      </Text>
      <Text center>{transaction.time}</Text>
      <Text>
        <b>Тип: </b>
        {TRANSACTION_TYPE_NAMES[transaction.type]}
      </Text>
      <Text>
        <b>Сумма: </b>
        {transaction.price}
      </Text>
      <Text>
        <b>Плательщик: </b>
        {transaction.user}
      </Text>
    </S.Transaction>
  );
};
