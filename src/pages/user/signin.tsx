import { FC } from "react";
import AuthForm from "../../components/User/AuthForm";

const SingIn: FC = () => {
  return <AuthForm isSigningIn={true} />;
}

export default SingIn;