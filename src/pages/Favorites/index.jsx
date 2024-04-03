import { Container, Main, Favorites} from "./styles";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { FavMeal} from '../../components/FavMeal'
import { SideMenu } from "../../components/sidemenu";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
export function Favs(){
    const [favs, setFavs] = useState(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        async function fetchFavorites(){
            const response = await api.get('/favorites/')
            setFavs(response.data)
        }
        fetchFavorites()
    }, [])
    return(
        <Container >
            <SideMenu menuIsOpen={isMenuOpen} onCloseMenu={() => setIsMenuOpen(false)}/>

            <Header menuIsOpen={() => setIsMenuOpen(true)}/>
            <Main>
                <h1>Meus favoritos</h1>
                <Favorites>
                    {favs && 
                        favs.map(fav => (
                            <FavMeal name = {fav.meal.name} id={fav.meal.id} avatar={fav.meal.avatar}/>
                        ))
                    }
                </Favorites>
            </Main>
            <Footer className="footer"/>
        </Container>
    )
}