'use client'
import React from 'react'
import './popCourses.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Card } from 'react-bootstrap';
import images from '@/app/public/assets/images';
import Image from 'next/image';
import Title from '../../utils/title/Title';
import Link from 'next/link';

// ✅ Framer Motion import
import { motion } from 'framer-motion';

// ✅ Slide animation variant
const slideVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut'
    }
  }),
};

const PopCourses = () => {
  return (
    <motion.div
      className='py-lg-5 py-3'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className='d-flex align-items-center justify-content-between pb-lg-5 pb-3 w-100'>
        <Title title={'دوره های پرطرفدار'} />
        <Link className='d-flex align-items-center justify-content-center gap-3' href={'/'}>
          <span className='lead textColor'>مشاهده تمامی دوره ها</span>
          <Image src={images.arrowLeftIco} alt='arrow-icon' />
        </Link>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{ clickable: true }}
        className="mySwiper popCours-card"
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          769: {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: false,
          },
        }}
      >
        {[...Array(6)].map((_, i) => (
          <SwiperSlide key={i}>
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideVariants}
            >
              <Link href={'/'}>
                <Card className="border-0 text-center p-3 rounded-4 pop-course-card" style={{ minHeight: '400px', backgroundColor: "#EAF6FF" }}>
                  <div className="popCours-card-img rounded-4 p-3">
                    <Image
                      src={images.docSamplePic}
                      width={288}
                      height={288}
                      alt="Doctor"
                      className="rounded-4 w-100"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold fs-5">دکتر باهوش</Card.Title>
                    <Card.Text className="text-muted fs-6">دوره مبتدی دندان‌سازی</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  )
}

export default PopCourses
