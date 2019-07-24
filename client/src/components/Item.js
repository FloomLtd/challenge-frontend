/** @jsx jsx */

import { jsx, css } from '@emotion/core';

const containerCss = css`
    display: flex;
    background: rgb(244, 220, 185);
    height: 320px;
    width: 820px;
    padding: 20px;
    margin-bottom: 30px;
    &:last-of-type {
     margin-bottom: 0;
    }
`;

function Item({ image_urls, description, title, price, currency, tags }) {
    return (
        <div css={containerCss} >
            <div>{title}</div>
            <div>
                {price} {currency}
            </div>

            <div>{description}</div>
        </div>
    );
}

export default Item;
