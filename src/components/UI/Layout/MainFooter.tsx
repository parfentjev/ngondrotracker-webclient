import { FC } from 'react';
import Link from 'next/link';
import routes from '../../../configuration/routes';
import classes from './css/MainFooter.module.css';

const MainFooter: FC = () => {
  const navigationItems = routes.filter((route) => route.footerMenu);

  return (
    <footer className={classes['footer']}>
      <ul className={classes['list']}>
        {navigationItems.map((item) => (
          <li key={item.label} className={classes['list-item']}>
            <Link href={item.route}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default MainFooter;
