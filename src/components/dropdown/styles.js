import styled from "styled-components";

export const Container = styled.div`
    width:100%;
   
    
    
`


export const DropdownButton = styled.button`
    background-color: ${({theme}) => theme.colors.DARK_900};
    border-radius: 5px;
    padding: 1.33rem;
    width:100%;
    border:none;
    color:${({theme}) => theme.colors.LIGHT_400};
    max-height:3rem;
    display:flex;
    justify-content: space-between;
    align-items:center;
    >div{
            display:flex;
            align-items:center;
            justify-content:center;
            gap:1rem;
            margin:1rem;
        }
`

export const DropdownMenu= styled.div`
    display:none;
    background-color: ${({theme}) => theme.colors.DARK_900};
    &[data-display='true']{
        display:flex;
        position:relative;
        flex-direction: column;
        align-items:start;
        justify-content:left;
        z-index:2;
    }
    >button{
        background: transparent;
        width:100%;
        padding: 1.33rem 0;
        border:none;
        border-bottom:solid 1px ${({theme}) => theme.colors.DARK_400};
        color:${({theme}) => theme.colors.LIGHT_400};
        >div{
            display:flex;
            align-items:center;
            justify-content:center;
            gap:1rem;
            margin:1rem;
        }
    }
    
`