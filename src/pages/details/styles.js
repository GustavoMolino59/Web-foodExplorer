import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    display:flex;
    flex-direction: column; 
    width:100%;
    .button-back-wrapper {
        width:100%;
        height:2.8rem;
        display:flex;
        align-items: left;
        font-size:24px;
        margin-left:3rem;
    }
`


export const Main = styled.main`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    gap:1.3rem;
    margin:3rem 4.6rem;
    >img{
        width:22rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }
    
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        flex-direction:row;
        .button-back-wrapper{
            width:max-content;
        }
    }
   
    

`
export const Data = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    gap:2rem;
     >h2{
        font-weight: 500;
        font-size:2.25rem;
        text-align:center;
    }
    >p{
        text-align: center;
        font-size:1.33rem;
        font-weight: 400;
        @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
            text-align:center;
        }
    }
`
export const Tags = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    gap:2rem;
    width:100%;
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        
        align-items:start;
        justify-content:left;
    }
`
export const Amount = styled.div`
    display:flex;
    gap:14px;
    align-items:center;
    justify-content:center;
    font-family: 'Roboto';
    font-weight: bold;
    font-size:24px;
    > div{
        display:flex;
        gap:14px;
    }
    >div >button{
        display:flex;
        background: none;
        border:none;
        color:${({theme}) => theme.colors.LIGHT_100};
        font-size:24px;

    }
`
export const AmountWrapper = styled.div`
    gap:5px;
    display: flex;
    width:100%;
    height: 2.66rem;
    align-items:center;
    justify-content:center;
    >a{
        width:100%;
    }
`
