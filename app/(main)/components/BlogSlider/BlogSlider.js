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

const BlogSlider = ({ bgColor, title, hoverColor }) => {
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
                <section key={index} className='py-lg-4 px-lg-5 px-3 py-3 product-list-container my-lg-3 my-3' style={{ backgroundColor: '#f0f1f2', borderRadius: '15px' }}>
                    <div className='d-flex align-items-center justify-content-between pb-lg-2 pb-2 w-100'>
                        <Title title={'تجربیات شما'} />
                    </div>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        slidesOffsetAfter={150}  // Padding after last slide
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            1024: { slidesPerView: 5 },
                            1480: { slidesPerView: 5 }
                        }}
                        className="mySwiper popCours-card"
                    >
                        {isLoaded ? (
                            <>
                                <SwiperSlide style={{ backgroundColor: '#f0f1f2' }}><BlogCard /></SwiperSlide>
                                <SwiperSlide style={{ backgroundColor: '#f0f1f2' }}><BlogCard /></SwiperSlide>
                                <SwiperSlide style={{ backgroundColor: '#f0f1f2' }}><BlogCard /></SwiperSlide>
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

export default BlogSlider;
