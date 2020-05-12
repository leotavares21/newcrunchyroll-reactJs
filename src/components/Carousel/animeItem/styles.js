import styled from 'styled-components';


export const SliderItem = styled.div`
    position: relative;
    min-width: 100vw;
    height: 70vh;

    @media (max-width: 768px) {
       height: 50vh;
    }
`;

export const Img = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Content = styled.div`
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
    height: 100%;
`;


export const Age = styled.span`
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 10%;
    right: 10%;
    background-color: rgba(0,0,0,0.7);
    color: #fff;
    padding: 5px;
    cursor: pointer;
    transition: ease-out 0.2s;
    opacity: 0;
    ${SliderItem}:hover &{
        opacity: 1;
    }

`;

export const Watch = styled.a`
    background-color: rgba(244, 117, 33, 0.8);
    color: var(--color-zero);
    padding: 10px 15px;
    margin: 0 5px;
    font-weight: bold;
    cursor: pointer;
    transition: ease-out 0.2s;
    opacity: 0;
    ${SliderItem}:hover &{
        opacity: 1;
    }

`;

export const Description = styled.a`
    background-color: rgba(0,0,0,0.7);
    color: var(--color-zero);
    padding: 10px 15px;
    margin: 0 5px;
    font-weight: bold;
    cursor: pointer;
    transition: ease-out 0.2s;
    opacity: 0;
    ${SliderItem}:hover &{
        opacity: 1;
    }

`;


