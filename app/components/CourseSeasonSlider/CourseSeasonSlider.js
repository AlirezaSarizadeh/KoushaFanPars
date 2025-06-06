'use client'
import React from 'react';
import { Card } from 'react-bootstrap';
import CourseSeasonCard from '../CourseSeasonCard/CourseSeasonCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
import './courseSeasonSlider.css'

const CourseSeasonSlider = () => {
    return (
        <div className='text-center '>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    250: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                autoplay={{
                    delay: 2000,
                }}
                modules={[Autoplay]}
                className="mySwiper courseSeasonSlider"
            >
                <SwiperSlide>
                    <Link href={'/'}>
                        <CourseSeasonCard />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'}>
                        <CourseSeasonCard />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'}>
                        <CourseSeasonCard />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'}>
                        <CourseSeasonCard />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'}>
                        <CourseSeasonCard />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={'/'}>
                        <CourseSeasonCard />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CourseSeasonSlider;