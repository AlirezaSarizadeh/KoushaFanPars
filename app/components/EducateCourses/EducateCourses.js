
'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './educateCourses.css'
import Image from 'next/image'
import images from '@/app/public/assets/images'
import Link from 'next/link'
import { Card } from 'react-bootstrap';

const EducateCourses = (props) => {
    return (
        <>
            {/* courses box */}
            <div className='courses-box row row-cols-md-2 p-lg-4 p-3 mb-lg-3 mb-2' >
                <div className='d-flex flex-column justify-content-start align-items-start gap-2 course-box-desc mb-4 mb-lg-0'>
                    <Image src={images.coursesHeartIcon} alt='heart icon' />
                    <h2 className='fs-1 fw-bold'>
                        {props.heading}
                    </h2>
                    <p>
                        امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
                    </p>
                    <Link className='ms-auto mt-lg-4 mt-3' href={'#!'}>مطالعه بیشتر</Link>
                </div>
                <div className='d-flex flex-column justify-content-start align-items-start gap-2 '>
                    <Swiper
                        slidesPerView={2.5}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            // When window width is >= 640px
                            0: {
                                slidesPerView: 1.2, // 1 full + half of next
                                spaceBetween: 20
                            },
                            640: {
                                slidesPerView: 1.2, // 1 full + half of next
                                spaceBetween: 20
                            },
                            // When window width is >= 768px
                            768: {
                                slidesPerView: 1.2, // 2 full + 0.2 peek
                                spaceBetween: 25
                            },
                            // When window width is >= 1024px
                            1024: {
                                slidesPerView: 2, // 3 full + 0.2 peek
                                spaceBetween: 30
                            },
                            // When window width is >= 1280px
                            1280: {
                                slidesPerView: 1.5, // 4 full + 0.2 peek
                                spaceBetween: 35
                            },
                            1540: {
                                slidesPerView: 2.5, // 4 full + 0.2 peek
                                spaceBetween: 35
                            }
                        }}
                        modules={[]}
                        className="mySwiper popCours-card"
                    >
                        <SwiperSlide style={{ borderRadius: "15px" }}>
                            <Link href={'/'}>
                                <Card className="border-0 text-center p-3 rounded-4 courses-card" style={{ minHeight: '400px', backgroundColor: "#EAF6FF" }}>
                                    {/* Image */}
                                    <div className="popCours-card-img rounded-4 p-3">
                                        <Image
                                            src={images.docSamplePic}
                                            // width={288} // Adjust based on your design
                                            // height={288}
                                            alt="Doctor"
                                            className="rounded-4 w-100 h-100"
                                        />
                                    </div>

                                    {/* Card Body */}
                                    <Card.Body>
                                        <Card.Title className="fw-bold fs-5">دکتر باهوش</Card.Title>
                                        <Card.Text className="text-muted fs-6">
                                            دوره مبتدی دندان‌سازی
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide style={{ borderRadius: "15px" }}>
                            <Link href={'/'}>
                                <Card className="border-0 text-center p-3 rounded-4 courses-card" style={{ minHeight: '400px', backgroundColor: "#EAF6FF" }}>
                                    {/* Image */}
                                    <div className="popCours-card-img rounded-4 p-3">
                                        <Image
                                            src={images.docSamplePic}
                                            // width={288} // Adjust based on your design
                                            // height={288}
                                            alt="Doctor"
                                            className="rounded-4 w-100 h-100"
                                        />
                                    </div>

                                    {/* Card Body */}
                                    <Card.Body>
                                        <Card.Title className="fw-bold fs-5">دکتر باهوش</Card.Title>
                                        <Card.Text className="text-muted fs-6">
                                            دوره مبتدی دندان‌سازی
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide style={{ borderRadius: "15px" }}>
                            <Link href={'/'}>
                                <Card className="border-0 text-center p-3 rounded-4 courses-card" style={{ minHeight: '400px', backgroundColor: "#EAF6FF" }}>
                                    {/* Image */}
                                    <div className="popCours-card-img rounded-4 p-3">
                                        <Image
                                            src={images.docSamplePic}
                                            // width={288} // Adjust based on your design
                                            // height={288}
                                            alt="Doctor"
                                            className="rounded-4 w-100 h-100"
                                        />
                                    </div>

                                    {/* Card Body */}
                                    <Card.Body>
                                        <Card.Title className="fw-bold fs-5">دکتر باهوش</Card.Title>
                                        <Card.Text className="text-muted fs-6">
                                            دوره مبتدی دندان‌سازی
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide style={{ borderRadius: "15px" }}>
                            <Link href={'/'}>
                                <Card className="border-0 text-center p-3 rounded-4 courses-card" style={{ minHeight: '400px', backgroundColor: "#EAF6FF" }}>
                                    {/* Image */}
                                    <div className="popCours-card-img rounded-4 p-3">
                                        <Image
                                            src={images.docSamplePic}
                                            // width={288} // Adjust based on your design
                                            // height={288}
                                            alt="Doctor"
                                            className="rounded-4 w-100 h-100"
                                        />
                                    </div>

                                    {/* Card Body */}
                                    <Card.Body>
                                        <Card.Title className="fw-bold fs-5">دکتر باهوش</Card.Title>
                                        <Card.Text className="text-muted fs-6">
                                            دوره مبتدی دندان‌سازی
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide style={{ borderRadius: "15px" }}>
                            <Link href={'/'}>
                                <Card className="border-0 text-center p-3 rounded-4 courses-card" style={{ minHeight: '400px', backgroundColor: "#EAF6FF" }}>
                                    {/* Image */}
                                    <div className="popCours-card-img rounded-4 p-3">
                                        <Image
                                            src={images.docSamplePic}
                                            // width={288} // Adjust based on your design
                                            // height={288}
                                            alt="Doctor"
                                            className="rounded-4 w-100 h-100"
                                        />
                                    </div>

                                    {/* Card Body */}
                                    <Card.Body>
                                        <Card.Title className="fw-bold fs-5">دکتر باهوش</Card.Title>
                                        <Card.Text className="text-muted fs-6">
                                            دوره مبتدی دندان‌سازی
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide style={{ borderRadius: "15px" }}>
                            <Link href={'/'}>
                                <Card className="border-0 text-center p-3 rounded-4 courses-card" style={{ minHeight: '400px', backgroundColor: "#EAF6FF" }}>
                                    {/* Image */}
                                    <div className="popCours-card-img rounded-4 p-3">
                                        <Image
                                            src={images.docSamplePic}
                                            // width={288} // Adjust based on your design
                                            // height={288}
                                            alt="Doctor"
                                            className="rounded-4 w-100 h-100"
                                        />
                                    </div>

                                    {/* Card Body */}
                                    <Card.Body>
                                        <Card.Title className="fw-bold fs-5">دکتر باهوش</Card.Title>
                                        <Card.Text className="text-muted fs-6">
                                            دوره مبتدی دندان‌سازی
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default EducateCourses
