'use client'

import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Title from '../../utils/title/Title';
import Lead from '../../utils/lead/Lead';
import Button from '../../utils/button/Button';
import Image from 'next/image';
import images from '@/app/public/assets/images';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
const Partners = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className=' container-custom'>

      <div className='row align-items-center'>
        <div className='col-lg-6'>
          <Title title={'خدمات پس از فروش'} />
          <Lead boldText={'کوشایار'} lightText={'همراه همیشگی شما در هر شرایط'} />
          <p className='text-justify py-2'>
            امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
          </p>
        </div>
        <div className='col-lg-6'>
          <Swiper
            style={{
              '--swiper-navigation-color': 'transparent',
              '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <Card className='d-flex flex-row align-items-center justify-content-between border-0'>
                <Image src={images.partner1_product} alt='product' style={{ objectFit: 'scale-down' }} />
                <Card.Body className='text-start d-flex flex-column'>
                  <Card.Title className='small'>کوشافن پارس 78989879889</Card.Title>
                  <Card.Text className='fw-light small text-justify'>
                    شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید
                  </Card.Text>
                  <Card.Footer className='border-0 bg-transparent text-end'>
                    <Link className='d-flex align-items-center gap-3 textColor justify-content-end' href={'/'}>
                      <small className='small'>
                        مشاهده محصولات
                      </small>
                      <Image src={images.arrowLeftIco} alt='arrow' style={{ objectFit: 'scale-down' }} />
                    </Link>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className='d-flex flex-row align-items-center justify-content-between border-0'>
                <Image src={images.partner1_product} alt='product' style={{ objectFit: 'scale-down' }} />
                <Card.Body className='text-start d-flex flex-column'>
                  <Card.Title className='small'>کوشافن پارس</Card.Title>
                  <Card.Text className='fw-light small text-justify'>
                    شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید
                  </Card.Text>
                  <Card.Footer className='border-0 bg-transparent text-end'>
                    <Link className='d-flex align-items-center gap-3 textColor justify-content-end' href={'/'}>
                      <small className='small'>
                        مشاهده محصولات
                      </small>
                      <Image src={images.arrowLeftIco} alt='arrow' style={{ objectFit: 'scale-down' }} />
                    </Link>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className='d-flex flex-row align-items-center justify-content-between border-0'>
                <Image src={images.partner1_product} alt='product' style={{ objectFit: 'scale-down' }} />
                <Card.Body className='text-start d-flex flex-column'>
                  <Card.Title className='small'>کوشافن پارس 45454</Card.Title>
                  <Card.Text className='fw-light small text-justify'>
                    شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید
                  </Card.Text>
                  <Card.Footer className='border-0 bg-transparent text-end'>
                    <Link className='d-flex align-items-center gap-3 textColor justify-content-end' href={'/'}>
                      <small className='small'>
                        مشاهده محصولات
                      </small>
                      <Image src={images.arrowLeftIco} alt='arrow' style={{ objectFit: 'scale-down' }} />
                    </Link>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>



      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={100}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-lg-4 mt-2"
      >
        <SwiperSlide>
          <Image src={images.partner1} alt='partner' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images.partner2} alt='partner' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images.partner3} alt='partner' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images.partner1} alt='partner' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images.partner2} alt='partner' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={images.partner3} alt='partner' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Partners
