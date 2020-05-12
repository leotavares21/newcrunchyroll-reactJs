import styled from 'styled-components';

import { container } from '../../styles/tools/index';

export const Container = styled.div`
    ${container};
    display: flex;
    align-items: center;
    position: relative;
`;

export const NavLogo = styled.img`
    width: 130px;
    height: 25px;
    float: left;

    @media (max-width: 768px) {
            position: absolute;
            top: 0;
    }
    
`;

export const Navigation = styled.nav`
    background-color: var(--color-zero);
    box-shadow: 0px 2px 4px #ccc;
    padding: 5px 0;
    @media (max-width: 768px) {
        transition: height linear 0.2s;
        height: ${props => (props.menuopened ? "200px" : "50px")};
        }
    `;

export const NavList = styled.ul`
    display: flex;
    margin-left: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 45px;
    }

    button{
        width: 20px;
        height: 20px;
        position: absolute;
        background: transparent;
        background-image: url('/image/open-menu.png');
        transition: background-image 0.3s;
        background-repeat: no-repeat;
        text-indent: -9999px;
        background-size: contain;
        right: 0;
        top: 0;

        @media (min-width: 770px) {
            display: none;
        }
    }
    `;

export const NavItem = styled.li`
    margin: 0 10px;
    transition: all 0.2s;
        @media (max-width: 768px) {
            margin: 10px 0;
        }
    `;

export const NavLink = styled.a`
    color: #333;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: ease-in 0.3s;
    &:hover {
        color: var(--color-first);
    }

    
    position: ${props => (props.tag ? "relative" : "")};

    &::before {
        content: '${props => (props.tag ? "experimente de graça" : "")}';
        color: ${props => (props.tag ? "var(--color-first)" : "")};
        font-size: ${props => (props.tag ? "9px" : "")};
        position: ${props => (props.tag ? "absolute" : "")};;
        font-weight: ${props => (props.tag ? "lighter" : "")};;
        text-transform: ${props => (props.tag ? "uppercase" : "")};;
        top: ${props => (props.tag ? "-8px" : "")};
        left: ${props => (props.tag ? "25px" : "")};
        min-width: ${props => (props.tag ? "200px" : "")};;
    }
    

    `;

export const FormSearch = styled.form`
        position: absolute;
        display: flex;
        align-items: center;
        right: ${40 * 2}px;
        top: -1px;
        width: ${props => (props.baropened ? "220px" : "26px")};
        cursor: ${props => (props.baropened ? "auto" : "pointer")};
        padding: 1px;
        height: 26px;
        transition: 0.3s;
        border:  ${props => (props.baropened ? "1px solid #999" : "none")};
        border-radius: 3px;

        @media (max-width: 485px) {
           background-color: ${props => (props.baropened ? "rgba(0,0,0,0.9)" : "transparent")} 
        }


    button{
        background-image: url('/image/search.png');
        background-repeat: no-repeat;
        background-size: 20px 20px;
        background-position: center;
        width: 26px;
        height: 26px;
        padding-right: 20px;
        display: block;
        text-indent: -9999px;
        line-height: 1;
        cursor: ${props => (props.baropened ? "pointer" : "auto")};
        pointer-events: ${props => (props.baropened ? "auto" : "none")};
        background-color: transparent;
        outline: none;
        border: none;
        
    }

    input {
        line-height: 26px;
        background-color: transparent;
        width: 100%;
        cursor: ${props => (props.baropened ? "auto" : "pointer")};
        margin-left: ${props => (props.baropened ? "15px" : "0")};
        text-indent: ${props => (props.baropened ? "0px" : "-9999px")};
        color: #999;
        border: none;
        &:focus,
        &:active {
            outline: none;
        }
        &::placeholder {
            color: #999;
        }
    }
`;

export const Login = styled.a`
    color: #999;
    position: absolute;
    font-size: 11px;
    right: 40px;
    top: -2px;
    cursor: pointer;
    
    &:before{
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        background-image: url('/image/user.png');
        background-size: contain;
        background-repeat: no-repeat;
        margin: 0 auto;
        margin-bottom: 3px;
    }

    `;


   


