/** @jsx jsx */

import { jsx, css, Global } from '@emotion/core';
import ProductsContainer from './container/ProductsContainer';
import List from './components/List';
import Header from './components/Header';
import { StateProvider } from './hooks/useStateValue';
import { flatMap } from 'lodash';

const globalCss = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: rgb(241, 244, 247);
        color: rgb(44, 56, 68);
    }
`;

const containerCss = css`
    width: 100vw;
    display: flex;
    align-items: center;
    overflow-y: auto;
    flex-direction: column;
`;

const mainCss = css`
    padding: 0 30px 30px 30px;
    box-shadow: 0px 1px 5px 0px rgba(155, 155, 155, 0.2);
    background: #fff;
    width: 880px;
`;

const initialState = {
    products: [],
    tags: [],
    filters: { tag: null, coord: [] },
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'filterByCoord':
            const { filters: f1 } = state;
            return { ...state, filters: { ...f1, coord: action.payload } };
        case 'filterByTag':
            const { filters: f2 } = state;
            return { ...state, filters: { ...f2, tag: action.payload } };
        case 'productsReady':
            const t1 = flatMap(action.payload, ({ tags }) => tags);
            const tags = Array.from(new Set(t1));
            return { ...state, products: action.payload, tags: tags };
        default:
            return state;
    }
};

const filterByTag = (products, tag) => {
    if (!tag) {
        return products;
    }
    return products.filter(({ tags }) => tags.includes(tag));
};

const filterByCoord = (products, coord) => {
    if (!coord.length) {
        return products;
    }

    const [lat, lng] = coord;
    return products.filter(
        ({
            merchant: {
                location: [mLat, mLng],
                radius_meters,
            },
        }) => {
            const ky = 40000 / 360;
            const kx = Math.cos((Math.PI * lat) / 180.0) * ky;
            const dx = Math.abs(lng - mLng) * kx;
            const dy = Math.abs(lat - mLat) * ky;
            return Math.sqrt(dx * dx + dy * dy) <= radius_meters / 1000;
        }
    );
};

function App() {
    return (
        <div css={containerCss}>
            <Global styles={globalCss} />
            <StateProvider reducer={reducer} initialState={initialState}>
                <div css={mainCss}>
                    <Header />

                    <ProductsContainer
                        filterByTag={filterByTag}
                        filterByCoord={filterByCoord}
                        render={products => <List products={products} />}
                    />
                </div>
            </StateProvider>
        </div>
    );
}

export default App;
