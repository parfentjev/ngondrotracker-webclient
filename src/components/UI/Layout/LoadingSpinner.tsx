import { FC } from 'react';
import { RequestStatus } from '../../../hooks/use-http';

const LoadingSpinner: FC<{
  status: RequestStatus;
}> = ({ status, children }) => {
  if (status === RequestStatus.SUCCESS) {
    return <>{children}</>;
  }

  if (status === RequestStatus.ERROR) {
    return <p className='text-center'>Couldn't load data. Please try again.</p>;
  }

  return <p className='text-center'>Loading...</p>;
};

export default LoadingSpinner;
