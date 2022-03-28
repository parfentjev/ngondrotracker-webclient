import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { getMeditationByPath } from '../../api/meditation-api';
import Card from '../../components/UI/Layout/Card';
import LoadingSpinner from '../../components/UI/Layout/LoadingSpinner';
import useHttp, { RequestStatus } from '../../hooks/use-http';
import Meditation from '../../models/Meditation';

const MeditationPage: FC = () => {
  const [meditation, setMeditation] = useState<Meditation>(
    new Meditation(null, null, null, null)
  );
  const { sendRequest, state } = useHttp(getMeditationByPath);

  const router = useRouter();
  const meditationPath = router.query.id;

  useEffect(() => {
    if (state.status == RequestStatus.PENDING) {
      sendRequest(meditationPath.toString());

      return;
    }

    if (state.status === RequestStatus.SUCCESS) {
      setMeditation(state.data);
    }
  }, [state]);

  return (
    <Card title={meditation.title}>
      <LoadingSpinner status={state.status}>
        <p>goal = {meditation.goal}</p>
      </LoadingSpinner>
    </Card>
  );
};

export default MeditationPage;
