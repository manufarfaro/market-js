import { useQuery, UseQueryResult } from "@tanstack/react-query";
import Product from '../model/Product';


const getProducts = async (query: string): Promise<Product[]> => (await fetch(`/api/product?q=${query}`)).json();

const useSearchProducts = (query: string): UseQueryResult<Product[]> => {
    return useQuery(["searchProduct", query], () => getProducts(query));
};

export default useSearchProducts;
