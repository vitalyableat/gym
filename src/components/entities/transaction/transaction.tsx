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
      <Text center>
        {transaction.time.split('T')[0]} {transaction.time.split('T')[1].slice(0, 5)}
      </Text>
      <Text>
        <b>Тип: </b>
        {TRANSACTION_TYPE_NAMES[transaction.type]}
      </Text>
      <Text>
        <b>Сумма: </b>
        {(transaction.price / 100).toFixed(2)}
      </Text>
      <Text>
        <b>Плательщик: </b>
        {transaction.userFullName}
      </Text>
    </S.Transaction>
  );
};
