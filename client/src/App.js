/** @jsx jsx */

import { jsx, css, Global } from '@emotion/core';
import ProductsContainer from './container/ProductsContainer';
import List from './components/List';
import Header from './components/Header';
import { StateProvider } from './hooks/useStateValue';

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
    padding: 0 30px;
    box-shadow: 0px 1px 5px 0px rgba(155, 155, 155, 0.2);
    background: #fff;
    width: 880px;
`;

const initialState = {
    products: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'productsReady':
            return { ...state, products: action.payload };
        default:
            return state;
    }
};

function App() {
    return (
        <div css={containerCss}>
            <Global styles={globalCss} />
            <StateProvider reducer={reducer} initialState={initialState}>
                <div css={mainCss}>
                    <Header />

                    <ProductsContainer
                        render={products => <List products={products} />}
                    />
                </div>
            </StateProvider>
        </div>
    );
}

export default App;
