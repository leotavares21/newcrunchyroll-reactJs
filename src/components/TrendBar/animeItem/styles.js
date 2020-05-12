import styled from 'styled-components';


export const SliderItem = styled.div`
    display: inline-block;
    transition: 0.5s;
    height: 150px;
    position: relative;
    z-index: 1;
    background-color: #f2f2f2;
    @media all and (min-width: 600px){
        width: calc(100%/2);
    }
    @media all and (min-width: 768px){
        width: calc(100%/3);
    }
    @media all and (min-width: 980px){
        width: calc(100%/4);
    }
    @media all and (min-width: 1260px){
        width: calc(100%/5);
    }
    @media all and (min-width: 1480px){
        width: calc(100%/6);
    }

`;

export const SliderItemInner = styled.div`
    margin: 0 5px;
    border-radius: 2px;
    position: relative;
    width: 100%;
    height: 150px;
    transition: 0.4s;
    cursor: pointer;
    ${SliderItem}:hover &{
        transition: 0.4s;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Content = styled.div`
   width: calc(100% - 5px);
    &:last-of-type{
        width: 100%;
    }
    color: var(--color-zero);
    background: rgba(0, 0, 0, 0.75);
    padding: 5px 10px 5px 5px;
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    height: 100%;
    line-height: 25px;
    transition: 0.3s;
    transform-origin: left;
    transform: scaleX(0);

    ${SliderItemInner}:hover &{
        transition: 0.3s;
        transform-origin: left;
        transform: scaleX(1);
    }

`;

export const Name = styled.h3`
    font-size: 14px;
`;

export const Age = styled.span`
    color: var(--color-first);
`;

export const Episodes = styled.div`
    float: right;
`;

export const Description = styled.p`
    white-space: normal;
    line-height: 16px;
`;

export const Gender = styled.ul`
    display: flex;
    li{
        padding-right: 10px;
    }
`;




