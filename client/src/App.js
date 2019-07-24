/** @jsx jsx */

import { jsx, css, Global } from '@emotion/core';
import Item from './components/Item';

const globalCss = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
`;

const containerCss = css `
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`

function App() {
    return (
        <div>
            <Global styles={globalCss} />
            <div css={containerCss}>
                <Item />
            </div>
        </div>
    );
}

export default App;
