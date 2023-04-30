import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Message, Select, Text } from '../../ui';
import { IWorkout, WorkoutTypeEnum } from '../../../interfaces';
import { WorkoutFormProps } from './workout-form.types';
import { workoutService } from '../../../services/workout';
import { WORKOUT_TYPE_NAMES } from '../../../constants';

export const WorkoutForm: FC<WorkoutFormProps> = ({ time, date, price, trainer }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageOpen, setMessageOpen] = useState(false);
  const { register, handleSubmit } = useForm<Omit<IWorkout, 'id'>>({
    defaultValues: {
      time: time,
      date: date,
      price: price,
      trainerId: trainer.id,
      type: trainer.type[0]
    }
  });

  const onSubmit = (data: Omit<IWorkout, 'id'>) => {
    setIsLoading(true);
    workoutService
      .buyWorkout(data)
      .then(() => setMessageOpen(true))
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <Loader />}
        <Text type="header">Хочешь привести себя в форму к лету?</Text>
        <Text bold>
          {trainer.firstName} {trainer.lastName}
        </Text>
        <Input type="date" disabled {...register('date')} />
        <Input disabled {...register('time')} />
        <Select {...register('type', { required: 'Это поле обязательно', valueAsNumber: true })}>
          {trainer.type.map((option: WorkoutTypeEnum) => (
            <option key={option} value={option}>
              {WORKOUT_TYPE_NAMES[option]}
            </option>
          ))}
        </Select>
        <Text type="header">${price.toFixed(2)}</Text>
        <Button type="submit">Оплатить</Button>
      </Form>
    </>
  );
};
