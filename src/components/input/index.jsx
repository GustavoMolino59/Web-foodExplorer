import { Container, Entry } from "./styles";

export function Input({id, className, icon:Icon, text, ...rest}){
    return(
        <Container className={className} >
            <label htmlFor={id}>{text}</label>
            <Entry>
                {Icon && <Icon size={20}/>} 
                <input id = {id} {...rest} /> 
            </Entry>
            
        </Container>
    )
}