import React from 'react';
import Header from './Header';
import AppTitle from './AppTitle';
import SearchBox from './SearchBox';

const AppHeader = () =>
    <Header>
        <AppTitle>MarketJS</AppTitle>
        <SearchBox />
    </Header>;

export default AppHeader;
