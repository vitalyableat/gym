import { FC } from 'react';
import { FaUser } from 'react-icons/fa';
import { Button, Column, Divider, Form, Input, PageWrap, Select, Text } from '../../ui';
import { Card } from '../../entities/card';
import { Subscription } from '../../entities/subscription';
import { Trainer } from '../../entities/trainer';
import { TransactionTypeEnum, UserRoleEnum, WorkoutTypeEnum } from '../../../interfaces';
import { Application } from '../../entities/application';
import { Transaction } from '../../entities/transaction';
import { User } from '../../entities/user';
import { Workout } from '../../entities/workout';
import { LoginForm } from '../../forms/login-form';
import { SignupForm } from '../../forms/signup-form';
import { CardForm } from '../../forms/card-form';
import { SubscriptionForm } from '../../forms/subscription-form';
import { ApplicationForm } from '../../forms/application-form';
import { TrainerInfoForm } from '../../forms/trainer-info-form';
import { UserInfoForm } from '../../forms/user-info-form';
import { ChangePasswordForm } from '../../forms/change-password-form';
import { WorkoutForm } from '../../forms/workout-form';

export const Main: FC = () => {
  return (
    <PageWrap>
      <Form>
        <Input Icon={<FaUser />} error={'error'} />
        <Select>
          {[1, 2].map((option) => (
            <option key={option}>{option}</option>
          ))}
        </Select>
        <Button>Авторизоваться</Button>
        <Divider>AND</Divider>
        <Divider />
        <Text type="title" bold color="#6666dd">
          Title
        </Text>
        <Text type="header" bold>
          Header
        </Text>
        <Text>Text</Text>
      </Form>
      <Column gap="10px">
        <Card
          card={{ number: '9999999999999999', owner: 'VITALYA BLEAT', month: '12', year: '28' }}
        />
        <Subscription
          subscription={{ id: 1, from: '2018-01-01', to: '2024-01-01', price: 99.99 }}
        />
        <Trainer
          trainer={{
            id: 1,
            email: 'trainer@gmail.com',
            firstName: 'Илюха',
            lastName: 'На массе :D',
            phoneNumber: '+375 29 228 1337',
            price: 100,
            accepted: true,
            type: [WorkoutTypeEnum.CROSSFIT, WorkoutTypeEnum.GYM, WorkoutTypeEnum.FITNESS]
          }}
          freeTime={[
            { '01.05.2023': ['11:00', '12:00'] },
            { '02.05.2023': [] },
            { '03.05.2023': ['12:00', '15:00', '20:00'] },
            { '04.05.2023': ['10:00'] },
            { '05.05.2023': [] },
            { '06.05.2023': ['10:00', '11:00', '12:00'] }
          ]}
        />
        <Application
          application={{
            id: 1,
            email: 'trainer@gmail.com',
            firstName: 'Илюха',
            lastName: 'На массе :D',
            phoneNumber: '+375 29 228 1337',
            price: 100,
            accepted: true,
            type: [WorkoutTypeEnum.CROSSFIT, WorkoutTypeEnum.GYM, WorkoutTypeEnum.FITNESS]
          }}
        />
        <Transaction
          transaction={{
            id: 1,
            time: '2023.10.12 16:00',
            price: 100,
            type: TransactionTypeEnum.WORKOUT,
            user: 'Виталя Без массы :('
          }}
        />
        <User
          user={{
            id: 1,
            email: 'vitalya@gmail.com',
            firstName: 'Vitalya',
            lastName: 'Olhov',
            phoneNumber: '+375291739141',
            role: UserRoleEnum.USER,
            banned: false
          }}
        />
        <Workout
          workout={{
            id: 1,
            time: '20:00',
            date: '2023-12-20',
            price: 99.99,
            trainer: { id: 1, firstName: 'Илюха', lastName: 'На массе :D' },
            user: { id: 1, firstName: 'Виталя', lastName: 'не может набрать массу :(' },
            type: WorkoutTypeEnum.GYM
          }}
        />
        <LoginForm />
        <SignupForm />
        <CardForm
          card={{
            id: 1,
            number: '1111222233334444',
            validityDate: '12/24',
            owner: 'VITALYA BLEAT',
            status: true
          }}
        />
        <SubscriptionForm />
        <ApplicationForm />
        <TrainerInfoForm />
        <UserInfoForm />
        <ChangePasswordForm />
        <WorkoutForm
          time="10:00"
          date="2023-12-12"
          price={50}
          trainer={{
            id: 1,
            firstName: 'Илюха',
            lastName: 'На массе',
            type: [WorkoutTypeEnum.GYM, WorkoutTypeEnum.CROSSFIT]
          }}
        />
      </Column>
    </PageWrap>
  );
};
