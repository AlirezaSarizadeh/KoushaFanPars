import React from 'react';
import ContactUsBox from '../components/ContactUs/ContactUsBox/ContactUsBox';
import Script from 'next/script';

// ✅ متادیتای کامل برای صفحه تماس با ما
export const metadata = {
  title: "تماس با ما | کوشافن پارس",
  description: "با شرکت کوشافن پارس تماس بگیرید. اطلاعات تماس، آدرس دفتر مرکزی و پشتیبانی مشتریان.",
  keywords: ["تماس با کوشافن پارس", "آدرس کوشافن پارس", "پشتیبانی دندانپزشکی"],
  alternates: {
    canonical: "https://yourdomain.com/contact",
  },
  openGraph: {
    title: "تماس با ما | کوشافن پارس",
    description: "شماره تماس، آدرس و ایمیل شرکت کوشافن پارس برای ارتباط با بخش پشتیبانی.",
    url: "https://yourdomain.com/contact",
    type: "website",
  },
};

const ContactPage = () => {
  return (
    <>
      {/* ✅ Structured Data LocalBusiness */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "کوشافن پارس",
            image: "https://yourdomain.com/logo.png",
            telephone: "+98214420806",
            email: "info@kfp-dental.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "تهران، خیابان ...",
              addressLocality: "Tehran",
              postalCode: "1234567890",
              addressCountry: "IR",
            },
            url: "https://yourdomain.com",
            sameAs: [
              "https://www.instagram.com/yourpage",
              "https://www.linkedin.com/company/yourpage"
            ]
          }),
        }}
      />

      {/* ✅ H1 برای عنوان اصلی صفحه */}
      <h1 className="text-center my-4 visually-hidden">تماس با کوشافن پارس</h1>

      {/* ✅ توضیح کوتاه برای سئو */}
      <p className="text-center lead visually-hidden">
        برای ارتباط با بخش پشتیبانی و دریافت اطلاعات محصولات و خدمات، از راه‌های زیر با ما در تماس باشید.
      </p>

      {/* ✅ کامپوننت اصلی فرم و اطلاعات تماس */}
      <ContactUsBox />
    </>
  );
};

export default ContactPage;
