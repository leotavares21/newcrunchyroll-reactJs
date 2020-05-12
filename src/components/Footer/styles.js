import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    width: calc(90vw - 3vw);
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 60px;
    @media (min-width: 768px) {
        width: 90vw;
    }
    @media (max-width: 415px) {
        display: block;
    }
`;
export const FooterTitle = styled.h5`
    color:  #555;
    &:after{
        content: ${props => props.flag ? "' '" : '' };
        width: ${props => props.flag ? '16px' : '' };
        height: ${props => props.flag ? '11px' : '' };
        display: ${props => props.flag ? 'inline-block' : '' };
        background-image: ${props => props.flag ? "url('https://www.crunchyroll.com/i/country_flags/br.gif')" : ''};
        margin-left: ${props => props.flag ? '5px' : '' };
    }
    margin-bottom: 8px;
`;

export const FooterContent = styled.ul`
    width: 20vw;
    margin: 20px;
    @media (max-width: 415px) {
        width: 30vw;
        float: left;
    }
`;

export const FooterList = styled.li`
    margin: 5px 0;
`;

export const FooterItem = styled.a`
    color: #999;
    font-weight: lighter;
    cursor: pointer;
    &:hover{
        color: var(--color-first);
    }
`;