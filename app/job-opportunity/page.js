import React from 'react'
import Title from '../components/utils/title/Title'
import Lead from '../components/utils/lead/Lead'
import Button from '../components/utils/button/Button'
import Image from 'next/image'
import images from '../public/assets/images'
import RootLayout from '../layout'
import CounterBox from '../components/utils/counterBox/CounterBox'
import './jobOpportunity.css'
import JobOpsStepCard from '../components/JobOpStepsCard/JobOpsStepCard'
import JobNeeds from '../components/JobNeeds/JobNeeds'

const page = () => {
    return (
        <RootLayout>
            <div className='row align-items-center justify-content-center mt-lg-5 mt-4'>
                <div className='col-lg-8'>
                    <Title title={'فرصت شغلی'} />
                    <Lead boldText={'استخدام منابع انسانی'} lightText={'شرکت دانش بنیان کوشافن پارس استخدام می کند'} />
                    <p className='text-justify py-2'>
                        مرکز آموزش کوشافن پارس، دروازه ورود به دنیای نوین دندانپزشکی است. این مرکز جامع آموزشی، با ارائه دوره‌های متنوع در سطوح مبتدی، نیمه پیشرفته و پیشرفته، پاسخگوی نیازهای تمام دندانپزشکان و دندانسازان است. چه تازه وارد دنیای دندانپزشکی باشید و چه سال‌ها تجربه داشته باشید، در کوشافن پارس، دوره‌ای متناسب با سطح دانش و مهارت خود خواهید یافت. تنها با یک ثبت‌نام ساده، به دنیایی از دانش و تجربه دسترسی پیدا خواهید کرد و می‌توانید مهارت‌های خود را ارتقا داده و با آخرین تکنیک‌ها و فناوری‌های روز دنیا آشنا شوید.
                    </p>
                    <div className='d-flex align-items-center gap-lg-4 border-0 bg-transparent px-0 justify-content-between justify-content-lg-start'>
                        <Button variant={'secondary'} title={'فرم استخدام'} />
                        <Button variant={'primary'} title={'ارتباط با کارشناسان'} />
                    </div>
                </div>
                <div className='col-lg-4 mt-4 mt-lg-0'>
                    <Image src={images.educateCenterPicture} alt='educate picture' className='w-100' />
                </div>
            </div>
            <section className="row row-cols-lg-4 row-cols-2 align-items-center py-lg-5 py-3 container-custom mt-lg-5 mt-3">
                <CounterBox targetNumber={340} label="پوشش مراکز درمانی" icon={images.counterIcon1} />
                <CounterBox targetNumber={70} label="تجهیز لابراتوارهای کشور" icon={images.counterIcon2} />
                <CounterBox targetNumber={20} label="سال سابقه خدماتی" icon={images.counterIcon3} />
                <CounterBox targetNumber={20} label="نمایندگی استانی در کشور" icon={images.counterIcon4} />
            </section>
            <section className="row row-cols-lg-4 row-cols-1 align-items-center py-lg-5 py-4 container-custom mt-lg-5 mt-3" style={{ background: '#f1f2f4' }}>
                <Title className='col-12 w-100 mb-3' title={'مراحل استخدام'} />
                <JobOpsStepCard />
                <JobOpsStepCard />
                <JobOpsStepCard />
                <JobOpsStepCard />
            </section>
            <JobNeeds />
        </RootLayout>
    )
}

export default page
