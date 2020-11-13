import Image from 'next/image';
import Card from "./Card";
import Product from '../model/Product';
import ProductImage from './ProductImage';

type ProductItemProps = {
    product: Product;
};

const ProductItem = ({ product }: ProductItemProps) =>
    <Card>
        <div>{product.name} - ${product.price}</div>
        <div><ProductImage src={product.pictureUrl} alt={product.name} /></div>
        <div>{product.description}</div>
    </Card>;

export default ProductItem;
