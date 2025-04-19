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

const page = () => {
    return (
        <RootLayout>
            <div className='row align-items-center justify-content-center'>
                <div className='col-lg-8'>
                    <Title title={'مرکز آموزش'} />
                    <Lead boldText={'کوشایار'} lightText={'همراه همیشگی شما در هر شرایط'} />
                    <p className='text-justify py-2'>
                        امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
                    </p>
                    <div className='d-flex align-items-center gap-lg-4 border-0 bg-transparent px-0'>
                        <Button variant={'secondary'} title={'ثبت نام دوره'} />
                        <Button variant={'primary'} title={'مراجعه حضوری'} />
                    </div>
                </div>
                <div className='col-lg-4'>
                    <Image src={images.educateCenterPicture} alt='educate picture' className='w-100' />
                </div>
            </div>

            {/* COURSES SLIDER */}
            <div className='row align-items-center mt-lg-5 mt-2 p-lg-4 p-2 justify-content-center' style={{ background: '#e4f0fd', borderRadius: '15px' }}>
                <CoursePlay />
            </div>

            {/* CourseSeasonSlider Component */}
            <div className='row align-items-center justify-content-center py-lg-5 px-lg-4' style={{background:'#f1f2f4'}}>
                <CourseSeasonSlider />
            </div>

            {/* Testimonial Slider Component */}
            <div className='row align-items-center justify-content-center py-lg-5 px-lg-4' style={{background:'#f1f2f4'}}>
                <TestimonialSlider />
            </div>
            <Title title={'دوره های تخفیفاتی'} className='mb-4 mt-lg-5' />
            <div className='row row-cols-md-3'>
                <div className='p-2'>
                    <DiscountedCoursesBox doctorImage={images.discountedBoxImage} initialTime="02:30:45" />
                </div>
                <div className='p-2'>
                    <DiscountedCoursesBox doctorImage={images.discountedBoxImage} initialTime="02:30:45" />
                </div>
                <div className='p-2'>
                    <DiscountedCoursesBox doctorImage={images.discountedBoxImage} initialTime="02:30:45" />
                </div>
                <div className='p-2'>
                    <DiscountedCoursesBox doctorImage={images.discountedBoxImage2} initialTime="02:30:45" />
                </div>
                <div className='p-2'>
                    <DiscountedCoursesBox doctorImage={images.discountedBoxImage2} initialTime="02:30:45" />
                </div>
            </div>
        </RootLayout>
    )
}

export default page
