import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
export const Container = styled.div`
`


export const Main = styled.main`
    margin:0.83rem 2.66rem;
    display:flex;
    flex-direction:column;
    gap:24px;
    
    >h2{
        font-size:2.66rem;
        font-weight:500;
    }
    .button-back-wrapper {
        width:100%;
        display:flex;
        align-items: left;
        font-size:1.37rem;
    }
    >button{
        padding:1rem;
    }
    
    
`


export const Tags = styled.div`
        width:100%;
        flex-wrap:wrap;
        padding:1.3rem;
        border-radius:5px;
        background-color: ${({theme}) => theme.colors.DARK_900};
        display:flex;
        gap:1.33rem;
        @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
            min-height:3rem;
            padding:.25rem 0.5rem;
            align-items:center;
            justify-content:left;
        }
`

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    gap:2rem;
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        flex-direction:row;
        flex-wrap:wrap;
        >div{
            width:100%;
            height:5rem;
            display:flex;
            gap:2rem;
            .input-price{
                width:15.6rem;
            }
        }
    }
    
    
`

export const Avatar = styled.div`
    width:100%;
    display:flex;
    background-color: ${({theme}) => theme.colors.DARK_900};
    padding:1rem 2.6rem;
    border-radius:0.5rem;
    >label{
        display:flex;
        gap: 0.66rem;
        align-items:center;
        justify-content:center;
        font-size:14px;
        >input{
            display:none;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        width:max-content;
        height:3rem;
        padding: 1.33rem 2rem;
    }
`

export const TagsWrapper = styled.div`
    width:100%;
`
export const ButtonWrapper = styled.div`
    display:flex;
    gap:1rem;
    >button:first-child{
        background-color: ${({theme}) => theme.colors.DARK_800}
    }
`
