import styled from "styled-components";


export const Container = styled.div`
    > a{
        color: ${({theme}) => theme.colors.LIGHT_100};
        max-width:10rem;
        display:flex;
        align-items:center;
        justify-content:center;
        word-wrap: break-word;
    }
    

    
`