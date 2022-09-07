import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { UserContext } from '../contexts/UserContext';
import i18n from '../i18n';

export function Logout() {
  const { user, setUser } = useContext(UserContext);
  const { setIsAuth } = useContext(AuthContext);
  const locale = i18n.language;
  setIsAuth(false);
  setUser(null);

  return <Navigate to={`/${locale}`} />;
}
