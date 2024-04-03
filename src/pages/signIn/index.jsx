import { Container, Main, Form, FormWrapper} from './styles.js'

//components
import {Logo} from '../../components/Logotipo'
import { Input} from '../../components/input'
import { Button } from '../../components/button'
import { ButtonText } from '../../components/buttonText/index.jsx'
import { useAuth } from '../../hooks/auth.jsx'
import { useState } from 'react'

export function SignIn(){
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const {signIn} = useAuth()

    function handleSign(){
        signIn({email, password});
    }
    return(
        <Container>
            <Main>
            <Logo size='1'/>
            <FormWrapper>
                <Form>
                    <h2>Faça Login</h2>
                    <Input id="Email" text="Email" placeholder="Exemplo: exemplo@email.com.br"
                    onChange={e => setEmail(e.target.value)}/>
                    <Input id="Password" text="Senha" placeholder="No mínimo 6 caracteres"
                    onChange={e => setPassword(e.target.value)}/>
                    <Button title="Entrar" onClick={handleSign}/>
                    <ButtonText target="/cadastrar" title="Criar uma conta"/>
                </Form>
            </FormWrapper>
            </Main>
        </Container>
    )
}