import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Message, Row, Text } from '../../ui';
import { ITrainer, WorkoutTypeEnum } from '../../../interfaces';
import { trainerService } from '../../../services/trainer';
import { WORKOUT_TYPE_NAMES } from '../../../constants';
import { AiOutlineBorder, AiOutlineCheckSquare } from 'react-icons/ai';

export const TrainerInfoForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageOpen, setMessageOpen] = useState(false);
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
      priceForWorkout: trainerService.trainer$?.priceForWorkout,
      workoutTypes: trainerService.trainer$?.workoutTypes || []
    }
  });

  const onSubmit = (data: Omit<ITrainer, 'id' | 'accepted' | 'email'>) => {
    if (!watch('workoutTypes').length) {
      setError('workoutTypes', {
        type: 'custom',
        message: 'Нужно выбрать хотя бы один тип тренировки'
      });
    } else {
      setIsLoading(true);
      trainerService
        .updateTrainer({
          ...data,
          priceForWorkout: (+data.priceForWorkout * 100).toString(),
          email: trainerService.trainer$?.email as string
        })
        .then(() => setMessageOpen(true))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <>
      {isMessageOpen && (
        <Message
          message="Личная информация успешно обновлена"
          closeMessage={() => setMessageOpen(false)}
        />
      )}
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
          value={watch('priceForWorkout')}
          error={errors.priceForWorkout?.message}
          {...register('priceForWorkout', {
            required: 'Это поле обязательно'
          })}
        />
        <Text center bold>
          Предоставляемые услуги
        </Text>
        {Object.entries(WORKOUT_TYPE_NAMES).map(([key, value]) => (
          <Row key={key} gap="10px">
            {watch('workoutTypes').includes(key as WorkoutTypeEnum) ? (
              <AiOutlineCheckSquare
                size={20}
                cursor="pointer"
                onClick={() =>
                  setValue(
                    'workoutTypes',
                    watch('workoutTypes').filter((type) => type !== key)
                  )
                }
              />
            ) : (
              <AiOutlineBorder
                size={20}
                cursor="pointer"
                onClick={() => {
                  clearErrors('workoutTypes');
                  setValue('workoutTypes', [...watch('workoutTypes'), key as WorkoutTypeEnum]);
                }}
              />
            )}
            <Text>{value}</Text>
          </Row>
        ))}
        {!!errors.workoutTypes?.message && (
          <Text color="darkred">{errors.workoutTypes?.message}</Text>
        )}
        <Button type="submit">Сохранить</Button>
      </Form>
    </>
  );
};
