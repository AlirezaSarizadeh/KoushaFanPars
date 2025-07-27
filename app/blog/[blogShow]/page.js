// app/blog/[blogShow]/page.jsx

import React from 'react'
import RootLayout from '../../layout'
import Title from '../../components/utils/title/Title'
import Image from 'next/image'
import images from '../../public/assets/images'
import SimilarBlogs from '@/app/components/Blog/SimilarBlogs/SimilarBlogs'
import ProductReviews from '@/app/components/ProductReviews/ProductReviews'

// Import server-compatible DOMPurify
import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import BlogComment from '@/app/components/Blog/BlogComment/BlogComment'

// Create a DOMPurify instance using jsdom
const window = new JSDOM('').window
const purify = DOMPurify(window)

// ✅ Dynamic Metadata
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
    }
  }

  const data = await res.json();

  return {
    title: data?.title || 'عنوان نامشخص',
    description: data?.description || 'توضیحات مقاله',
    openGraph: {
      title: data?.title,
      description: data?.description,
      images: [data?.image],
    },
  }
}

// ✅ Page Component
export default async function Page({ params }) {
  const { blogShow } = await params;

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

  // Sanitize title and content
  const sanitizedTitle = purify.sanitize(data?.title || '')
  const sanitizedContent = purify.sanitize(data?.content || '')

  return (
    <>
      <div className='row align-items-center mt-lg-5 mt-4 py-lg-5 px-lg-4 p-2 justify-content-center' style={{ background: '#e4f0fd', borderRadius: '15px' }}>
        <div className='col-12 my-3'>
          <Image
            src={data?.image}
            alt="blog image"
            className="w-100 h-100"
            width={600}
            height={600}
            unoptimized
          />
        </div>

        <div className='col-12 d-flex flex-column gap-lg-4'>
          <div className='d-flex align-items-center justify-content-start gap-3 mt-lg-4'>
            <Title title={'مجله کوشافن پارس'} />
            <Image src={images.share_icon} alt='icon' />
          </div>
        </div>

        <div className='col-lg-12 mt-lg-3'>
          <h2 className='fw-bold d-flex flex-column gap-3 mt-3'>
            <span className='lead fs-3 fw-normal' dangerouslySetInnerHTML={{ __html: sanitizedTitle }} />
          </h2>
          <div className='text-justify py-2 lead' dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </div>

        <div className='col-lg-12 mt-lg-3'>
          <SimilarBlogs id={data.id} />
        </div>
      </div>

      <div className='row align-items-center mt-lg-5 mt-4 py-lg-5 px-lg-4 p-2 justify-content-center'>
        <div className='col-lg-9 mt-lg-5 mt-3 mx-auto'>
          <BlogComment id={data.id} />
        </div>
      </div>
    </>
  )
}
