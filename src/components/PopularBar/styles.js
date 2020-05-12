import styled from 'styled-components';


export const PageHead = styled.h3`
    margin-top: 10px;
    margin-left: 50px;
    font-weight: bold;
    font-size: 16px;
`;

export const Slider = styled.div`
    max-width: 100vw;
    padding: 10px 0;
    z-index: 1;
    position: relative;
`;

export const SliderMask = styled.div`
    white-space: nowrap;
    padding: 0 60px;
`;

export const Arrow = styled.div`
    position: absolute;
    top: 10px;
    padding: 0;
    margin: 0;
    width: 60px;
    height: calc(100% - 20px);
    z-index: 10;
    cursor: pointer;
    color: var(--color-zero);
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: ${props => props.goLeft ? `-10px` : ``};
    right: ${props => props.goRight ? `-10px` : ``};
    background: ${props => props.goLeft ? `linear-gradient(to left, rgba(244, 117, 33, 0.5), rgba(244, 117, 33, 1))` : ``};
    background: ${props => props.goRight ? `linear-gradient(to right, rgba(244, 117, 33, 0.5), rgba(244, 117, 33, 1))` : ``};
    opacity: 0;
    transition: 0.2s;

    ${Slider}:hover &{
       opacity: 1;
       transition: 0.2s;
    }
`;
