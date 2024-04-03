import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
`


export const Main = styled.main`
    flex-grow:1;
    margin:2.12rem 7.68rem;
    >h1{
        margin-bottom:2.12rem;
        font-size:32px;
        font-weight:500;
    }
    @media (max-width:${DEVICE_BREAKPOINTS.MD}){
        margin: 4.66rem 2.91rem;
    }

`

export const Table = styled.table`
    border-collapse: separate;
    border-spacing: 0;
    width:100%;
    
    @media (max-width:${DEVICE_BREAKPOINTS.MD}){
        display:none;
    }
    
   
`
export const Linha = styled.tr`
    border: solid 2px ${({theme}) => theme.colors.DARK_1000};
    border-radius:9px;

    >th:first-child{
        border-radius: 8px 0px 0 0;
    }
    >th:last-child{
        border-radius: 0px 8px 0 0;
    }

`

export const Cabecalho = styled.th`
    border: solid 2px ${({theme}) => theme.colors.DARK_1000};
    padding:24px;   
    
`   

export const Coluna = styled.td`
    border: solid 2px ${({theme}) => theme.colors.DARK_1000};
    padding:24px;
    

    .open{
        color:red;
    }
    .pending{
        color:yellow
    }
    .delivered{
        color:green;
    }
    >div{
        display:flex;
        gap:8px;
        align-items:center;
        justify-content:center;
        >svg{
        color:red;
        font-size:16px;
        }
    }
    

`

export const Mobile = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:1.41rem;
    @media (min-width:${DEVICE_BREAKPOINTS.MD}){
        display:none;
    }
`
export const Order = styled.div`
    border:solid 2px ${({theme}) => theme.colors.DARK_1000};
    border-radius:8px;
    padding:8px 20px;
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:left;
    gap:16px;
    >div{
        display:flex;
        gap:31px;
        align-items:center;
        justify-content:center;
    }
    .open{
        color:red;
    }
    .pending{
        color:yellow
    }
    .delivered{
        color:green;
    }
`

export const Status = styled.div`
    display:flex;
    gap:8px;
    align-items:center;
    justify-content:center;
    >svg{
    color:red;
    font-size:16px;
    }

`