import { FC, useContext } from 'react';
import HomePageGuest from '../components/HomePageGuest';
import HomePageUser from '../components/HomePageUser';
import Card from '../components/UI/Layout/Card';
import AuthContext from '../store/auth-context';

const Home: FC = () => {
  const context = useContext(AuthContext);

  return (
    <Card>
      {context.isAuthenticated ? <HomePageUser /> : <HomePageGuest />}
    </Card>
  );
};

export default Home;
