/** @jsx jsx */

import { jsx, css } from '@emotion/core';

const inputCss = css`
    color: inherit;
    padding: 14px;
    border: 2px solid rgb(197, 207, 216);
    border-radius: 3px;
    outline: none;
    appearance: none;
    background: transparent;
    width: 190px;
`;

function TextInput({ value, onChange }) {
    return (
        <input
            placeholder="51.500..."
            type="text"
            value={value}
            onChange={onChange}
            css={inputCss}
        />
    );
}

export default TextInput;
