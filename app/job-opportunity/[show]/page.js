import RootLayout from '@/app/layout'
import Button from '@/app/components/utils/button/Button'
import Lead from '@/app/components/utils/lead/Lead'
import Title from '@/app/components/utils/title/Title'
import images from '@/app/public/assets/images'
import Image from 'next/image'
import React from 'react'
import '../jobOpportunity.css'
import UploadResume from '@/app/components/UploadResume/UploadResume'
import Script from 'next/script';

export const metadata = {
    title: 'کارشناس بازرگانی | فرصت شغلی کوشافن پارس',
    description:
        'به عنوان کارشناس بازرگانی به تیم کوشافن پارس بپیوندید. این فرصت شغلی ویژه افراد باانگیزه و علاقه‌مند به رشد در صنعت تجهیزات دندانپزشکی است.',
    openGraph: {
        title: 'کارشناس بازرگانی | فرصت شغلی کوشافن پارس',
        description:
            'شرکت دانش‌بنیان کوشافن پارس به دنبال جذب نیروی متخصص بازرگانی است. همین حالا رزومه خود را ارسال کنید.',
        url: 'https://example.com/job-opportunity/detail',
        images: [{ url: '/assets/images/job-default.jpg', alt: 'فرصت شغلی کوشافن پارس' }],
        type: 'article',
    },
    alternates: { canonical: 'https://example.com/job-opportunity/detail' },
};

// ✅ JobPosting Schema استاتیک
const jobSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "کارشناس بازرگانی",
    "description": "فرصت شغلی برای کارشناس بازرگانی در شرکت دانش‌بنیان کوشافن پارس. ارسال رزومه و پیوستن به تیم متخصص ما.",
    "datePosted": "2025-07-28",
    "employmentType": "Full-time",
    "hiringOrganization": {
        "@type": "Organization",
        "name": "KFP Dental",
        "sameAs": "https://example.com",
        "logo": "https://example.com/assets/images/logo.png"
    },
    "jobLocation": {
        "@type": "Place",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "شهرک غرب",
            "addressLocality": "تهران",
            "addressCountry": "IR"
        }
    }
};



