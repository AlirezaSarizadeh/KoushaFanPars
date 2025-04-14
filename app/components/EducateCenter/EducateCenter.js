import React from 'react'
import Title from '../utils/title/Title'
import Lead from '../utils/lead/Lead'
import Button from '../utils/button/Button'
import Image from 'next/image'
import images from '@/app/public/assets/images'
import EducateCourses from '../EducateCourses/EducateCourses'
import EducationCenter from '../home/EducationCenter/EducationCenter'

const EducateCenter = () => {
    return (

        <>
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
                <EducateCourses heading={'دوره مبتدی'} />
                <EducateCourses heading={'دوره متوسطه'} />
                <EducateCourses heading={'دوره پیشرفته'} />
            </div>

            {/* Education Center Component */}
            <div className='row align-items-center justify-content-center'>
                <EducationCenter />
            </div>
        </>
    )
}

export default EducateCenter
