import React from 'react'
import RootLayout from '../(main)/layout'
import CustomerServices from '../components/home/CustomerServices/CustomerServices'
import Counters from '../components/home/counters/Counters'
import Title from '../components/utils/title/Title'
import Lead from '../components/utils/lead/Lead'
import { Col, Row } from 'react-bootstrap'
import images from '../public/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import { LuPhoneCall } from 'react-icons/lu'
import { FaEnvelope, FaEnvelopeOpen, FaEnvelopeSquare, FaSms } from 'react-icons/fa'
import EducationCenter from '../components/EducateCenter/EducateCenter'
import DiscountedCoursesBox from '../components/DiscountedCoursesBox/DiscountedCoursesBox'


const page = () => {
  return (
    <RootLayout>
      <EducationCenter />
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
