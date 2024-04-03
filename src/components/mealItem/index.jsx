import { Container } from "./styles";
import { useEffect, useState } from "react";
import { Plus, X } from "@phosphor-icons/react";
import { Minus } from "@phosphor-icons/react/dist/ssr";

export function MealItem({value, onClick, setNewTag, isnew, ...rest}){
    const [inputValue, setInputValue] = useState(value);
    const [inputWidth, setInputWidth] = useState((value.length + 1) * 12);
    
    const handleChange = (event) => {
        setInputValue(event.target.value);
        setNewTag(event.target.value)
    };

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    useEffect(() => {
        setInputWidth((inputValue.length + 1) * 0.5);
        
    }, [inputValue]);

    return(
        <Container width={inputWidth} isnew={isnew} {...rest}>
            <input value={inputValue} onChange={handleChange} readOnly={!isnew} placeholder='Adicionar'/>
            <button type='button' onClick={onClick}>
                {isnew? <Plus />:<X/>}
           </button>
        </Container>
    )
}