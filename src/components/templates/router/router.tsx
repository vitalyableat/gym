import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { RouteNames } from './router.types';

import { Navbar } from '../navbar';

import { NotFound } from '../../pages/not-found';
import { Login } from '../../pages/login';
import { Signup } from '../../pages/signup';
import { About } from '../../pages/about';
import { Contacts } from '../../pages/contacts';
import { Faq } from '../../pages/faq';
import { Main } from '../../pages/main';
import { Workouts } from '../../pages/workouts';

export const Router: FC = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path={RouteNames.LOGIN} element={<Login />} />
          <Route path={RouteNames.SIGNUP} element={<Signup />} />

          <Route path={RouteNames.ABOUT} element={<About />} />
          <Route path={RouteNames.CONTACTS} element={<Contacts />} />
          <Route path={RouteNames.FAQ} element={<Faq />} />
          <Route path={RouteNames.MAIN} element={<Main />} />
          <Route path={RouteNames.WORKOUTS} element={<Workouts />} />

          <Route path={RouteNames.NOT_FOUND} element={<NotFound />} />
          <Route path="*" element={<Navigate to={RouteNames.NOT_FOUND} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
