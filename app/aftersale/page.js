import React from 'react';
import CustomerServices from '../components/home/customerServices/CustomerServices';
import Counters from '../components/home/counters/Counters';
import Title from '../components/utils/title/Title';
import { Col, Row } from 'react-bootstrap';
import images from '../public/assets/images';
import Image from 'next/image';
import Link from 'next/link';
import { LuPhoneCall } from 'react-icons/lu';
import { FaEnvelopeSquare } from 'react-icons/fa';
import BlogSlider from '../components/BlogSlider/BlogSlider';
import LicenseSlider from '../components/LicenseSlider/LicenseSlider';
import CustomerVoiceFormClient from '../components/CustomerVoiceFormClient/CustomerVoiceFormClient';
import Script from 'next/script';

// ✅ متادیتا اختصاصی صفحه خدمات پس از فروش
export const metadata = {
  title: "خدمات پس از فروش کوشافن پارس | پشتیبانی و رضایت مشتری",
  description:
    "در بخش خدمات پس از فروش کوشافن پارس، بهترین پشتیبانی و خدمات تخصصی را برای دندانپزشکان و مراکز درمانی ارائه می‌دهیم.",
  keywords: ["خدمات پس از فروش", "پشتیبانی مشتری", "کوشافن پارس", "خدمات دندانپزشکی"],
  alternates: {
    canonical: "https://yourdomain.com/customer-services",
  },
  openGraph: {
    title: "خدمات پس از فروش کوشافن پارس | پشتیبانی حرفه‌ای",
    description:
      "بخش خدمات پس از فروش کوشافن پارس با هدف جلب رضایت مشتریان و ارائه پشتیبانی تخصصی در حوزه تجهیزات دندانپزشکی.",
    url: "https://yourdomain.com/customer-services",
    images: [
      {
        url: "/og-customer-service.jpg",
        width: 1200,
        height: 630,
        alt: "خدمات پس از فروش کوشافن پارس",
      },
    ],
    locale: "fa_IR",
    type: "article",
  },
};

const CustomerServicePage = () => {
  return (
    <>
      {/* ✅ Structured Data برای بخش خدمات */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "خدمات پس از فروش کوشافن پارس",
            description: "پشتیبانی و خدمات تخصصی تجهیزات دندانپزشکی",
            provider: {
              "@type": "Organization",
              name: "کوشافن پارس",
              url: "https://yourdomain.com",
            },
          }),
        }}
      />

      {/* ✅ H1 اصلی صفحه */}
      <h1 className="text-center mt-4 visually-hidden">خدمات پس از فروش کوشافن پارس</h1>

      {/* ✅ متن کلیدی برای سئو */}
      <p className="text-center px-3 mb-4 visually-hidden">
        بخش خدمات پس از فروش کوشافن پارس با هدف جلب رضایت دندانپزشکان و مراکز درمانی، 
        پشتیبانی تخصصی، تعمیرات و آموزش‌های لازم را در کوتاه‌ترین زمان ممکن ارائه می‌دهد.
      </p>

      <CustomerServices />

      <div className="mt-lg-5 mt-3" style={{ backgroundColor: '#f1f8ff' }}>
        <Counters />
      </div>

      <div className="row align-items-center mt-lg-5 mt-3">
        <div className="col-lg-8">
          <Title title={'معرفی خدمات پشتیبانی'} />
          <p className="text-justify py-2">
            امروز ساختار مجموعه کوشافن پارس بر پایه تعامل با مشتریان و ارائه بهترین خدمات پس از فروش است.
            هدف ما پشتیبانی کامل از تجهیزات دندانپزشکی و رفع نیازهای مشتریان در کوتاه‌ترین زمان ممکن می‌باشد.
          </p>

          {/* ✅ لینک‌های تماس بهینه شده */}
          <div className="d-flex align-items-center gap-lg-4 border-0 bg-transparent px-0">
            <Link href="tel:0214420806" className="btn btn-light p-2 py-3 fs-5 d-flex align-items-center gap-2">
              <LuPhoneCall className="textColor fs-4" /> 021-4420806
            </Link>
            <Link href="mailto:info@yourdomain.com" className="btn btn-light p-2 py-3 fs-5 d-flex align-items-center gap-2">
              <FaEnvelopeSquare className="textColor fs-4" /> info@yourdomain.com
            </Link>
          </div>
        </div>

        {/* ✅ تصاویر با alt بهینه */}
        <div className="col-lg-4 mt-4 mt-lg-0">
          <Row className="g-2">
            <Col md={4} className="p-0">
              <Row>
                <Col md={12}>
                  <span className="p-1 d-block">
                    <Image src={images.event_image} alt="خدمات پس از فروش کوشافن پارس 1" className="rounded w-100 h-100" />
                  </span>
                </Col>
                <Col md={12}>
                  <span className="p-1 d-block">
                    <Image src={images.event_image} alt="پشتیبانی مشتری کوشافن پارس" className="rounded w-100 h-100" />
                  </span>
                </Col>
              </Row>
            </Col>
            <Col md={8} className="p-0">
              <span className="p-1 d-block">
                <Image src={images.event_image} alt="تیم خدمات مشتری کوشافن پارس" className="rounded w-100 h-100" />
              </span>
            </Col>
          </Row>
        </div>
      </div>

      {/* ✅ اسلایدرهای بخش‌های دیگر */}
      <div className="row align-items-center mt-lg-3 mt-3">
        <div className="col-lg-12"><BlogSlider /></div>
      </div>

      <div className="row align-items-center mt-lg-3 mt-3">
        <div className="col-lg-12"><LicenseSlider /></div>
      </div>

      {/* ✅ فرم صدای مشتری */}
      <div className="row align-items-center mt-lg-3 mt-3">
        <div className="col-lg-11 m-auto">
          <div className="p-3 rounded">
            <span className="d-flex align-items-center gap-2 mt-lg-3 mt-2">
              <Image src={images.chatIcon} alt="آیکون صدای مشتری" />
              <Title title={'صدای مشتری'} />
            </span>
            <h6 className="fw-normal fs-5 mt-lg-4 mt-2">نظر خود را درباره خدمات ما ثبت نمایید</h6>
            <CustomerVoiceFormClient />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerServicePage;
