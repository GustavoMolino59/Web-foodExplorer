import styled from "styled-components";

export const Container = styled.button`
    width:100%;
    min-height: 3.5rem;
    background-color:${({theme}) => theme.colors.TOMATO_100};
    color: ${({theme}) => theme.colors.LIGHT_100};
    border:none;
    border-radius:0.3rem;
    flex-grow: 1;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:4px;
`