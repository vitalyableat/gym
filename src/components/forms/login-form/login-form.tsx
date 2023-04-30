import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Text } from '../../ui';
import { authService, LoginData } from '../../../services/auth';
import { emailRegex } from '../../../utils';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../templates/router/router.types';

export const LoginForm: FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<LoginData>({ defaultValues: { email: '', password: '' } });

  const onSubmit = (data: LoginData) => {
    setIsLoading(true);
    authService
      .login(data)
      .then(() => navigate(RouteNames.MAIN))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Text type="header">Если у вас есть аккаунт – войдите в систему!</Text>
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
      </Form>
    </>
  );
};
