import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Message, Text } from '../../ui';
import { userService } from '../../../services/user';

export const ChangePasswordForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageOpen, setMessageOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<{ oldPassword: string; newPassword: string }>({
    defaultValues: { oldPassword: '', newPassword: '' }
  });

  const onSubmit = (data: { oldPassword: string; newPassword: string }) => {
    setIsLoading(true);
    userService
      .changePassword(data.oldPassword, data.newPassword)
      .then(() => setMessageOpen(true))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isMessageOpen && (
        <Message message="Пароль успешно изменен" closeMessage={() => setMessageOpen(false)} />
      )}
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Text type="header">Боишься, что тебя взломают?</Text>
        <Input
          placeholder="Старый пароль"
          type="password"
          value={watch('oldPassword')}
          error={errors.oldPassword?.message}
          {...register('oldPassword', {
            required: 'Это поле обязательно',
            minLength: { value: 4, message: 'Минимальная длина пароля - 4 символа' }
          })}
        />
        <Input
          placeholder="Новый пароль"
          type="password"
          value={watch('newPassword')}
          error={errors.newPassword?.message}
          {...register('newPassword', {
            required: 'Это поле обязательно',
            minLength: { value: 4, message: 'Минимальная длина пароля - 4 символа' }
          })}
        />
        <Button type="submit">Подтвердить</Button>
      </Form>
    </>
  );
};
