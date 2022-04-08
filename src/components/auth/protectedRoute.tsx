import React, { Children } from 'react';
import { Navigate, Outlet, RouteProps, useNavigate } from 'react-router-dom';
import { Routes as AppRoutes } from '../../routes';
import { Layout } from '../layout';

interface ProtectedRouteProps {
  isAuth: boolean;
  children: React.ReactElement;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuth,
  children,
}) => {
  if (isAuth) {
    // return children;
    return children;
  }
  return <Navigate to={AppRoutes.LOGIN} />;
};

//FIXME: alla presentazione del primo componente dopo il login l'url mostra ancora /login nel percoso.
// mascherato momentaneamente con il redirect di tutti i percorsi "no-match" su "/"
