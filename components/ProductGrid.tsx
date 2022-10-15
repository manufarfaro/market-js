import React from 'react';
import Product from '../model/Product';
import ProductItem from "./ProductItem";

type ProductGridProps = {
    products: Product[]
};

const ProductGrid = ({ products }: ProductGridProps) => {
    return(
        <>
            { products.map((product) => <ProductItem key={product.id} product={product} />)}
        </>
    );
};

export default ProductGrid;
