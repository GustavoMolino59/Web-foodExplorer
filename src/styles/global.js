import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    :root {
        font-size: 20px;  /* Tamanho padrão para dispositivos XL */

        @media (max-width: 1280px) {
            font-size: 18px;  /* Tamanho para dispositivos LG */
        }

        @media (max-width: 1024px) {
            font-size: 16px;  /* Tamanho para dispositivos MD */
        }

        @media (max-width: 767px) {
            font-size: 12px;  /* Tamanho para dispositivos SM */
        }

        @media (max-width: 400px) {
            font-size: 12px;  /* Tamanho para dispositivos XS */
        }
    }

    body{
        background-color: ${({theme}) => theme.colors.DARK_400};
        color: ${({theme}) => theme.colors.LIGHT_300};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        outline:none;
    }

    a{
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #202024;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color:  ${({theme}) => theme.colors.DARK_400};
  }
`
