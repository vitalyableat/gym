import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { ProtectedRouterProps } from './protected-route.types';

export const ProtectedRoute: FC<ProtectedRouterProps> = ({ guard }) => {
  const navigate = guard();
  return navigate ? <Navigate to={`../${navigate}`} /> : <Outlet />;
};
