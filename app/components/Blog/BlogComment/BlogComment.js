'use client';

import { useEffect, useState } from 'react';
import { Tab, Nav, Spinner } from 'react-bootstrap';
import './blogComment.css';
import Image from 'next/image';
import images from '@/app/public/assets/images';
import Title from '../../utils/title/Title';
import Button from '../../utils/button/Button';
import AnimatedInput from '../../AnimatedInput/AnimatedInput';
import CustomerReview from '../../CustomerReview/CustomerReview';
import { motion, AnimatePresence } from 'framer-motion';

const fadeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit:   { opacity: 0, y: -30, transition: { duration: 0.3, ease: 'easeIn' } }
};

const BlogComment = ({ id }) => {
  /* -------------------------------------------------------------------- *
   *  local states                                                        *
   * -------------------------------------------------------------------- */
  const [blogComments, setBlogComments] = useState([]); // ذخیرهٔ دیدگاه‌ها
  const [isLoading, setIsLoading]     = useState(false);       // کنترل نمایش spinner
  const [error, setError]             = useState(null);        // پیام خطا برای کاربر
  const [activeKey, setActiveKey]     = useState('form');      // تب فعال

  /* -------------------------------------------------------------------- *
   *  fetch comments                                                      *
   * -------------------------------------------------------------------- */
  const fetchBlogComments = async () => {
    setIsLoading(true);     // شروع بارگذاری
    setError(null);         // پاک‌کردن خطای قبلی (اگر وجود داشت)

    try {
      /* فرم داده برای ارسال شناسهٔ محصول */
      const productForm = new FormData();
      productForm.append('article_id', id);

      /* درخواست به API */
      const res = await fetch('https://api.kfp-dental.com/api/article_comments', {
        method : 'POST',
        body   : productForm,
        cache  : 'no-cache',
      });

      /* در صورت خطا سمت سرور یا شبکه */
      if (!res.ok)
        throw new Error('خطا در دریافت دیدگاه‌ها. لطفاً بعداً دوباره تلاش کنید.');

      const data = await res.json();
      setBlogComments(data);   // ذخیرهٔ داده‌ها در state
    } catch (err) {
      // ذخیرهٔ پیام خطا برای نمایش
      setError(err.message || 'خطای ناشناخته‌ای رخ داد.');
    } finally {
      // در هر صورت spinner متوقف می‌شود
      setIsLoading(false);
    }
  };

  /* -------------------------------------------------------------------- *
   *  initial load                                                        *
   * -------------------------------------------------------------------- */
  useEffect(() => {
    fetchBlogComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* -------------------------------------------------------------------- *
   *  UI                                                                  *
   * -------------------------------------------------------------------- */
  return (
    <motion.div
      className="mt-0 product-reviews-container"
      initial="hidden"
      animate="visible"
      variants={fadeVariants}
    >
      {/* ---------- Tabs Navigation ---------- */}
      <Nav variant="pills" className="mb-0">
        <Nav.Item className="w-50 text-center">
          <Nav.Link
            eventKey="form"
            className="p-3 fs-6"
            active={activeKey === 'form'}
            onClick={() => setActiveKey('form')}
          >
            ثبت&nbsp;دیدگاه
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="w-50 text-center">
          <Nav.Link
            eventKey="comments"
            className="p-3 fs-6"
            active={activeKey === 'comments'}
            onClick={() => setActiveKey('comments')}
          >
            مشاهده&nbsp;دیدگاه‌ها
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* ---------- Tabs Content ---------- */}
      <Tab.Content>
        <AnimatePresence mode="wait">
          {/* ----------- COMMENTS TAB ----------- */}
          {activeKey === 'comments' && (
            <Tab.Pane eventKey="comments" active>
              <motion.div
                key="comments"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="p-3 rounded"
              >
                {/* عنوان */}
                <span className="d-flex align-items-center gap-2 mt-lg-3 mt-2 mb-lg-4 mb-2">
                  <Image src={images.chatIcon} alt="icon" />
                  <Title title="دیدگاه کاربران" />
                </span>

                {/* -------- وضعیت‌های مختلف ---------- */}
                {isLoading && (
                  <div className="text-center my-4">
                    <Spinner animation="border" role="status" />
                    <p className="mt-2">در حال بارگذاری دیدگاه‌ها…</p>
                  </div>
                )}

                {error && !isLoading && (
                  <p className="text-danger text-center my-4">{error}</p>
                )}

                {!isLoading && !error && blogComments.length === 0 && (
                  <p className="text-muted">هنوز دیدگاهی ثبت نشده است.</p>
                )}

                {!isLoading &&
                  !error &&
                  blogComments.map(c => (
                    <CustomerReview
                      key={c.id}
                      review={c.comment}
                      reviewerName={`کاربر #${c.user_id}`}
                      date={new Date(c.created_at ?? c.updated_at).toLocaleDateString('fa-IR')}
                    />
                  ))}

                {/* نمونهٔ ثابت در صورت نیاز */}
                {/* <CustomerReview
                  key="sample"
                  review="سلام چرا نمیشه دوعدد سفارش داد؟"
                  reviewerName="امیرعلی هریوندی"
                  date="1403/12/21"
                /> */}
              </motion.div>
            </Tab.Pane>
          )}

          {/* ------------- FORM TAB ------------- */}
          {activeKey === 'form' && (
            <Tab.Pane eventKey="form" active>
              <motion.div
                key="form"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="border p-3 rounded"
              >
                <span className="d-flex align-items-center gap-2 mt-lg-3 mt-2">
                  <Image src={images.chatIcon} alt="icon" />
                  <Title title="ثبت نظر" />
                </span>

                <h6 className="fw-normal fs-5 mt-lg-4 mt-2">
                  نظر خود را دربارهٔ این محصول ثبت نمایید
                </h6>

                {/* فرم ثبت دیدگاه */}
                <form>
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5 mt-lg-5 mt-4">
                      <AnimatedInput id="name" label="نام" name="name" type="text" />
                    </div>
                    <div className="col-lg-7 mt-lg-5 mt-4">
                      <AnimatedInput id="lastname" label="نام خانوادگی" name="lastname" type="text" />
                    </div>
                    <div className="col-lg-12 mt-lg-5 mt-4">
                      <AnimatedInput
                        id="description"
                        label="شرح دهید"
                        name="description"
                        as="textarea"
                        rows="4"
                      />
                    </div>
                    <div className="col-12 mt-lg-4 mt-2 d-flex align-items-center justify-content-end">
                      <Button title="ثبت دیدگاه" variant="primary" />
                    </div>
                  </div>
                </form>
              </motion.div>
            </Tab.Pane>
          )}
        </AnimatePresence>
      </Tab.Content>
    </motion.div>
  );
};

export default BlogComment;
