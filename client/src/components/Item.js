/** @jsx jsx */

import { jsx, css } from '@emotion/core';

const containerCss = css`
    display: flex;
    background: rgb(244, 220, 185);
    height: 320px;
    width: 820px;
    padding: 20px;
`;

function Item() {
    return <div css={containerCss}>I'm item</div>;
}

export default Item;
