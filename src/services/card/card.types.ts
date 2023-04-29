import { ICard } from '../../interfaces';

export interface ICardService {
  endpoint: 'cards';
  cards$: ICard[];
  getCards: () => void;
  addCard: (card: Omit<ICard, 'id' | 'status'>) => void;
  updateCard: (card: Omit<ICard, 'status'>) => void;
  deleteCard: (id: number) => void;
  setActive: (id: number) => void;
}
