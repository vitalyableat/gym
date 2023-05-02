import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Message, Text } from '../../ui';
import { userService } from '../../../services/user';
import { UpdateUserData } from '../../../services/user/user.types';

export const UserInfoForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageOpen, setMessageOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<UpdateUserData>({
    defaultValues: {
      firstName: userService.user$?.firstName,
      lastName: userService.user$?.lastName,
      phoneNumber: userService.user$?.phoneNumber
    }
  });

  const onSubmit = (data: UpdateUserData) => {
    setIsLoading(true);
    userService
      .updateUser(data)
      .then(() => setMessageOpen(true))
      .finally(() => setIsLoading(false));
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
        <Text type="header">Личная информация устарела?!</Text>
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
        <Button type="submit">Сохранить</Button>
      </Form>
    </>
  );
};
