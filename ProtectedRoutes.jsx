import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './src/contexts/AuthContext';
import i18n from './src/i18n';

export function ProtectedRoutes() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const locale = i18n.language;
  return isAuth ? <Outlet /> : <Navigate to={`/${locale}`} />;
}
