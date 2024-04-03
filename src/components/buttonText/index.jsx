import { Container } from "./styles";
import { Link } from "react-router-dom";

export function ButtonText({icon1: Icon1, icon2: Icon2, target,title, ...rest}){
    return(
        <Container {...rest}>
            <Link to={target}>
                {Icon1 && <Icon1 size={20}/>}
                {title}
                {Icon2 && <Icon2 size={20}/>}
            </Link>
        </Container>
    )
}