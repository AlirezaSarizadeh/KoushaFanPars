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
        <div className='text-center'>
            <h4 className='fs-2 mb-lg-5 mb-3 fw-regular'>
                نظرات مشاهده کننده ها
            </h4>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000, // 3 seconds
                    disableOnInteraction: false, // keeps autoplay running even after user interaction
                  }}
                  loop={true}
                className="mySwiper courseSeasonSlider"
            >
                <SwiperSlide>
                    <Link href={'/'}>
                        <TestimonialCard />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'}>
                        <TestimonialCard />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'}>
                        <TestimonialCard />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'}>
                        <TestimonialCard />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'}>
                        <TestimonialCard />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'}>
                        <TestimonialCard />
                    </Link>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default TestimonialSlider
