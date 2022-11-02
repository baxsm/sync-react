import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { Pagination } from "swiper"
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";

export default function Screenshots() {

    SwiperCore.use([Autoplay])

    const screens = [
        {
            image: 'images/screenshot-1.jpg'
        },
        {
            image: 'images/screenshot-2.jpg'
        },
        {
            image: 'images/screenshot-3.jpg'
        },
        {
            image: 'images/screenshot-4.jpg'
        },
        {
            image: 'images/screenshot-5.jpg'
        },
        {
            image: 'images/screenshot-6.jpg'
        },
        {
            image: 'images/screenshot-7.jpg'
        },
        {
            image: 'images/screenshot-8.jpg'
        },
        {
            image: 'images/screenshot-9.jpg'
        },
        {
            image: 'images/screenshot-10.jpg'
        },
    ]

    return (
        <>
            <div id="screens" className="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={5}
                                grabCursor={true}
                                className="slider-container"
                                loop={true}
                                navigation={true} 
                                autoplay={{
                                    delay: 2000
                                }}
                                modules={[Navigation]}
                            >
                                {
                                    screens.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <a className="popup-link" data-effect="fadeIn">
                                                    <img className="img-fluid" src={item.image} alt="alternative" />
                                                </a>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
