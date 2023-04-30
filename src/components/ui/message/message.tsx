import { FC } from 'react';
import { Text } from '../text';
import * as S from './message.styles';
import { MessageProps } from './message.types';

export const Message: FC<MessageProps> = ({ header, message, closeMessage }) => {
  return (
    <S.Wrap onClick={closeMessage}>
      <S.Content onClick={(e) => e.stopPropagation()}>
        <Text type="header" bold center>
          {header ? header : 'У вас пропущенный'}
        </Text>
        <Text center>{message}</Text>
      </S.Content>
    </S.Wrap>
  );
};
