import styled from "styled-components";


export const Container = styled.div`
    bottom:0;
    background-color: ${({theme}) => theme.colors.DARK_600};
    width: 100%;
    height: 77px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    >p{
        font-family: "DM Sans", sans-serif;
        font-size: 12px;
        font-weight: 400;
        color:${({theme}) => theme.colors.LIGHT_200};
    }
    .footer-logo{
        color:${({theme}) => theme.colors.LIGHT_700} !important;
        >svg{
            >path{
                fill:${({theme}) => theme.colors.LIGHT_700} !important;
            }
        }
    }
`