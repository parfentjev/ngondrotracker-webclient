import { createContext, FC, useCallback, useEffect, useState } from 'react';
import UserToken from '../models/UserToken';

type AuthContextType = {
  token: UserToken;
  isAuthenticated: boolean;
  signin: (token: UserToken) => void;
  signout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  token: null,
  isAuthenticated: false,
  signin: () => {},
  signout: () => {},
});

export const AuthContextProvider: FC = ({ children }) => {
  const [token, setToken] = useState<UserToken>(null);
  const authenticated = token !== null;

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    const localExpirationDate = new Date(
      localStorage.getItem('expirationDate')
    );

    if (!localToken) return;

    if (localExpirationDate.getTime() - new Date().getTime() < 6000) {
      clearLocalToken();

      return;
    }

    setToken(new UserToken(localToken, localExpirationDate));
  }, []);

  const signinHandler = useCallback((token: UserToken) => {
    storeLocalToken(token);
    setToken(token);
  }, []);

  const signoutHandler = useCallback(() => {
    clearLocalToken();
    setToken(null);
  }, []);

  const value: AuthContextType = {
    token: token,
    isAuthenticated: authenticated,
    signin: signinHandler,
    signout: signoutHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const storeLocalToken = (token: UserToken) => {
  localStorage.setItem('token', token.token);
  localStorage.setItem('expirationDate', token.expirationDate.toISOString());
};

const clearLocalToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
};

export default AuthContext;
