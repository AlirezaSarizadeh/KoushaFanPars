'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './bloglist.css'
import Image from 'next/image'
import images from '@/app/public/assets/images'
import Link from 'next/link'
import { Card } from 'react-bootstrap';
import EvenetCard from '../../EvenetCards/EvenetCard';
import { Autoplay, Pagination } from 'swiper/modules';

const BlogList = (props) => {
    const swiperRef = useRef(null); // Reference to the Swiper container
    const [isVisible, setIsVisible] = useState(false); // Track visibility
    const swiperInstance = useRef(null); // Store Swiper instance for manual control

    // Set up Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsVisible(entry.isIntersecting);
                // console.log('Swiper visibility:', entry.isIntersecting); // Debug visibility
            },
            {
                threshold: 1, // Trigger when 10% of Swiper is visible
                rootMargin: '0px', // Ensure visibility is calculated correctly
            }
        );

        if (swiperRef.current) {
            observer.observe(swiperRef.current);
            // console.log('Observer attached to Swiper');
        }

        return () => {
            if (swiperRef.current) {
                observer.unobserve(swiperRef.current);
                // console.log('Observer detached');
            }
        };
    }, []);

    // Control autoplay manually based on isVisible
    useEffect(() => {
        if (swiperInstance.current) {
            if (isVisible) {
                swiperInstance.current.autoplay.start();
                // console.log('Autoplay manually started');
            } else {
                swiperInstance.current.autoplay.stop();
                // console.log('Autoplay manually stopped');
            }
        }
    }, [isVisible]);

    return (
        <div className='courses-box row p-lg-4 p-3 mb-lg-3 mb-2'>
            <div className='col-lg-2 d-flex flex-lg-column flex-row justify-content-lg-start  align-items-lg-start align-items-center gap-2 course-box-desc mb-3 mb-lg-0 '>
                <Image src={images.coursesHeartIcon} alt='heart icon' />
                <h2 className='fs-2 fw-bold mb-0 mb-lg-2'>
                    {props.heading}
                </h2>
            </div>
            <div className='col-lg-10 d-flex flex-column justify-content-start align-items-start gap-2'>
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        stopOnLastSlide: false,
                        waitForTransition: true,
                    }} // Always define autoplay with defaults
                    modules={[Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        1500: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                    }}
                    onSwiper={(swiper) => {
                        swiperInstance.current = swiper; // Store Swiper instance
                        if (!isVisible) {
                            swiper.autoplay.stop(); // Ensure autoplay is stopped initially
                        }
                    }}
                >
                    <SwiperSlide className='blog-list-swiperSlide' style={{ borderRadius: '40px' }}>
                        <EvenetCard />
                    </SwiperSlide>
                    <SwiperSlide className='blog-list-swiperSlide' style={{ borderRadius: '40px' }}>
                        <EvenetCard />
                    </SwiperSlide>
                    <SwiperSlide className='blog-list-swiperSlide' style={{ borderRadius: '40px' }}>
                        <EvenetCard />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default BlogList;