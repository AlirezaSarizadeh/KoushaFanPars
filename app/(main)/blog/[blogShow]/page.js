import React from 'react';
import Title from '../../components/utils/title/Title';
import Image from 'next/image';
import SimilarBlogs from '../../components/Blog/SimilarBlogs/SimilarBlogs'; 
import BlogComment from '../../components/Blog/BlogComment/BlogComment'; 
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import Script from 'next/script';

const window = new JSDOM('').window;
const purify = DOMPurify(window);

// ✅ متادیتای کامل‌تر با Open Graph و Article Schema
export async function generateMetadata({ params }) {
  const { blogShow } = params;
  const formData = new FormData();
  formData.append('id', blogShow);

  const res = await fetch(`https://api.kfp-dental.com/api/article`, {
    method: 'POST',
    cache: 'no-store',
    body: formData,
  });

  if (!res.ok) {
    return {
      title: 'مقاله پیدا نشد',
      description: 'خطایی در دریافت اطلاعات مقاله رخ داده است.',
    };
  }

  const data = await res.json();

  return {
    title: data?.title || 'مقاله کوشافن پارس',
    description: data?.description || 'جزئیات مقاله تخصصی دندانپزشکی',
    keywords: [data?.title, "مقالات دندانپزشکی", "کوشافن پارس"],
    alternates: {
      canonical: `https://yourdomain.com/blog/${blogShow}`,
    },
    openGraph: {
      title: data?.title,
      description: data?.description,
      url: `https://yourdomain.com/blog/${blogShow}`,
      type: "article",
      images: [
        {
          url: data?.image,
          width: 1200,
          height: 630,
          alt: data?.title,
        },
      ],
    },
  };
}

// ✅ کامپوننت صفحه
export default async function BlogDetailPage({ params }) {
  const { blogShow } = params;
  const formData = new FormData();
  formData.append('id', blogShow);

  const res = await fetch(`https://api.kfp-dental.com/api/article`, {
    method: 'POST',
    cache: 'no-store',
    body: formData,
  });

  if (!res.ok) {
    throw new Error('Failed to fetch article data');
  }

  const data = await res.json();

  const sanitizedTitle = purify.sanitize(data?.title || '');
  const sanitizedContent = purify.sanitize(data?.content || '');

  return (
    <>
      {/* ✅ Structured Data Article */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: data?.title,
            description: data?.description,
            image: data?.image,
            author: {
              "@type": "Organization",
              name: "کوشافن پارس",
            },
            publisher: {
              "@type": "Organization",
              name: "کوشافن پارس",
              logo: {
                "@type": "ImageObject",
                url: "https://yourdomain.com/logo.png",
              },
            },
            datePublished: data?.created_at,
            dateModified: data?.updated_at,
          }),
        }}
      />

      <div className="row align-items-center mt-lg-5 mt-4 py-lg-5 px-lg-4 p-2 justify-content-center" style={{ background: '#e4f0fd', borderRadius: '15px' }}>
        <div className="col-12 my-3">
          <Image
            src={data?.image}
            alt={data?.title || "مقاله کوشافن پارس"}
            className="w-100 h-100 rounded"
            width={800}
            height={500}
            unoptimized
          />
        </div>

        <div className="col-12 d-flex flex-column gap-lg-4">
          <div className="d-flex align-items-center justify-content-between gap-3 mt-lg-4">
            <Title title={'مجله کوشافن پارس'} />
            {/* 🔗 دکمه اشتراک‌گذاری لینک */}
            {/* <button
              className="btn btn-outline-primary"
              onClick={() => navigator.clipboard.writeText(`https://yourdomain.com/blog/${blogShow}`)}
            >
              اشتراک‌گذاری
            </button> */}
          </div>
        </div>

        {/* ✅ H1 برای عنوان مقاله */}
        <div className="col-lg-12 mt-lg-3">
          <h1 className="fw-bold mt-3" dangerouslySetInnerHTML={{ __html: sanitizedTitle }} />
          <div className="text-justify py-2 lead" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </div>

        {/* ✅ مقالات مشابه */}
        <div className="col-lg-12 mt-lg-3">
          <SimilarBlogs id={data.id} />
        </div>
      </div>

      {/* ✅ بخش نظرات */}
      <div className="row align-items-center mt-lg-5 mt-4 py-lg-5 px-lg-4 p-2 justify-content-center">
        <div className="col-lg-9 mt-lg-5 mt-3 mx-auto">
          <BlogComment id={data.id} />
        </div>
      </div>
    </>
  );
}
