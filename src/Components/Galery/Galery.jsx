import { React, useEffect, useRef } from 'react'
import img from '../../images/banner1.jpg'
import img2 from '../../images/banner2.jpg'
import img3 from '../../images/banner3.jpg'
import './Galery.css'
import { Link as Anchor } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

export default function Galery() {
    const swiperRef = useRef(null);
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const imgs = [
        img, img2, img3, img, img2, img3,
    ]
    return (
        <div className='galeryContain'>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                autoplay={{ delay: 3000 }}

                onSwiper={(swiper) => {
                    console.log(swiper);
                    swiperRef.current = swiper;
                }}
            >
                {
                    imgs.map((item) => (
                        <SwiperSlide id={"swiperCardGalery"}>

                            <SwiperSlide   >
                                <Anchor to={`/tienda-de-usados`}>
                                    <img src={item} alt="" />
                                </Anchor>
                            </SwiperSlide>

                        </SwiperSlide>

                    ))
                }
            </Swiper>



        </div>
    )
}
