import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;

`


export const Main = styled.main`
    flex-grow:1;
    margin:2.12rem 2.12rem 2.12rem 2rem;
    display:flex;
    gap: 12rem;
    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
        margin: 4.66rem 1rem 4rem 1rem;
        gap: 2rem;
        flex-direction:column;
    }
    #advance-button{
        display:none;
        @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
            display:block;
            width:18rem;
            align-self:flex-end;
        }
    }
    
`   
export const Title = styled.span`
    font-size:32px;
    font-weight:500;
`
export const Order = styled.div`
    display:${({isAdvanced}) => isAdvanced? 'none': 'block'};

    >div:first-of-type{
        margin-top:2rem;
    }

`

export const PaymentMethods = styled.div`
    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
    display:${({isAdvanced}) => isAdvanced? 'block': 'none'};
    margin-bottom:2rem;
    }
`


export const PaymentDiv = styled.div`
    border:solid 1px ${({theme}) =>theme.colors.LIGHT_600};
    border-radius:8px;
    
    margin-top:2rem;
`


export const Types = styled.div`
    display:flex;
    >div:first-child{
        border-right:solid 1px ${({theme}) =>theme.colors.LIGHT_600};

    }
    #button-pix{
        border-top-left-radius: 8px;
        
    }
    #button-credit-card{
        border-top-right-radius:8px;
    }
`
export const ButtonMethod = styled.div`
    width:100%;
    border-bottom:solid 1px ${({theme}) =>theme.colors.LIGHT_600};
    background-color: ${({theme, isactive}) => isactive ? theme.colors.DARK_800:theme.colors.DARK_500};

    >button{
        width:100%;
        padding:1.75rem 6.43rem;
        background:transparent;
        border:none;
        color: ${({theme}) =>theme.colors.LIGHT_100};
        display:flex;
        align-items:center;
        justify-content:center;
        gap:8px;
        @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
            padding:12px 14px
        }
    }
`
export const Form = styled.form`
    display:${({paymentSent}) => paymentSent ? 'block':'none'};
    flex-direction:column;
    gap:2.1rem;
    align-items:center;
    justify-content:center;
    padding: 2.93rem 8.125rem;
    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
            padding:4.75rem 2.25rem;
        }

    .payment-process{
        display:block;
    }
    >img{
        
        display:${({isactive}) => isactive ? 'block':'none'};
        

        @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
            
            aspect-ratio: 1/1;
            width:14rem;
        }
    }
    
    .creditCard-data{
        display:flex;
        gap:1rem;
    }
    .input-credit-card >div{
        background-color:transparent;
        border:solid 1px ${({theme}) =>theme.colors.LIGHT_100};
    }
    .credit-card{
        display:${({isactive}) => isactive ? 'none':'flex'};
        flex-direction:column;
        gap:2.1rem;
        align-items:center;
        justify-content:center;
    }

    
`