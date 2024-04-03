import styled from "styled-components";

export const Container = styled.div`
   height:100%;
   width:100%;
   position:fixed;
   transition:transform .3s ease-in-out;
   transform:translateX(-100%);
   z-index:3;
   background-color:${({theme}) => theme.colors.DARK_400};

    &[data-menu-is-open='true']{
        transform:translateX(0);
    }
    
`

export const Header = styled.div`
   background-color:${({theme}) => theme.colors.DARK_700} ;
   height: 9.5rem;
   

   display:flex;
   align-items:end;
   justify-content:left;

   padding-left:2.33rem;
   padding-bottom:2rem;
`
export const Main = styled.main`
   height:100%;
   margin:3rem 2.33rem;
   display:flex;
   flex-direction:column;
   gap: 3rem;
`

export const Nav = styled.nav`
    font-weight: lighter;
    font-size:2rem;
    display:flex;
    flex-direction:column;
    align-items:start;
    >div{
        width:100%;
        border-bottom:solid ${({theme}) => theme.colors.DARK_1000} 1px;
        >a{
            justify-content:left;
        }
    }
    

`
export const CloseMenu = styled.button`
    font-size: 1.76rem;
    font-family: "Roboto", sans-serif;
    background: transparent;
    border:none;
`
export const Search = styled.div`
    width:100%;
    .results-data:focus{
        display:block;
    }
    .empty-data{
        display:none;
    }
`
export const Result = styled.div`
    width:max-content;
    padding:1rem;
    position:absolute;
    z-index: 3;
    background-color:${({theme}) => theme.colors.DARK_1000};
    border-radius: 0.8rem;
`