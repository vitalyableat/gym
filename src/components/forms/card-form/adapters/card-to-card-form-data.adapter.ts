import { ICard } from '../../../../interfaces';
import { CardFormData } from '../card-form.types';
import { removeSpaces } from '../../../../utils';

export const cardToCardFormDataAdapter = (card?: ICard): CardFormData => ({
  number: removeSpaces(card?.number || ''),
  owner: card?.owner || '',
  month: card?.validityDate.split('/')[0] || '',
  year: card?.validityDate.split('/')[1] || ''
});
