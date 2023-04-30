import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { userService } from '../../../services/user';
import { UserRoleEnum } from '../../../interfaces';

import { Navbar } from '../navbar';
import { RouteNames } from './router.types';
import { ProtectedRoute } from './protected-route';
import { authGuard, roleGuard } from './utils';

import { NotFound } from '../../pages/not-found';
import { Main } from '../../pages/main';
import { About } from '../../pages/about';
import { Workouts } from '../../pages/workouts';
import { Faq } from '../../pages/faq';
import { Contacts } from '../../pages/contacts';
import { Login } from '../../pages/login';
import { Signup } from '../../pages/signup';
import { ApplyForAJob } from '../../pages/apply-for-a-job';

import { Applications } from '../../pages/applications';
import { Trainers } from '../../pages/trainers';
import { Clients } from '../../pages/clients';
import { Transactions } from '../../pages/transactions';

import { PersonalAccount } from '../../pages/personal-account';
import { Schedule } from '../../pages/schedule';

import { Profile } from '../../pages/profile';
import { ChangePassword } from '../../pages/change-password';
import { Cards } from '../../pages/cards';
import { Subscriptions } from '../../pages/subscriptions';
import { BuySubscription } from '../../pages/buy-subscription';
import { MyWorkouts } from '../../pages/my-workouts';
import { BuyWorkout } from '../../pages/buy-workout';

export const Router: FC = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {!userService.user$ && (
            <>
              <Route path={RouteNames.MAIN} element={<Main />} />
              <Route path={RouteNames.ABOUT} element={<About />} />
              <Route path={RouteNames.WORKOUTS} element={<Workouts />} />
              <Route path={RouteNames.FAQ} element={<Faq />} />
              <Route path={RouteNames.CONTACTS} element={<Contacts />} />
              <Route path={RouteNames.LOGIN} element={<Login />} />
              <Route path={RouteNames.SIGNUP} element={<Signup />} />
              <Route path={RouteNames.APPLY_FOR_A_JOB} element={<ApplyForAJob />} />
            </>
          )}

          <Route element={<ProtectedRoute guard={authGuard} />}>
            <Route element={<ProtectedRoute guard={roleGuard([UserRoleEnum.ADMIN])} />}>
              <Route path={RouteNames.APPLICATIONS} element={<Applications />} />
              <Route path={RouteNames.TRAINERS} element={<Trainers />} />
              <Route path={RouteNames.CLIENTS} element={<Clients />} />
              <Route path={RouteNames.TRANSACTIONS} element={<Transactions />} />
            </Route>

            <Route element={<ProtectedRoute guard={roleGuard([UserRoleEnum.TRAINER])} />}>
              <Route path={RouteNames.PERSONAL_ACCOUNT} element={<PersonalAccount />} />
              <Route path={RouteNames.SCHEDULE} element={<Schedule />} />
            </Route>

            <Route element={<ProtectedRoute guard={roleGuard([UserRoleEnum.USER])} />}>
              <Route path={RouteNames.MAIN} element={<Main />} />
              <Route path={RouteNames.ABOUT} element={<About />} />
              <Route path={RouteNames.WORKOUTS} element={<Workouts />} />
              <Route path={RouteNames.FAQ} element={<Faq />} />
              <Route path={RouteNames.CONTACTS} element={<Contacts />} />

              <Route path={RouteNames.PROFILE} element={<Profile />} />
              <Route path={RouteNames.CHANGE_PASSWORD} element={<ChangePassword />} />
              <Route path={RouteNames.CARDS} element={<Cards />} />
              <Route path={RouteNames.SUBSCRIPTIONS} element={<Subscriptions />} />
              <Route path={RouteNames.BUY_SUBSCRIPTION} element={<BuySubscription />} />
              <Route path={RouteNames.MY_WORKOUTS} element={<MyWorkouts />} />
              <Route path={RouteNames.BUY_WORKOUT} element={<BuyWorkout />} />
            </Route>
          </Route>

          <Route path={RouteNames.NOT_FOUND} element={<NotFound />} />
          <Route path="*" element={<Navigate to={RouteNames.NOT_FOUND} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
