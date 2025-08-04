'use client'

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import DOMPurify from 'dompurify';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import Title from '../../utils/title/Title'
import Lead from '../../utils/lead/Lead'
import Button from '../../utils/button/Button'
import Image from 'next/image'
import images from '@/app/public/assets/images'
import { Card } from 'react-bootstrap'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import './partners.css'

const Partners = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const pathname = usePathname()


  // fetching datas

  const [partners, setPartners] = useState([])

  // useEffect برای واکشی دیتا:
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch('https://api.kfp-dental.com/api/partners', {
          method: 'POST',
        })
        const data = await res.json()

        setPartners(data || []) // برای اسلاید اصلی

      } catch (err) {
        console.error("Error fetching partners data:", err)
      }
    }

    fetchPartners()
  }, [])

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  // Animation variants for thumbnails
  const thumbVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  }

  // Animation variants for text content
  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.2
      }
    }
  }

  return (
    <div className='mt-3'>
      <div className='row align-items-center'>
        <div className='col-lg-6'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <Title title={'همکاران ما'} />
            <Lead boldText={'افتخارات ما'} lightText={'شرکت کوشافن پارس افتخار دارد'} />
            <p className='text-justify py-2'>
              در کنار 30 سال تولید ملی بصورت انحصاری و رسمی با شرکت های مطرح دنیا از جمله (Vita ، 3shape ، imes-icore ، Redon) همکاری متقابل داشته باشد و پاسخگوی نیاز روز جامعه دندانپزشکی و دندانسازی ایران همپای تکنولوژِی روز دنیا باشد.
            </p>
          </motion.div>
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
            {partners.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className='d-flex flex-lg-row flex-column align-items-center justify-content-between border-0'>
                    {/* <Image src={item.image} alt='product' style={{ objectFit: 'scale-down' }} /> */}
                    <img src={item.product.image} style={{ objectFit: 'scale-down' }} width={200} />
                    <Card.Body className='text-start d-flex flex-column partner-desc-box'>
                      <Card.Title className='small'>{item.title}</Card.Title>
                      <Card.Text
                        className='fw-light small text-justify'
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(item.product.detail),
                        }}
                      />
                      <Card.Footer className='border-0 bg-transparent text-end'>
                        <Link className='d-flex align-items-center gap-3 textColor justify-content-end' href={`${pathname.replace(/\/$/, '')}/products/${item.product.category_id}/${item.product_id}`}>
                          <small className='small'>
                            مشاهده محصولات
                          </small>
                          <Image src={images.arrowLeftIco} alt='arrow' style={{ objectFit: 'scale-down' }} />

                        </Link>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
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
        className="mySwiper mt-lg-4 mt-4 partner-logo-swiper"
        breakpoints={{
          320: {
            slidesPerView: 1.8,
            spaceBetween: 15,
          },
          769: {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: false,
          },
        }}
      >
        {partners.map((index) => (
          <SwiperSlide key={index}>
            <motion.div
              variants={thumbVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* <Image src='' alt='partner' /> */}
              <img src={partners[0].image} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Partners