const page = () => {
    return (
        <>

            {/* ✅ Structured Data */}
            <Script id="jobposting-schema" type="application/ld+json">
                {JSON.stringify(jobSchema)}
            </Script>

            <div className='row align-items-center justify-content-center mt-lg-5 mt-4'>
                <div className='col-lg-4 col-6'>
                    <Image src={images.departmentOne} alt='educate picture' className='w-100 h-100' />
                </div>
                <div className='col-lg-8'>
                    <Title title={'فرصت شغلی'} />
                    <Lead boldText={'استخدام منابع انسانی'} lightText={'شرکت دانش بنیان کوشافن پارس استخدام می کند'} />
                    <p className='text-justify py-2'>
                        مرکز آموزش کوشافن پارس، دروازه ورود به دنیای نوین دندانپزشکی است. این مرکز جامع آموزشی، با ارائه دوره‌های متنوع در سطوح مبتدی، نیمه پیشرفته و پیشرفته، پاسخگوی نیازهای تمام دندانپزشکان و دندانسازان است. چه تازه وارد دنیای دندانپزشکی باشید و چه سال‌ها تجربه داشته باشید، در کوشافن پارس، دوره‌ای متناسب با سطح دانش و مهارت خود خواهید یافت. تنها با یک ثبت‌نام ساده، به دنیایی از دانش و تجربه دسترسی پیدا خواهید کرد و می‌توانید مهارت‌های خود را ارتقا داده و با آخرین تکنیک‌ها و فناوری‌های روز دنیا آشنا شوید.
                    </p>
                </div>
            </div>
            <div className='row align-items-center justify-content-start mt-lg-5 p-lg-4 p-2' style={{ background: '#f3f7fa', paddingBottom: '200px !important' }}>
                <div className='col-lg-4 col-6'>
                    <div className='py-3 px-2 d-flex flex-column align-items-satrt gap-3'>
                        <span className='fs-6 f-bold'>
                            دسته بندی شغلی :
                        </span>
                        <span className='w-50 float-start border border-2 border-primary-subtle rounded rounded-2 py-2 px-4 d-flex align-items-center justify-content-center fw-light fs-6 job-ops-unit'>
                            بازرگانی
                        </span>
                    </div>
                </div>
                <div className='col-lg-4 col-6'>
                    <div className='py-3 px-2 d-flex flex-column align-items-satrt gap-3'>
                        <span className='fs-6 f-bold'>
                            دسته بندی شغلی :
                        </span>
                        <span className='w-50 float-start border border-2 border-primary-subtle rounded rounded-2 py-2 px-4 d-flex align-items-center justify-content-center fw-light fs-6 job-ops-unit'>
                            بازرگانی
                        </span>
                    </div>
                </div>
                <div className='col-lg-4 col-6'>
                    <div className='py-3 px-2 d-flex flex-column align-items-satrt gap-3'>
                        <span className='fs-6 f-bold'>
                            دسته بندی شغلی :
                        </span>
                        <span className='w-50 float-start border border-2 border-primary-subtle rounded rounded-2 py-2 px-4 d-flex align-items-center justify-content-center fw-light fs-6 job-ops-unit'>
                            بازرگانی
                        </span>
                    </div>
                </div>
                <div className='col-lg-4 col-6'>
                    <div className='py-3 px-2 d-flex flex-column align-items-satrt gap-3'>
                        <span className='fs-6 f-bold'>
                            دسته بندی شغلی :
                        </span>
                        <span className='w-50 float-start border border-2 border-primary-subtle rounded rounded-2 py-2 px-4 d-flex align-items-center justify-content-center fw-light fs-6 job-ops-unit'>
                            بازرگانی
                        </span>
                    </div>
                </div>
                <div className='col-lg-4 col-6'>
                    <div className='py-3 px-2 d-flex flex-column align-items-satrt gap-3'>
                        <span className='fs-6 f-bold'>
                            دسته بندی شغلی :
                        </span>
                        <span className='w-50 float-start border border-2 border-primary-subtle rounded rounded-2 py-2 px-4 d-flex align-items-center justify-content-center fw-light fs-6 job-ops-unit'>
                            بازرگانی
                        </span>
                    </div>
                </div>
                <div className='col-lg-4 col-6'>
                    <div className='py-3 px-2 d-flex flex-column align-items-satrt gap-3'>
                        <span className='fs-6 f-bold'>
                            دسته بندی شغلی :
                        </span>
                        <span className='w-50 float-start border border-2 border-primary-subtle rounded rounded-2 py-2 px-4 d-flex align-items-center justify-content-center fw-light fs-6 job-ops-unit'>
                            بازرگانی
                        </span>
                    </div>
                </div>

                <div className='col-lg-12 mt-lg-5 mt-2 py-lg-5 py-3'>
                    <Title title={'شرح موقعیت شغلی'} />
                    <p className='text-justify mt-lg-4 mt-3' style={{ lineHeight: '2.2' }}>
                        امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
                        امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
                    </p>
                </div>

                <div className='col-lg-12 mt-lg-5 mt-2 py-lg-5 py-3'>
                    <Title title={'معرفی شرکت'} />
                    <p className='text-justify mt-lg-4 mt-3' style={{ lineHeight: '2.2' }}>
                        امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
                        امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
                    </p>
                </div>

                <div className='col-lg-6 mt-3 py-3' >
                    <div className='py-3 px-2 d-flex flex-column align-items-satrt gap-3'>
                        <span className='fs-6 f-bold'>
                            مهارت های مورد نیاز :
                        </span>
                        <div className='d-flex gap-2'>
                            <span className='w-25 float-start border border-2 border-primary-subtle rounded rounded-2 py-2 px-4 d-flex align-items-center justify-content-center fw-light fs-6'>
                                بازرگانی
                            </span>
                            <span className='w-25 float-start border border-2 border-primary-subtle rounded rounded-2 py-2 px-4 d-flex align-items-center justify-content-center fw-light fs-6'>
                                بازرگانی
                            </span>
                            <span className='w-25 float-start border border-2 border-primary-subtle rounded rounded-2 py-2 px-4 d-flex align-items-center justify-content-center fw-light fs-6'>
                                بازرگانی
                            </span>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 mt-3 py-3' >
                    <div className='py-3 px-2 d-flex flex-column align-items-satrt gap-3'>
                        <span className='fs-6 f-bold'>
                            جنسیت
                        </span>
                        <div className='d-flex gap-2'>
                            <span className='w-25 float-start border border-2 border-primary-subtle rounded rounded-2 py-2 px-4 d-flex align-items-center justify-content-center fw-light fs-6'>
                                مهم نیست
                            </span>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 mt-3 py-3' >
                    <div className='py-3 px-2 d-flex flex-column align-items-satrt gap-3'>
                        <span className='fs-6 f-bold'>
                            آخرین مدرک تحصیلی :
                        </span>
                        <div className='d-flex gap-2'>
                            <span className='w-25 float-start border border-2 border-primary-subtle rounded rounded-2 py-2 px-4 d-flex align-items-center justify-content-center fw-light fs-6'>
                                مهم نیست
                            </span>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 mt-3 py-3' >
                    <div className='py-3 px-2 d-flex flex-column align-items-satrt gap-3'>
                        <span className='fs-6 f-bold'>
                            وضعیت نظام وظیفه :
                        </span>
                        <div className='d-flex gap-2'>
                            <span className='w-25 float-start border border-2 border-primary-subtle rounded rounded-2 py-2 px-4 d-flex align-items-center justify-content-center fw-light fs-6'>
                                مهم نیست
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            {/* send resume */}
            <UploadResume />
        </>

    )
}

export default page
