import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
export const Container = styled.div`
    display:flex;
    flex-direction:column;
    min-height: 100vh;
`


export const Main = styled.main`
    margin-top:4.6rem;
    margin-left:2.91rem;
    margin-bottom:4.6rem;
    display:flex;
    flex-direction:column;
    gap:2.25rem;
    flex-grow:1;

    >h1{
        font-weight:500;
        color: ${({theme}) => theme.colors.LIGHT_300};
        font-size:32px;
    }
    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
        margin-top:2.1rem;
        margin-left:7.68rem;
        margin-right:10rem;
        gap:3rem;
    }
`
export const Favorites = styled.div`
    display:flex;
    flex-direction:column;
    gap:2.25rem;
    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
        flex-direction:row;
        flex-wrap: wrap;
    }
`