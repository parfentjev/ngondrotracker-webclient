import { useRouter } from 'next/dist/client/router';
import { FC, useContext, useEffect } from 'react';
import AuthContext from '../../store/auth-context';

const SignoutPage: FC = () => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    authContext.signout();
    router.replace('/');
  }, []);

  return null;
};

export default SignoutPage;
