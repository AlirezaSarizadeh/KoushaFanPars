import Title from '@/app/(main)/components/utils/title/Title'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import './aboutcompanies.css'

// SEO
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import Script from 'next/script'

const window = new JSDOM('').window
const purify = createDOMPurify(window)

// ✅ متادیتا برای کل صفحه
export async function generateMetadata() {
  return {
    title: 'درباره شرکت کوشافن پارس',
    description:
      'شرکت تولیدی مهندسی دانش بنیان کوشافن پارس در زمینه تولید تجهیزات دندانپزشکی و فناوری‌های نوین فعالیت دارد.',
    alternates: {
      canonical: 'https://yourdomain.com/aboutus',
    },
    openGraph: {
      title: 'درباره شرکت کوشافن پارس',
      description:
        'معرفی شرکت تولیدی مهندسی دانش بنیان کوشافن پارس و دسته‌بندی شرکت‌های وابسته.',
      url: 'https://yourdomain.com/aboutus',
      type: 'website',
      images: [
        {
          url: 'https://yourdomain.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'درباره شرکت کوشافن پارس',
        },
      ],
    },
  }
}

export default async function Page({ params }) {
  const { companies_list } = params // current URL segment, e.g. '1'

  const res = await fetch('https://api.kfp-dental.com/api/about_categories', {
    cache: 'no-store',
    method: 'POST',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch companies')
  }

  const companies = await res.json()

  return (
    <>
      {/* ✅ Structured Data */}
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'درباره شرکت کوشافن پارس',
            description:
              'شرکت تولیدی مهندسی دانش بنیان کوشافن پارس در زمینه تولید تجهیزات دندانپزشکی و فناوری‌های نوین فعالیت دارد.',
            url: 'https://yourdomain.com/aboutus',
          }),
        }}
      />

      {/* Main About Section */}
      <div className="row align-items-center mt-lg-2 pt-lg-2 about-main-desc">
        <div className="col-lg-12 mt-lg-5 mt-4">
          <Title as="h1" title="درباره" />
          <h2 className="fw-bold d-flex flex-column gap-3 mt-3">
            <span className="lead fs-3 fw-normal">شرکت تولیدی مهندسی</span>
            دانش بنیان کوشـافن پارس
          </h2>
          <p className="text-justify py-2 lead">
            شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات
            دندانپزشـکي...
          </p>
        </div>
      </div>

      {/* Companies List */}
      <div
        className="row align-items-center mt-lg-5 mt-2 p-lg-4 p-2 justify-content-center"
        style={{ background: '#e4f0fd', borderRadius: '25px' }}
      >
        {companies.map((company) => {
          const sanitizedTitle = purify.sanitize(company.title || '')
          const sanitizedDesc = purify.sanitize(company.desc || '')

          return (
            <div
              key={company.id}
              className="courses-box course-box-companies row p-lg-4 p-3 my-lg-3 my-2 justify-content-center col-lg-11"
            >
              {/* Image */}
              <div className="col-md-5 position-relative companies-pic-col">
                <Image
                  src={`${company.image}`}
                  width={1200}
                  height={800}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt={sanitizedTitle}
                />
              </div>

              {/* Content */}
              <div className="col-md-7 d-flex flex-column justify-content-center gap-lg-5 gap-3 align-items-between gap-2 course-box-desc">
                <h2 className="fs-1 fw-bold">{sanitizedTitle}</h2>
                <div
                  className="text-muted"
                  dangerouslySetInnerHTML={{ __html: sanitizedDesc }}
                />
                <Link
                  className="ms-auto mt-lg-4 mt-3"
                  href={`/aboutus/${companies_list}/${company.id}`} // ✅ append to current id
                >
                  مطالعه بیشتر
                  <FaArrowLeft className="ms-2" style={{ fontWeight: '100' }} />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
