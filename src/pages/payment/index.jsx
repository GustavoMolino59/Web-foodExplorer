import { Container, Main, Order, PaymentMethods,Title, PaymentDiv,Types, Form, ButtonMethod} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPix } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { Receipt } from "@phosphor-icons/react";

import {Header} from '../../components/header'
import { SideMenu } from "../../components/sidemenu";
import {Footer} from '../../components/footer'
import { FavMeal } from '../../components/FavMeal'
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import qrCode from '../../assets/qrcode.png'
import waitingPayment from '../../assets/waiting-payment.png'
import paymentAccept from '../../assets/payment-accept.png'
import { useState, useEffect } from "react";
import { useOrders } from "../../hooks/orderCount";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
export function Payment(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const{orders} = useOrders()
    const [onPixActive, setPixActive] = useState(true)
    const [onAdvanced, setOnAdvanced] = useState(false)
    const[data, setData] = useState(null)
    const[order, setOrder] = useState([])
    const[creditCard, setCreditCard] = useState("")
    const [CVV, setCVV] = useState("")
    const[validity, setValidity] = useState("")
    
    //pagamento
    const[paymentSent, setPaymentSent]= useState(false)
    const[paymentAccepted, setPaymentAccepted] = useState(false)
    useEffect(()=>{
        async function fetchOrder(){
            try{
                const response = await api.get("/payment")
                
                setData(response.data);
                setOrder(response.data.order);
            }catch(error){
                if(error.response){
                    alert(error.response.data.message)
                }else{
                    alert("Não foi possível conectar")
                }
            }
        }
        fetchOrder()
    }, [order, ])

    async function handlePayment(){
        setPaymentSent(true)
        try{
            const response = await api.patch('/payment/', {creditCard,CVV,validity })
            
            setPaymentAccepted(true)
            
        }
        catch(error){
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
            <Main isAdvanced={onAdvanced}>

                <Order isAdvanced={onAdvanced}>
                    <Title>Meu Pedido</Title>

                    {(data && data.paymentData) ? 
                        data.paymentData.map(detail => (
                            <FavMeal key={detail.id} id={detail.id} name={detail.meal[0].name} avatar={detail.meal[0].avatar}subtotalAmout={detail.subtotal_amount} quantity={detail.quantity} payment={true}/>
                        ))
                        :
                        <span>carregando...</span>
                    }

                    {
                    (order && order[0] && order[0].total_amount) ?
                        <span>{'Total: R$ ' + order[0].total_amount }</span>
                        :
                        <div>
                            <span>Total: 0 R$</span>
                        </div>
                    }

                </Order>
                
                <Button id='advance-button' isAdvanced={onAdvanced} title={onAdvanced ? 'Voltar' : 'Avançar'} onClick = {() => setOnAdvanced(!onAdvanced) } />

                <PaymentMethods isAdvanced={onAdvanced}>
                    <Title>Pagamento</Title>
                    <PaymentDiv>
                        <Types>
                            <ButtonMethod id='button-pix' isactive={onPixActive}>
                                <button onClick={() => setPixActive(true)} >
                                    <FontAwesomeIcon icon={faPix} />
                                     PIX
                                </button>
                            </ButtonMethod>
                            <ButtonMethod id='button-credit-card' isactive={!onPixActive}>
                                
                                <button onClick={() => setPixActive(false) }>
                                    <FontAwesomeIcon icon={faCreditCard} />
                                    Crédito
                                </button>
                            </ButtonMethod>
                        </Types>
                        <Form isactive={onPixActive} paymentSent={!paymentSent}>
                            
                            <img src={qrCode} className="qrcode-payment "/>
                            

                            <div className="credit-card ">
                                <Input  className='input-credit-card ' text={'Número do cartão'} placeholder='0000 0000 0000 0000' maxlength="16"onChange={e => setCreditCard(e.target.value)} />
                                <div className="creditCard-data ">
                                    <Input className='input-credit-card ' text={'Validade'} placeholder='04/25' maxlength="5"onChange={e => setValidity(e.target.value)}/>
                                    <Input className='input-credit-card ' text={'CVC'} placeholder='000' maxlength="3" onChange={e => setCVV(e.target.value)}/>
                                </div>
                                <Button title={'Finalizar Pagamento'} className='button'icon={Receipt} onClick={handlePayment}/>
                            </div>
                        </Form>
                        <Form  paymentSent={paymentSent}>
                            {
                                paymentAccepted ?
                                <img src={paymentAccept} className='payment-process'/>
                                :
                                <img src={waitingPayment}  className='payment-process'/>
                            }
                        </Form>
                    </PaymentDiv>
                </PaymentMethods>
            </Main>
            
            <Footer/>
        </Container>
    )
}