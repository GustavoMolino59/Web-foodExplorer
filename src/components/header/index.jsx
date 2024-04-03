import { Container, Menu, OrdersMob, Nav, NumOrders, OrderDesk, Brand, Search, Result} from "./styles";
import {List, Receipt,MagnifyingGlass, SignOut } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";

import { Logo } from '../Logotipo'
import { Input } from "../input";
import { Button } from "../button";
import { ButtonText } from "../buttonText";
import { FavMeal } from "../FavMeal";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";


import { api } from "../../services/api";
import { useEffect, useState, useRef } from "react";
import { useOrders } from "../../hooks/orderCount";
export function Header({menuIsOpen}){
    const {user, signOut} = useAuth()
    const{orders} = useOrders()
    const [numOrders, setNumOrders] = useState(null)
    const[data, setData] = useState(null)


    const[openSearch, setOpenSearch] = useState(false)
    const searchRef = useRef();
    const navigate = useNavigate()


    useEffect(()=>{
        async function getOrders(){
            const response = await api.get('/details')
            setNumOrders(response.data.total_items);
        }
        getOrders()

    }, [orders])

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
        <Container>
            <Nav>
                <Menu>
                    <List onClick={menuIsOpen}/>
                </Menu>
                <Brand>
                    <Link to='/'>
                        <Logo size='2'/>
                    </Link>
                    
                    {[USER_ROLE.ADMIN].includes(user.role) && <p>admin</p>}
                </Brand>
                <Search ref={searchRef} className='search-desktop'>
                    <Input  
                            className="search-desktop" 
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
                <ButtonText target='/favorites' title='Meus Favoritos' className='header-button-text'/>
                <ButtonText target='/historic' title='Histórico de pedidos' className='header-button-text'/>
                
                
                {[USER_ROLE.COSTUMER].includes(user.role) && 
                <OrdersMob>
                    <NumOrders>
                        <Link to='/payment'>{numOrders ? numOrders : '0'}</Link>
                    </NumOrders>
                    <Receipt/>
                </OrdersMob>
                }
                
                <OrderDesk className="orders-desktop">
                    {[USER_ROLE.ADMIN].includes(user.role) ?
                    <Link to='/new'>
                        <Button  title={`Novo Prato`}/>
                    </Link>
                    :
                    <Link to='/payment'>
                        <Button  title={`Pedidos (${numOrders ? numOrders : '0'})`} icon={Receipt}/>
                    </Link>
                    }
                    
                </OrderDesk>
                
                <SignOut className="orders-desktop" onClick={handleSignOut}/>
                   
            </Nav>
            
        </Container>
    )
}