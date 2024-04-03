import styled from "styled-components";

export const Container = styled.div`
    width:max-content;
    display:flex;
    >h1{
        white-space:nowrap; 
        color:${({theme}) => theme.colors.LIGHT_100};
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: ${props => props.size === '1'? '2.21rem' : '1.31rem'};
    }
    >svg{
        width:${props => props.size === '1'? '2.68rem' : '1.5rem'};
        
    }
    gap: 11px;
    align-items:center;
    justify-content:center;
    
`