'use client';

import React, { useEffect, useState } from 'react';
import './events.css';
import Title from '../../utils/title/Title';
import Lead from '../../utils/lead/Lead';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Spinner from 'react-bootstrap/Spinner';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import EvenetCard from '../../EvenetCards/EvenetCard';
import Button from '../../utils/button/Button';
import { motion } from 'framer-motion';

const Events = () => {
  const [key, setKey] = useState('');
  const [categories, setCategories] = useState([]);
  const [articlesByCategory, setArticlesByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // گرفتن دسته‌بندی‌ها و مقالات
  useEffect(() => {
    const controller = new AbortController();

    const fetchCategoriesAndArticles = async () => {
      try {
        setLoading(true);
        // مرحله 1: گرفتن دسته‌بندی‌ها
        const formData = new FormData();
        const catRes = await fetch('https://api.kfp-dental.com/api/article_categories', {
          method: 'POST',
          body: formData,
          signal: controller.signal,
        });

        if (!catRes.ok) throw new Error('خطا در دریافت دسته‌بندی‌ها');

        const categoriesData = await catRes.json();
        setCategories(categoriesData);

        // تب پیش‌فرض
        if (categoriesData.length) {
          setKey(String(categoriesData[0].id));
        }

        // مرحله 2: گرفتن مقالات برای هر دسته‌بندی
        const articlesMap = {};

        for (const category of categoriesData) {
          const articleFormData = new FormData();
          articleFormData.append('category_id', category.id);

          const artRes = await fetch('https://api.kfp-dental.com/api/articles', {
            method: 'POST',
            body: articleFormData,
            signal: controller.signal,
          });

          if (!artRes.ok) throw new Error('خطا در دریافت مقالات');

          const articles = await artRes.json();
          articlesMap[category.id] = articles;
        }

        setArticlesByCategory(articlesMap);
      } catch (err) {
        setError(err.message || 'خطای نامشخص');
      } finally {
        setLoading(false);
      }
    };

    fetchCategoriesAndArticles();
    return () => controller.abort();
  }, []);

  // انیمیشن‌ها
  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 } },
  };
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut', delay: 0.4 } },
  };
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  const slideVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // وضعیت لودینگ
  if (loading) {
    return (
      <div className="d-flex justify-content-center py-5">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  // خطا
  if (error) {
    return <p className="text-danger text-center py-5">{error}</p>;
  }

  return (
    <div className="row align-items-center mt-3">
      <div className="col-lg-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={textVariants}>
          <Title title="مجله کوشافن پارس" />
          <Lead
            boldText="مقالات و رویداد ها"
            lightText="پنجره ای رو به دنیای نوآورانه دندانپزشکی و دندانسازی"
          />
          <p className="text-justify py-2">
            مجله کوشافن پارس، پنجره‌ای رو به دنیای نوآورانه دندانپزشکی و دندانسازی است...
          </p>
        </motion.div>

        <motion.span
          className="see-all-blog-btn"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={buttonVariants}
        >
          <Button href="/blog" title="مجله کوشافن پارس" />
        </motion.span>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={tabVariants}>
          <Tabs
            id="kfp-article-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="my-3 eventSection-tabs"
            mountOnEnter
            unmountOnExit
          >
            {categories.map((cat) => (
              <Tab key={cat.id} eventKey={String(cat.id)} title={cat.title}>
                <Swiper
                  slidesPerView="auto"
                  spaceBetween={10}
                  pagination={{ clickable: true }}
                  className="mySwiper"
                >
                  {(articlesByCategory[cat.id] || []).map((article, index) => (
                    <SwiperSlide
                      key={article.id}
                      className="p-4 events-swiperSlide"
                      style={{ width: '70%' }}
                    >
                      <motion.div
                        variants={slideVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <EvenetCard data={article} className="shadowed" />
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Tab>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
