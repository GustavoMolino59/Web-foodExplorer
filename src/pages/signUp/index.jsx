import { Container, Main, Form, FormWrapper} from './styles.js'

//components
import {Logo} from '../../components/Logotipo'
import { Input} from '../../components/input'
import { Button } from '../../components/button'
import { ButtonText } from '../../components/buttonText/index.jsx'

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth.jsx'
import { useState } from 'react'
import { api } from '../../services/api.js'
export function SignUp(){
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate();

    async function handleSignUp(){
        try{
            const response = await api.post("/users", {name, email, password})
            alert("usuário cadastrado com sucesso")
            navigate(-1)
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível conectar")
            }
        }
    }

    return(
        <Container>
            <Main>
                <Logo size='1'/>
            <FormWrapper>
                <Form>
                    <h2>Crie sua conta</h2>
                    <Input id="Name" text="Seu Nome" placeholder="Exemplo: Maria da Silva"
                    onChange={e => setName(e.target.value)}/>
                    <Input id="Email" text="Email" placeholder="Exemplo: exemplo@email.com.br"
                    onChange={e => setEmail(e.target.value)}/>
                    <Input id="Password" text="Senha" placeholder="No mínimo 6 caracteres"
                    onChange={e => setPassword(e.target.value)}/>
                    <Button title="Entrar" onClick={handleSignUp}/>
                    <ButtonText target="/cadastrar" title="Criar uma conta"/>
                </Form>
            </FormWrapper>
            </Main>
        </Container>
    )
}