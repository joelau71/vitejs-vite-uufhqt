import { createContext, useEffect, useMemo, useState } from 'react';
import config from '../config';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    async function fetchData() {
      console.log('auth contextn init....');
      const token = JSON.parse(localStorage.getItem('token'));
      const id = JSON.parse(localStorage.getItem('id'));

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
          setIsAuth(false);
          throw '401 Error';
        }

        setIsAuth(true);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  const providerAuth = useMemo(
    () => ({ isAuth, setIsAuth }),
    [isAuth, setIsAuth]
  );

  return (
    <AuthContext.Provider value={providerAuth}>{children}</AuthContext.Provider>
  );
}
