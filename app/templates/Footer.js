'use client'
import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { FaYoutube, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import FaqOutro from '../components/FaqOutro/FaqOutro'
import './footer.css'

const Footer = () => {
  return (
    <section className='mt-lg-5 mt-3 footer'>
      <FaqOutro />
      <Row className="text-center text-md-start mt-lg-5 mt-4 footer-section">
        {/* Quick Access */}
        <Col md={3} className="mb-4 mb-md-0">
          <h5 className="fw-bold">دسترسی سریع</h5>
          <ul className="list-unstyled mt-5 footer-section-ul">
            <li><a href="#" className="text-dark text-decoration-none">درباره ما</a></li>
            <li><a href="#" className="text-dark text-decoration-none">همکاری با ما</a></li>
            <li><a href="#" className="text-dark text-decoration-none">فرصت های شغلی</a></li>
          </ul>
        </Col>

        {/* Product Categories */}
        <Col md={3} className="mb-4 mb-md-0">
          <h5 className="fw-bold">دسته بندی محصولات</h5>
          <ul className="list-unstyled mt-5 footer-section-ul">
            <li><a href="#" className="text-dark text-decoration-none">AT100 گروه</a></li>
            <li><a href="#" className="text-dark text-decoration-none">زیربوکیا</a></li>
            <li><a href="#" className="text-dark text-decoration-none">AT3000 گروه دندانسازی</a></li>
            <li><a href="#" className="text-dark text-decoration-none">AT3000 گروه دندانسازی</a></li>
            <li><a href="#" className="text-dark text-decoration-none">AT3000 گروه دندانسازی</a></li>
          </ul>
        </Col>

        {/* Contact Information */}
        <Col md={6}>
          <h5 className="fw-bold">راه ارتباطی</h5>
          <div className='d-flex flex-column mt-5'>
            <p>دفتر مرکزی: تهران، شهرک غرب، بلوار فرحزادی، بالاتر از بیمارستان آتیه، خیابان سپهر، پلاک ۴۵</p>
            <p>کارخانه: جاده قدیم قم، شهرک صنعتی شمس آباد، فاز ۳، بلوار سوسنستان، خیابان گل سرخ ۹</p>
            <p>سینا سنتر: جاده قدیم قم، شهرک صنعتی شمس آباد، فاز ۳، بلوار سوسنستان، خیابان گل سرخ ۹</p>
            <p>تلفن دفتر مرکزی: 021-42804 | تلفن کارخانه: 021-56232550 | تلفن سینا سنتر: 021-56232550</p>
            <p>ایمیل: <a href="mailto:info@kfp-dental.com" className="text-dark">info@kfp-dental.com</a></p>
          </div>
        </Col>
      </Row>

      <hr className="border-dark" />

      {/* Social Icons */}
      <Row className='align-items-center pb-3 flex-column flex-md-row'>
      <Col>
          <Row className="text-start flex-row">
            <Col>
              <p className="mb-0 lead textColor company-text">تمامی حقوق این سایت برای شرکت کوشافن پارس محفوظ می باشد</p>
            </Col>
          </Row>

        </Col>
        <Col>
          <Row className="text-end">
            <Col>
              <FaYoutube size={30} className="mx-2 text-dark" />
              <FaLinkedin size={30} className="mx-2 text-dark" />
              <FaWhatsapp size={30} className="mx-2 text-dark" />
              <FaInstagram size={30} className="mx-2 text-dark" />
            </Col>
          </Row>
        </Col>

      </Row>

    </section>
  )
}

export default Footer
