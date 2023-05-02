import { FC, useEffect, useState } from 'react';
import { Column, Input, Loader, PageWrap, Row, Text } from '../../ui';
import { getDate } from '../../../utils';
import { observer } from 'mobx-react-lite';
import { transactionService } from '../../../services/transaction';
import { Transaction } from '../../entities/transaction';

export const Transactions: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [from, setFrom] = useState(getDate().slice(0, -2) + '01');
  const [to, setTo] = useState(getDate());

  useEffect(() => {
    setIsLoading(true);
    transactionService.getTransactions(from, to).finally(() => setIsLoading(false));
  }, [to, from]);

  return (
    <PageWrap>
      {isLoading && <Loader />}
      <Text type="title" center color="#4242aa" bold>
        Транзакции
      </Text>
      <Row gap="20px" center>
        <Column gap="5px">
          <Text>От</Text>
          <Input type="date" value={from} onChange={(e) => setFrom(e.target.value)} max={to} />
        </Column>
        <Column gap="5px">
          <Text>До</Text>
          <Input type="date" value={to} onChange={(e) => setTo(e.target.value)} min={from} />
        </Column>
      </Row>
      {transactionService.transactions$.map((transaction) => (
        <Transaction key={transaction.id} transaction={transaction} />
      ))}
    </PageWrap>
  );
});
