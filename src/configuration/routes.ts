import Route from '../models/Route';

const routes: Route[] = [
  // navigation menu users
  {
    label: 'Profile',
    route: '/user/',
    navigationMenu: true,
    visibleForUsers: false,
    visibleForGuests: false,
  },
  {
    label: 'Log Out',
    route: '/user/signout',
    navigationMenu: true,
    visibleForUsers: true,
    visibleForGuests: false,
  },

  // navigation menu guests
  {
    label: 'Log In',
    route: '/user/signin',
    navigationMenu: true,
    visibleForUsers: false,
    visibleForGuests: true,
  },
  {
    label: 'Register',
    route: '/user/signup',
    navigationMenu: true,
    visibleForUsers: false,
    visibleForGuests: true,
  },

  // footer menu all
  {
    label: 'Link 1',
    route: '/',
    footerMenu: true,
  },
  {
    label: 'Link 2',
    route: '/',
    footerMenu: true,
  },
  {
    label: 'Link 3',
    route: '/',
    footerMenu: true,
  },
];

export default routes;