import { ICard } from '../../../interfaces';

export interface CardFormProps {
  card?: ICard;
  resetSelectedCard: () => void;
}

export interface CardFormData {
  number: string;
  owner: string;
  month: string;
  year: string;
}
