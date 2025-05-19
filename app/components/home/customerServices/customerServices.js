'use client'
import React from 'react'
import Title from '../../utils/title/Title'
import Lead from '../../utils/lead/Lead'
import Button from '../../utils/button/Button'
import Image from 'next/image'
import images from '@/app/public/assets/images'
import './CustomerServices.css'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.3, duration: 0.6, ease: 'easeOut' }
  })
}

const CustomerServices = () => {
  return (
    <motion.div 
      className='row align-items-center mt-3'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className='col-lg-8' variants={fadeInUp} custom={0}>
        <Title title={'خدمات پس از فروش'} />
        <motion.div variants={fadeInUp} custom={1}>
          <Lead boldText={'کوشایار'} lightText={'همراه همیشگی شما در هر شرایط'} />
        </motion.div>
        <motion.p className='text-justify py-2' variants={fadeInUp} custom={2}>
          امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت. امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
        </motion.p>
        <motion.div
          className='d-flex align-items-center justify-content-lg-start justify-content-between gap-lg-4 border-0 bg-transparent px-0'
          variants={fadeInUp}
          custom={3}
        >
          <Button variant={'secondary'} title={'صدای مشتری'} />
          <Button variant={'primary'} title={'ارتباط با کارشناسان'} />
        </motion.div>
      </motion.div>

      <motion.div className='col-lg-4 mt-5 mt-lg-0' variants={fadeInUp} custom={4}>
        <Image className='iran-map-img' src={images.iran_map} alt='iran-map' />
      </motion.div>
    </motion.div>
  )
}

export default CustomerServices
