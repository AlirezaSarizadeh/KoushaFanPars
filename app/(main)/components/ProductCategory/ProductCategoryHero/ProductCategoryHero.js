'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // ✅ Import Autoplay module
import 'swiper/css';
import './productCategoryHero.css';
import { motion } from 'framer-motion';
import images from '@/app/public/assets/images';
import Image from 'next/image';

const ProductCategoryHero = ({ startColor }) => {
    const backgroundImageUrl =
        typeof images.main_slider_desktop_bg === 'string'
            ? images.main_slider_desktop_bg
            : images.main_slider_desktop_bg?.src;

    const sliderImages = [
        { src: images.main_slider_item_1, title: 'کوره AUTO THERM 100', description: 'At 100' },
        { src: images.main_slider_item_2, title: 'کوره AUTO THERM 100', description: 'At 100' },
        { src: images.main_slider_item_3, title: 'کوره AUTO THERM 100', description: 'At 100' },
        { src: images.main_slider_item_4, title: 'کوره AUTO THERM 100', description: 'At 100' },
        { src: images.main_slider_item_5, title: 'کوره AUTO THERM 100', description: 'At 100' },
        { src: images.main_slider_item_1, title: 'کوره AUTO THERM 100', description: 'At 100' },
        { src: images.main_slider_item_2, title: 'کوره AUTO THERM 100', description: 'At 100' },
        { src: images.main_slider_item_3, title: 'کوره AUTO THERM 100', description: 'At 100' },
        { src: images.main_slider_item_4, title: 'کوره AUTO THERM 100', description: 'At 100' },
        { src: images.main_slider_item_5, title: 'کوره AUTO THERM 100', description: 'At 100' },
    ];

    return (
        <div
            className='mainSlider-container mt-lg-4 mt-4'
            style={{
                background: `linear-gradient(${startColor}, #ffffff)`,
                borderRadius: '25px',
            }}
        >
            <Swiper
                className='mainSlider-swiper pb-lg-5'
                spaceBetween={0}
                slidesPerView={1}
                modules={[Autoplay]} // ✅ Add Autoplay module
                autoplay={{
                    delay: 2800,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 4 },
                    1480: { slidesPerView: 5 },
                }}
            // style={{ padding: '20px' }}
            >
                {sliderImages.map((item, index) => (
                    <SwiperSlide key={index} className='custom-slide mainSlider-swiperSlide pb-lg-5'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className='slide-wrapper position-relative'
                        >
                            <div className='mainSlider-content d-flex flex-column justify-content-center align-items-center text-white text-center'>
                                <h3 className='h6 fw-bold mb-1'>
                                    {item.title.split(/(\d+)/).map((part, i) =>
                                        /\d+/.test(part) ? (
                                            <span key={i} className="number-font">{part}</span>
                                        ) : (
                                            <span key={i}>{part}</span>
                                        )
                                    )}
                                </h3>
                                <p className='small mb-0'>
                                    {item.description.split(/(\d+)/).map((part, i) =>
                                        /\d+/.test(part) ? (
                                            <span key={i} className="number-font">{part}</span>
                                        ) : (
                                            <span key={i}>{part}</span>
                                        )
                                    )}
                                </p>

                            </div>

                            <Image src={item.src} alt={item.title} className='img-fluid mainSlider-swiperSlide-img' />
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductCategoryHero;
