import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Divider, Form, FormLink, Input, Loader, Text } from '../../ui';
import { authService, SignupData } from '../../../services/auth';
import { emailRegex } from '../../../utils';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../templates/router/router.types';

export const SignupForm: FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    setError,
    formState: { errors }
  } = useForm<SignupData>({
    defaultValues: { firstName: '', lastName: '', email: '', password: '' }
  });

  const onSubmit = (data: SignupData) => {
    setIsLoading(true);
    authService
      .signup(data)
      .then(() => navigate(RouteNames.PROFILE))
      .catch(() => {
        resetField('email');
        setError(
          'email',
          { message: 'Пользователь с такой почтой уже существует' },
          { shouldFocus: true }
        );
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Text type="header">Если у вас нет аккаунта – зарегистрируйтесь!</Text>
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
        <FormLink to={RouteNames.LOGIN} link="Войдите в систему!" text="Уже есть аккаунт?" />
      </Form>
    </>
  );
};
