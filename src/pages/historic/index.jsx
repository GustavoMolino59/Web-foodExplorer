import { Container, Main, Table, Linha, Cabecalho, Coluna, Mobile, Order, Status} from "./styles";
import { Circle } from "@phosphor-icons/react";
import {Header} from '../../components/header'
import { SideMenu } from "../../components/sidemenu";
import {Footer} from '../../components/footer'
import {Dropdown} from '../../components/dropdown'
import { api } from "../../services/api";
import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
export function Historic(){
    const{user} = useAuth()
    const[data, setData] = useState([])
    const[itemNames, setItemNames] = useState({})
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(()=>{
        async function fetchData(){
            const response = await api.get('/orders/')
            setData(response.data)
            fetchNames(response.data)
        }
        fetchData()
        
    }, [])

    async function fetchName(id){
        const response = await api.get(`/meal/${id}`)
        const meal = response.data.meal;
        return meal.name;
    }
    async function fetchNames(data) {
        const names = {};
        for (const meal of data) {
          for (const detail of meal.details) {
            const name = await fetchName(detail.meal_id);
            names[detail.id] = name;
          }
        }
        setItemNames(names);
      }

    async function setStatus(item, order_id){

        const status = item.props.children[1]
        try{
            await api.patch('/orders/',{status, order_id})
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível conectar")
            }
        }
    }
    return(
        <Container>
            <SideMenu menuIsOpen={isMenuOpen} onCloseMenu={() => setIsMenuOpen(false)}/>

            <Header menuIsOpen={() => setIsMenuOpen(true)}/>
            <Main>
                <h1>Histórico de pedidos</h1>
                <Table>
                    <thead>
                        <Linha>
                            <Cabecalho>Status</Cabecalho>
                            <Cabecalho>Código</Cabecalho>
                            <Cabecalho>Detalhamento</Cabecalho>
                            <Cabecalho>Data e hora</Cabecalho>
                        </Linha>
                    </thead>
                    <tbody>
                        {data && 
                        data.map(meal => (
                            <Linha>
                                <Coluna>

                                    {[USER_ROLE.ADMIN].includes(user.role) ?
                                    <div>
                                        <Dropdown 
                                        item_id={meal.id}
                                        value={[
                                            <div>
                                                <Circle weight="fill" className={meal.status}/>
                                                {meal.status}
                                            </div>]} 
                                        itens={[
                                            <div>
                                                <Circle weight="fill" className="open"/>
                                                open
                                            </div>,
                                            <div>
                                                <Circle weight="fill" className="pending"/>
                                                pending
                                            </div>,
                                            <div>
                                            <Circle weight="fill" className="delivered"/>
                                            delivered
                                        </div>
                                        ]}
                                        setCategoria={setStatus}/>
                                    </div>
                                    :
                                    <div>
                                        <Circle  weight="fill" className={meal.status}/> {meal.status}
                                    </div>}
                                </Coluna>
                                <Coluna>{String(meal.id).padStart(8, '0')}</Coluna>
                                <Coluna>
                                {meal.details.map( detail => {
                                    return (
                                        detail.quantity + ' x '+itemNames[detail.id] + ','
                                    )
                                }
                                )}
                                </Coluna>
                                <Coluna>{meal.order_date}</Coluna>
                            </Linha>
                            ))
                        
                        }
                       
                        
                    </tbody>
                </Table>
                <Mobile>
                {data && 
                        data.map(meal => (
                            <Order>
                                <div>
                                    <p>{String(meal.id).padStart(8, '0')}</p>
                                    {[USER_ROLE.COSTUMER].includes(user.role) &&
                                    <Status>
                                        <Circle  weight="fill"className={meal.status}/> {meal.status}
                                    </Status>
                                    }
                                    <p>{meal.order_date}</p>
                                </div>
                                <p>
                                {meal.details.map( detail => {
                                    return (
                                        detail.quantity + ' x '+itemNames[detail.id] + ','
                                    )
                                }
                                )} 
                                </p>
                                {[USER_ROLE.ADMIN].includes(user.role) &&
                                    <Status>
                                        <Dropdown 
                                        item_id={meal.id}
                                        value={[
                                            <div>
                                                <Circle weight="fill" className={meal.status}/>
                                                {meal.status}
                                            </div>]} 
                                        itens={[
                                            <div>
                                                <Circle weight="fill" className="open"/>
                                                open
                                            </div>,
                                            <div>
                                                <Circle weight="fill" className="pending"/>
                                                pending
                                            </div>,
                                            <div>
                                            <Circle weight="fill" className="delivered"/>
                                            delivered
                                        </div>
                                        ]}
                                        setCategoria={setStatus}/>
                                    </Status>
                                    }
                            </Order>
                            ))
                        
                        }
                    
                </Mobile>
            </Main>
            <Footer/>
        </Container>
    )
}