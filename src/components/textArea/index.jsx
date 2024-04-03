import { Container, Entry } from "./styles";

export function TextArea({id, className, icon:Icon, text, ...rest}){
    return(
        <Container className={className}>
            <label htmlFor={id}>{text}</label>
            <Entry>
                {Icon && <Icon size={20}/>} 
                <textarea id = {id} {...rest} /> 
            </Entry>
        </Container>
    )
}