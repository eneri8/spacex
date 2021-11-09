import Head from 'next/head';

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Header = ({ children }: Props): JSX.Element => {
  const defaultHeader = (
    <>
      <title>SpaceX Client</title>
      <meta name="description" content="SpaceX Client" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );

  return (
    <Head>
      { children || defaultHeader  }
    </Head>
  );
}

export default Header;
