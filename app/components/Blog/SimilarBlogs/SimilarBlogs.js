'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './similarBlogs.css';
import EvenetCard from '../../EvenetCards/EvenetCard';
import { Autoplay } from 'swiper/modules';
import Title from '../../utils/title/Title';
import { motion } from 'framer-motion';
import { Spinner, Alert } from 'react-bootstrap';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? 'https://api.kfp-dental.com';

const SimilarBlogs = ({ id }) => {
  /* ----------- محلی برای ذخیرهٔ وضعیت کامپوننت ----------- */
  const [blogs, setBlogs] = useState([]);      // دادهٔ نهایی
  const [loading, setLoading] = useState(true); // وضعیت بارگذاری
  const [error, setError] = useState(null);     // پیام خطا (در صورت وجود)

  /* ----------- تابع واکشی داده ----------- */
  const fetchRelatedBlogs = async (articleId) => {
    try {
      const formData = new FormData();
      formData.append('article_id', articleId);

      const res = await fetch(`${API_BASE}/api/related_articles`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`خطا در دریافت داده: ${res.status}`);
      }

      const data = await res.json(); // ← آرایه‌ای از مقالات
      setBlogs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ----------- فراخوانی واکشی پس از مانت کامپوننت ----------- */
  useEffect(() => {
    if (id) fetchRelatedBlogs(id);
  }, [id]);

  /* ----------- UI اصلی ----------- */
  return (
    <motion.div
      className="row p-lg-4 p-3 mb-lg-3 mb-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="col-12 mb-lg-5 mb-3">
        <Title title="مقالات مشابه" />
      </div>

      {/* نمایش خطا (در صورت وجود) */}
      {error && (
        <Alert variant="danger" className="w-100 text-center">
          {error}
        </Alert>
      )}

      {/* نمایش اسپینر هنگام لودینگ */}
      {loading ? (
        <div className="w-100 d-flex justify-content-center my-4">
          <Spinner animation="border" role="status" />
        </div>
      ) : (
        /* نمایش اسلایدر وقتی داده آماده است */
        <div className="col-lg-12 d-flex flex-column gap-2 p-0">
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
              1500: { slidesPerView: 1.5, spaceBetween: 20 },
            }}
          >
            {blogs.map((blog) => (
              <SwiperSlide
                key={blog.id}
                style={{ borderRadius: '40px' }}
              >
                {/* پاس دادن کل آبجکت بلاگ به کارت */}
                <EvenetCard data={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </motion.div>
  );
};

export default SimilarBlogs;
