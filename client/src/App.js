/** @jsx jsx */

import { jsx, css, Global } from '@emotion/core';
import ProductsContainer from './container/ProductsContainer';

const globalCss = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: rgb(241, 244, 247);
    }
`;

const containerCss = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

function App() {
    return (
        <div css={containerCss}>
            <Global styles={globalCss} />

            <ProductsContainer />
        </div>
    );
}

export default App;
