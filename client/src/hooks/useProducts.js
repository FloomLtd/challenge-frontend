import { useEffect } from 'react';
import axios from 'axios';

import { useStateValue } from './useStateValue';

const { REACT_APP_API_URL: URL } = process.env;

async function fetchOrRetry(count = 0) {
    return axios
        .get(`${URL}/products?_expand=merchant`)
        .then(({ data }) => {
            return data;
        })
        .catch(_ => {
            if (count >= 3) {
                return [];
            }

            return fetchOrRetry(count + 1);
        });
}

function useProducts() {
    const [{ products }, dispatch] = useStateValue();

    useEffect(() => {
        fetchOrRetry().then(products =>
            dispatch({ type: 'productsReady', payload: products })
        );
    }, [dispatch]);

    return products;
}

export default useProducts;
