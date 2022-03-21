import { FC, useEffect, useState } from 'react';
import { getMeditations } from '../api/meditation-api';
import useHttp, { RequestStatus } from '../hooks/use-http';
import Meditation from '../models/Meditation';

const HomePageUser: FC = () => {
  const [meditations, setMeditations] = useState<Meditation[]>();
  const { sendRequest, state } = useHttp(getMeditations);

  useEffect(() => {
    sendRequest({});
  }, []);

  useEffect(() => {
    if (state.status === RequestStatus.SUCCESS) {
      console.log(state.data);
    }
  }, [state]);

  // todo: display meditations list from the server
  return <p>Hi, user! {meditations}</p>;
};

export default HomePageUser;
