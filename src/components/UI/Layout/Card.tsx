import { FC } from 'react';
import classes from './css/Card.module.css';

const Card: FC<{ title: string }> = ({ title, children }) => {
  return (
    <div className={classes.card}>
      <h1 className={classes.title}>{title}</h1>
      {children}
    </div>
  );
};

export default Card;
