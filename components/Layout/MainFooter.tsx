import { FC } from 'react';

import classes from './css/MainFooter.module.css';

const MainFooter: FC = () => {
  return (
    <footer className={classes['footer']}>
      <ul className={classes['footer__list']}>
        <li className={classes['footer__list-item']}>
          <a href='#'>Link 1</a>
        </li>
        <li className={classes['footer__list-item']}>
          <a href='#'>Link 2</a>
        </li>
        <li className={classes['footer__list-item']}>
          <a href='#'>Link 3</a>
        </li>
      </ul>
    </footer>
  );
};

export default MainFooter;
