'use client'
import React, { useRef } from 'react'
import './companiesSlider.css'
import { SwiperSlide, Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import EvenetCard from '../../EvenetCards/EvenetCard';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import images from '@/app/public/assets/images';
import Title from '../../utils/title/Title';
import Link from 'next/link';
import Button from '../../utils/button/Button';
import 'swiper/css/autoplay'; // اضافه شده
import 'swiper/css/navigation'; // اضافه شده
import { Autoplay, Navigation } from 'swiper/modules'; // اضافه شده
import LicenseCard from '../../LicenseCard/LicenseCard';

const CompaniesSlider = () => {
    const prevRef = useRef(null); // برای کنترل فلش چپ
    return (
        <div className="companies-slider-wrapper" style={{ position: 'relative' }}>
            {/* دکمه فلش چپ */}
            {/* <div ref={prevRef} className="custom-swiper-button-prev">
                &#8592;
            </div> */}
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 1.3 },
                }}
                autoplay={{
                    delay: 2000, // هر ۳ ثانیه یکبار اسلاید عوض میشه
                    disableOnInteraction: false, // کاربر اسلاید رو لمس کنه متوقف نشه
                }}
                // navigation={{
                //     nextEl: prevRef.current,
                //     prevEl: null, // فقط چپ فعال باشد
                // }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.nextEl = prevRef.current;
                    swiper.params.navigation.prevEl = null;
                }}
                modules={[Navigation, Autoplay]}

                className="mySwiper"
            >
                <SwiperSlide className='p-4 about-us-swiperslide'  >
                    <Card className="rounded-4 border-0 p-0 float-start event-card" style={{ margin: "auto", backgroundColor: "#FFF" }}>
                        <Card.Body className='p-0 about-us-card'>
                            <div className="d-flex flex-column-reverse flex-lg-row">


                                {/* Content Section */}
                                <div className='d-flex flex-column justify-content-between p-lg-4'>
                                    <div className='d-flex align-items-center justify-content-between'>

                                        <Title title={'کارخانه'} fontSize={'18px'} />
                                    </div>
                                    <p className="text-muted text-justify pe-lg-3 ">
                                        شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید. کوشـا فـن پـارس بزرگترین تولیـد کننده تجهیـزات و لوازم دندانپزشـکی و دندانسـازی در کشـور مـی باشـد کـه بـا سـرمایه گـذاری در بخـش تحقیـق و توسـعه و با هدف توسـعه فنـاوری در زمینـه طراحـی، سـاخت و تولیـد تجهیـزات مرتبـط بـا صنعت دندانپزشـکی و دندانسـازی فعالیت دارد.
                                    </p>

                                    <div className='d-flex align-items-end justify-content-between'>
                                        <Button href={'#!'} variant='primary' title={'درباره کارخانه'} />
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className="mb-lg-0 mb-4">
                                    <Image src={images.companieSliderPic} alt='blog_image' className=' rounded-3 about-us-slider-pic' width={'400'} />
                                </div>


                            </div>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className='p-4 about-us-swiperslide'  >
                    <Card className="rounded-4 border-0 p-0 float-start event-card" style={{ margin: "auto", backgroundColor: "#FFF" }}>
                        <Card.Body className='p-0 about-us-card'>
                            <div className="d-flex flex-column-reverse flex-lg-row">


                                {/* Content Section */}
                                <div className='d-flex flex-column justify-content-between p-lg-4'>
                                    <div className='d-flex align-items-center justify-content-between'>

                                        <Title title={'کارخانه'} fontSize={'18px'} />
                                    </div>
                                    <p className="text-muted text-justify pe-lg-3 ">
                                        شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید. کوشـا فـن پـارس بزرگترین تولیـد کننده تجهیـزات و لوازم دندانپزشـکی و دندانسـازی در کشـور مـی باشـد کـه بـا سـرمایه گـذاری در بخـش تحقیـق و توسـعه و با هدف توسـعه فنـاوری در زمینـه طراحـی، سـاخت و تولیـد تجهیـزات مرتبـط بـا صنعت دندانپزشـکی و دندانسـازی فعالیت دارد.
                                    </p>

                                    <div className='d-flex align-items-end justify-content-between'>
                                        <Button href={'#!'} variant='primary' title={'درباره کارخانه'} />
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className="mb-lg-0 mb-4">
                                    <Image src={images.companieSliderPic} alt='blog_image' className=' rounded-3 about-us-slider-pic' width={'400'} />
                                </div>


                            </div>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className='p-4 about-us-swiperslide'  >
                    <Card className="rounded-4 border-0 p-0 float-start event-card" style={{ margin: "auto", backgroundColor: "#FFF" }}>
                        <Card.Body className='p-0 about-us-card'>
                            <div className="d-flex flex-column-reverse flex-lg-row">


                                {/* Content Section */}
                                <div className='d-flex flex-column justify-content-between p-lg-4'>
                                    <div className='d-flex align-items-center justify-content-between'>

                                        <Title title={'کارخانه'} fontSize={'18px'} />
                                    </div>
                                    <p className="text-muted text-justify pe-lg-3 ">
                                        شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید. کوشـا فـن پـارس بزرگترین تولیـد کننده تجهیـزات و لوازم دندانپزشـکی و دندانسـازی در کشـور مـی باشـد کـه بـا سـرمایه گـذاری در بخـش تحقیـق و توسـعه و با هدف توسـعه فنـاوری در زمینـه طراحـی، سـاخت و تولیـد تجهیـزات مرتبـط بـا صنعت دندانپزشـکی و دندانسـازی فعالیت دارد.
                                    </p>

                                    <div className='d-flex align-items-end justify-content-between'>
                                        <Button href={'#!'} variant='primary' title={'درباره کارخانه'} />
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className="mb-lg-0 mb-4">
                                    <Image src={images.companieSliderPic} alt='blog_image' className=' rounded-3 about-us-slider-pic' width={'400'} />
                                </div>


                            </div>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
            </Swiper>

            <section className='py-4 px-5 product-list-container my-lg-5 my-4' style={{ backgroundColor: '#eff6ff', borderRadius: '15px' }}>
                <div className='d-flex align-items-center justify-content-between pb-lg-2 pb-2 w-100'>
                    <Title title={'جوایز'} />
                </div>

                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1400: { slidesPerView: 4 },
                    }}
                    autoplay={{
                        delay: 2000, // هر ۳ ثانیه یکبار اسلاید عوض میشه
                        disableOnInteraction: false, // کاربر اسلاید رو لمس کنه متوقف نشه
                    }}
                    spaceBetween={30}
                    // slidesOffsetAfter={150}  // Padding after last slide
                    pagination={{ clickable: true }}
                    modules={[Autoplay]}
                    className="mySwiper popCours-card"
                >
                    <SwiperSlide style={{ backgroundColor: 'transparent' }}><LicenseCard /></SwiperSlide>
                    <SwiperSlide style={{ backgroundColor: 'transparent' }}><LicenseCard /></SwiperSlide>
                    <SwiperSlide style={{ backgroundColor: 'transparent' }}><LicenseCard /></SwiperSlide>
                    <SwiperSlide style={{ backgroundColor: 'transparent' }}><LicenseCard /></SwiperSlide>

                </Swiper>
            </section>
        </div>
    )
}

export default CompaniesSlider
