import  { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Container, Slide } from './styles';
import 'swiper/css';
import 'swiper/css/navigation';
import  'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow'
import { useEffect } from 'react';

export function Carrosel({keys, meals, ...rest}){
    
    return(
        <Container
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop = {true}        
            navigation
            effect='coverflow'
            coverflowEffect={{
                rotate: 0,
                stretch: 10,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            initialSlide={0}
            {...rest}
        >
            
            { (meals) ?
                meals.map((meal, index) =>{
                    
                    return(
                        
                    <Slide key={ index}>
                        {meal}
                    </Slide>)
                })
                :
                <span>carregando</span>
            }
        </Container>
    )
}