import React, { Fragment } from 'react';
import Product from '../model/Product';
import ProductItem from "./ProductItem";

type ProductGridProps = {
    products: Product[]
};

const ProductGrid = ({ products }: ProductGridProps) => {
    return(
        <Fragment>
            { products.map((product) => <ProductItem key={product.id} product={product} />)}
        </Fragment>
    );
};

export default ProductGrid;
