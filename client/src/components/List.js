/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import Item from './Item';

const containerCss = css`
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
`

function List({ products }) {
    return (
        <div css={containerCss}>
            {products.map(({ id, ...props }) => (
                <Item key={id} {...props} />
            ))}
        </div>
    );
}

export default List;
