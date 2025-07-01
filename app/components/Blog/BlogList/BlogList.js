'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './bloglist.css'
import Image from 'next/image'
import images from '@/app/public/assets/images'
import EvenetCard from '../../EvenetCards/EvenetCard';
import { Autoplay } from 'swiper/modules';
import { motion, useInView } from 'framer-motion';

const BlogList = (props) => {

    const swiperRef = useRef(null);
    const swiperInstance = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef(null);
    const inView = useInView(observerRef, { once: true, margin: '-100px' });
    const [blogsData, setblogsData] = useState([]);
    // IntersectionObserver to control autoplay
    useEffect(() => {

        // Fetching Datas


        const fetchData = async () => {
            try {
                const formData = new FormData();
                formData.append("category_id", props.categoryId);

                const response = await fetch("https://api.kfp-dental.com/api/articles", {
                    method: "POST",
                    body: formData,
                });

                if (!response.ok) throw new Error("Failed to fetch");

                const data = await response.json();
                setblogsData(data);


            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        };

        fetchData();

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 1,
                rootMargin: '0px',
            }
        );

        if (swiperRef.current) {
            observer.observe(swiperRef.current);
        }

        return () => {
            if (swiperRef.current) {
                observer.unobserve(swiperRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (swiperInstance.current) {
            if (isVisible) {
                swiperInstance.current.autoplay.start();
            } else {
                swiperInstance.current.autoplay.stop();
            }
        }
    }, [isVisible]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const slideVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.div
            ref={observerRef}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className='courses-box row p-lg-4 p-3 mb-lg-3 mb-2'
        >
            <div className='col-lg-2 d-flex flex-lg-column flex-row justify-content-lg-start align-items-lg-start align-items-center gap-2 course-box-desc mb-3 mb-lg-0'>
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
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        1500: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                    }}
                    onSwiper={(swiper) => {
                        swiperInstance.current = swiper;
                        if (!isVisible) {
                            swiper.autoplay.stop();
                        }
                    }}
                >
                    {blogsData.map((_, index) => (
                        <SwiperSlide
                            key={index}
                            className='blog-list-swiperSlide'
                            style={{ borderRadius: '40px' }}
                        >
                            <motion.div
                                variants={slideVariants}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                            >
                                <EvenetCard data={blogsData} />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.div>
    );
};

export default BlogList;
