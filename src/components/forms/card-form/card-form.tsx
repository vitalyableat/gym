import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { cardFormDataToCardAdapter, cardToCardFormDataAdapter } from './adapters';
import { CardFormData, CardFormProps } from './card-form.types';
import { cardService } from '../../../services/card';
import { Button, Form, Input, Loader, Row, Text } from '../../ui';
import { Card } from '../../entities/card';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../templates/router/router.types';

export const CardForm: FC<CardFormProps> = ({ card }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<CardFormData>({
    defaultValues: cardToCardFormDataAdapter(card)
  });

  const onSubmit = (data: CardFormData) => {
    setIsLoading(true);
    card
      ? cardService
          .updateCard({ ...cardFormDataToCardAdapter(data), id: card.id })
          .then(() => navigate(RouteNames.PROFILE))
          .finally(() => setIsLoading(false))
      : cardService
          .addCard(cardFormDataToCardAdapter(data))
          .then(() => navigate(RouteNames.PROFILE))
          .finally(() => setIsLoading(false));
  };

  const onDelete = (id: number) => {
    setIsLoading(true);
    cardService
      .deleteCard(id)
      .then(() => navigate(RouteNames.PROFILE))
      .finally(() => setIsLoading(false));
  };

  const onActiveStatusChange = (id: number) => {
    setIsLoading(true);
    cardService
      .setActive(id)
      .then(() => navigate(RouteNames.PROFILE))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <Loader />}
        <Text type="header">Введите данные вашей банковской карты :3</Text>
        <Card card={getValues()} />
        <Input
          validator="integer"
          placeholder="Номер"
          error={errors.number?.message}
          maxLength={16}
          {...register('number', {
            required: 'Это поле обязательно',
            minLength: { value: 16, message: 'Номер должен содержать 16 цифр' }
          })}
        />
        <Input
          validator="english"
          placeholder="Владелец"
          error={errors.owner?.message}
          {...register('owner', {
            required: 'Это поле обязательно'
          })}
        />
        <Row gap="10px">
          <Input
            validator="integer"
            placeholder="Месяц"
            error={errors.month?.message}
            {...register('month', {
              required: 'Это поле обязательно'
            })}
          />
          <Input
            validator="integer"
            placeholder="Год"
            error={errors.year?.message}
            {...register('year', {
              required: 'Это поле обязательно'
            })}
          />
        </Row>
        <Row gap="10px">
          <Button type="submit">{card ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
          {card?.id && (
            <>
              {card.status ? (
                <ImCheckboxChecked color="#0071e3" size={40} />
              ) : (
                <ImCheckboxUnchecked
                  cursor="pointer"
                  size={40}
                  onClick={!card?.status ? () => onActiveStatusChange(card?.id) : undefined}
                />
              )}
              <MdDelete cursor="pointer" size={40} onClick={() => onDelete(card?.id)} />
            </>
          )}
        </Row>
      </Form>
    </>
  );
};
