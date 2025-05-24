'use client';

import { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import './productReviews.css';
import Image from "next/image";
import images from "@/app/public/assets/images";
import Title from "../utils/title/Title";
import Button from "../utils/button/Button";
import AnimatedInput from "../AnimatedInput/AnimatedInput";
import CustomerReview from "../CustomerReview/CustomerReview";
import { motion, AnimatePresence } from "framer-motion";

const fadeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

const ProductReviews = () => {
  const [activeKey, setActiveKey] = useState("form");

  return (
    <motion.div
      className="mt-4 product-reviews-container"
      initial="hidden"
      animate="visible"
      variants={fadeVariants}
    >
      {/* Tabs Navigation */}
      <Nav variant="pills" className="mb-0">
        <Nav.Item className="w-50 text-center">
          <Nav.Link eventKey="form" className="p-3 fs-6" active={activeKey === "form"} onClick={() => setActiveKey("form")}>
            ثبت دیدگاه
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="w-50 text-center">
          <Nav.Link eventKey="comments" className="p-3 fs-6" active={activeKey === "comments"} onClick={() => setActiveKey("comments")}>
            مشاهده دیدگاه ها
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Tabs Content */}
      <Tab.Content>
        <AnimatePresence mode="wait">
          {activeKey === "comments" && (
            <Tab.Pane eventKey="comments" active>
              <motion.div
                key="comments"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="p-3 rounded"
              >
                <span className="d-flex align-items-center gap-2 mt-lg-3 mt-2 mb-lg-4 mb-2">
                  <Image src={images.chatIcon} alt="icon" />
                  <Title title={'دیدگاه کاربران'} />
                </span>
                <CustomerReview
                  key={1}
                  review={'سلام چرا نمیشه دوعدد سفارش داد؟'}
                  reviewerName={'امیرعلی هریوندی'}
                  date={'1403/12/21'}
                />
                <CustomerReview
                  key={2}
                  review={'سلام چرا نمیشه دوعدد سفارش داد؟'}
                  reviewerName={'امیرعلی هریوندی'}
                  date={'1403/12/21'}
                />
              </motion.div>
            </Tab.Pane>
          )}

          {activeKey === "form" && (
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
                  <Title title={'ثبت نظر'} />
                </span>
                <h6 className="fw-normal fs-5 mt-lg-4 mt-2">
                  نظر خود را درباره این محصول ثبت نمایید
                </h6>
                <form>
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5 mt-lg-5 mt-4">
                      <span className="mt-3 mt-lg-5">
                        <AnimatedInput id="name" label="نام" name="name" type="text" />
                      </span>
                    </div>
                    <div className="col-lg-7 mt-lg-5 mt-4">
                      <span className="mt-3 mt-lg-5">
                        <AnimatedInput id="lastname" label="نام خانوادگی" name="lastname" type="text" />
                      </span>
                    </div>
                    <div className="col-lg-12 mt-lg-5 mt-4">
                      <span className="mt-3 mt-lg-5">
                        <AnimatedInput id="description" label="شرح دهید" name="description" as="textarea" rows="4" />
                      </span>
                    </div>
                    <div className="col-12 mt-lg-4 mt-2 d-flex align-items-center justify-content-end">
                      <Button title={'ثبت دیدگاه'} variant={'primary'} />
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

export default ProductReviews;
