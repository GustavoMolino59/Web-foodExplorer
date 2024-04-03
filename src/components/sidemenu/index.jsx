import { Container, Header, Nav, Main, CloseMenu, Search, Result} from "./styles";
import {MagnifyingGlass, X} from '@phosphor-icons/react'
import { Input } from "../input";
import { FavMeal } from "../FavMeal";
import { ButtonText } from "../buttonText";

import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { api } from "../../services/api";
export function SideMenu({menuIsOpen, onCloseMenu}){
    const {user, signOut} = useAuth()
    const[data, setData] = useState(null)
    const[openSearch, setOpenSearch] = useState(false)
    const searchRef = useRef();
    const navigate = useNavigate()

    function handleSignOut(){
        signOut();
        navigate('/')
    }
    async function handleSearch(title){
        if(title){
            const response = await api.get(`/meal?title=${title}`)
            setData(response.data)
        }
        else{
            setData(null)
        }
    }
    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setOpenSearch(false);
        }
    };
    const handleFocus = () => {
        setOpenSearch(true);
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return(
        <Container data-menu-is-open={menuIsOpen}>
            <Header>
                <CloseMenu onClick={onCloseMenu}>
                    <ButtonText icon1={X} title='Menu'/>
                </CloseMenu>
            </Header>
            <Main>
                <Search ref={searchRef} className='search-desktop'>
                    <Input  
                            className="search-mobile" 
                            id="search" placeholder="Busque por pratos ou ingredientes" 
                            icon={MagnifyingGlass} 
                            onChange={e => handleSearch(e.target.value)}
                            onFocus={handleFocus}
                            />
                    
                  
                    {data && openSearch && (
                                <Result  className={openSearch ? 'results-data' : 'empty-data'}>
                                {data.map((meal) => (
                                    <FavMeal  id={meal.id} avatar={meal.avatar} name={meal.name} />
                                ))}
                                </Result>
                                )}
                </Search>
                
                <Nav>
                    {[USER_ROLE.ADMIN].includes(user.role) &&
                    <ButtonText target='/new' title='Novo Prato'/> 
                    }
                    <ButtonText target='/favorites' title='Favoritos'/>
                    <ButtonText target='/historic' title='Histórico'/>
                    <ButtonText target='/' title='Sair' onClick={handleSignOut}/>

                </Nav>
            </Main>
        </Container>
    )
}