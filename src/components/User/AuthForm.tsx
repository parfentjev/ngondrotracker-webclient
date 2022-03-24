import { FC, FormEvent, useContext, useEffect, useRef, useState } from 'react';
import Form from '../UI/Forms/Form';
import FormGroup from '../UI/Forms/FormGroup';
import Input from '../UI/Forms/Input';
import Link from 'next/link';
import { signup, signin } from '../../api/user-api';
import useHttp, { RequestStatus } from '../../hooks/use-http';
import AuthContext from '../../store/auth-context';
import UserToken from '../../models/UserToken';
import { useRouter } from 'next/dist/client/router';
import Button from '../UI/Forms/Button';

const AuthForm: FC<{ isSigningIn: boolean }> = ({ isSigningIn }) => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  const apiRequest = isSigningIn ? signin : signup;
  const { sendRequest, state } = useHttp(apiRequest);

  const actionLabel = isSigningIn ? 'Sign In' : 'Sign Up';

  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    if (state.status === RequestStatus.SUCCESS) {
      const token = new UserToken(
        state.data.token,
        new Date(+state.data.expirationDate),
        state.data.roles
      );

      authContext.signin(token);
      router.replace('/');
    } else if (state.status === RequestStatus.ERROR) {
      setErrorMessage(state.message);
    }
  }, [state]);

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
      {errorMessage && <div className='form-error'>{errorMessage}</div>}
      <Button type='submit'>{actionLabel}</Button>
    </Form>
  );
};

export default AuthForm;
