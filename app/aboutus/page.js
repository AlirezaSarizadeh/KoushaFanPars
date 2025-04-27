
import React from 'react'
import RootLayout from '../(main)/layout'
import AnimatedAboutCard from '../components/AnimatedAboutCard/AnimatedAboutCard'
import EducationCenter from '../components/home/EducationCenter/EducationCenter'
import Button from '../components/utils/button/Button'
import Title from '../components/utils/title/Title'
import Lead from '../components/utils/lead/Lead'
import './aboutus.css'
import CompaniesSlider from '../components/AboutUs/CompaniesSlider/CompaniesSlider'
import dynamic from "next/dynamic";
import Timeline from '../components/AboutUs/Timeline/Timeline'
import TimelineContainer from '../components/AboutUs/TimelineContainer/TimelineContainer'
import dynamic from "next/dynamic";

const Chrono = dynamic(() => import("react-chrono").then((mod) => mod.Chrono), {
  ssr: false,
});

const page = () => {

  return (
    <RootLayout>
      <EducationCenter />

      <AnimatedAboutCard />

      <div className='row align-items-center mt-lg-5 pt-lg-5 about-main-desc'>
        <div className='col-lg-12 mt-lg-5'>
          <Title title={'معرفی'} />
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
      

    </RootLayout>
  )
}

export default page
