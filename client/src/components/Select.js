/** @jsx jsx */

import { jsx, css } from '@emotion/core';

const emptyState = '__emptyState__';

const selectCss = empty => css`
    color: ${empty ? '#ccc' : 'inherit'};
    padding: 14px;
    border: 2px solid rgb(197, 207, 216);
    border-radius: 3px;
    outline: none;
    appearance: none;
    background: transparent;
    width: 190px;
`;

function Select({ children, value, onChange }) {
    return (
        <select value={value || emptyState} onChange={onChange} css={selectCss(!value)}>
            {!value && (
                <option value={emptyState} disabled>
                    Select an option
                </option>
            )}
            {children}
        </select>
    );
}

export default Select;
