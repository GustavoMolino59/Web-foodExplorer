import styled from "styled-components";


export const Container = styled.div`
    width:100%;

`

export const Entry = styled.div`
    width:100%;
    background-color: ${({theme}) => theme.colors.DARK_900};
    border-radius:0.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
    padding-left:1rem;
    > input{
        width:100%;
        height:100%;
        border:none;
        padding: 12px;
        background-color:transparent;
        caret-color: black;
        color:${({theme}) => theme.colors.LIGTH_500};
        &:focus::placeholder{
            color:transparent;
        }
        &::placeholder{
            color:${({theme}) => theme.colors.LIGTH_500};
            
        }
       
        color: ${({theme}) => theme.colors.LIGHT_100};
        
    }
    >label{
        margin-left: 2px;
        
        color: ${({theme}) => theme.colors.LIGTH_400};
        font-family: 'Roboto', sans-serif;

    }
`