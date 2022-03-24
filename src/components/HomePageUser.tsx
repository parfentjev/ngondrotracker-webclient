import { FC, useEffect, useState } from 'react';
import { getMeditations } from '../api/meditation-api';
import useHttp, { RequestStatus } from '../hooks/use-http';
import Meditation from '../models/Meditation';
import MeditationList from './UI/Meditation/MeditationList';

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

  return <MeditationList meditations={meditations} />;
};

export default HomePageUser;
