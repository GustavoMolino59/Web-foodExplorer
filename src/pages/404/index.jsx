import { Container } from "./styles";
import { Logo } from "../../components/Logotipo";


export function NotFound(){

    return(
        <Container>
            <Logo/>
            <h1>404 página não encontrada</h1>
        </Container>
    )
}