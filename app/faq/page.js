import React from 'react'
import RootLayout from '../(main)/layout'
import Title from '../components/utils/title/Title'
import Lead from '../components/utils/lead/Lead'
import Image from 'next/image'
import FaqBox from '../components/FaqBox/FaqBox'


const page = () => {
    return (
        <RootLayout>
            <div className='row align-items-center justify-content-start mt-lg-5 mt-4'>
                <div className='col-lg-8 mt-lg-5 mt-3'>
                    <Title title={'سوالات متداول'} />
                    <p className='text-justify py-4'>
                        مرکز آموزش کوشافن پارس، دروازه ورود به دنیای نوین دندانپزشکی است. این مرکز جامع آموزشی، با ارائه دوره‌های متنوع در سطوح مبتدی، نیمه پیشرفته و پیشرفته، پاسخگوی نیازهای تمام دندانپزشکان و دندانسازان است. چه تازه وارد دنیای دندانپزشکی باشید و چه سال‌ها تجربه داشته باشید، در کوشافن پارس، دوره‌ای متناسب با سطح دانش و مهارت خود خواهید یافت. تنها با یک ثبت‌نام ساده، به دنیایی از دانش و تجربه دسترسی پیدا خواهید کرد و می‌توانید مهارت‌های خود را ارتقا داده و با آخرین تکنیک‌ها و فناوری‌های روز دنیا آشنا شوید.
                    </p>
                </div>
            </div>

            <div className="row align-items-center mt-lg-5 mt-2 p-lg-4 p-2 justify-content-center" style={{ background: '#e4f0fd', borderRadius: '15px' }}>

                    <FaqBox />
            </div>

        </RootLayout>
    )
}

export default page
