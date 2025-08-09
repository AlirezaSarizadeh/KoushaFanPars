// app/job-opportunity/page.tsx
import React from 'react';
import Title from '../components/utils/title/Title';
import Lead from '../components/utils/lead/Lead';
import Button from '../components/utils/button/Button';
import Image from 'next/image';
import images from '../../public/assets/images';
import CounterBox from '../components/utils/counterBox/CounterBox';
import JobOpsStepCard from '../components/JobOpStepsCard/JobOpsStepCard';
import JobNeeds from '../components/JobNeeds/JobNeeds';
import Script from 'next/script';
import './jobOpportunity.css';

// ✅ Metadata ثابت برای صفحه اصلی فرصت‌های شغلی
export const metadata = {
  title: 'فرصت‌های شغلی - کوشافن پارس',
  description:
    'آخرین فرصت‌های شغلی شرکت دانش‌بنیان کوشافن پارس را مشاهده کنید و رزومه خود را برای پیوستن به تیم ما ارسال نمایید.',
  keywords: ['استخدام', 'فرصت شغلی', 'کوشافن پارس', 'استخدام دندانپزشکی', 'استخدام لابراتوار'],
  openGraph: {
    title: 'فرصت‌های شغلی - کوشافن پارس',
    description:
      'به تیم کوشافن پارس بپیوندید! فرصت‌های شغلی متنوع در حوزه دندانپزشکی و تجهیزات لابراتوار.',
    url: 'https://example.com/job-opportunity',
    siteName: 'KFP Dental',
    images: [
      {
        url: '/assets/images/job-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'فرصت شغلی کوشافن پارس',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://example.com/job-opportunity',
  },
};

const JobOpportunityPage = () => {
  // ✅ داده نمونه برای اسکیما
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KFP Dental",
    "url": "https://example.com",
    "logo": "https://example.com/assets/images/logo.png",
    "sameAs": ["https://www.instagram.com/kfp", "https://www.linkedin.com/company/kfp"],
  };

  return (
    <>
      {/* ✅ Structured Data */}
      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      {/* ✅ محتوای صفحه */}
      <div className="row align-items-center justify-content-center mt-lg-5 mt-4">
        <div className="col-lg-8">
          <Title title={'فرصت شغلی'} />
          <Lead boldText={'استخدام منابع انسانی'} lightText={'شرکت دانش بنیان کوشافن پارس استخدام می‌کند'} />
          <p className="text-justify py-2">
            مرکز آموزش کوشافن پارس، دروازه ورود به دنیای نوین دندانپزشکی است. با ارائه دوره‌های متنوع و
            فرصت‌های شغلی، پاسخگوی نیازهای تمامی دندانپزشکان و دندانسازان هستیم. با یک ثبت‌نام ساده، به
            دنیایی از دانش و تجربه بپیوندید.
          </p>
          <div className="d-flex align-items-center gap-lg-4 border-0 bg-transparent px-0 justify-content-between justify-content-lg-start">
            <Button variant={'secondary'} title={'فرم استخدام'} />
            <Button variant={'primary'} title={'ارتباط با کارشناسان'} />
          </div>
        </div>
        <div className="col-lg-4 mt-4 mt-lg-0">
          <Image src={images.educateCenterPicture} alt="مرکز آموزش کوشافن پارس" className="w-100" />
        </div>
      </div>

      <section className="row row-cols-lg-4 row-cols-2 align-items-center py-lg-5 py-3 container-custom mt-lg-5 mt-3">
        <CounterBox targetNumber={340} label="پوشش مراکز درمانی" icon={images.counterIcon1} />
        <CounterBox targetNumber={70} label="تجهیز لابراتوارهای کشور" icon={images.counterIcon2} />
        <CounterBox targetNumber={20} label="سال سابقه خدماتی" icon={images.counterIcon3} />
        <CounterBox targetNumber={20} label="نمایندگی استانی در کشور" icon={images.counterIcon4} />
      </section>

      <section className="row row-cols-lg-4 row-cols-1 align-items-center py-lg-5 py-4 container-custom mt-lg-5 mt-3 w-100 m-auto" style={{ background: '#f1f2f4' }}>
        <Title className="col-12 w-100 mb-3" title={'مراحل استخدام'} />
        <JobOpsStepCard />
        <JobOpsStepCard />
        <JobOpsStepCard />
        <JobOpsStepCard />
      </section>

      <JobNeeds />
    </>
  );
};

export default JobOpportunityPage;
