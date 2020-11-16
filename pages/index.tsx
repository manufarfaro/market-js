import React from 'react';
import { useContext } from "react";
import SearchContext from '../components/SearchContext';
import Head from 'next/head';
import AppHeader from '../components/AppHeader';
import SearchResults from '../components/SearchResults';
import Content from '../components/Content';
import Footer from '../components/Footer';
import AppContainer from '../components/AppContainer';

const Home = () => {
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
  )
};

export default Home;
