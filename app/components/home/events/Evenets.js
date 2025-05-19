'use client'

import React, { useState } from 'react'
import './events.css'
import Title from '../../utils/title/Title'
import Lead from '../../utils/lead/Lead'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import EvenetCard from '../../EvenetCards/EvenetCard'
import Button from '../../utils/button/Button'
import { motion } from 'framer-motion'

const Events = () => {
  const [key, setKey] = useState('home')

  // Animation variants for text content
  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  }

  // Animation variants for button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        delay: 0.4,
      },
    },
  }

  // Animation variants for tabs
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  // Animation variants for Swiper slides
  const slideVariants = {
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

  return (
    <div className='row align-items-center mt-3'>
      <div className='col-lg-12'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <Title title={'مجله کوشافن پارس'} />
          <Lead
            boldText={'مقالات و رویداد ها'}
            lightText={'پنجره ای رو به دنیای نوآورانه دندانپزشکی و دندانسازی'}
          />
          <p className='text-justify py-2'>
            مجله کوشافن پارس، پنجره‌ای رو به دنیای نوآورانه دندانپزشکی و دندانسازی است. در هر شماره از این
            مجله، با آخرین دستاوردهای علمی و تکنولوژیکی در این حوزه آشنا شده و از نزدیک شاهد حضور فعال شرکت
            کوشافن پارس در رویدادهای مهم صنعت خواهیم بود. وبلاگ تخصصی این مجله، فضایی است برای تبادل نظر و
            ارائه مقالات علمی توسط متخصصان و پژوهشگران. همچنین، گالری تصاویر نمایشگاهی، روایتگر حضور پررنگ
            محصولات و خدمات کوشافن پارس در نمایشگاه‌های داخلی و بین‌المللی است. با دنبال کردن اخبار این مجله،
            همواره از جدیدترین محصولات و خدمات شرکت و همچنین رویدادهای مهم صنعت دندانپزشکی آگاه خواهید شد
          </p>
        </motion.div>
        <motion.span
          className="see-all-blog-btn"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={buttonVariants}
        >
          <Button href={'moz'} title={'مجله کوشافن پارس'} />
        </motion.span>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={tabVariants}
        >
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="my-3 eventSection-tabs"
          >
            <Tab eventKey="home" title="وبلاگ ها">
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[]}
                className="mySwiper"
              >
                {Array(2)
                  .fill()
                  .map((_, index) => (
                    <SwiperSlide
                      key={index}
                      className='p-4 events-swiperSlide'
                      style={{ width: '70%' }}
                    >
                      <motion.div
                        variants={slideVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <EvenetCard />
                      </motion.div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </Tab>
            <Tab eventKey="sim" title="وبلاگ ها">
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[]}
                className="mySwiper"
              >
                {Array(2)
                  .fill()
                  .map((_, index) => (
                    <SwiperSlide
                      key={index}
                      className='p-4 events-swiperSlide'
                      style={{ width: '70%' }}
                    >
                      <motion.div
                        variants={slideVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <EvenetCard />
                      </motion.div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </Tab>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}

export default Events