/** @jsx jsx */

import { jsx, css } from '@emotion/core';

const btnCss = css`
    background: rgb(84, 171, 159);
    color: #fff;
    border: none;
    padding: 10px 18px;
    cursor: pointer;
    outline: none;
    border-radius: 3px;
    appearance: none; 
`;

function PrimaryButton({ onClick, children }) {
    return (
        <button onClick={onClick} css={btnCss}>
            {children}
        </button>
    )
}

export default PrimaryButton;