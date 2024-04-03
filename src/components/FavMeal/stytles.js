import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
    
    display:flex;
    gap:13px;
    padding:16px 0;
    align-items:center;
    justify-content:center;
    width:max-content;
    >img{
        width: 72px;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }
    >div{
        display:flex;
        flex-direction:column;
        align-items:start;
        justify-content:left;
        
        >span{
            font-size:20px;
            font-weight:500;
            
            >a{
            text-decoration:none;
            color:${({theme}) => theme.colors.LIGHT_100};
        
        }
            
        }
        >button{
            background:transparent;
            border:none;
            font-family:'Roboto', sans-serif;
            font-size: 12px;
            color: ${({theme}) => theme.colors.TOMATO_400}
        }
    }

`

export const Value = styled.span`
    color: ${({theme}) => theme.colors.LIGHT_400};
    font-size:12px;
    font-family:'Roboto', sans-serif;
    font-weight: 400;
    margin-left: 10px;
`