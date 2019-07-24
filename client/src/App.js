/** @jsx jsx */

import { jsx, css, Global } from '@emotion/core'

const globalCss = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
`

function App() {
    return (
        <div>
            <Global styles={globalCss} />
            Hello world !!!
        </div>
    )
}

export default App
