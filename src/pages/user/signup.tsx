import { FC } from 'react';
import Card from '../../components/UI/Layout/Card';
import AuthForm from '../../components/User/AuthForm';

const SignupPage: FC = () => {
  return (
    <Card title='Create a new account'>
      <AuthForm isSigningIn={false} />
    </Card>
  );
};

export default SignupPage;
