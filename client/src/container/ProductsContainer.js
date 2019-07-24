import React from 'react';
import useProducts from '../hooks/useProducts'
import List from '../components/List'

function ProductsContainer() {
    const products = useProducts();

    return (
        <List products={products}/>
    );
}

export default ProductsContainer;