import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Divider, Form, FormLink, Input, Loader, Text } from '../../ui';
import { authService, LoginData } from '../../../services/auth';
import { emailRegex } from '../../../utils';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../templates/router/router.types';

export const TrainerLoginForm: FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors }
  } = useForm<LoginData>({ defaultValues: { email: '', password: '' } });

  const onSubmit = (data: LoginData) => {
    setIsLoading(true);
    authService
      .loginAsTrainer(data)
      .then(() => navigate(RouteNames.PERSONAL_ACCOUNT))
      .catch(() => {
        reset();
        setError('email', { message: 'Неверный логин или пароль' });
        setError('password', { message: 'Неверный логин или пароль' });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Text type="header">Войти как тренер</Text>
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
          placeholder="Пароль"
          type="password"
          value={watch('password')}
          error={errors.password?.message}
          {...register('password', {
            required: 'Это поле обязательно',
            minLength: { value: 4, message: 'Минимальная длина пароля - 4 символа' }
          })}
        />
        <Button type="submit">ВОЙТИ</Button>
        <Divider>ИЛИ</Divider>
        <FormLink
          to={RouteNames.APPLY_FOR_A_JOB}
          link="Заполните форму"
          text="Хотите стать тренером?"
        />
      </Form>
    </>
  );
};
