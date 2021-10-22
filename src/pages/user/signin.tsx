import { FC } from 'react';
import Card from '../../components/UI/Layout/Card';
import AuthForm from '../../components/User/AuthForm';

const SigninPage: FC = () => {
  return (
    <Card title='Sign in with your account'>
      <AuthForm isSigningIn={true} />
    </Card>
  );
};

export default SigninPage;
