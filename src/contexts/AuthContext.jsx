import { createContext, useMemo, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const providerAuth = useMemo(
    () => ({ isAuth, setIsAuth }),
    [isAuth, setIsAuth]
  );

  return (
    <AuthContext.Provider value={providerAuth}>{children}</AuthContext.Provider>
  );
}
