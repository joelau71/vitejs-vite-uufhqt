import { createContext, useMemo, useState } from 'react';
import config from '../config';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(async () => {
    console.log('run init');
    const token = JSON.parse(localStorage.getItem('token'));
    const id = JSON.parse(localStorage.getItem('id'));
    let flag = true;

    if (!token || !id) return false;
    const { BACKEND_API_BASE } = config;

    try {
      const data = await fetch(`${BACKEND_API_BASE}/600/users/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!data.ok) {
        flag = false;
        throw '401 Error';
      }
      const json = await data.json();

      flag = true;
    } catch (e) {
      console.log(e);
    }
    console.log(flag);
    return flag;
  });

  const providerAuth = useMemo(
    () => ({ isAuth, setIsAuth }),
    [isAuth, setIsAuth]
  );

  return (
    <AuthContext.Provider value={providerAuth}>{children}</AuthContext.Provider>
  );
}
