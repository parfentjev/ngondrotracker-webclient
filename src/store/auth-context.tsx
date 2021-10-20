import { createContext, FC, useEffect, useState } from 'react';
import { UserToken } from '../models/UserToken';

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
  const [authenticated, setAuthenticated] = useState<boolean>();

  useEffect(() => setAuthenticated(token !== null), [token]);

  const signinHandler = (token: UserToken) => {
    // setToken(token);
    console.log('singing in with', token.token, token.expirationDate);
  };

  const signoutHandler = () => {
    // setToken(null);
  };

  const value: AuthContextType = {
    token: token,
    isAuthenticated: authenticated,
    signin: signinHandler,
    signout: signoutHandler,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
