import productData from '../../../data/products.json';
import Product from '../../../model/Product';

const getSearchRegExp = (text: string) => new RegExp(text, 'gi');

const getAllProducts = (): Product[] => <Product[]>productData.filter((product: Product) => product.active);
const getProductsByQuery = (query: string) => query.length ? getAllProducts().filter(({ name, description }) =>
    name.search(getSearchRegExp(query)) >= 0 ||
    description.search(getSearchRegExp(query)) >= 0
) : [];

const handler = ({ query }, res) => {
    res.status(200).send(Object.prototype.hasOwnProperty.call(query,'q') ? getProductsByQuery(query.q) : getAllProducts());
};

export default handler;
