import useProducts from '../hooks/useProducts';
import { useStateValue } from '../hooks/useStateValue';

function ProductsContainer({ filterByTag, filterByCoord, render }) {
    const products = useProducts();
    const [
        {
            filters: { tag, coord },
        },
    ] = useStateValue();

    return render(filterByCoord(filterByTag(products, tag), coord));
}

export default ProductsContainer;
