import { Container } from './styles'
import { Logo} from '../Logotipo'

export function Footer(){
    return(
        <Container>
            <Logo className="footer-logo"/>
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}