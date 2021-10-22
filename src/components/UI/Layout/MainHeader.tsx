import Link from 'next/link';
import { FC, useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import routes from '../../../configuration/routes';
import classes from './css/MainHeader.module.css';
import Route from '../../../models/Route';

const isRouteApplicable = (route: Route, isAuthenticated: boolean): boolean => {
  return (
    route.navigationMenu &&
    (isAuthenticated ? route.visibleForUsers : route.visibleForGuests)
  );
};

const MainHeader: FC = () => {
  const authContext = useContext(AuthContext);

  const navigationItems = routes.filter((route) =>
    isRouteApplicable(route, authContext.isAuthenticated)
  );

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
            <li key={item.route} className={classes['list-item']}>
              <Link href={item.route}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
