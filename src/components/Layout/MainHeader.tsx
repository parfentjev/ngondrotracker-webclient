import Link from 'next/link';
import { FC, useContext } from 'react';
import AuthContext from '../../store/auth-context';

import classes from './css/MainHeader.module.css';

const MainHeader: FC = () => {
  const authContext = useContext(AuthContext);

  let navigationItems: { to: string; text: string }[];
  if (authContext.isAuthenticated) {
    navigationItems = [{ to: '/user/logout', text: 'logout' }];
  } else {
    navigationItems = [
      { to: '/user/signin', text: 'Sign In' },
      { to: '/user/signup', text: 'Sing Up' },
    ];
  }

  return (
    <header className={classes['header']}>
      <div className={classes['branding']}>
        <Link href='/'>
          <img
            src='/images/branding_logo.png'
            alt='Ngondro Meditation Tracker'
          />
        </Link>
      </div>
      <nav className={classes['navigation']}>
        <ul className={classes['list']}>
          {navigationItems.map((item) => (
            <li key={item.to} className={classes['list-item']}>
              <Link href={item.to}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
