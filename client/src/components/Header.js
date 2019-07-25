/** @jsx jsx */

import { jsx, css } from '@emotion/core';

import { useStateValue } from '../hooks/useStateValue';

const containerCss = css`
    background: #fff;
`

const hrCss = css`
    border: 1px solid rgb(197, 207, 216);
    margin: 30px 0;
`

function Header() {
    const [{ products }] = useStateValue();
    const tags = products.map(({ tags }) => tags );

    return <div css={containerCss}>
        <div>
            {tags.map(t => <span key={t}> {t} |</span>)}
        </div>

        <hr css={hrCss} />
    </div>;
}

export default Header;
