import React, { useContext } from 'react';
import SearchContext from '../components/SearchContext';
import useSearchProducts from '../hooks/useSearchProducts';
import ProductGrid from '../components/ProductGrid';

const SearchResults = () => {
    const { search } = useContext(SearchContext);
    const { loading, products } = useSearchProducts(search);

    return(
        <>
            { !products.length && <div>No Products have been found. :(</div> }
            { loading && <div>loading...</div> }
            { products && <ProductGrid products={products} /> }
        </>
    );
};

export default SearchResults;
