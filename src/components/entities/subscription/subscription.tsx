import { FC } from 'react';
import * as S from './subscription.styles';
import { SubscriptionProps } from './subscription.types';
import { Text } from '../../ui';
import { getDate } from '../../../utils';

export const Subscription: FC<SubscriptionProps> = ({ subscription }) => {
  return (
    <S.Subscription>
      <Text type="header" bold center>
        Абонемент
      </Text>
      <Text center>
        {(subscription.from + ' ' + subscription.to).replaceAll('-', '.').replace(' ', ' - ')}
      </Text>
      {getDate() >= subscription.from && getDate() <= subscription.to ? (
        <Text type="header" bold color="green">
          Активен
        </Text>
      ) : (
        <Text type="header" bold color="red">
          Неактивен
        </Text>
      )}
    </S.Subscription>
  );
};
