
'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './educateCourseShow.css'
import 'swiper/css/grid';
import Image from 'next/image'
import images from '@/app/public/assets/images'
import Link from 'next/link'
import { Card } from 'react-bootstrap';

// import required modules
import { Grid, Pagination } from 'swiper/modules';

const EducateCourseShow = (props) => {
    return (
        <>
            {/* courses box */}
            <div className='courses-box row p-lg-4 p-3 mb-lg-3 mb-2' >
                <div className='col-md-8 d-flex flex-column justify-content-start align-items-start gap-2 course-box-desc'>
                    <Image src={images.coursesHeartIcon} alt='heart icon' />
                    <h2 className='fs-1 fw-bold'>
                        {props.heading}
                    </h2>
                    <p>
                        امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
                    </p>
                    {/* <Link className='ms-auto mt-lg-4 mt-3' href={'#!'}>مطالعه بیشتر</Link> */}
                </div>
                <div className='col-md-4 position-relative'>
                    <Image src={images.educateCenterPicture} width={1200} // Set your max width
                        height={800} // Set your max height
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }} alt='image' />
                </div>
                <div className='w-100 row row-cols-lg-5 row-cols-md-4 row-cols-2 justify-content-start m-auto px-0 mt-lg-4 mt-2'>
                    <Link href={'/'}>
                        <Card className="border-0 text-center p-3 rounded-4 mt-3" style={{ minHeight: '200px', backgroundColor: "#EAF6FF" }}>
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
                    <Link href={'/'}>
                        <Card className="border-0 text-center p-3 rounded-4 mt-3" style={{ minHeight: '200px', backgroundColor: "#EAF6FF" }}>
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
                    <Link href={'/'}>
                        <Card className="border-0 text-center p-3 rounded-4 mt-3" style={{ minHeight: '200px', backgroundColor: "#EAF6FF" }}>
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
                    <Link href={'/'}>
                        <Card className="border-0 text-center p-3 rounded-4 mt-3" style={{ minHeight: '200px', backgroundColor: "#EAF6FF" }}>
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
                    <Link href={'/'}>
                        <Card className="border-0 text-center p-3 rounded-4 mt-3" style={{ minHeight: '200px', backgroundColor: "#EAF6FF" }}>
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
                    <Link href={'/'}>
                        <Card className="border-0 text-center p-3 rounded-4 mt-3" style={{ minHeight: '200px', backgroundColor: "#EAF6FF" }}>
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
                    <Link href={'/'}>
                        <Card className="border-0 text-center p-3 rounded-4 mt-3" style={{ minHeight: '200px', backgroundColor: "#EAF6FF" }}>
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
                </div>
            </div>
        </>
    )
}

export default EducateCourseShow
