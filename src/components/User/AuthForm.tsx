import { FC, FormEvent } from 'react';
import classes from './css/AuthForm.module.css';

const AuthForm: FC<{ isSigningIn: boolean }> = ({ isSigningIn }) => {
  const actionLabel = isSigningIn ? 'Sign In' : 'Sign Up';

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    console.log('Sending an api request...');
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h1>{actionLabel}</h1>
      <div className={classes['form-control']}>
        <label htmlFor='email'>Your Email</label>
        <input id='email' type='text' minLength={3} maxLength={64} required />
      </div>
      <div className={classes['form-control']}>
        <label htmlFor='password'>Your Password</label>
        <input
          id='password'
          type='password'
          minLength={6}
          maxLength={128}
          required
        />
      </div>
      <button>{actionLabel}</button>
    </form>
  );
};

export default AuthForm;
