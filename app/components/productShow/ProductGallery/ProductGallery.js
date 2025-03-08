'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import './productGallery.css'
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';
import images from '@/app/public/assets/images';

const ProductGallery = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    backgroundColor : '#bae0f5'
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {[...Array(3)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <Image src={images.productSample} alt='product' style={{ objectFit: 'scale-down' }} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={false}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="mySwiper"
                style={{ background: '#bae0f5' }}
            >
                {[...Array(3)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <Image src={images.productSample} alt='product' style={{ objectFit: 'scale-down' }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default ProductGallery;
