import styled from "styled-components";


export const Container = styled.div`
    height: 32px;
    background-color: ${({ isnew, theme }) => (isnew ? 'transparent' : theme.colors.LIGHT_600)};
    border-radius:0.66rem;
    border: ${({ isnew, theme }) => (isnew ?'1px dashed #7C7C8A'  : "none")};
    display:flex;
    align-items:center;
    justify-content:center;
    padding:0.66rem 1.33rem;
    
    width: max-content;
    >input{
        color:${({theme}) => theme.colors.LIGHT_100};
        font-family: 'Roboto', sans-serif;
        font-size:1rem;
        background:transparent;
        border:none;
        width:${props => (props.width > 25 || props.width < 1.41 ? 6.66: props.width)}rem;
        &::placeholder{
            visibility:${props => (props.isnew? 'visible': 'hidden')};
           
            font-family: 'Roboto', sans-serif;
            font-size:1.33rem;

        }
    }
    >button{
        color:${({theme}) => theme.colors.LIGHT_100};
        background:transparent;
        border:none;
        display:flex;
        align-items:center;
        justify-content:center;
        >svg{
        font-size:13px
    }
    }
    
`