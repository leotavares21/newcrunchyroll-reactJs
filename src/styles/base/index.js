import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle `
    body {
        font-size: 12px;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        background-color: #f2f2f2;
        overflow-x: hidden;
    }

    h1,h2,h3,h4,h5,h6 {
        font-weight: bold;
    }
`
;

export default Base;
