import { FC, Fragment } from 'react';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import MainContent from './MainContent';

const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />
      <MainContent>{children}</MainContent>
      <MainFooter />
    </Fragment>
  );
};

export default Layout;
