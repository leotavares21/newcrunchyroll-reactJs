import React, { useState, useRef } from 'react';


import {Container, NavLogo, Navigation, NavList, NavItem, NavLink, FormSearch, Login}  from './styles';


export default function Navbar(){


    const [input, setInput] = useState("");
    const [baropened, setbaropened] = useState(false);
    const [menuopened, setmenuopened] = useState(false);
    const formRef = useRef();
    const inputFocus = useRef();


    const onFormSubmit = e => {
        e.preventDefaulf();
        setInput("");
        setbaropened(false);

        console.log(`Form was submited with input: ${input}`);
    };

    const onOpenMenu = () => {
       setmenuopened(menuopened => !menuopened)
    }


        return (
            <Navigation menuopened={menuopened}>

                <Container>
                        <a href="/">
                            <NavLogo  src="/image/logo.png" />
                        </a>
                        

                        <NavList>
                            <NavItem>
                                <NavLink>Séries</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink>Notícias</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink>Games</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink tag>Premium</NavLink>
                            </NavItem>

                            <button onClick={onOpenMenu}>
                                menu
                            </button>


                            <FormSearch 
                                baropened={baropened}
                                onClick={() => {
                                    setbaropened(true);
                                    inputFocus.current.focus();
                                }}

                                onFocus={() => {
                                    setbaropened(true);
                                    inputFocus.current.focus();
                                }}

                                onBlur={() => {
                                setbaropened(false);
                                }}

                                onSubmit={onFormSubmit}
                                ref={formRef}
                             >
                                
                                <button type="submit" baropened={baropened}>
                                    Buscar
                                </button>

                                <input 
                                    onChange={ e => setInput(e.target.value)}
                                    ref={inputFocus}
                                    value={input}
                                    baropened={baropened}
                                    placeholder="Animes, Genêros, Dramas..."  
                                />
                            </FormSearch>
                            
                            
                            <Login>Entrar</Login>

                        </NavList>
                </Container>
            </Navigation>
        )
    }





