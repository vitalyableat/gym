import { action, makeObservable, observable } from 'mobx';
import { privateApi } from '../index';
import { ISubscription } from '../../interfaces';
import { ISubscriptionService } from './subscription.types';

class SubscriptionService implements ISubscriptionService {
  endpoint = 'subscriptions' as const;
  subscriptions$: ISubscription[] = [];

  constructor() {
    makeObservable(this, {
      subscriptions$: observable,
      setSubscriptions: action
    });
  }

  setSubscriptions(subscriptions: ISubscription[]) {
    this.subscriptions$ = subscriptions;
  }

  async getSubscriptions() {
    const { data } = await privateApi.get(this.endpoint);
    this.setSubscriptions(data);
  }

  async buySubscription(card: Omit<ISubscription, 'id'>) {
    const { data } = await privateApi.post(this.endpoint, card);
    this.setSubscriptions([...this.subscriptions$, data]);
  }
}

export const subscriptionService = new SubscriptionService();
