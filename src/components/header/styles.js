import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
export const Container = styled.header`
    background-color:${({theme}) => theme.colors.DARK_700};
    height:7.12rem;
    padding:3.5rem  1.5rem 1.5rem 1.75rem;

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
        padding: 1.75rem 3rem;
    }
`   
export const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height: 2.4rem;
    >div{
        > a{
            font-family:'Roboto', sans-serif;
            font-size:16px;
            font-family: 100;
            white-space: nowrap;
        }
    }
    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
        justify-content:space-around;
        gap: 1.5rem;
    }
    
    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
        .search-desktop, .orders-desktop, .header-button-text{
            display:none;
           
        }
        justify-content:center;
        
    }
    >svg{
        font-size:6rem;
        
    }
    
    
    
`
export const Menu = styled.button`
    background: none;
    color: ${({theme}) => theme.colors.LIGHT_100};
    border:none;
    position:absolute;
    left:2rem;
    >svg{
        font-size:2rem;
    }
    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
        display:none;
    }
`

export const OrdersMob = styled.button`
    background: none;
    color: ${({theme}) => theme.colors.LIGHT_100};
    border:none;
    position:absolute;
    right:2rem;
    >svg{
        font-size:2rem;
        
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
        display:none;
    }
`


export const NumOrders = styled.div`
    background-color:${({theme}) => theme.colors.TOMATO_100};
    border-radius:50%;
    width:1.66rem;
    aspect-ratio: 1/1;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:-0.6rem;
    right:-0.6rem;
    >a{
        color:${({theme}) => theme.colors.LIGHT_100};
    }
`

export const OrderDesk = styled.div`
    width:50%;
    height:3.5rem;
`

export const Brand = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    
    gap: 8px;
    >p{
        font-size:0.85rem;
        color:${({theme}) => theme.colors.CAKE_200}
    }
    
`

export const Search = styled.div`
    width:100%;
    .results-data:focus{
        display:block;
    }
    .empty-data{
        display:none;
    }
`

export const Result = styled.div`
    width:max-content;
    padding:1rem;
    position:absolute;
    z-index: 3;
    background-color:${({theme}) => theme.colors.DARK_1000};
    border-radius: 0.8rem;
`