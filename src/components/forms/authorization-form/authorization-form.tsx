import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Form, Input, Loader, Title } from '../../ui';
import { authService } from '../../../services/auth';
import { emailRegex } from '../../../utils';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../templates/router/router.types';
import { AuthenticateData } from '../../../services/auth/auth.types';

export const AuthorizationForm: FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<AuthenticateData>({ defaultValues: { email: '', password: '' } });

  const onSubmit = (data: AuthenticateData) => {
    setIsLoading(true);
    authService
      .authenticate(data)
      .then(() => navigate(RouteNames.MAIN))
      .finally(() => setIsLoading(false));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Авторизация</Title>
      <Input
        label="Логин"
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
        label="Пароль"
        type="password"
        value={watch('password')}
        error={errors.password?.message}
        {...register('password', {
          required: 'Это поле обязательно',
          minLength: { value: 4, message: 'Минимальная длина пароля - 4 символа' }
        })}
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <Loader /> : 'ВОЙТИ'}
      </Button>
    </Form>
  );
};
