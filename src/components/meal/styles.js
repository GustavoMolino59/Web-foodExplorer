import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.DARK_200};
    width:100%;

    border-radius:0.66rem;
    .img-meal-item{
        position:absolute;
        left:11rem;
        top:1rem;
        font-size: 2rem;
        color:white;
    }
    

`
export const Amount = styled.div`
    display:flex;
    gap:14px;
    align-items:center;
    justify-content:center;

    >button{
        background: none;
        border:none;
        color:${({theme}) => theme.colors.LIGHT_100}
    }
`

export const Main = styled.div`
    display:flex;
    flex-direction:column;
    height: 24.33rem;
    align-items:center;
    justify-content:center;
    padding: 2rem;
    gap:1rem;
    >span{
        color: ${({theme}) => theme.colors.CAKE_200}
    }
    >img{
        width:7.33rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }
    >div{
        display:flex;
        align-items:center;
        justify-content:center;
        
    }
`

export const AmoutWrapper = styled.div`
    gap:5px;
    display: flex;
    width:100%;
    height: 2.66rem;
    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
        max-height:10rem;
        flex-direction:column;
        
    }
`