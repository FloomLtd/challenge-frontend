import { useEffect, useState } from 'react';
import axios from 'axios';

const { REACT_APP_API_URL: URL } = process.env;

async function fetchOrRetry(count = 0) {
    return axios.get(`${URL}/products`).then(({ data }) => {
        return data;
    }).catch(_ => {
       if (count >= 3) {
           return [];
       }

       return fetchOrRetry(count + 1);
    });
}

function useProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchOrRetry().then(setProducts);
    }, []);

    return products;
}

export default useProducts;