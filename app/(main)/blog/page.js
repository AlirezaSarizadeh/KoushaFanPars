import React from 'react';
import Title from '../components/utils/title/Title';
import Image from 'next/image';
import images from '../../public/assets/images';
import BlogList from '../components/Blog/BlogList/BlogList';
import Script from 'next/script';

// ✅ متادیتا اختصاصی صفحه دسته‌بندی وبلاگ
export const metadata = {
  title: "مجله کوشافن پارس | مقالات و رویدادهای دندانپزشکی",
  description:
    "مجله کوشافن پارس مجموعه‌ای از مقالات علمی، اخبار و رویدادهای دندانپزشکی و دندانسازی است. با دنبال کردن این بخش از جدیدترین دستاوردهای علمی و تکنولوژیکی مطلع شوید.",
  keywords: ["مجله دندانپزشکی", "مقالات دندانپزشکی", "رویدادهای دندانپزشکی", "کوشافن پارس"],
  alternates: {
    canonical: "https://yourdomain.com/blog",
  },
  openGraph: {
    title: "مجله کوشافن پارس | آخرین اخبار و مقالات دندانپزشکی",
    description:
      "آخرین مقالات علمی، رویدادها و اخبار دندانپزشکی را در مجله کوشافن پارس بخوانید.",
    url: "https://yourdomain.com/blog",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "مجله کوشافن پارس",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
};

export default async function BlogCategoriesPage() {
  const res = await fetch(`https://api.kfp-dental.com/api/article_categories`, {
    cache: 'no-store',
    method: 'POST',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch blog categories');
  }

  const data = await res.json();

  return (
    <>
      {/* ✅ Structured Data برای بلاگ */}
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "مجله کوشافن پارس",
            description:
              "مقالات علمی و رویدادهای دندانپزشکی از شرکت کوشافن پارس",
            url: "https://yourdomain.com/blog",
            publisher: {
              "@type": "Organization",
              name: "کوشافن پارس",
              logo: {
                "@type": "ImageObject",
                url: "https://yourdomain.com/logo.png",
              },
            },
          }),
        }}
      />

      {/* ✅ H1 اصلی صفحه */}
      <h1 className="text-center mt-4 visually-hidden">مجله کوشافن پارس | مقالات و رویدادها</h1>

      <div className="row align-items-center mt-lg-2 pt-lg-2 about-main-desc">
        <div className="col-lg-12 mt-lg-5 mt-4">
          <Title title={'دسته‌بندی مقالات و رویدادهای دندانپزشکی'} />

          <h2 className="fw-bold d-flex flex-column gap-3 mt-3">
            <span className="lead fs-3 fw-normal">آخرین اخبار و مقالات تخصصی</span>
            <span>دندانپزشکی و دندانسازی با رویکرد نوآورانه</span>
          </h2>

          <p className="text-justify py-2 lead">
            در مجله کوشافن پارس با جدیدترین دستاوردهای علمی، تکنولوژی‌های روز و اخبار صنعت
            دندانپزشکی آشنا شوید. همچنین می‌توانید مقالات تخصصی، رویدادها و گالری‌های نمایشگاهی ما را دنبال کنید.
          </p>
        </div>

        {/* ✅ آمار و تصاویر */}
        <div className="col-12 d-flex align-items-center justify-content-start gap-lg-4 gap-2 mt-lg-3 flex-column flex-lg-row">
          <span className="rounded-3 px-3 py-2 d-flex align-items-center gap-2 textColor fw-bold" style={{ background: '#bae0f5' }}>
            <Image src={images.blog_avatars} alt="کاربران مجله کوشافن پارس" />
            +1000 کاربر
          </span>

          <div className="d-flex gap-3 my-3">
            <div className="text-center textColor lead">
              <span className="fw-bold d-block" dir="ltr">+12k</span>
              <span>خواننده فعال</span>
            </div>
            <div className="text-center textColor lead">
              <span className="fw-bold d-block" dir="ltr">+500</span>
              <span>مقاله علمی</span>
            </div>
            <div className="text-center textColor lead">
              <span className="fw-bold d-block" dir="ltr">+50</span>
              <span>رویداد مهم</span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ لیست دسته‌بندی مقالات */}
      <div className="row align-items-center mt-lg-5 mt-2 py-lg-5 px-lg-4 p-2 justify-content-center" style={{ background: '#e4f0fd', borderRadius: '15px' }}>
        {data.map((item, index) => (
          <BlogList categoryId={item.id} key={index} heading={item.title} />
        ))}
      </div>
    </>
  );
}
