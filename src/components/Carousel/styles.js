import styled from 'styled-components';

export const CarouselContent = styled.div` 
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const CarouselItem = styled.div`
    position: relative;
    min-width: 100%;
    transition: 0.5s;
`;

export const CarouselBtn = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 5%;
    height: 70vh;
    background: none;
    transition:  0.5s;
    border: none;
    outline: none;
    display: none;
    font-size: 24px;
    left: ${props => props.goLeft ? `0px` : ``};
    right: ${props => props.goRight ? `0px` : ``};

    @media (max-width: 415px) {
        width: 8%;
    }

    @media (max-width: 768px) {
        height: 50vh;
    }

    ${CarouselContent}:hover &{
        background-color: rgba(0,0,0, 0.356);
        cursor: pointer;
        color: white;
        display: block;
    }

`;


