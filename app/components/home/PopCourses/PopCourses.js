'use client'
import React from 'react'
import './popCourses.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Card } from 'react-bootstrap';
import images from '@/app/public/assets/images';
import Image from 'next/image';
import Title from '../../utils/title/Title';
import Link from 'next/link';

const PopCourses = () => {
  return (
    <div className='py-5'>
      <div className='d-flex align-items-center justify-content-between pb-lg-5 pb-3 w-100'>
        <Title title={'دوره های پرطرفدار'} />
        <Link className='d-flex align-items-center justify-content-center gap-3' href={'/'}>
          <span className='lead textColor'>
            مشاهده تمامی دوره ها
          </span>
          <Image src={images.arrowLeftIco} alt='arrow-icon' />
        </Link>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[]}
        className="mySwiper popCours-card"
      >
        <SwiperSlide>
          <Link href={'/'}>
            <Card className="border-0 text-center p-3 rounded-4" style={{ minHeight: '400px', backgroundColor: "#EAF6FF" }}>
              {/* Image */}
              <div className="popCours-card-img rounded-4 p-3">
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
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'}>
            <Card className="border-0 text-center p-3 rounded-4" style={{ minHeight: '400px', backgroundColor: "#EAF6FF" }}>
              {/* Image */}
              <div className="popCours-card-img rounded-4 p-3">
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
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'}>
            <Card className="border-0 text-center p-3 rounded-4" style={{ minHeight: '400px', backgroundColor: "#EAF6FF" }}>
              {/* Image */}
              <div className="popCours-card-img rounded-4 p-3">
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
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'}>
            <Card className="border-0 text-center p-3 rounded-4" style={{ minHeight: '400px', backgroundColor: "#EAF6FF" }}>
              {/* Image */}
              <div className="popCours-card-img rounded-4 p-3">
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
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'}>
            <Card className="border-0 text-center p-3 rounded-4" style={{ minHeight: '400px', backgroundColor: "#EAF6FF" }}>
              {/* Image */}
              <div className="popCours-card-img rounded-4 p-3">
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
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/'}>
            <Card className="border-0 text-center p-3 rounded-4" style={{ minHeight: '400px', backgroundColor: "#EAF6FF" }}>
              {/* Image */}
              <div className="popCours-card-img rounded-4 p-3">
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
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PopCourses
