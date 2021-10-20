import { FC } from "react";
import AuthForm from "../../components/User/AuthForm";

const SignUp: FC = () => {
  return <AuthForm isSigningIn={false} />;
}

export default SignUp;