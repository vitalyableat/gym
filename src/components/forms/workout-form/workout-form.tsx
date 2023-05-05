import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Column, Form, Input, Loader, Message, Select, Text } from '../../ui';
import { IWorkout, WorkoutTypeEnum } from '../../../interfaces';
import { workoutService } from '../../../services/workout';
import { WORKOUT_TYPE_NAMES } from '../../../constants';
import { WorkoutFormProps } from './workout-form.types';

export const WorkoutForm: FC<WorkoutFormProps> = ({ buyWorkoutData, resetTrainer }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageOpen, setMessageOpen] = useState(false);
  const [error, setError] = useState('');
  const { register, reset, setValue, handleSubmit } = useForm<Omit<IWorkout, 'id'>>({
    defaultValues: {
      time: buyWorkoutData?.time,
      date: buyWorkoutData?.date,
      price: buyWorkoutData?.price,
      trainerId: buyWorkoutData?.trainer?.id,
      type: buyWorkoutData?.trainer?.type[0]
    }
  });

  useEffect(() => {
    if (buyWorkoutData) {
      setValue('time', buyWorkoutData.time);
      setValue('date', buyWorkoutData.date);
      setValue('price', buyWorkoutData.price);
      setValue('trainerId', buyWorkoutData.trainer.id);
      setValue('type', buyWorkoutData.trainer.type[0]);
    }
  }, [buyWorkoutData, setValue]);

  const onSubmit = (data: Omit<IWorkout, 'id'>) => {
    setIsLoading(true);
    workoutService
      .buyWorkout(data)
      .then(() => {
        reset();
        resetTrainer();
        setMessageOpen(true);
      })
      .catch((error) => {
        reset();
        resetTrainer();
        setError(error?.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading && <Loader />}
      {isMessageOpen && (
        <Message
          message="Вы успешно записались на тренировку"
          closeMessage={() => setMessageOpen(false)}
        />
      )}
      {!!error && <Message header="Упс..." message={error} closeMessage={() => setError('')} />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <Loader />}
        <Column>
          <Text type="header">Хочешь привести себя в форму?</Text>
          {!buyWorkoutData && (
            <Text color="darkred"> Выбери тренера и запишись на тренировку!</Text>
          )}
        </Column>
        <Text bold>
          {buyWorkoutData?.trainer?.firstName} {buyWorkoutData?.trainer?.lastName}
        </Text>
        <Input disabled placeholder="Дата" {...register('date')} />
        <Input disabled placeholder="Время" {...register('time')} />
        <Select {...register('type', { required: 'Это поле обязательно' })}>
          {buyWorkoutData?.trainer?.type.map((option: WorkoutTypeEnum) => (
            <option key={option} value={option}>
              {WORKOUT_TYPE_NAMES[option]}
            </option>
          ))}
        </Select>
        <Text type="header">
          ${buyWorkoutData?.price && (buyWorkoutData?.price / 100).toFixed(2)}
        </Text>
        <Button type="submit">Оплатить</Button>
      </Form>
    </>
  );
};
