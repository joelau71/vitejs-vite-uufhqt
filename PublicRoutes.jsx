import { useContext, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './src/contexts/AuthContext';

export function PublicRoutes() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return !isAuth ? <Outlet /> : <Navigate to="/dashboard" />;
}
