import { FC } from 'react';
import Meditation from '../../../models/Meditation';
import MeditationItem from './MeditationItem';
import classes from './css/MeditationList.module.css';

const MeditationList: FC<{ meditations: Meditation[] }> = ({ meditations }) => {
  return (
    <ul className={classes['meditation-list']}>
      {meditations.map((i) => (
        <MeditationItem meditation={i} />
      ))}
    </ul>
  );
};

export default MeditationList;
