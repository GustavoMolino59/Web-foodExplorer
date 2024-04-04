import { Container, Banner, Section, Main} from './styles.js'
import banner from '../../assets/banner.png'
//components
import { Header } from '../../components/header/index.jsx'
import { Meal } from '../../components/meal/index.jsx'
import { Carrosel } from '../../components/swiper/index.jsx'
import { Footer } from '../../components/footer/index.jsx'
import { SideMenu } from '../../components/sidemenu/index.jsx'

//uses
import { useState, useEffect } from 'react'
import {api} from '../../services/api.js'
export function Home(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [meals, setMeals] = useState([])
    useEffect(() =>{
        async function fetchMeals(){
            try{
                const response = await api.get("/meal")
                const meals = response.data;
                setMeals(meals)
            }catch(error){
                if(error.response){
                    alert(error.response.data.message)
                }else{
                    alert("Não foi possível conectar")
                }
            }
            //meals.map(meal => (<Meal key={String(meal.id)} meal_name={meal.name}/>))
        }
        fetchMeals()
    }, [])
    
    return(
        
        <Container>
            <SideMenu menuIsOpen={isMenuOpen} onCloseMenu={() => setIsMenuOpen(false)}/>

            <Header menuIsOpen={() => setIsMenuOpen(true)}/>
            <Main>
                <Banner>
                    <img src={banner}/>
                    <div>
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </Banner>
                
                <span>Refeições</span>
                <Section>
            
                <Carrosel meals={
                        meals
                        .filter(meal => meal.categoria === "Refeição")
                        .map(meal => (
                          <Meal key={String(meal.id)} meal={meal} />
                        )) 
                    }>
                </Carrosel>
                </Section>
                <span>Pratos Principais</span>
                <Section>
            
                <Carrosel meals={
                    meals
                    .filter(meal => meal.categoria === "Prato")
                    .map(meal => (
                      <Meal key={String(meal.id)} meal={meal} />
                    ))
                        
                } keys={meals.map(meal => (meal.id))}>
                </Carrosel>
                </Section>
                <span>Sobremesas</span>
                <Section>
            
                <Carrosel meals={
                        meals
                        .filter(meal => meal.categoria === "Sobremesa")
                        .map(meal => (
                          <Meal key={String(meal.id)} meal={meal} />
                        ))
                }>
                </Carrosel>
                </Section>
            </Main>
            <Footer/>
        </Container>
    )
}