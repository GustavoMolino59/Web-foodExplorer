import { Container, DropdownButton, DropdownMenu } from './styles.js'
import { useEffect, useState } from 'react'

export function Dropdown({icon:Icon, item_id, value, text, itens, setCategoria, ...rest}){
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState("")
    function select(item){
        setSelected(item)
        if(item_id){
            setCategoria(item, item_id)
        }
        else{
            setCategoria(item)
        }
        setIsOpen(false)
    }
    useEffect(()=>{
        setSelected(value)
    },[value])
    return(
        <Container { ...rest}>
            <label >{text}</label>
            <DropdownButton onClick={(e)=>{e.preventDefault();setIsOpen(!isOpen)}}>{selected===''?'Selecione uma categoria':selected}{Icon && <Icon size={20}/>} </DropdownButton>
            
            <DropdownMenu data-display={isOpen}>
                {
                    itens.map((item) => {
                        return(<button onClick={(e) =>{e.preventDefault(); select(item)}}>{item}</button>)
                    })
                }
                
            </DropdownMenu>
        </Container>

    )
}