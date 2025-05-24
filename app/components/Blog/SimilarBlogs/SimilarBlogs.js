'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './similarBlogs.css';
import EvenetCard from '../../EvenetCards/EvenetCard';
import { Autoplay } from 'swiper/modules';
import Title from '../../utils/title/Title';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const SimilarBlogs = () => {
  return (
    <motion.div
      className="row p-lg-4 p-3 mb-lg-3 mb-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="col-12 mb-lg-5 mb-3">
        <Title title={'مقالات مشابه'} />
      </div>
      <div className="col-lg-12 d-flex flex-column justify-content-start align-items-start gap-2 p-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
            waitForTransition: true,
          }}
          modules={[Autoplay]}
          className="mySwiper similarblogs-swiper"
          breakpoints={{
            1500: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
          }}
        >
          {[1, 2, 3].map((item, i) => (
            <SwiperSlide key={i} style={{ borderRadius: '40px' }}>
              <EvenetCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default SimilarBlogs;
