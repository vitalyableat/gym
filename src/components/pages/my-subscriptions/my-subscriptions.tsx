import { FC, useEffect, useState } from 'react';
import { Loader, Message, PageWrap, Slider, Text } from '../../ui';
import { subscriptionService } from '../../../services/subscription';
import { Subscription } from '../../entities/subscription';
import { SubscriptionForm } from '../../forms/subscription-form';
import { observer } from 'mobx-react-lite';

export const MySubscriptions: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    subscriptionService
      .getSubscriptions()
      .catch((error) => setMessage(error?.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <PageWrap>
      {isLoading && <Loader />}
      {!!message && <Message message={message} closeMessage={() => setMessage('')} />}
      <Text type="title" center bold color="#4242aa">
        Абонементы
      </Text>
      <Slider>
        {subscriptionService.subscriptions$.map((subscription) => (
          <Subscription key={subscription.id} subscription={subscription} />
        ))}
      </Slider>
      <SubscriptionForm />
    </PageWrap>
  );
});
