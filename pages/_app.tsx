import '../styles/globals.css';
import Layout from '../components/Layout/Layout';
import { Fragment, ReactNode } from 'react';
import Head from 'next/head';

const Application: ReactNode = ({ Component, pageProps }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Application;
