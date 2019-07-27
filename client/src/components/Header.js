/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';

import { useStateValue } from '../hooks/useStateValue';
import Select from './Select';
import TextInput from './TextInput';

const containerCss = css`
    background: #fff;
`;

const hrCss = css`
    border: 1px solid rgb(197, 207, 216);
    margin: 30px 0;
`;

const actionsBarCss = css`
    display: flex;
`;

const groupCss = css`
    display: flex;
    flex-direction: column;
    margin-right: 15px;
`;

const labelCss = css`
    font-weight: 700;
    font-size: 0.9em;
`;

const brandCss = css`
    padding: 17px 15px;
    margin: 35px 0;
    box-shadow: 0px 1px 5px 0px rgba(155, 155, 155, 0.2);
`;

const h1Css = css`
    font-weight: 700;
    color: #000;
    margin: 0;
    text-transform: capitalize;
    letter-spacing: 2.5px;
    font-size: 4em;
`;

const filtersSectionCss = css`
    margin: 13px;
    display: flex;
`;

const filterCss = css`
    color: #fff;
    border-radius: 3px;
    padding: 7px;
    background: rgb(98, 93, 236);
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin-right: 15px;
    span {
        opacity: 0.5;
        margin-left: 10px;
        font-size: 0.8em;
        vertical-align: baseline;
        font-family: 'Comic Sans MS';
    }
`;

function Header() {
    const [
        {
            tags,
            filters: { tag, coord },
        },
        dispatch,
    ] = useStateValue();

    const [selectedTag, selectTag] = useState(null);
    const [selectedCoord, selectCoord] = useState('');

    useEffect(() => {
        dispatch({ type: 'filterByTag', payload: selectedTag });
    }, [dispatch, selectedTag]);

    useEffect(() => {
        const c = selectedCoord ? selectedCoord.split(',') : [];
        if (c.length === 2 || !c.length ) {
            dispatch({ type: 'filterByCoord', payload: c });
        }
    }, [dispatch, selectedCoord]);

    return (
        <div css={containerCss}>
            <div css={brandCss}>
                <h1 css={h1Css}>FLOOM</h1>
            </div>
            <div css={actionsBarCss}>
                <div css={groupCss}>
                    <label css={labelCss}>Search</label>
                    <TextInput
                        onChange={({ target }) => selectCoord(target.value)}
                        value={selectedCoord}
                    />
                </div>

                <div css={groupCss}>
                    <label css={labelCss}>Tags</label>
                    <Select
                        onChange={({ target }) => selectTag(target.value)}
                        value={selectedTag}
                    >
                        {tags.map(t => (
                            <option value={t} key={t}>
                                {t}
                            </option>
                        ))}
                    </Select>
                </div>
            </div>

            <hr css={hrCss} />

            {tag || coord.length ? (
                <div css={filtersSectionCss}>
                    {tag ? (
                        <button css={filterCss} onClick={() => selectTag(null)}>
                            {tag}
                            <span>x</span>
                        </button>
                    ) : null}
                    {coord.length ? (
                        <button css={filterCss} onClick={() => {selectCoord('')}}>
                            {coord.join(', ')}
                            <span>x</span>
                        </button>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
}

export default Header;
