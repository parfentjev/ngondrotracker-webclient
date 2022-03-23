import { FC, useEffect, useState } from 'react';
import { getMeditations } from '../api/meditation-api';
import useHttp, { RequestStatus } from '../hooks/use-http';
import Meditation from '../models/Meditation';

const HomePageUser: FC = () => {
  const [meditations, setMeditations] = useState<Meditation[]>([]);
  const { sendRequest, state } = useHttp(getMeditations);

  useEffect(() => {
    sendRequest({});
  }, []);

  useEffect(() => {
    if (state.status === RequestStatus.SUCCESS) {
      setMeditations(state.data);
    }
  }, [state]);

  return (
    <ul>
      {meditations.map((i) => (
        <li key={i.path}>{i.title}</li>
      ))}
    </ul>
  );
};

export default HomePageUser;
