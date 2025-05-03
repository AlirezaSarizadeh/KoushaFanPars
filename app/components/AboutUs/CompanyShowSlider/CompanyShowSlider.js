'use client'
import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import Title from '../../utils/title/Title';
import Lead from '../../utils/lead/Lead';
import Button from '../../utils/button/Button';
import Image from 'next/image';
import images from '@/app/public/assets/images';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
const CompanyShowSlider = () => {

      const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='courses-box course-box-companies row p-lg-4 p-3 my-lg-3 my-2 justify-content-center col-lg-11' >
            <div className='col-md-7 d-flex flex-column justify-content-center gap-lg-5 gap-3 align-items-between gap-2 course-box-desc'>
                <h2 className='fs-1 fw-bold'>
                    {/* {props.heading} */}
                    کارخانه کوشافن پارس
                </h2>
                <p className='' style={{ minHeight: '2' }}>
                    امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
                </p>
            </div>
            <div className='col-md-5 position-relative companies-pic-col'>
                <div className='col-lg-6'>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': 'transparent',
                            '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={false}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <Card className='d-flex flex-row align-items-center justify-content-between border-0'>
                                <Image src={images.partner1_product} alt='product' style={{ objectFit: 'scale-down' }} />
                                <Card.Body className='text-start d-flex flex-column'>
                                    <Card.Title className='small'>کوشافن پارس 78989879889</Card.Title>
                                    <Card.Text className='fw-light small text-justify'>
                                        شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید
                                    </Card.Text>
                                    <Card.Footer className='border-0 bg-transparent text-end'>
                                        <Link className='d-flex align-items-center gap-3 textColor justify-content-end' href={'/'}>
                                            <small className='small'>
                                                مشاهده محصولات
                                            </small>
                                            <Image src={images.arrowLeftIco} alt='arrow' style={{ objectFit: 'scale-down' }} />
                                        </Link>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className='d-flex flex-row align-items-center justify-content-between border-0'>
                                <Image src={images.partner1_product} alt='product' style={{ objectFit: 'scale-down' }} />
                                <Card.Body className='text-start d-flex flex-column'>
                                    <Card.Title className='small'>کوشافن پارس</Card.Title>
                                    <Card.Text className='fw-light small text-justify'>
                                        شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید
                                    </Card.Text>
                                    <Card.Footer className='border-0 bg-transparent text-end'>
                                        <Link className='d-flex align-items-center gap-3 textColor justify-content-end' href={'/'}>
                                            <small className='small'>
                                                مشاهده محصولات
                                            </small>
                                            <Image src={images.arrowLeftIco} alt='arrow' style={{ objectFit: 'scale-down' }} />
                                        </Link>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className='d-flex flex-row align-items-center justify-content-between border-0'>
                                <Image src={images.partner1_product} alt='product' style={{ objectFit: 'scale-down' }} />
                                <Card.Body className='text-start d-flex flex-column'>
                                    <Card.Title className='small'>کوشافن پارس 45454</Card.Title>
                                    <Card.Text className='fw-light small text-justify'>
                                        شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید
                                    </Card.Text>
                                    <Card.Footer className='border-0 bg-transparent text-end'>
                                        <Link className='d-flex align-items-center gap-3 textColor justify-content-end' href={'/'}>
                                            <small className='small'>
                                                مشاهده محصولات
                                            </small>
                                            <Image src={images.arrowLeftIco} alt='arrow' style={{ objectFit: 'scale-down' }} />
                                        </Link>
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CompanyShowSlider
