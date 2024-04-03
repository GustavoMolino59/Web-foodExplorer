import { Container, Main, Tags, Form, Avatar,TagsWrapper, ButtonWrapper } from "./styles";
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
import { useParams, useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer";

import {useAuth} from '../../hooks/auth'
import { api } from "../../services/api";
export function Edit(){
    const navigate = useNavigate();
    const[newTag, setNewTag] = useState("")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const params = useParams();
    const[name, setName] = useState('carregando')
    const[description, setDescription] = useState('carregando')
    const[categoria, setCategoria] = useState('carregando')
    const[price, setPrice] = useState('carregando')
    const[tags, setTags] = useState([])
    const[data, setData] = useState(null)
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
  
    useEffect(() => {
        if(data){
            setDataValues()
        }
    },[data])
    function setDataValues(){
        setName(data.meal.name)
        setDescription(data.meal.description)
        setCategoria(data.meal.categoria)
        setPrice(data.meal.price)
        const titles = data.tags.map(tag =>{
            return(tag.title)
        })
        setTags(titles)
    }
    useEffect(() => {
        async function fetchMeal(){
            const response = await api.get(`/meal/${params.id}`)
            setData(response.data)
        }
        fetchMeal()
        
    },[])

    async function handleUpdate(){
        try{
            await api.put(`/meal/${params.id}`, {name, description, categoria, price, tags, "avatar":""})
            if(avatarFile){
                const fileUploadForm = new FormData() //Classe utilizado para conjunto chave:valor usada pra enviar fomulario e upload
                fileUploadForm.append("avatar", avatarFile) //Adiciona a chave/valor avatar: avatar file
                const response2 = await api.patch(`/meal/avatar/${params.id}`, fileUploadForm) //Faz o upload
                //Pega o local onde foi armazenado o file e passa para user avatar
            }
            alert('Alterações salvas com sucesso')
            navigate(-1)
            
        }catch(error){
            
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível conectar")
            }
        }
    }

    async function handleRemoveMeal(){
        try{
            
            const confirmDelete = window.confirm('Tem certeza que deseja deletar esse prato?');
            if(confirmDelete){
                await api.delete(`/meal/${params.id}`)
                alert('Prato deletado com sucesso')
                navigate('/')
            }
            
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
                
                <h2>Editar Prato</h2>
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

                        <Input value={name} id='input-name' text='Nome' placeholder='Ex:Salada Ceasar' onChange={e => setName(e.target.value)}/>

                        <Dropdown value={categoria}icon={CaretDown} text={'Categoria'} itens={['Refeição', 'Prato', 'Sobremesa']} setCategoria={setCategoria}/>
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
                        <Input value={price } className='input-price' id='input-price' text='Preço' placeholder='R$ 00,00' onChange={e => setPrice(e.target.value )}/>
                    </div>
                    <TextArea value={description}id='input-description' text='Descrição' placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' onChange={e => setDescription(e.target.value)}/>

                </Form>
                <ButtonWrapper>
                    <Button title={'Excluir prato'}  onClick={handleRemoveMeal}/>
                    <Button title={'Salvar alterações'} onClick={handleUpdate}/>
                </ButtonWrapper>
            </Main>
            <Footer/>
        </Container>
    )
}