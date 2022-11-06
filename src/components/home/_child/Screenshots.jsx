import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { Pagination } from "swiper"
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import ReactModal from 'react-modal'

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

    const [image, setImage] = useState(null)
    const [isModalActive, setIsModalActive] = useState(false)

    const closeModal = () => {
        setIsModalActive(false)
    }

    const openModal = () => {
        setIsModalActive(true)
    }

    const setImageModal = (img) => {
        setImage(img)
        openModal()
    }

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
                                autoplay={{
                                    delay: 2000
                                }}
                            >
                                {
                                    screens.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <a className="popup-link" data-effect="fadeIn">
                                                    <img className="img-fluid" src={item.image} alt="alternative" onClick={() => setImageModal(item.image)}/>
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
            <ReactModal
                isOpen={isModalActive}
                onRequestClose={closeModal}
                className="reactModal2"
                overlayClassName="modalOverlay"
                closeTimeoutMS={500}
                ariaHideApp={false}
            >
                <div className="d-flex justify-content-center align-items-center zindex-modal">
                    <div className="close">
                        <p onClick={() => closeModal()}>&times;</p>
                    </div>
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                </div>
            </ReactModal>
        </>
    )
}
