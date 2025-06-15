'use client'
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from 'react';
import { Autoplay } from 'swiper/modules';
import './productList.css';
import Title from '../utils/title/Title';
import ProductCard from "../productShow/ProductCard/ProductCard";
import PlaceholderCard from "../PlaceholderCard/PlaceholderCard";

// Framer Motion
import { motion } from "framer-motion";
import Link from "next/link";

// Animation variants
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const slideVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

const ProductList = ({ bgColor, title, hoverColor, data }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const getRGBAColor = (hex, opacity) => {
        let r = parseInt(hex.substring(1, 3), 16);
        let g = parseInt(hex.substring(3, 5), 16);
        let b = parseInt(hex.substring(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    const safeData = Array.isArray(data) ? data : [data];


    return (
        <>
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5, delay: 10.5 }}
                variants={sectionVariants}
                className='py-4 px-lg-5 px-2 product-list-container my-lg-5 my-3'
                style={{ backgroundColor: getRGBAColor(bgColor,0.1) }}
            >
                <div className='d-flex align-items-center justify-content-between pb-lg-2 pb-2 w-100'>
                    <Title title={title} />
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    slidesOffsetAfter={0}
                    pagination={{ clickable: true }}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2800,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 4 },
                        1480: { slidesPerView: 5 },
                    }}
                    className="mySwiper popCours-card product-list-card"

                >
                    {(isLoaded ? (
                        safeData.map((_, i) => (
                            <Link key={i} href={''}>
                                <SwiperSlide  style={{ backgroundColor: getRGBAColor(bgColor, 0.1) , borderRadius:'18px' }}>
                                    <motion.div variants={slideVariants} initial="hidden" animate="visible">
                                        <ProductCard data={safeData} hoverColor={hoverColor} bgColor={getRGBAColor(bgColor, 0.1)} />
                                    </motion.div>
                                </SwiperSlide>
                            </Link>
                        ))
                    ) : (
                        [...Array(5)].map((_, s) => (
                            <SwiperSlide key={s}>
                                <motion.div variants={slideVariants} initial="hidden" animate="visible">
                                    <PlaceholderCard />
                                </motion.div>
                            </SwiperSlide>
                        ))
                    ))}
                </Swiper>
            </motion.section>
        </>
    );
};

export default ProductList;
