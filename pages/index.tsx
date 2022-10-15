import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react';
import AppContainer from '../components/AppContainer';
import AppHeader from '../components/AppHeader';
import Content from '../components/Content';
import Footer from '../components/Footer';
import SearchContext from '../components/SearchContext';
import SearchResults from '../components/SearchResults';

const Home: NextPage = () => {
  const { search } = useContext(SearchContext);
  return (
    <AppContainer>
      <Head>
        <title>MarketJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppHeader />

      <Content>
          { !search && <div>Use the search box to start looking the product you want...</div> }
          { search && <SearchResults /> }
      </Content>

      <Footer />
    </AppContainer>
  );
};

export default Home;
