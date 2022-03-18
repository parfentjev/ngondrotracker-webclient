import { useRouter } from 'next/dist/client/router';
import { FC } from 'react';
import Button from './UI/Forms/Button';
import Card from './UI/Layout/Card';

const HomePageGuest: FC = () => {
  const router = useRouter();

  return (
    <>
      <p>Welcome!</p>
      <p>
        This website aims to help you to track your Ngondro progress. In order
        to complete, this set of practices requires us to repeatingly perform
        some action - be it carrying out prostrations, chanting mantras, doing
        offerings or guru yoga.
      </p>
      <p>
        Once registered, you can add repetitions for a meditation you're
        currently doing. Your progress'll be always saved!
      </p>
      <p className='text-center'>
        <Button
          type='button'
          className='button button-primary'
          onClick={() => router.push('/user/signup')}
        >
          Create Account
        </Button>
      </p>
    </>
  );
};

export default HomePageGuest;
