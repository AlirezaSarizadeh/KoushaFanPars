'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Title from '../../utils/title/Title';
import Lead from '../../utils/lead/Lead';
import Button from '../../utils/button/Button';
import Image from 'next/image';
import images from '@/app/public/assets/images';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import './companyShowSlider.css'

const CompanyShowSlider = ({ flexDirection = 'row' }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    // Determine the class for the swiper container based on flexDirection
    const swiperContainerClass = flexDirection === 'row-reverse' ? 'col-lg-6 me-auto' : 'col-lg-6 ms-auto';

    return (
        <div 
            className='courses-box course-box-companies row p-lg-4 p-3 my-lg-3 my-2 justify-content-center col-lg-11' 
            style={{ flexDirection: flexDirection }}
        >
            <div className='col-md-8 d-flex flex-column justify-content-center gap-lg-5 gap-3 align-items-between gap-2 course-box-desc'>
                <h2 className='fs-1 fw-bold text-white'>
                    کارخانه کوشافن پارس
                </h2>
                <p className='text-white opacity-75 text-justify'>
                    امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
                </p>
            </div>
            <div className='col-md-4 position-relative companies-pic-col'>
                <div className='col-lg-12'>
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
                        <SwiperSlide>
                            <Card className='w-100'>
                                <Image src={images.room_pic} alt='product' height={300} className='w-100' style={{objectFit:'cover'}} />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className='d-flex flex-row align-items-center justify-content-between border-0'>
                                <Image src={images.room_pic} alt='product' height={300} className='w-100' style={{objectFit:'cover'}} />
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className='d-flex flex-row align-items-center justify-content-between border-0'>
                                <Image src={images.room_pic} alt='product' height={300} className='w-100' style={{objectFit:'cover'}} />
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
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
                    <SwiperSlide className='rounded-2' style={{height:'fit-content' , overflow:'hidden'}}>
                        <Image src={images.room_pic} width={150} height={120} className='w-100' alt='partner' />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-2' style={{height:'fit-content' , overflow:'hidden'}}>
                        <Image src={images.room_pic} width={150} height={120} className='w-100' alt='partner' />
                    </SwiperSlide>
                    <SwiperSlide className='rounded-2' style={{height:'fit-content' , overflow:'hidden'}}>
                        <Image src={images.room_pic} width={150} height={120} className='w-100' alt='partner' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default CompanyShowSlider