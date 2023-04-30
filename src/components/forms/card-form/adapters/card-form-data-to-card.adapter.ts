import { CardFormData } from '../card-form.types';
import { ICard } from '../../../../interfaces';
import {
  cardMonthPattern,
  cardNumberPattern,
  cardOwnerPattern,
  cardYearPattern
} from '../../../entities/card/utils';

export const cardFormDataToCardAdapter = (
  cardFormData: CardFormData
): Omit<ICard, 'id' | 'status'> => ({
  number: cardNumberPattern(cardFormData.number),
  owner: cardOwnerPattern(cardFormData.owner),
  validityDate: cardMonthPattern(cardFormData.month) + '/' + cardYearPattern(cardFormData.year)
});
