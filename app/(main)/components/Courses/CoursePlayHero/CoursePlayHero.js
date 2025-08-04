import images from '@/app/public/assets/images'
import Image from 'next/image'
import React from 'react'
import Title from '../../utils/title/Title'
import {FaPlayCircle } from 'react-icons/fa';

const CoursePlayHero = () => {
  return (
    <div className='row row-cols-lg-2 align-content-center mt-lg-4 mt-4' style={{background:'#eff6ff' , borderRadius:'15px'}}>
      <Image src={images.drbahooshPic} alt='dr bahoosh' style={{ height: '80%' }} />
      <div className='row flex-column justify-content-start gap-2 m-auto'>

        <div className='d-flex align-items-center gap-2 flex-column flex-md-row mt-4 mt-lg-0'>
          <Title className='fs-1 fw-bold' title={'دوره دندانسازی سرامیک'} />
          <span>
            دسته بندی :
            مقدماتی
          </span>
        </div>

        <div className='d-flex flex-column'>
          <span className='fs-2 my-2 fw-bolder'>
            دکتر باهوش
          </span>
          <p className='text-justify'>
            مرکز آموزش کوشافن پارس، دروازه ورود به دنیای نوین دندانپزشکی است. این مرکز جامع آموزشی، با ارائه دوره‌های متنوع در سطوح مبتدی، نیمه پیشرفته و پیشرفته، پاسخگوی نیازهای تمام دندانپزشکان و دندانسازان است. چه تازه وارد دنیای دندانپزشکی باشید و چه سال‌ها تجربه داشته باشید، در کوشافن پارس، دوره‌ای متناسب با سطح دانش و مهارت خود خواهید یافت. تنها با یک ثبت‌نام ساده، به دنیایی از دانش و تجربه دسترسی پیدا خواهید کرد و می‌توانید مهارت‌های خود را ارتقا داده و با آخرین تکنیک‌ها و فناوری‌های روز دنیا آشنا شوید.
          </p>
        </div>

        <div className='d-flex align-items-center mb-4'>
          <span className='d-flex align-items-center justify-content-center gap-2 px-3 py-2 textColor small bg-light'>
            <FaPlayCircle className='text-primary fs-4' />
            این دوره شامل 60 قسمت می باشد
          </span>
        </div>
      </div>
    </div>
  )
}

export default CoursePlayHero
