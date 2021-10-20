import '../components/UI/css/shared.css';
import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import { AuthContextProvider } from '../store/auth-context';
import { AppProps } from 'next/dist/shared/lib/router/router';

const Application = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthContextProvider>
      <Head>
        <title>Ngondro Meditation Tracker</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
};

export default Application;
