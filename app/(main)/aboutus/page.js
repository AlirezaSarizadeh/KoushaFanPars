
import React from 'react'
import RootLayout from '../layout'
import AnimatedAboutCard from '../components/AnimatedAboutCard/AnimatedAboutCard'
import EducationCenter from '../components/home/EducationCenter/EducationCenter'
import Button from '../components/utils/button/Button'
import Title from '../components/utils/title/Title'
import Lead from '../components/utils/lead/Lead'
import './aboutus.css'
import CompaniesSlider from '../components/AboutUs/CompaniesSlider/CompaniesSlider'
import Image from 'next/image'
import images from '../../public/assets/images'
import Timeline from '../components/AboutUs/TimeLine/TimeLine'
import Script from 'next/script'

// ✅ متادیتا مخصوص این صفحه
export const generateMetadata = () => {
  return {
    title: 'درباره کوشافن پارس | شرکت تولیدی مهندسی دانش بنیان',
    description:
      'شرکت تولیدی مهندسی کوشافن پارس در زمینه تولید تجهیزات دندانپزشکی و دندانسازی فعالیت دارد و بزرگترین تولیدکننده تجهیزات این حوزه در کشور است.',
    alternates: {
      canonical: 'https://yourdomain.com/aboutus',
    },
    openGraph: {
      title: 'درباره کوشافن پارس',
      description:
        'معرفی شرکت تولیدی مهندسی کوشافن پارس و محصولات دندانپزشکی و دندانسازی این شرکت.',
      url: 'https://yourdomain.com/aboutus',
      type: 'website',
      images: [
        {
          url: 'https://yourdomain.com/og-aboutus.jpg',
          width: 1200,
          height: 630,
          alt: 'شرکت کوشافن پارس',
        },
      ],
    },
  }
}



const page = () => {


  return (

    <>
    <Script
        id="aboutus-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'کوشافن پارس',
            url: 'https://yourdomain.com/aboutus',
            logo: 'https://yourdomain.com/logo.png',
            description:
              'شرکت تولیدی مهندسی دانش بنیان کوشافن پارس تولیدکننده تجهیزات و لوازم دندانپزشکی و دندانسازی در ایران.',
            sameAs: [
              'https://www.linkedin.com/company/kfp',
              'https://www.instagram.com/kfp',
            ],
          }),
        }}
      />


      <Image src={images.about_us_hero} className='w-100 h-100 mt-lg-5 mt-4' alt='about us hero' />

      <AnimatedAboutCard />

      <div className='row align-items-center mt-lg-5 pt-lg-5 mt-4 pt-4 about-main-desc'>
        <div className='col-lg-12 mt-lg-5'>
          {/* <Title title={'معرفی'} /> */}
          <Title as="h1" title="معرفی" />

          <h2 className='fw-bold d-flex flex-column gap-3 mt-3'>
            <span className='lead fs-3 fw-normal'>
              شرکت تولیدی مهندسی
            </span>
            دانش بنیان کوشـافن پارس
          </h2>
          <p className='text-justify py-2 lead'>
            شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید. کوشـا فـن پـارس بزرگترین تولیـد کننده تجهیـزات و لوازم دندانپزشـکی و دندانسـازی در کشـور مـی باشـد کـه بـا سـرمایه گـذاری در بخـش تحقیـق و توسـعه و با هدف توسـعه فنـاوری در زمینـه طراحـی، سـاخت و تولیـد تجهیـزات مرتبـط بـا صنعت دندانپزشـکی و دندانسـازی فعالیت دارد. هـم اکنون محصـولات تولیدی این شرکت با بالاتریـن کیفیت و قیمت رقابتی نسـبت بـه سـایر برندهـای هم تـراز خود در دنیـا مورد اسـتفاده مصـرف کنندگان قـرار می گیرد. کوره های دندانسازی شامل کوره پرسلن AT 100 و AT 300 تمام اتوماتیک، کوره پرس AT 300P تمام اتوماتیک، کوره پرسلن AT 3000 تمام اتوماتیک، کوره های حذف موم سیلندر، کوره گلیزر، کوره زینترینگ زیرکونیا است. میزهای تولیدی این شرکت به دو گروه لابراتواری و آموزشی کلینیکی تقسیم می شودشـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید. کوشـا فـن پـارس بزرگترین تولیـد کننده تجهیـزات و لوازم دندانپزشـکی و دندانسـازی در کشـور مـی باشـد کـه بـا سـرمایه گـذاری در بخـش تحقیـق و توسـعه و با هدف توسـعه فنـاوری در زمینـه طراحـی، سـاخت و تولیـد تجهیـزات مرتبـط بـا صنعت دندانپزشـکی و دندانسـازی فعالیت دارد. هـم اکنون محصـولات تولیدی این شرکت با بالاتریـن کیفیت و قیمت رقابتی نسـبت بـه سـایر برندهـای هم تـراز خود در دنیـا مورد اسـتفاده مصـرف کنندگان قـرار می گیرد. کوره های دندانسازی شامل کوره پرسلن AT 100 و AT 300 تمام اتوماتیک، کوره پرس AT 300P تمام اتوماتیک، کوره پرسلن AT 3000 تمام اتوماتیک، کوره های حذف موم سیلندر، کوره گلیزر، کوره زینترینگ زیرکونیا است. میزهای تولیدی این شرکت به دو گروه لابراتواری و آموزشی کلینیکی تقسیم می شود
            تولیـد کننده تجهیـزات و لوازم دندانپزشـکی و دندانسـازی در کشـور مـی باشـد کـه بـا سـرمایه گـذاری در بخـش تحقیـق و توسـعه و با هدف توسـعه فنـاوری در زمینـه طراحـی، سـاخت و تولیـد تجهیـزات مرتبـط بـا صنعت دندانپزشـکی و دندانسـازی فعالیت دارد. هـم اکنون محصـولات تولیدی این شرکت با بالاتریـن کیفیت و قیمت رقابتی نسـبت بـه سـایر برندهـای هم تـراز خود در دنیـا مورد اسـتفاده مصـرف کنندگان قـرار می گیرد. کوره های دندانسازی شامل کوره پرسلن AT 100 و AT 300 تمام اتوماتیک، کوره پرس AT 300P تمام اتوماتیک، کوره پرسلن AT 3000 تمام اتوماتیک، کوره های حذف موم سیلندر، کوره گلیزر، کوره زینترینگ زیرکونیا است. میزهای تولیدی این شرکت به دو گروه لابراتواری و آموزشی کلینیکی تقسیم می شود
          </p>
        </div>
      </div>

      <CompaniesSlider />

      <Timeline />

    </>

  )
}

export default page
