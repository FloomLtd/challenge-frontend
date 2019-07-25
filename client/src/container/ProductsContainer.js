import useProducts from '../hooks/useProducts'

function ProductsContainer({ render }) {
    const products = useProducts();

    return (
        render(products)
    );
}

export default ProductsContainer;