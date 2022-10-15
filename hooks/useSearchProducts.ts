import { useEffect, useState } from "react";
import Product from '../model/Product';

type searchProductsData = {
    loading: boolean;
    products: Product[]
};

const useSearchProducts = (query: string): searchProductsData => {
    const [loading, setLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<Product[]>([]);

    const fetchData = async() => {
        const response = <Product[]>await(await fetch(`/api/product?q=${query}`)).json();
        setProducts(response);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [query]);

    return { loading, products };
};

export default useSearchProducts;
