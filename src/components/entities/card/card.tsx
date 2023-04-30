import { FC } from 'react';
import { FcSimCardChip } from 'react-icons/fc';
import * as S from './card.styles';
import { CardProps } from './card.types';
import { cardMonthPattern, cardNumberPattern, cardOwnerPattern, cardYearPattern } from './utils';

export const Card: FC<CardProps> = ({ card, onClick }) => {
  return (
    <S.Card onClick={onClick}>
      <S.ChipIconWrap>
        <FcSimCardChip />
      </S.ChipIconWrap>
      <S.Number>{cardNumberPattern(card.number)}</S.Number>
      <S.Owner>{cardOwnerPattern(card.owner)}</S.Owner>
      <S.ValidThru>VALID THRU</S.ValidThru>
      <S.Date>
        {cardMonthPattern(card.month)}/{cardYearPattern(card.year)}
      </S.Date>
    </S.Card>
  );
};
