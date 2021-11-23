import { createContext, FC, useCallback, useEffect, useState } from 'react';
import useHttp, { RequestStatus } from '../hooks/use-http';
import UserToken from '../models/UserToken';
import { refreshToken } from '../api/user';

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
  const { sendRequest, state } = useHttp(refreshToken);

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    const localExpirationDate = new Date(
      localStorage.getItem('expirationDate')
    );

    if (!localToken) return;

    if (localExpirationDate.getTime() - new Date().getTime() < 60000) {
      clearLocalToken();

      return;
    } else if (
      localExpirationDate.getTime() - new Date().getTime() <
      172800000
    ) {
      sendRequest({
        token: new UserToken(localToken, localExpirationDate),
      });

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

  useEffect(() => {
    if (state.status !== RequestStatus.PENDING) {
      if (state.status === RequestStatus.SUCCESS) {
        const token = new UserToken(
          state.data.token,
          new Date(+state.data.expirationDate)
        );

        signinHandler(token);
      }
    }
  }, [state.status]);

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
