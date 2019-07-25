/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import Item from './Item';

const containerCss = css`
    display: flex;
    flex-direction: column;
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
