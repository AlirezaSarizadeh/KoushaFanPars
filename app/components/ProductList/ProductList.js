'use client'
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from 'react';
import './productList.css';
import Title from '../utils/title/Title';
import ProductCard from "../productShow/ProductCard/ProductCard";
import PlaceholderCard from "../PlaceholderCard/PlaceholderCard";

const ProductList = ({ bgColor, title , hoverColor}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000); // شبیه‌سازی تأخیر بارگذاری
        return () => clearTimeout(timer);
    }, []);

    // Convert HEX color to RGBA with 50% opacity
    const getRGBAColor = (hex, opacity) => {
        let r = parseInt(hex.substring(1, 3), 16);
        let g = parseInt(hex.substring(3, 5), 16);
        let b = parseInt(hex.substring(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    const bgStyle = { backgroundColor: getRGBAColor(bgColor, 0.2) };

    return (
        <>
            {[...Array(1)].map((_, index) => (
                <section key={index} className='py-4 px-5 product-list-container my-lg-5 my-3' style={{ backgroundColor: getRGBAColor(bgColor, 0.2) }}>
                    <div className='d-flex align-items-center justify-content-between pb-lg-2 pb-2 w-100'>
                        <Title title={title} />
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
                                <SwiperSlide style={{ backgroundColor: getRGBAColor(bgColor, 0.0) }}><ProductCard hoverColor={hoverColor} bgColor={getRGBAColor(bgColor, 0.0)} /></SwiperSlide>
                                <SwiperSlide style={{ backgroundColor: getRGBAColor(bgColor, 0.0) }}><ProductCard hoverColor={hoverColor} bgColor={getRGBAColor(bgColor, 0.0)} /></SwiperSlide>
                                <SwiperSlide style={{ backgroundColor: getRGBAColor(bgColor, 0.0) }}><ProductCard hoverColor={hoverColor} bgColor={getRGBAColor(bgColor, 0.0)} /></SwiperSlide>
                                <SwiperSlide style={{ backgroundColor: getRGBAColor(bgColor, 0.0) }}><ProductCard hoverColor={hoverColor} bgColor={getRGBAColor(bgColor, 0.0)} /></SwiperSlide>
                                <SwiperSlide style={{ backgroundColor: getRGBAColor(bgColor, 0.0) }}><ProductCard hoverColor={hoverColor} bgColor={getRGBAColor(bgColor, 0.0)} /></SwiperSlide>
                                <SwiperSlide style={{ backgroundColor: getRGBAColor(bgColor, 0.0) }}><ProductCard hoverColor={hoverColor} bgColor={getRGBAColor(bgColor, 0.0)} /></SwiperSlide>
                            </>
                        ) : (
                            <>
                                <SwiperSlide><PlaceholderCard /></SwiperSlide>
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

export default ProductList;
