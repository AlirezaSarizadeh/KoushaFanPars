import Hero from "./components/HeroCard/HeroCard";
import Counters from "./components/home/counters/Counters";
import CustomerServices from "./components/home/customerServices/CustomerServices";
import EducationCenter from "./components/home/EducationCenter/EducationCenter";
import Evenets from "./components/home/Events/Evenets";
import PopCourses from "./components/home/PopCourses/PopCourses";
import AnimatedAboutCard from "./components/AnimatedAboutCard/AnimatedAboutCard";
import MainSlider from "./components/home/MainSlider/MainSlider";
import Script from "next/script";
import Partners from "./components/home/partners/Partners";

// ✅ متادیتا اختصاصی صفحه اصلی
export const metadata = {
  title: "کوشافن پارس | تجهیزات و آموزش دندانپزشکی",
  description:
    "کوشافن پارس ارائه‌دهنده بهترین تجهیزات دندانپزشکی، دوره‌های آموزشی تخصصی و خدمات پشتیبانی حرفه‌ای برای دندانپزشکان.",
  keywords: ["تجهیزات دندانپزشکی", "آموزش دندانپزشکی", "کوشافن پارس"],
  alternates: {
    canonical: "https://yourdomain.com",
  },
  openGraph: {
    title: "کوشافن پارس | تجهیزات و آموزش دندانپزشکی",
    description:
      "بهترین تجهیزات و دوره‌های آموزش دندانپزشکی را از کوشافن پارس دریافت کنید.",
    url: "https://yourdomain.com",
    siteName: "KoushaFan Pars",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "کوشافن پارس",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="d-flex flex-column gap-lg-5 gap-3">
      {/* ✅ Structured Data برای برند */}
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "کوشافن پارس",
            url: "https://yourdomain.com",
            logo: "https://yourdomain.com/logo.png",
            sameAs: [
              "https://instagram.com/yourbrand",
              "https://linkedin.com/company/yourbrand",
            ],
          }),
        }}
      />

      {/* ✅ H1 اصلی برای سئو */}
      <h1 className="text-center mt-3 visually-hidden">کوشافن پارس | تجهیزات و آموزش دندانپزشکی</h1>

      {/* ✅ متن کلیدی برای گوگل */}
      <p className="text-center px-3 visually-hidden">
        شرکت کوشافن پارس با سال‌ها تجربه در زمینه تجهیزات دندانپزشکی و برگزاری
        دوره‌های آموزشی تخصصی، بهترین خدمات را به دندانپزشکان و مراکز درمانی ارائه می‌دهد.
      </p>

      {/* ✅ سایر بخش‌های صفحه */}
      <MainSlider />
      <AnimatedAboutCard />
      <EducationCenter />
      <PopCourses />
      <CustomerServices />
      <Counters />
      <Partners />
      <Evenets />
    </div>
  );
}
