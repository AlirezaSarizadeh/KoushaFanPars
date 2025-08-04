'use client'
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';
import { Autoplay } from 'swiper/modules';
import './productList.css';
import Title from '../utils/title/Title';
import ProductCard from '../productShow/ProductCard/ProductCard';
import PlaceholderCard from '../PlaceholderCard/PlaceholderCard';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

// animation variants …
const sectionVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const slideVariants   = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } } };

export default function ProductList({ bgColor = '#ffffff', title, hoverColor, data }) {
  /** 🛑 Bail‑out guard  */
  if (!data || (Array.isArray(data) && data.length === 0)) {
    return null;              // ← nothing to render
  }

  const pathname  = usePathname();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  /** helper */
  const rgba = (hex, op) => `rgba(${parseInt(hex.slice(1,3),16)}, ${parseInt(hex.slice(3,5),16)}, ${parseInt(hex.slice(5,7),16)}, ${op})`;

  const products = Array.isArray(data) ? data.filter(Boolean) : [data];   // still safe

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className="py-4 px-lg-5 px-2 product-list-container my-lg-5 my-3"
      style={{ backgroundColor: rgba(bgColor, 0.1) }}
    >
      <div className="d-flex align-items-center justify-content-between pb-lg-2 pb-2 w-100">
        <Title title={title} />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Autoplay]}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        breakpoints={{ 640: { slidesPerView: 1 }, 1024: { slidesPerView: 4 }, 1480: { slidesPerView: 5 } }}
        className="mySwiper popCours-card product-list-card"
      >
        {isLoaded
          ? products.map((p) => (
              <SwiperSlide key={`prod-${p.id}`} style={{ backgroundColor: rgba(bgColor, 0.1), borderRadius: 18 }}>
                <Link href={`${pathname.replace(/\/$/, '')}/${p.id}`}>
                  <motion.div variants={slideVariants} initial="hidden" animate="visible">
                    <ProductCard data={p} hoverColor={hoverColor} bgColor={rgba(bgColor, 0.1)} />
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))
          : [...Array(5)].map((_, i) => (
              <SwiperSlide key={i}>
                <motion.div variants={slideVariants} initial="hidden" animate="visible">
                  <PlaceholderCard />
                </motion.div>
              </SwiperSlide>
            ))}
      </Swiper>
    </motion.section>
  );
}
