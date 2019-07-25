/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import PrimaryButton from './PrimaryButton';

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

const imgCss = css`
    height: 280px;
    width: 280px;
    object-fit: cover;
`;

const imgContainerCss = css`
    padding-right: 15px;
`;

const detailsContainer = css`
    display: flex;
    flex-direction: column;
    padding: 15px 0;
`;

const h3Css = css`
    font-weight: 700;
    font-size: 1.4em;
    margin: 0 0 10px 0;
    padding: 0;
`;

const h5Css = css`
    font-size: 1em;
    color: rgb(98, 93, 236);
    margin: 0;
    font-weight: 400;
`;

const topCss = css`
    display: flex;
`;

const topLeftCss = css`
    flex: 3;
`;

const topRightCss = css`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

const h1Css = css`
    font-weight: 700;
    font-size: 2.5em;
    margin: 0;
    white-space: nowrap;
    span {
        font-size: 0.6em;
    }
`;

const descriptionContainer = css`
    margin-top: 15px;
`;

const pCss = css`
    margin: 0;
    font-size: 1em;
    font-weight: 400;
`;

const bottomCss = css`
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
    flex: 1;
`

const bottomInnerCss = css`
    display: flex;
    align-items: flex-end;
`

function Item({
    image_urls,
    description,
    title,
    price,
    currency,
    tags,
    merchant: { title: merchantTitle },
}) {
    return (
        <div css={containerCss}>
            <div css={imgContainerCss}>
                <img
                    src={`${process.env.PUBLIC_URL}/${image_urls[0]}.jpg`}
                    alt="product"
                    css={imgCss}
                />
            </div>
            <div css={detailsContainer}>
                <div css={topCss}>
                    <div css={topLeftCss}>
                        <h3 css={h3Css}>{title}</h3>
                        <h5 css={h5Css}>{merchantTitle}</h5>
                    </div>
                    <div css={topRightCss}>
                        <h1 css={h1Css}>
                            {price} <span>{currency}</span>
                        </h1>
                    </div>
                </div>

                <div css={descriptionContainer}>
                    <p css={pCss}>{description}</p>
                </div>

                <div css={bottomCss}>
                    <div css={bottomInnerCss}>
                        <PrimaryButton onClick={() => {}}>
                            Buy
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
