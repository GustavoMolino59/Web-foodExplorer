import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
export const Container = styled(Swiper)`
    .swiper-button-prev:after, .swiper-button-next:after{
        color: ${({theme}) => theme.colors.LIGHT_100};
        font-size:1.5rem;
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        .swiper-button-next::after, .swiper-button-prev::after{
            display:none;
            
        }
    }
    .none{
        visibility:hidden;
    }
`


export const Slide = styled(SwiperSlide)`
    width:13rem;
    margin:1px;
`