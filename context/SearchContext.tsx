import React, { createContext, Dispatch, ReactNode, useState } from 'react';
import { node } from 'prop-types';

type SearchContextData = {
    search: string,
    setSearch: Dispatch<React.SetStateAction<string>>
};

type SearchProviderProp = {
    children: ReactNode | ReactNode[] | undefined
};

export const searchContextDefaultValue: SearchContextData = {
    search: '',
    setSearch: () => {}
};

const SearchContext = createContext<SearchContextData>(searchContextDefaultValue);

const SearchProvider = ({ children }: SearchProviderProp) => {
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
