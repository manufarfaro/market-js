import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';
import useSearchProducts from '../hooks/useSearchProducts';
import ProductGrid from '../components/ProductGrid';

const SearchResults = () => {
    const { search } = useContext(SearchContext);
    const { isLoading, data } = useSearchProducts(search);

    return(
        <>
            { !data?.length && <div>No Products have been found. :(</div> }
            { isLoading && <div>loading...</div> }
            { data && <ProductGrid products={data} /> }
        </>
    );
};

export default SearchResults;
