import { ISubscription } from '../../interfaces';

export interface ISubscriptionService {
  endpoint: 'subscriptions';
  subscriptions$: ISubscription[];
  getSubscriptions: () => void;
  buySubscription: (card: Omit<ISubscription, 'id'>) => void;
}
