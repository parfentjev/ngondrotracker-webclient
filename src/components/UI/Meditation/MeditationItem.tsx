import { useRouter } from 'next/dist/client/router';
import { FC } from 'react';
import Meditation from '../../../models/Meditation';
import classes from './css/MeditationList.module.css';

const MeditationItem: FC<{ meditation: Meditation }> = ({ meditation }) => {
  const router = useRouter();
  const onClickHandler = () => router.push('/meditations/' + meditation.path);

  return (
    <li
      className={classes['meditation-item']}
      key={meditation.path}
      onClick={onClickHandler}
    >
      {meditation.title}
    </li>
  );
};

export default MeditationItem;
