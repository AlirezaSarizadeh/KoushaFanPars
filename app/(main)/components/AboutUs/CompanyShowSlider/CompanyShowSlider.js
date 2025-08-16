'use client'
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import { Card } from 'react-bootstrap';
import './companyShowSlider.css'

const CompanyShowSlider = ({ title, desc, gallery = [], flexDirection = 'row' }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [mounted, setMounted] = useState(false); // ✅ track if mounted

    useEffect(() => {
        setMounted(true); // only after client mounts
    }, []);

    if (!mounted) return null; // don't render until mounted
    if (!title && !desc && gallery.length === 0) return null;

    const swiperContainerClass = flexDirection === 'row-reverse' ? 'col-lg-6 me-auto' : 'col-lg-6 ms-auto';

    return (
        <div
            className='courses-box courses-box-v2 course-box-companies row p-lg-4 p-3 my-lg-3 my-2 justify-content-center col-lg-11'
            style={{ flexDirection: flexDirection }}
        >
            <div className='col-md-8 d-flex flex-column justify-content-center gap-lg-5 gap-3 align-items-between gap-2 course-box-desc'>
                {title && <h2 className='fs-1 fw-bold text-white'>{title}</h2>}
                {desc && (
                    <p
                        className='text-white opacity-75 text-justify'
                        dangerouslySetInnerHTML={{ __html: desc }}
                    />
                )}
            </div>

            {gallery.length > 0 && (
                <div className='col-md-4 position-relative companies-pic-col'>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': 'transparent',
                            '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        navigation={false}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {gallery.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                                    <Image src={img} alt={`slide-${idx}`} fill style={{ objectFit: 'cover' }} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}

            {gallery.length > 0 && (
                <div className={swiperContainerClass}>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={3}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper mt-lg-4 mt-2 partner-logo-swiper"
                    >
                        {gallery.map((img, idx) => (
                            <SwiperSlide key={`thumb-${idx}`} className='rounded-2' style={{ height: 'fit-content', overflow: 'hidden' }}>
                                <div style={{ position: 'relative', width: '150px', height: '120px' }}>
                                    <Image src={img} alt={`thumb-${idx}`} fill style={{ objectFit: 'cover' }} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    )
}

export default CompanyShowSlider
