import React from 'react'
import RootLayout from '../../../(main)/layout'
import Title from '../../../components/utils/title/Title'
import images from '../../../public/assets/images'
import DiscountedCoursesBox from '../../../components/DiscountedCoursesBox/DiscountedCoursesBox'
import Lead from '@/app/components/utils/lead/Lead'
import Button from '@/app/components/utils/button/Button'
import Image from 'next/image'
import EducationCenter from '@/app/components/home/EducationCenter/EducationCenter'
import EducateCourseShow from '@/app/components/EducateCourseShow/EducateCourseShow'
import CoursePlay from '@/app/components/CoursePlay/CoursePlay'
import { Card } from 'react-bootstrap';
import CourseSeasonSlider from '@/app/components/CourseSeasonSlider/CourseSeasonSlider'
import TestimonialSlider from '@/app/components/TestimonialSlider/TestimonialSlider'
import CoursePlayHero from '@/app/components/Courses/CoursePlayHero/CoursePlayHero'
import AnimatedInput from '@/app/components/AnimatedInput/AnimatedInput'

const page = () => {
    return (
        <RootLayout>
            <CoursePlayHero />
            <div className='row align-items-center justify-content-center'>
                <div className='col-lg-8'>
                    <Title title={'معرفی دوره'} />
                    <Lead boldText={'دوره دندانسازی سرامیک'} lightText={'مهارت های خود را با کوشافن پارس ارتفا دهید'} />
                    <p className='text-justify py-2'>
                    مرکز آموزش کوشافن پارس، دروازه ورود به دنیای نوین دندانپزشکی است. این مرکز جامع آموزشی، با ارائه دوره‌های متنوع در سطوح مبتدی، نیمه پیشرفته و پیشرفته، پاسخگوی نیازهای تمام دندانپزشکان و دندانسازان است. چه تازه وارد دنیای دندانپزشکی باشید و چه سال‌ها تجربه داشته باشید، در کوشافن پارس، دوره‌ای متناسب با سطح دانش و مهارت خود خواهید یافت. تنها با یک ثبت‌نام ساده، به دنیایی از دانش و تجربه دسترسی پیدا خواهید کرد و می‌توانید مهارت‌های خود را ارتقا داده و با آخرین تکنیک‌ها و فناوری‌های روز دنیا آشنا شوید.
                    </p>
                    <div className='d-flex align-items-center gap-lg-4 border-0 bg-transparent px-0'>
                        <div className='border d-flex gap-2 justify-content-center align-items-center btn px-lg-3 py-lg-3' style={{color:'#769fc6'}}>
                            <span>
                                مبلغ دوره : 
                            </span>
                            <span>
                                4/600/000 تومان
                            </span>
                        </div>
                        <Button variant={'primary'} title={'خرید دوره'} />
                    </div>
                </div>
                <div className='col-lg-4'>
                    <Image src={images.courseCertificatePic} alt='educate picture' className='w-100' />
                </div>
            </div>

            {/* CourseSeasonSlider Component */}
            <div className='row align-items-center justify-content-center py-lg-5 px-lg-4' style={{background:'#f1f2f4' , borderRadius:'15px'}}>
                <Title className='text-start mb-lg-5 ' title={'سر فصل ها'} />
                <CourseSeasonSlider />
            </div>

            {/* COURSES SLIDER */}
            <div className='row align-items-center mt-lg-5 mt-2 p-lg-4 p-2 justify-content-center' style={{ background: '#e4f0fd', borderRadius: '15px' }}>
                <CoursePlay />
            </div>

            {/* Testimonial Slider Component */}
            <div className='row align-items-center justify-content-center mt-lg-5 py-lg-5 px-lg-4' style={{background:'#f1f2f4', borderRadius:'15px'}}>
                <TestimonialSlider />
            </div>
            {/* Voice of Customer slider */}
            <div className='row align-items-center mt-lg-3 mt-3'>
                {/* <div className='col-lg-4'>

                    <CardTest />
                </div> */}
                <div className='col-lg-11 m-auto'>
                <div className=" p-3 rounded">
                        <span className="d-flex align-items-center gap-2 mt-lg-3 mt-2">
                            <Image src={images.chatIcon} alt="icon" />
                            <Title title={'ثبت نظر'} />
                        </span>
                        <h6 className="fw-normal fs-5 mt-lg-4 mt-2">
                            نظر خود را درباره این محصول ثبت نمایید
                        </h6>
                        <form>
                            <div className="row align-items-center justify-content-start">
                                <div className="col-lg-4 mt-lg-5 mt-2">
                                    <span className="mt-3 mt-lg-5">
                                        <AnimatedInput id="name" label="نام" name="name" type="text" />
                                    </span>
                                </div>
                                <div className="col-lg-4 mt-lg-5 mt-2">
                                    <span className="mt-3 mt-lg-5">
                                        <AnimatedInput id="name" label="نام خانوادگی" name="name" type="text" />
                                    </span>
                                </div>
                                <div className="col-lg-12 mt-lg-5 mt-2">
                                    <span className="mt-3 mt-lg-5">
                                        <AnimatedInput id="description" label="شرح دهید" name="description" as="textarea" rows="4" />
                                    </span>
                                </div>
                                <div className="col-12 mt-lg-4 mt-2 d-flex align-items-center justify-content-end">
                                    <Button title={'ثبت دیدگاه'} variant={'primary'} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </RootLayout>
    )
}

export default page
