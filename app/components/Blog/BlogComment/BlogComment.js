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
import { useUser } from '@/context/UserContext';
import toast from 'react-hot-toast';

const fadeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: 'easeIn' } }
};

const BlogComment = ({ id }) => {
  const [BlogComments, setBlogComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeKey, setActiveKey] = useState('form');
  const [formData, setFormData] = useState({ name: '', lastname: '', description: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, isHydrated } = useUser();

  const fetchBlogComments = async () => {
    setIsLoading(true);
    try {
      const blogForm = new FormData();
      blogForm.append('article_id', id);

      const res = await fetch('https://api.kfp-dental.com/api/article_comments', {
        method: 'POST',
        body: blogForm,
        cache: 'no-cache',
      });

      if (!res.ok) throw new Error('خطا در دریافت دیدگاه‌ها.');

      const data = await res.json();
      console.log(data);
      
      setBlogComments(data);
    } catch (err) {
      toast.error('مشکلی در دریافت دیدگاه‌ها وجود دارد.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.id) {
      toast.error('برای ثبت دیدگاه باید وارد شوید.');
      return;
    }

    if (!formData.description.trim()) {
      toast.error('لطفاً شرح دیدگاه خود را وارد نمایید.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append('user_id', user.id);
      payload.append('article_id', id);
      payload.append('comment', formData.description);
      payload.append('status', '0');

      const res = await fetch('https://api.kfp-dental.com/api/article_comment_insert', {
        method: 'POST',
        body: payload,
      });

      if (!res.ok) throw new Error('ارسال دیدگاه با خطا مواجه شد.');

      toast.success('دیدگاه با موفقیت ثبت شد و پس از بررسی نمایش داده می‌شود.');

      // Optional: Reset form
      setFormData({ name: '', lastname: '', description: '' });

      // Refresh comments
      fetchBlogComments();
      setActiveKey('comments');
    } catch (err) {
      toast.error('خطا در ارسال دیدگاه.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    fetchBlogComments();
  }, []);

  return (
    <motion.div className="mt-0 product-reviews-container" initial="hidden" animate="visible" variants={fadeVariants}>
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

      <Tab.Content>
        <AnimatePresence mode="wait">
          {activeKey === 'comments' && (
            <Tab.Pane eventKey="comments" active>
              <motion.div key="comments" variants={fadeVariants} initial="hidden" animate="visible" exit="exit" className="p-3 rounded">
                <span className="d-flex align-items-center gap-2 mt-lg-3 mt-2 mb-lg-4 mb-2">
                  <Image src={images.chatIcon} alt="icon" />
                  <Title title="دیدگاه کاربران" />
                </span>

                {isLoading && (
                  <div className="text-center my-4">
                    <Spinner animation="border" role="status" />
                    <p className="mt-2">در حال بارگذاری دیدگاه‌ها…</p>
                  </div>
                )}

                {!isLoading && BlogComments.filter((c) => c.status === 1).length === 0 && (
                  <p className="text-muted">هنوز دیدگاهی تأیید شده‌ای وجود ندارد.</p>
                )}


                {!isLoading &&
                  BlogComments
                    .filter((c) => c.status === 1)
                    .slice()
                    .reverse()
                    .map((c) => (
                      <CustomerReview
                        key={c.id}
                        review={c.comment}
                        reviewerName={`${c.first_name} ${c.last_name}`}
                        date={new Date(c.created_at ?? c.updated_at).toLocaleDateString('fa-IR')}
                      />
                    ))}


              </motion.div>
            </Tab.Pane>
          )}

          {activeKey === 'form' && (
            <Tab.Pane eventKey="form" active>
              <motion.div key="form" variants={fadeVariants} initial="hidden" animate="visible" exit="exit" className="border p-3 rounded">
                <span className="d-flex align-items-center gap-2 mt-lg-3 mt-2">
                  <Image src={images.chatIcon} alt="icon" />
                  <Title title="ثبت نظر" /> 
                </span>

                <h6 className="fw-normal fs-5 mt-lg-4 mt-2">
                  نظر خود را دربارهٔ این وبلاگ ثبت نمایید
                </h6>

                <form onSubmit={handleSubmit}>
                  <div className="row align-items-center justify-content-center">
                    {/* <div className="col-lg-5 mt-lg-5 mt-4">
                      <AnimatedInput
                        id="name"
                        label="نام"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="col-lg-7 mt-lg-5 mt-4">
                      <AnimatedInput
                        id="lastname"
                        label="نام خانوادگی"
                        name="lastname"
                        type="text"
                        value={formData.lastname}
                        onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                      />
                    </div> */}
                    <div className="col-lg-12 mt-lg-5 mt-4">
                      <AnimatedInput
                        id="description"
                        label="شرح دهید"
                        name="description"
                        as="textarea"
                        rows="4"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      />
                    </div>
                    <div className="col-12 mt-lg-4 mt-2 d-flex align-items-center justify-content-end">
                      <Button
                        title={isSubmitting ? 'در حال ارسال...' : 'ثبت دیدگاه'}
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                      />

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
