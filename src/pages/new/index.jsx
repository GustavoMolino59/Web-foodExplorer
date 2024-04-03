import { Container, Main, Tags, Form, Avatar,TagsWrapper } from "./styles";
import {Upload, CaretLeft, CaretDown} from '@phosphor-icons/react'

//Components
import { Header } from "../../components/header";
import { SideMenu } from "../../components/sidemenu";
import { Input } from "../../components/input";
import {Dropdown} from '../../components/dropdown'
import { ButtonText } from "../../components/buttonText";
import { MealItem } from "../../components/mealItem";
import { TextArea } from "../../components/textArea";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { Footer } from "../../components/footer";

import { useNavigate } from "react-router-dom";
import {useAuth} from '../../hooks/auth'
import { api } from "../../services/api";
export function New(){
    const[newTag, setNewTag] = useState("")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const[name, setName] = useState()
    const[description, setDescription] = useState('')
    const[categoria, setCategoria] = useState('')
    const[price, setPrice] = useState('')
    const[tags, setTags] = useState([])
    
    //AVATAR
    const {updateProfile, user} = useAuth()
    const[avatarFile, setAvatarFile] = useState(null) //avatar file é o nome do arquivo pra passar pro banco de dados


    function handleAddTag(){
        setTags((prevState => [...prevState, newTag]))
        setNewTag("")
        
    }
    function handleRemoveTag(element){
        setTags(prevState => prevState.filter(tag => tag !== element))
    }
    function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file);
    }
    

    async function handleUpdate(){
        try{
            const response = await api.post('/meal/', {name, description, categoria, price, tags, "avatar":""})
            if(avatarFile){
                const fileUploadForm = new FormData() //Classe utilizado para conjunto chave:valor usada pra enviar fomulario e upload
                fileUploadForm.append("avatar", avatarFile) //Adiciona a chave/valor avatar: avatar file
                const response2 = await api.patch(`/meal/avatar/${response.data}`, fileUploadForm) //Faz o upload
                //Pega o local onde foi armazenado o file e passa para user avatar
            }
            alert('Refeição Salva com sucesso')
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
            <SideMenu menuIsOpen={isMenuOpen} onCloseMenu={() => setIsMenuOpen(false)}/>

            <Header menuIsOpen={() => setIsMenuOpen(true)}/>
            <Main>
                <div className="button-back-wrapper">
                    <ButtonText icon1={CaretLeft} target="/" title="Voltar"/>
                </div>
                <h2>Novo Prato</h2>
                <Form >
                    <div>
                        <div className='wrapper'>
                        <span>Imagem do prato</span>
                        <Avatar>
                            <label htmlFor="meal-imagem">
                                <Upload/>
                                Selecione a imagem
                                <input id='meal-imagem' type='file' onChange={handleChangeAvatar}/>
                            </label>
                        </Avatar>
                        </div>
                        <Input id='input-name' text='Nome' placeholder='Ex:Salada Ceasar' onChange={e => setName(e.target.value)}/>

                        <Dropdown icon={CaretDown} text={'Categoria'} itens={['Refeição', 'Prato', 'Sobremesa']} setCategoria={setCategoria}/>
                    </div>
                    <div className='wrapper'>
                        <TagsWrapper >
                            <span>Ingredientes</span>
                            <Tags>
                                <MealItem value={newTag} isnew={true} setNewTag={setNewTag} onClick={handleAddTag}/>
                                {tags && 
                                tags.map((tag, index) =>(
                                    <MealItem key = {index} value={tag} isnew={false} onClick={() => handleRemoveTag(tag)}/>
                                ))}
                                
                                
                            </Tags>
                        </TagsWrapper>
                        <Input className='input-price' id='input-price' text='Preço' placeholder='R$ 00,00' onChange={e => setPrice(e.target.value)}/>
                    </div>
                    <TextArea id='input-description' text='Descrição' placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' onChange={e => setDescription(e.target.value)}/>

                </Form>
                <Button title={'Salvar alterações'} onClick={handleUpdate}/>
            </Main>
            <Footer/>
        </Container>
    )
}