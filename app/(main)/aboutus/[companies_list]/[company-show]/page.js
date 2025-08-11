import RootLayout from '@/app/(main)/layout'
import Title from '@/app/(main)/components/utils/title/Title'
import images from '@/app/public/assets/images'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import './companyshow.css'


import CompanyShowSlider from '@/app/(main)/components/AboutUs/CompanyShowSlider/CompanyShowSlider'

const page = () => {
  return (

    <>
      <div className='row align-items-center mt-lg-5 mt-4 p-lg-4 p-2 justify-content-center' style={{ background: '#104369', borderRadius: '25px' }}>
        <div className=' course-box-companies row p-lg-4 p-3 my-lg-3 my-2 justify-content-center col-lg-11' >
          <div className='col-md-5 position-relative companies-pic-col'>
            <Image src={images.company_1} width={1200} // Set your max width
              height={800} // Set your max height
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }} alt='image' />
          </div>
          <div className='col-md-7 d-flex flex-column justify-content-center gap-lg-5 gap-3 align-items-between gap-2 course-box-desc text-white'>
            <h2 className='fs-1 fw-bold'>
              {/* {props.heading} */}
              کارخانه کوشافن پارس
            </h2>
            <p className='text-mute opacity-75 text-justify' style={{ minHeight: '2' }}>
              امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
            </p>
          </div>
        </div>
        <CompanyShowSlider />
        <CompanyShowSlider flexDirection='row-reverse' />
      </div>
    </>
  )
}

export default page
