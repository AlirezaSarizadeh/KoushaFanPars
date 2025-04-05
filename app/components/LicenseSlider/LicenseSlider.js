'use client'
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from 'react';
import Title from '../utils/title/Title';
import ProductCard from "../productShow/ProductCard/ProductCard";
import PlaceholderCard from "../PlaceholderCard/PlaceholderCard";
import BlogCard from "../BlogCard/BlogCard";
import LicenseCard from "../LicenseCard/LicenseCard";

const LicenseSlider = ({ bgColor, title, hoverColor }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000); // شبیه‌سازی تأخیر بارگذاری
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {[...Array(1)].map((_, index) => (
                <section key={index} className='py-4 px-5 product-list-container my-lg-3 my-3' style={{ backgroundColor: '#eff6ff' ,borderRadius:'15px' }}>
                    <div className='d-flex align-items-center justify-content-between pb-lg-2 pb-2 w-100'>
                        <Title title={'مجوز ها'} />
                    </div>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        slidesOffsetAfter={150}  // Padding after last slide
                        pagination={{ clickable: true }}
                        className="mySwiper popCours-card"
                    >
                        {isLoaded ? (
                            <>
                                <SwiperSlide style={{ backgroundColor: 'transparent' }}><LicenseCard /></SwiperSlide>
                                <SwiperSlide style={{ backgroundColor: 'transparent' }}><LicenseCard /></SwiperSlide>
                                <SwiperSlide style={{ backgroundColor: 'transparent' }}><LicenseCard /></SwiperSlide>
                                <SwiperSlide style={{ backgroundColor: 'transparent' }}><LicenseCard /></SwiperSlide>
                            </>
                        ) : (
                            <>
                                <SwiperSlide><PlaceholderCard /></SwiperSlide>
                                <SwiperSlide><PlaceholderCard /></SwiperSlide>
                                <SwiperSlide><PlaceholderCard /></SwiperSlide>
                                <SwiperSlide><PlaceholderCard /></SwiperSlide>
                            </>
                        )}
                    </Swiper>
                </section>
            ))}
        </>
    );
}

export default LicenseSlider;
