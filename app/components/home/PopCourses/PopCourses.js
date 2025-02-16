'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Card } from 'react-bootstrap';
import images from '@/app/public/assets/images';
import Image from 'next/image';

const PopCourses = () => {
  return (
    <div className='py-5'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card className="shadow-lg border-0 text-center p-3 rounded-4" style={{ width: "18rem", backgroundColor: "#EAF6FF" }}>
            {/* Image */}
            <div className="bg-white rounded-4 p-3">
              <Image
                src={images.docSamplePic}
                width={288} // Adjust based on your design
                height={288}
                alt="Doctor"
                className="rounded-4 w-100"
              />
            </div>

            {/* Card Body */}
            <Card.Body>
              <Card.Title className="fw-bold fs-5">دکتر باهوش</Card.Title>
              <Card.Text className="text-muted fs-6">
                دوره مبتدی دندان‌سازی
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PopCourses
