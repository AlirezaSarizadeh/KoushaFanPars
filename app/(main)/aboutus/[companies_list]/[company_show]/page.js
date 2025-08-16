import RootLayout from '@/app/(main)/layout'
import Title from '@/app/(main)/components/utils/title/Title'
import images from '@/app/public/assets/images'
import Image from 'next/image'
import React from 'react'
import './companyshow.css'
import CompanyShowSlider from '@/app/(main)/components/AboutUs/CompanyShowSlider/CompanyShowSlider'

// SEO + sanitization
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import ClientOnly from '@/lib/ClientOnly'
import Script from 'next/script'

const window = new JSDOM('').window
const purify = createDOMPurify(window)

// ✅ متادیتا برای سئو
export async function generateMetadata({ params }) {
  const category_id = params.company_show

  const formData = new FormData()
  formData.append('category_id', category_id)

  const res = await fetch('https://api.kfp-dental.com/api/about_content', {
    method: 'POST',
    body: formData,
    cache: 'no-store'
  })

  const data = await res.json()
  const mainData = data[0] || {}

  return {
    title: mainData?.title1 || 'شرکت کوشافن پارس',
    description: mainData?.desc1?.slice(0, 160) || 'جزئیات معرفی شرکت کوشافن پارس',
    alternates: {
      canonical: `https://yourdomain.com/company/${category_id}`
    },
    openGraph: {
      title: mainData?.title1,
      description: mainData?.desc1,
      url: `https://yourdomain.com/company/${category_id}`,
      type: 'article',
      images: [
        {
          url: mainData?.gallery1?.[0] || images.company_1,
          width: 1200,
          height: 630,
          alt: mainData?.title1
        }
      ]
    }
  }
}

const Page = async ({ params }) => {
  const category_id = params.company_show

  const formData = new FormData()
  formData.append('category_id', category_id)

  const res = await fetch('https://api.kfp-dental.com/api/about_content', {
    method: 'POST',
    body: formData,
    next: { revalidate: 60 }
  })

  const data = await res.json()
  const mainData = data[0] || {}

  // sanitize
  const sanitizedTitle1 = purify.sanitize(mainData.title1 || '')
  const sanitizedDesc1 = purify.sanitize(mainData.desc1 || '')
  const sanitizedTitle2 = purify.sanitize(mainData.title2 || '')
  const sanitizedDesc2 = purify.sanitize(mainData.desc2 || '')
  const sanitizedTitle3 = purify.sanitize(mainData.title3 || '')
  const sanitizedDesc3 = purify.sanitize(mainData.desc3 || '')

  return (
    <>
      {/* ✅ Structured Data */}
      <Script
        id="company-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: sanitizedTitle1 || "شرکت کوشافن پارس",
            description: sanitizedDesc1 || "معرفی شرکت کوشافن پارس",
            url: `https://yourdomain.com/company/${category_id}`,
            logo: "https://yourdomain.com/logo.png",
          })
        }}
      />

      <div
        className='row align-items-center mt-lg-5 mt-4 p-lg-4 p-2 justify-content-center'
        style={{ background: '#104369', borderRadius: '25px' }}
      >
        {/* Main company box */}
        <div className='course-box-companies row p-lg-4 p-3 my-lg-3 my-2 justify-content-center col-lg-11'>
          <div className='col-md-5 position-relative companies-pic-col'>
            <Image
              src={images.company_1}
              width={1200}
              height={800}
              sizes='100vw'
              style={{ width: '100%', height: 'auto' }}
              alt={sanitizedTitle1 || "تصویر شرکت کوشافن پارس"}
            />
          </div>
          <div className='col-md-7 d-flex flex-column justify-content-center gap-lg-5 gap-3 align-items-between gap-2 course-box-desc text-white'>
            {/* H1 برای سئو */}
            {sanitizedTitle1 && <h1 className='fs-1 fw-bold'>{sanitizedTitle1}</h1>}
            {sanitizedDesc1 && (
              <ClientOnly>
                <p
                  className='text-mute opacity-75 text-justify'
                  dangerouslySetInnerHTML={{ __html: sanitizedDesc1 }}
                />
              </ClientOnly>
            )}
          </div>
        </div>

        {/* Sliders */}
        {sanitizedTitle2 && sanitizedDesc2 && mainData.gallery1?.length > 0 && (
          <ClientOnly>
            <CompanyShowSlider
              title={sanitizedTitle2}
              desc={sanitizedDesc2}
              gallery={mainData.gallery1}
            />
          </ClientOnly>
        )}

        {sanitizedTitle3 && sanitizedDesc3 && mainData.gallery2?.length > 0 && (
          <ClientOnly>
            <CompanyShowSlider
              title={sanitizedTitle3}
              desc={sanitizedDesc3}
              gallery={mainData.gallery2}
              flexDirection='row-reverse'
            />
          </ClientOnly>
        )}
      </div>
    </>
  )
}

export default Page
