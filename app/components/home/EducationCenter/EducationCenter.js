import React from 'react'
import './educationCenter.css'
import Title from '../../utils/title/Title'
import Lead from '../../utils/lead/Lead'
import Button from '../../utils/button/Button'

const EducationCenter = () => {
    return (
        <div className='row align-items-center container-custom '>
            <div className='col-lg-8'>
                <Title title={'مرکز آموزش'} />
                <Lead boldText={'دانشکده کوشافن پارس'} lightText={'مهارت های خود را با کوشافن پارس ارتقا دهید'} />
                <p className='text-justify py-2'>
                    مرکز آموزش کوشافن پارس، دروازه ورود به دنیای نوین دندانپزشکی است. این مرکز جامع آموزشی، با ارائه دوره‌های متنوع در سطوح مبتدی، نیمه پیشرفته و پیشرفته، پاسخگوی نیازهای تمام دندانپزشکان و دندانسازان است. چه تازه وارد دنیای دندانپزشکی باشید و چه سال‌ها تجربه داشته باشید، در کوشافن پارس، دوره‌ای متناسب با سطح دانش و مهارت خود خواهید یافت. تنها با یک ثبت‌نام ساده، به دنیایی از دانش و تجربه دسترسی پیدا خواهید کرد و می‌توانید مهارت‌های خود را ارتقا داده و با آخرین تکنیک‌ها و فناوری‌های روز دنیا آشنا شوید.
                </p>
                <div className='d-flex align-items-center gap-lg-4 border-0 bg-transparent px-0'>
                    <Button variant={'secondary'} title={'مرکز آموزش'} />
                    <Button variant={'primary'} title={'ثبت نام دوره'} />
                </div>
            </div>
            <div className='col-lg-4'>
                CIRCLED TESTIMONTIAL
            </div>
        </div>
    )
}

export default EducationCenter
