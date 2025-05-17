'use client'
import React from 'react'
import { useState } from 'react';
import './events.css'
import Title from '../../utils/title/Title'
import Lead from '../../utils/lead/Lead'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { SwiperSlide, Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import EvenetCard from '../../EvenetCards/EvenetCard';
import Button from '../../utils/button/Button';

const Evenets = () => {
  const [key, setKey] = useState('home');
  return (
    <div className='row align-items-center mt-2'>
      <div className='col-lg-12'>
        <Title title={'مجله کوشافن پارس'} />
        <Lead boldText={'مقالات و رویداد ها'} lightText={'پنجره ای رو به دنیای نوآورانه دندانپزشکی و دندانسازیر'} />
        <p className='text-justify py-2'>
          مجله کوشافن پارس، پنجره‌ای رو به دنیای نوآورانه دندانپزشکی و دندانسازی است. در هر شماره از این مجله، با آخرین دستاوردهای علمی و تکنولوژیکی در این حوزه آشنا شده و از نزدیک شاهد حضور فعال شرکت کوشافن پارس در رویدادهای مهم صنعت خواهیم بود. وبلاگ تخصصی این مجله، فضایی است برای تبادل نظر و ارائه مقالات علمی توسط متخصصان و پژوهشگران. همچنین، گالری تصاویر نمایشگاهی، روایتگر حضور پررنگ محصولات و خدمات کوشافن پارس در نمایشگاه‌های داخلی و بین‌المللی است. با دنبال کردن اخبار این مجله، همواره از جدیدترین محصولات و خدمات شرکت و همچنین رویدادهای مهم صنعت دندانپزشکی آگاه خواهید شد
        </p>
        <span className="see-all-blog-btn">
          <Button href={'moz'} title={'مجله کوشافن پارس'} />

        </span>
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
              <SwiperSlide className='p-4 events-swiperSlide' style={{ width: '70%' }}>
                <EvenetCard />
              </SwiperSlide>
              <SwiperSlide className='p-4 events-swiperSlide' style={{ width: '70%' }}>
                <EvenetCard />
              </SwiperSlide>
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
              <SwiperSlide className='p-4' style={{ width: '70%' }}>
                <EvenetCard />
              </SwiperSlide>
              <SwiperSlide className='p-4' style={{ width: '70%' }}>
                <EvenetCard />
              </SwiperSlide>
            </Swiper>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Evenets
