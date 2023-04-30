import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Select, Text } from '../../ui';
import { useNavigate } from 'react-router-dom';
import { addMonths, getDate } from '../../../utils';
import { SUBSCRIPTION_PRICES } from './subscription-form.constants';
import { subscriptionService } from '../../../services/subscription';
import { RouteNames } from '../../templates/router/router.types';

export const SubscriptionForm: FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<{ from: string; period: number }>({
    defaultValues: { from: getDate(), period: 1 }
  });

  const onSubmit = (data: { from: string; period: number }) => {
    setIsLoading(true);
    subscriptionService
      .buySubscription({
        from: data.from,
        to: addMonths(data.from, data.period),
        price: SUBSCRIPTION_PRICES[watch('period')]
      })
      .then(() => navigate(RouteNames.PROFILE))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <Loader />}
        <Text type="header">Ввыберите абонемент, который вам подходит :D</Text>
        <Input
          type="date"
          min={getDate()}
          error={errors.from?.message}
          maxLength={16}
          {...register('from', { required: 'Это поле обязательно' })}
        />
        <Select {...register('period', { required: 'Это поле обязательно', valueAsNumber: true })}>
          {[1, 3, 6, 12].map((option) => (
            <option key={option} value={option}>
              {option} {option === 1 ? 'месяц' : option === 3 ? 'месяца' : 'месяцев'}
            </option>
          ))}
        </Select>
        <Text type="header">${SUBSCRIPTION_PRICES[watch('period')].toFixed(2)}</Text>
        <Button type="submit">Оплатить</Button>
      </Form>
    </>
  );
};
