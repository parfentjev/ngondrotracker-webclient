import { FC } from 'react';

import classes from './css/MainHeader.module.css';

const MainHeader: FC = () => {
  return (
    <header className={classes['header']}>
      <div className={classes['header__branding']}>
        <a href='#'>
          <img
            src='/images/branding_logo.png'
            alt='Ngondro Meditation Tracker'
          />
        </a>
      </div>
      <nav className={classes['header__navigation']}>
        <ul className={classes['header__list']}>
          <li className={classes['header__list-item']}>
            <a href='#'>Link 1</a>
          </li>
          <li className={classes['header__list-item']}>
            <a href='#'>Link 2</a>
          </li>
          <li className={classes['header__list-item']}>
            <a href='#'>Link 3</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
