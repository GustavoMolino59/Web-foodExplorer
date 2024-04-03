import { Container, Main, Tags, AmountWrapper,Amount, Data } from './styles.js'
import { CaretLeft, Minus, Plus, Receipt } from '@phosphor-icons/react'

import { Header } from '../../components/header/index.jsx'
import { SideMenu } from '../../components/sidemenu/index.jsx'
import { ButtonText } from '../../components/buttonText/index.jsx'
import { Tag } from '../../components/tags/index.jsx'
import { Footer } from '../../components/footer/index.jsx'
import {Button} from '../../components/button'
import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/auth.jsx'
import { api } from '../../services/api.js'
import { useParams, Link } from 'react-router-dom'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { USER_ROLE } from '../../utils/roles.js'
import { useOrders } from '../../hooks/orderCount.jsx'
export function Details(){
    const{user} = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const params = useParams()
    const[data, setData] = useState(null)
    const[avatarUrl, setAvatarURL] = useState(avatarPlaceholder  )

    //pedido
    const [numItens, setNumItens] = useState(1)
    const { handleOrders } = useOrders();

    useEffect(()=>{
        async function fetchMeal(){
            const response = await api.get(`/meal/${params.id}`)
            setData(response.data)
            {data.meal.avatar &&setAvatarURL(data.meal.avatar)}
            
        }
        fetchMeal()
    }, [params])

    function addItem(){
        setNumItens(numItens + 1);
    }

    function removeItem(){
        setNumItens(numItens - 1);
    }

    async function setMealInOrder(){
        await api.post("/orders/", {"meal_id": data.meal.id, "quantity":numItens})
        alert("Item adicionado no carrinho")
        handleOrders(data.meal)
    }
    return(
        <Container>
            <SideMenu menuIsOpen={isMenuOpen} onCloseMenu={() => setIsMenuOpen(false)}/>

            <Header menuIsOpen={() => setIsMenuOpen(true)}/>
            <div class="button-back-wrapper">
                    <ButtonText icon1={CaretLeft} target="/" title="Voltar"/>
            </div>
            {data &&
                <Main>
                    
                    <img src={avatarUrl}/>
                    <Data>
                        <h2>{data.meal.name}</h2>
                        <p>{data.meal.description}</p>
                        <Tags>
                        { data.tags &&
                                data.tags.map(tag => 
                                    (<Tag key={String(tag.id)} title={tag.title}/>)
                                )
                            
                            }

                        </Tags>
                        <AmountWrapper>
                        <Amount>
                        {[USER_ROLE.COSTUMER].includes(user.role) && 
                            <div>
                                <button onClick={removeItem}>
                                    <Minus/>
                                </button>
                                <span>{numItens}</span>
                                <button onClick={addItem}>
                                    <Plus/>
                                </button>
                            </div>
                            }
                            </Amount>
                            {[USER_ROLE.COSTUMER].includes(user.role) && 
                                
                                <Button title={"Pedir ∙ " + data.meal.price + " R$"} icon={Receipt} onClick={setMealInOrder}/>
                            }
                            {[USER_ROLE.ADMIN].includes(user.role) && 
                                <Link to={`/edit/${params.id}`}>
                                    <Button title={"Editar"} icon={Receipt}/>
                                </Link>
                            }
                        </AmountWrapper>
                    </Data>
                </Main>
            }
            <Footer/>
        </Container>
    )
}