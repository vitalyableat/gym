import { CardFormData } from '../../forms/card-form';

export interface CardProps {
  card: CardFormData;
  onClick?: () => void;
}
