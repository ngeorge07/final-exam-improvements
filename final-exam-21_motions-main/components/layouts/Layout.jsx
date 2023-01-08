import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '../navigation/Footer';
import Header from '../navigation/Header';

export default function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>
          {pathname === '/'
            ? '21 Motions - Home'
            : `21 Motions - ${pathname.substring(1)}`}
        </title>
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
