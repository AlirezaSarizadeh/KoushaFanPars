'use client'
import React from 'react'
import './jobNeeds.css'
import Title from '../utils/title/Title'
import images from '@/app/public/assets/images'
import Image from 'next/image'
import { Card } from 'react-bootstrap'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  hover: {
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

const JobNeeds = () => {
  return (
    <motion.div
      className='courses-box row p-lg-4 p-4 mb-lg-3 mb-2 mt-lg-5 mt-3'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <div className='col-12 mb-lg-4 mb-3'>
        <motion.div variants={titleVariants}>
          <Title title={'نیازمندی ها'} />
        </motion.div>
      </div>
      <motion.div
        className='p-2 col-lg-4'
        variants={cardVariants}
        initial='hidden'
        whileInView='visible'
        whileHover='hover'
        viewport={{ once: true }}
      >
        <Card className='jobneedCard py-3' style={{ border: 'none' }}>
          <Card.Body>
            <span className='jn-icon mb-3'>
              <Image src={images.jneedOne} className='img-fluid' alt='sa' />
            </span>
            <Card.Title className='text-start fw-bold' style={{ color: '#333', fontSize: '1rem' }}>
              واحد بازرگانی
            </Card.Title>
            <Card.Title className='text-start fw-normal' style={{ color: '#333', fontSize: '1rem' }}>
              به +150 نیرو نیازمندیم
            </Card.Title>
            <Card.Text className='text-start fw-light' style={{ color: '#666', marginTop: '1rem' }}>
              امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های
              آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی
              سـازمان اسـت.
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
      <motion.div
        className='p-2 col-lg-4'
        variants={cardVariants}
        initial='hidden'
        whileInView='visible'
        whileHover='hover'
        viewport={{ once: true }}
      >
        <Card className='jobneedCard py-3' style={{ border: 'none' }}>
          <Card.Body>
            <span className='jn-icon mb-3'>
              <Image src={images.jneedOne} className='img-fluid' alt='sa' />
            </span>
            <Card.Title className='text-start fw-bold' style={{ color: '#333', fontSize: '1rem' }}>
              واحد بازرگانی
            </Card.Title>
            <Card.Title className='text-start fw-normal' style={{ color: '#333', fontSize: '1rem' }}>
              به +150 نیرو نیازمندیم
            </Card.Title>
            <Card.Text className='text-start fw-light' style={{ color: '#666', marginTop: '1rem' }}>
              امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های
              آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی
              سـازمان اسـت.
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
      <motion.div
        className='p-2 col-lg-4'
        variants={cardVariants}
        initial='hidden'
        whileInView='visible'
        whileHover='hover'
        viewport={{ once: true }}
      >
        <Card className='jobneedCard py-3' style={{ border: 'none' }}>
          <Card.Body>
            <span className='jn-icon mb-3'>
              <Image src={images.jneedOne} className='img-fluid' alt='sa' />
            </span>
            <Card.Title className='text-start fw-bold' style={{ color: '#333', fontSize: '1rem' }}>
              واحد بازرگانی
            </Card.Title>
            <Card.Title className='text-start fw-normal' style={{ color: '#333', fontSize: '1rem' }}>
              به +150 نیرو نیازمندیم
            </Card.Title>
            <Card.Text className='text-start fw-light' style={{ color: '#666', marginTop: '1rem' }}>
              امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های
              آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی
              سـازمان اسـت.
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
      <motion.div
        className='p-2 col-lg-4'
        variants={cardVariants}
        initial='hidden'
        whileInView='visible'
        whileHover='hover'
        viewport={{ once: true }}
      >
        <Card className='jobneedCard py-3' style={{ border: 'none' }}>
          <Card.Body>
            <span className='jn-icon mb-3'>
              <Image src={images.jneedOne} className='img-fluid' alt='sa' />
            </span>
            <Card.Title className='text-start fw-bold' style={{ color: '#333', fontSize: '1rem' }}>
              واحد بازرگانی
            </Card.Title>
            <Card.Title className='text-start fw-normal' style={{ color: '#333', fontSize: '1rem' }}>
              به +150 نیرو نیازمندیم
            </Card.Title>
            <Card.Text className='text-start fw-light' style={{ color: '#666', marginTop: '1rem' }}>
              امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های
              آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی
              سـازمان اسـت.
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
      <motion.div
        className='p-2 col-lg-4'
        variants={cardVariants}
        initial='hidden'
        whileInView='visible'
        whileHover='hover'
        viewport={{ once: true }}
      >
        <Card className='jobneedCard py-3' style={{ border: 'none' }}>
          <Card.Body>
            <span className='jn-icon mb-3'>
              <Image src={images.jneedOne} className='img-fluid' alt='sa' />
            </span>
            <Card.Title className='text-start fw-bold' style={{ color: '#333', fontSize: '1rem' }}>
              واحد بازرگانی
            </Card.Title>
            <Card.Title className='text-start fw-normal' style={{ color: '#333', fontSize: '1rem' }}>
              به +150 نیرو نیازمندیم
            </Card.Title>
            <Card.Text className='text-start fw-light' style={{ color: '#666', marginTop: '1rem' }}>
              امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های
              آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی
              سـازمان اسـت.
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
      <motion.div
        className='p-2 col-lg-4'
        variants={cardVariants}
        initial='hidden'
        whileInView='visible'
        whileHover='hover'
        viewport={{ once: true }}
      >
        <Card className='jobneedCard py-3' style={{ border: 'none' }}>
          <Card.Body>
            <span className='jn-icon mb-3'>
              <Image src={images.jneedOne} className='img-fluid' alt='sa' />
            </span>
            <Card.Title className='text-start fw-bold' style={{ color: '#333', fontSize: '1rem' }}>
              واحد بازرگانی
            </Card.Title>
            <Card.Title className='text-start fw-normal' style={{ color: '#333', fontSize: '1rem' }}>
              به +150 نیرو نیازمندیم
            </Card.Title>
            <Card.Text className='text-start fw-light' style={{ color: '#666', marginTop: '1rem' }}>
              امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های
              آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی
              سـازمان اسـت.
            </Card.Text>
          </Card.Body>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export default JobNeeds