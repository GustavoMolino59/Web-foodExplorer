import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
    height:100%;
    >span{
        font-weight: Medium;
        font-size: 1.5rem;
        color: ${({theme}) => theme.colors.LIGHT_300};
        display:block;
        padding:2rem;
    }

`
export const Main = styled.div`
    width:100%;
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        padding:0 6.2rem;
    }
    
`

export const Banner = styled.div`
    background:linear-gradient(180deg, ${({theme}) => theme.colors.GRADIENT_200}, hsla(200, 100%, 5%, 1));
    display:flex;
    align-items:center;
    justify-content:right;
    margin: 10rem 0 5.26rem 0 ;
    height: 17.33rem;
    border-radius:2.92px;
    position:relative;
    >div {
        margin-top:1.25rem;
        margin-right:1.25rem;
        >h2{
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 2.0rem;
        }
    
    
        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            margin-top:1.25rem;
            margin-left:12.75rem;
            >h2{
                font-size: 1.3rem;
            }
        }
        
    }
    

    >img{
        position:absolute;
        top:-2rem;
        left:-2.5rem;
        width:25rem;
        height: 19.3rem;
        overflow-y: hidden;
        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        top:-4rem;
        left:-2.5rem;
        width:15.9rem;
        height:12.4rem;
        }
       
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            margin: 6rem 1rem 5.26rem 1.87rem ;
            height: 8.57rem;
        }
    

    
`
export const Section = styled.section`
    height:24.33rem;
    display:flex;
    padding-left:2rem;
`