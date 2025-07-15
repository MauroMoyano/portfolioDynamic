//  fonts
import {Sora} from '@next/font/google'
import Head from 'next/head'

// fonts settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Mauro Portfolio - Desarrollador Full Stack</title>
        <meta name="description" content="Portfolio de Mauro - Desarrollador Full Stack especializado en React, Next.js y tecnologías modernas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;
