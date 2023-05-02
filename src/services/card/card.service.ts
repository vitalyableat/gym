import { action, makeObservable, observable } from 'mobx';
import { privateApi } from '../index';
import { ICard } from '../../interfaces';
import { ICardService } from './card.types';

class CardService implements ICardService {
  endpoint = 'cards' as const;
  cards$: ICard[] = [];

  constructor() {
    makeObservable(this, {
      cards$: observable,
      setCards: action
    });
  }

  setCards(cards: ICard[]) {
    this.cards$ = cards;
  }

  async getCards() {
    const { data } = await privateApi.get(this.endpoint);
    this.setCards(data);
  }

  async addCard(card: Omit<ICard, 'id' | 'status'>) {
    const { data } = await privateApi.post(this.endpoint, card);
    this.setCards([...this.cards$, data]);
  }

  async updateCard(updatedCard: Omit<ICard, 'status'>) {
    const { data } = await privateApi.put(this.endpoint, updatedCard);
    this.setCards(this.cards$.map((card) => (card.id === updatedCard.id ? data : card)));
  }

  async deleteCard(id: number) {
    await privateApi.delete(this.endpoint + '/' + id);
    this.setCards(this.cards$.filter((card) => card.id !== id));
  }

  async setActive(id: number) {
    const { data } = await privateApi.put(this.endpoint + '/' + id + '/setActive');
    this.setCards(data);
  }
}

export const cardService = new CardService();
