import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    height:100vh;
    display:flex;
    align-items:center;
`

export const Main = styled.main`
    width:100%;
    
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    gap:15rem;
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        
        flex-direction:column;
        gap:0;
    }
    
`

export const Form = styled.form`
    display:flex;
    flex-direction: column;
    height:max-content;
    gap:2rem;
    >h2{
        font-weight:500;
        font-size:2rem;
    }
    >button{
        padding:1rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        >h2{
            display:none;
        }
        padding:0;
        background:none;
        
    }
`   

export const FormWrapper = styled.div`
    background-color:${({theme}) => theme.colors.DARK_700};
    
    width:29rem;
    border-radius:1rem;
    padding:1rem 4rem;
    align-items:center;
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        background:none;
        margin-top:6rem;
        padding:0 4rem;
    }
`