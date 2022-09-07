import { createContext, useMemo, useState } from 'react';
import config from '../config';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) return false;
    const { BACKEND_API_BASE } = config;
    return true;
    // const data = await fetch(`${BACKEND_API_BASE}/login`, {
    //   method: 'GET',
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   }
    // });
  });

  const providerAuth = useMemo(
    () => ({ isAuth, setIsAuth }),
    [isAuth, setIsAuth]
  );

  return (
    <AuthContext.Provider value={providerAuth}>{children}</AuthContext.Provider>
  );
}
