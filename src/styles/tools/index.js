export const container = () => `
    max-width: 91vw;
    margin: 10px auto;
    &:before,
    &:after {
        content: '';
    display: table;
    }
    &:after {
        clear: both;
    }
`;