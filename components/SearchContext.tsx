import React, { createContext, useState } from 'react';
import { node } from 'prop-types';

type SearchContextData = {
    search: string,
    setSearch?: Function
};

export const searchContextDefaultValue: SearchContextData = {
    search: 'a'
}
const SearchContext = createContext<SearchContextData>(searchContextDefaultValue);

const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState('');

    return <SearchContext.Provider value={{ search, setSearch }}>{children}</SearchContext.Provider>
};

SearchProvider.propTypes = {
    children: node
}

const SearchConsumer = SearchContext.Consumer;

export {
    SearchContext as default,
    SearchProvider,
    SearchConsumer
};
