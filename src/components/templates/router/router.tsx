import { FC, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { userService } from '../../../services/user';
import { IUser, UserRoleEnum } from '../../../interfaces';
import { getFromLocalStorage } from '../../../utils';
import { trainerService } from '../../../services/trainer';

import { Navbar } from '../navbar';
import { RouteNames } from './router.types';
import { ProtectedRoute } from './protected-route';
import { authGuard, roleGuard } from './utils';

import { NotFound } from '../../pages/not-found';
import { Main } from '../../pages/main';
import { About } from '../../pages/about';
import { Workouts } from '../../pages/workouts';
import { Contacts } from '../../pages/contacts';
import { Login } from '../../pages/login';
import { Signup } from '../../pages/signup';
import { ApplyForAJob } from '../../pages/apply-for-a-job';

import { Applications } from '../../pages/applications';
import { Trainers } from '../../pages/trainers';
import { Clients } from '../../pages/clients';
import { Transactions } from '../../pages/transactions';
import { Statistics } from '../../pages/statistics';

import { PersonalAccount } from '../../pages/personal-account';
import { Schedule } from '../../pages/schedule';

import { Profile } from '../../pages/profile';
import { ChangePassword } from '../../pages/change-password';
import { Cards } from '../../pages/cards';
import { MySubscriptions } from '../../pages/my-subscriptions';
import { MyWorkouts } from '../../pages/my-workouts';

export const Router: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const trainer = getFromLocalStorage('trainer');
    if (trainer) {
      userService.setUser({ role: UserRoleEnum.TRAINER } as IUser);
      trainerService.setTrainer(trainer);
      setIsLoading(false);
    } else {
      getFromLocalStorage('token')
        ? userService.getUser().finally(() => setIsLoading(false))
        : setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {!userService.user$ && (
            <>
              <Route path={RouteNames.MAIN} element={<Main />} />
              <Route path={RouteNames.ABOUT} element={<About />} />
              <Route path={RouteNames.WORKOUTS} element={<Workouts />} />
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
              <Route path={RouteNames.STATISTICS} element={<Statistics />} />
            </Route>

            <Route element={<ProtectedRoute guard={roleGuard([UserRoleEnum.TRAINER])} />}>
              <Route path={RouteNames.PERSONAL_ACCOUNT} element={<PersonalAccount />} />
              <Route path={RouteNames.SCHEDULE} element={<Schedule />} />
            </Route>

            <Route element={<ProtectedRoute guard={roleGuard([UserRoleEnum.USER])} />}>
              <Route path={RouteNames.MAIN} element={<Main />} />
              <Route path={RouteNames.ABOUT} element={<About />} />
              <Route path={RouteNames.WORKOUTS} element={<Workouts />} />
              <Route path={RouteNames.CONTACTS} element={<Contacts />} />

              <Route path={RouteNames.PROFILE} element={<Profile />} />
              <Route path={RouteNames.CARDS} element={<Cards />} />
              <Route path={RouteNames.MY_SUBSCRIPTIONS} element={<MySubscriptions />} />
              <Route path={RouteNames.MY_WORKOUTS} element={<MyWorkouts />} />
            </Route>

            <Route path={RouteNames.CHANGE_PASSWORD} element={<ChangePassword />} />
          </Route>

          <Route path={RouteNames.NOT_FOUND} element={<NotFound />} />
          <Route path="*" element={<Navigate to={RouteNames.NOT_FOUND} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
