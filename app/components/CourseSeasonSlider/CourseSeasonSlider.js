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
import './courseSeasonSlider.css'

const CourseSeasonSlider = () => {
    return (
        <div className='text-center '>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[]}
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