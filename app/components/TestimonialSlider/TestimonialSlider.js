'use client'
import React from 'react';
import { Autoplay } from 'swiper/modules'; // Swiper v9+ uses 'modules'
import { Card } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const TestimonialSlider = () => {
    return (
        <div className='text-center '>
            <h4 className='fs-2 mb-lg-5 mb-3 fw-regular'>
                نظرات مشاهده کننده ها
            </h4>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            1024: { slidesPerView: 2 },
                            1480: { slidesPerView: 3 },
                            1550: { slidesPerView: 4 }
                        }}
                modules={[Autoplay]}
                autoplay={{
                    delay: 2000, // 3 seconds
                    disableOnInteraction: false, // keeps autoplay running even after user interaction
                }}
                loop={true}
                className="mySwiper courseSeasonSlider"
            >
                <SwiperSlide>
                    <Link href={'/'} className="text-center">
                        <TestimonialCard />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'} className="text-center">
                        <TestimonialCard />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'} className="text-center">
                        <TestimonialCard />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'} className="text-center">
                        <TestimonialCard />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'} className="text-center">
                        <TestimonialCard />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'} className="text-center">
                        <TestimonialCard />
                    </Link>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default TestimonialSlider
