import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Divider, Form, FormLink, Input, Loader, Message, Row, Text } from '../../ui';
import { emailRegex } from '../../../utils';
import { ITrainer, WorkoutTypeEnum } from '../../../interfaces';
import { trainerService } from '../../../services/trainer';
import { WORKOUT_TYPE_NAMES } from '../../../constants';
import { AiOutlineBorder, AiOutlineCheckSquare } from 'react-icons/ai';
import { RouteNames } from '../../templates/router/router.types';

export const ApplicationForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageOpen, setMessageOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    reset,
    formState: { errors }
  } = useForm<Omit<ITrainer, 'id' | 'accepted'>>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      priceForWorkout: '',
      workoutTypes: []
    }
  });

  const onSubmit = (data: Omit<ITrainer, 'id' | 'accepted'>) => {
    if (!watch('workoutTypes').length) {
      setError('workoutTypes', {
        type: 'custom',
        message: 'Нужно выбрать хотя бы один тип тренировки'
      });
    } else {
      setIsLoading(true);
      trainerService
        .applyForTrainer({ ...data, priceForWorkout: (+data.priceForWorkout * 100).toString() })
        .then(() => {
          reset();
          setMessageOpen(true);
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {isMessageOpen && (
        <Message
          message="Заявление на устройство тренером успешно подано"
          closeMessage={() => setMessageOpen(false)}
        />
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Text type="header">Хотите стать тренером?</Text>
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
          placeholder="Логин"
          value={watch('email')}
          error={errors.email?.message}
          {...register('email', {
            required: 'Это поле обязательно',
            pattern: {
              value: emailRegex,
              message: 'Указанный адрес электронной почты не существует'
            }
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
        <Button type="submit">Отправить</Button>
        <Divider>ИЛИ</Divider>
        <FormLink to={RouteNames.LOGIN} link="Войдите в систему" text="Вы уже тренер?" />
      </Form>
    </>
  );
};
