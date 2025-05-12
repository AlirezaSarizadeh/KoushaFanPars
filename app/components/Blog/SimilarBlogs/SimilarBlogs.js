'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './similarBlogs.css'
import Image from 'next/image'
import images from '@/app/public/assets/images'
import Link from 'next/link'
import { Card } from 'react-bootstrap';
import EvenetCard from '../../EvenetCards/EvenetCard';
import { Autoplay, Pagination } from 'swiper/modules';
import Title from '../../utils/title/Title';

const SimilarBlogs = (props) => {
    const swiperRef = useRef(null); // Reference to the Swiper container
    const swiperInstance = useRef(null); // Store Swiper instance for manual control

    return (
        <div className='row p-lg-4 p-3 mb-lg-3 mb-2'>
            <div className='col-12 mb-lg-5 mb-3'>
                <Title title={'مقالات مشابه'} />
            </div>
            <div className='col-lg-12 d-flex flex-column justify-content-start align-items-start gap-2'>
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        stopOnLastSlide: false,
                        waitForTransition: true,
                    }} // Always define autoplay with defaults
                    modules={[Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        1500: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                    }}
                >
                    <SwiperSlide style={{ borderRadius: '40px' }}>
                        <EvenetCard />
                    </SwiperSlide>
                    <SwiperSlide style={{ borderRadius: '40px' }}>
                        <EvenetCard />
                    </SwiperSlide>
                    <SwiperSlide style={{ borderRadius: '40px' }}>
                        <EvenetCard />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SimilarBlogs;