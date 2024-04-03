import { Container, Value } from "./stytles";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Link } from "react-router-dom";
import { api } from "../../services/api";
export function FavMeal({id,avatar, name, subtotalAmout, quantity, payment, ...rest}){
    const avatarUrl = avatar ? `${api.defaults.baseURL}/files/${avatar}` : avatarPlaceholder

    async function deleteOrderDetails(){
        await api.delete(`/details/${id}`, )
    }
    
    return(
        <Container {...rest}  >
            <img src={avatarUrl}/>
            <div>
                <span> 
                    {payment ?
                        <span>{quantity + ' X ' + name} </span> 
                        :
                        <Link to={`/details/${id}`}>{name}</Link>
                        
                    } 
                    
                    
                    {payment &&
                        <Value> { 'R$ ' + subtotalAmout }</Value>
                    }
                </span>
                <button onClick={deleteOrderDetails}>Remover</button>
            </div>
        </Container>
    )
}