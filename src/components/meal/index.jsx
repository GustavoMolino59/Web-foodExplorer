import { Container, Main, Amount, AmoutWrapper} from "./styles";
import { Heart, Plus, Minus, CaretRight, Pencil} from "@phosphor-icons/react";

import {Button} from '../button/index'
import { ButtonText } from "../buttonText";

import { Link } from "react-router-dom";
import { api } from "../../services/api";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useEffect, useState } from "react";
import { useOrders } from "../../hooks/orderCount";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
export function Meal({meal, ...rest} ){
    const avatarUrl = meal.avatar ? `${api.defaults.baseURL}/files/${meal.avatar}` : avatarPlaceholder
    const [numItens, setNumItens] = useState(1)
    const[favorite, setFavorite] = useState(null)
    const { handleOrders } = useOrders();

    const{user} = useAuth();
    function addItem(){
        setNumItens(numItens + 1);
    }

    function removeItem(){
        setNumItens(numItens - 1);
    }

    async function setMealInOrder(){
        await api.post("/orders/", {"meal_id": meal.id, "quantity":numItens})
        alert("Item adicionado no carrinho")
        handleOrders(meal)
    }
    
    async function handleFavorite(){
        if(!favorite){
            await api.post("/favorites/", {"meal_id": meal.id})
        }else{
            await api.delete(`/favorites/${meal.id}`)
        }
        setFavorite(!favorite)

    }
    useEffect(() =>{
        async function fetchFav(){
            const response = await api.get(`/favorites/${meal.id}`)
            const value = response.data;
            
            if(value.id === '-1'){
                setFavorite(false)
            }else{
                setFavorite(true)
            }
        }
        fetchFav()
    }, [])
    
    return(
        
        <Container favorite={favorite} {...rest}>

           { [USER_ROLE.ADMIN].includes(user.role) ?
            <Link to={`/edit/${meal.id}`}>
                <Pencil className="img-meal-item"/>
            </Link>
           :
           <Heart onClick={handleFavorite} className="img-meal-item" weight={favorite?'fill':'regular'}/>
           }
            <Main>
                
                <img src={avatarUrl}/>
                <div>
                    
                    <ButtonText icon2={CaretRight} title={meal.name} target={`/details/${meal.id}`}/>
                </div>
                <span>{meal.price + " R$"}</span>

                { [USER_ROLE.COSTUMER].includes(user.role) &&
                    <AmoutWrapper>
                    <Amount>
                        <button onClick={removeItem}>
                            <Minus/>
                        </button>
                        <span>{numItens}</span>
                        <button onClick={addItem}>
                            <Plus/>
                        </button>
                        
                    </Amount>
                    <Button title="Incluir" onClick={setMealInOrder}/>
                </AmoutWrapper>}
            </Main>
        </Container>
        
    )
}