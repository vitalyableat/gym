import { ICard } from '../../../interfaces';

export interface CardFormProps {
  card?: ICard;
}

export interface CardFormData {
  number: string;
  owner: string;
  month: string;
  year: string;
}
