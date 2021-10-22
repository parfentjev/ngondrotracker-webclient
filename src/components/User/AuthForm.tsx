import { FC, FormEvent, useContext, useEffect, useRef } from 'react';
import Form from '../UI/Forms/Form';
import FormGroup from '../UI/Forms/FormGroup';
import Input from '../UI/Forms/Input';
import Link from 'next/link';
import { userSignup, userSignin } from '../../api/user';
import useHttp, { RequestStatus } from '../../hooks/use-http';
import AuthContext from '../../store/auth-context';
import UserToken from '../../models/UserToken';
import { useRouter } from 'next/dist/client/router';

const AuthForm: FC<{ isSigningIn: boolean }> = ({ isSigningIn }) => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  const apiRequest = isSigningIn ? userSignin : userSignup;
  const { sendRequest, httpState } = useHttp(apiRequest);

  const actionLabel = isSigningIn ? 'Sign In' : 'Sign Up';

  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (httpState.status === RequestStatus.SUCCESS) {
      const token = new UserToken(
        httpState.data.token,
        new Date(+httpState.data.expirationDate * 1000)
      );

      authContext.signin(token);
      router.replace('/');
    } else if (httpState.status === RequestStatus.ERROR) {
      alert(httpState.message);
    }
  }, [httpState]);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    sendRequest({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <Form onSubmit={submitHandler}>
      <p>
        {isSigningIn ? (
          <Link href='/user/signup'>Don't have an account?</Link>
        ) : (
          <Link href='/user/signin'>Already have an account?</Link>
        )}
      </p>
      <FormGroup>
        <Input
          id='email'
          type='text'
          label='Email'
          placeholder='Enter your email'
          minLength={3}
          maxLength={64}
          required={true}
          ref={emailRef}
        />
      </FormGroup>
      <FormGroup>
        <Input
          id='password'
          type='password'
          label='Password'
          placeholder='Enter your password'
          minLength={6}
          maxLength={128}
          required={true}
          ref={passwordRef}
        />
      </FormGroup>
      <button type='submit' className='button button-primary'>
        {actionLabel}
      </button>
    </Form>
  );
};

export default AuthForm;