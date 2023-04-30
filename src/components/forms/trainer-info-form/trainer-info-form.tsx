import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Row, Text } from '../../ui';
import { ITrainer, WorkoutTypeEnum } from '../../../interfaces';
import { trainerService } from '../../../services/trainer';
import { WORKOUT_TYPE_NAMES } from '../../../constants';
import { AiOutlineBorder, AiOutlineCheckSquare } from 'react-icons/ai';

export const TrainerInfoForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm<Omit<ITrainer, 'id' | 'accepted' | 'email'>>({
    defaultValues: {
      firstName: trainerService.trainer$?.firstName,
      lastName: trainerService.trainer$?.lastName,
      phoneNumber: trainerService.trainer$?.phoneNumber,
      price: trainerService.trainer$?.price,
      type: trainerService.trainer$?.type || []
    }
  });

  const onSubmit = (data: Omit<ITrainer, 'id' | 'accepted' | 'email'>) => {
    if (!watch('type').length) {
      setError('type', { type: 'custom', message: 'Нужно выбрать хотя бы один тип тренировки' });
    } else {
      setIsLoading(true);
      trainerService
        .updateTrainer({ ...data, id: trainerService.trainer$?.id as number })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Text type="header">В вашей жизни что-то изменилось?</Text>
        <Input
          validator="text"
          placeholder="Имя"
          value={watch('firstName')}
          error={errors.firstName?.message}
          {...register('firstName', {
            required: 'Это поле обязательно'
          })}
        />
        <Input
          validator="text"
          placeholder="Фамилия"
          value={watch('lastName')}
          error={errors.lastName?.message}
          {...register('lastName', {
            required: 'Это поле обязательно'
          })}
        />
        <Input
          validator="integer"
          placeholder="Телефон"
          value={watch('phoneNumber')}
          error={errors.phoneNumber?.message}
          {...register('phoneNumber', {
            required: 'Это поле обязательно'
          })}
        />
        <Input
          validator="price"
          placeholder="Стоимость тренировки"
          value={watch('price')}
          error={errors.price?.message}
          {...register('price', {
            required: 'Это поле обязательно'
          })}
        />
        <Text center bold>
          Предоставляемые услуги
        </Text>
        {Object.entries(WORKOUT_TYPE_NAMES).map(([key, value]) => (
          <Row key={key} gap="10px">
            {watch('type').includes(key as WorkoutTypeEnum) ? (
              <AiOutlineCheckSquare
                size={20}
                cursor="pointer"
                onClick={() =>
                  setValue(
                    'type',
                    watch('type').filter((type) => type !== key)
                  )
                }
              />
            ) : (
              <AiOutlineBorder
                size={20}
                cursor="pointer"
                onClick={() => {
                  clearErrors('type');
                  setValue('type', [...watch('type'), key as WorkoutTypeEnum]);
                }}
              />
            )}
            <Text>{value}</Text>
          </Row>
        ))}
        {!!errors.type?.message && <Text color="darkred">{errors.type?.message}</Text>}
        <Button type="submit">Сохранить</Button>
      </Form>
    </>
  );
};
