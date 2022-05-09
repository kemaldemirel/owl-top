import { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/logo.svg' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
