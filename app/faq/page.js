import RootLayout from '../layout'
import Title from '../components/utils/title/Title'
import FaqBox from '../components/FaqBox/FaqBox'
import Script from 'next/script'

export const metadata = {
  title: "سوالات متداول | کوشافن پارس",
  description: "پاسخ به سوالات متداول دندانپزشکان و دندانسازان در کوشافن پارس.",
  openGraph: {
    title: "سوالات متداول | کوشافن پارس",
    description: "مرجع کامل سوالات متداول درباره دوره‌ها و تکنیک‌های دندانپزشکی.",
    url: "https://kfp-dental.com/faq",
    siteName: "KFP Dental",
    type: "website",
    images: [
      {
        url: "https://kfp-dental.com/assets/images/faq-banner.jpg",
        width: 1200,
        height: 630,
        alt: "سوالات متداول کوشافن پارس"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "سوالات متداول | کوشافن پارس",
    description: "پاسخ به سوالات متداول دندانپزشکان و دندانسازان در کوشافن پارس.",
    images: ["https://kfp-dental.com/assets/images/faq-banner.jpg"]
  },
  alternates: { canonical: "https://kfp-dental.com/faq" }
}

async function getFaqData() {
  const res = await fetch('https://api.kfp-dental.com/api/question_and_answer', {
    next: { revalidate: 3600 },
    method:'POST'
  });
  if (!res.ok) throw new Error('❌ Failed to fetch FAQ data');
  return res.json();
}

export default async function Page() {
  const faqData = await getFaqData();

  const faqSchema = Object.entries(faqData).flatMap(([cat, items]) =>
    items.map(item => ({
      "@type": "Question",
      "name": item.title,
      "acceptedAnswer": { "@type": "Answer", "text": item.desc }
    }))
  );

  return (
    <main role="main">
      <Script id="faq-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqSchema
          })
        }}
      />

      <section className="row align-items-center justify-content-start mt-lg-5 mt-4" aria-labelledby="faq-page-title">
        <div className="col-lg-8 mt-lg-5 mt-3">
          <Title as="h1" title="سوالات متداول" />
          <div className="text-justify py-4" lang="fa" dir="rtl">
            مرکز آموزش کوشافن پارس، دروازه ورود به دنیای نوین دندانپزشکی است. این مرکز جامع آموزشی...
          </div>
        </div>
      </section>

      <section className="row align-items-center mt-lg-5 mt-2 p-lg-4 p-2 justify-content-center"
        style={{ background: '#e4f0fd', borderRadius: '15px' }}
        aria-label="سوالات متداول کوشافن پارس">
        <FaqBox data={faqData} />
      </section>
    </main>
  );
}
