import RootLayout from '@/app/layout'
import Title from '@/app/components/utils/title/Title'
import images from '@/app/public/assets/images'
import Image from 'next/image'
import React from 'react'
import './aboutcompanies.css'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const page = () => {
    return (

        <>
            <div className='row align-items-center mt-lg-2 pt-lg-2 about-main-desc'>
                <div className='col-lg-12 mt-lg-5 mt-4'>
                    {/* <Title title={'درباره'} /> */}
                    <Title as="h1" title="درباره" />

                    <h2 className='fw-bold d-flex flex-column gap-3 mt-3'>
                        <span className='lead fs-3 fw-normal'>
                            شرکت تولیدی مهندسی
                        </span>
                        دانش بنیان کوشـافن پارس
                    </h2>
                    <p className='text-justify py-2 lead'>
                        شـرکت مهندسـي تولیدي کوشـافن پارس در زمینه تولید تجهیـزات دندانپزشـکي و دندانسـازي و نیـز تامین مـواد مصرفی فعالیت می نماید. کوشـا فـن پـارس بزرگترین تولیـد کننده تجهیـزات و لوازم دندانپزشـکی و دندانسـازی در کشـور مـی باشـد کـه بـا سـرمایه گـذاری در بخـش تحقیـق و توسـعه و با هدف توسـعه فنـاوری در زمینـه طراحـی، سـاخت و تولیـد تجهیـزات مرتبـط بـا صنعت دندانپزشـکی و دندانسـازی فعالیت دارد. هـم اکنون محصـولات تولیدی این شرکت با بالاتریـن کیفیت و قیمت رقابتی نسـبت بـه سـایر برندهـای هم تـراز خود در دنیـا مورد اسـتفاده مصـرف کنندگان قـرار می گیرد. کوره های دندانسازی شامل کوره پرسلن AT 100 و AT 300 تمام اتوماتیک، کوره پرس AT 300P تمام اتوماتیک، کوره پرسلن AT 3000 تمام اتوماتیک، کوره های حذف موم سیلندر، کوره گلیزر، کوره زینترینگ زیرکونیا است. میزهای تولیدی این شرکت به دو گروه لابراتواری و آموزشی کلینیکی تقسیم می شود
                    </p>
                </div>
            </div>

            <div className='row align-items-center mt-lg-5 mt-2 p-lg-4 p-2 justify-content-center' style={{ background: '#e4f0fd', borderRadius: '25px' }}>
                <div className='courses-box course-box-companies row p-lg-4 p-3 my-lg-3 my-2 justify-content-center col-lg-11' >
                    <div className='col-md-5 position-relative companies-pic-col'>
                        <Image src={images.company_1} width={1200} // Set your max width
                            height={800} // Set your max height
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }} alt='image' />
                    </div>
                    <div className='col-md-7 d-flex flex-column justify-content-center gap-lg-5 gap-3 align-items-between gap-2 course-box-desc'>
                        <h2 className='fs-1 fw-bold'>
                            {/* {props.heading} */}
                            کارخانه کوشافن پارس
                        </h2>
                        <p className='' style={{ minHeight: '2' }}>
                            امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
                        </p>
                        <Link className='ms-auto mt-lg-4 mt-3' href={'#!'}>مطالعه بیشتر
                            <FaArrowLeft className='ms-2' style={{ fontWeight: '100' }} />
                        </Link>
                    </div>
                </div>
                <div className='courses-box course-box-companies row p-lg-4 p-3 my-lg-3 my-2 justify-content-center col-lg-11' >
                    <div className='col-md-5 position-relative companies-pic-col'>
                        <Image src={images.company_1} width={1200} // Set your max width
                            height={800} // Set your max height
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }} alt='image' />
                    </div>
                    <div className='col-md-7 d-flex flex-column justify-content-center gap-lg-5 gap-3 align-items-between gap-2 course-box-desc'>
                        <h2 className='fs-1 fw-bold'>
                            {/* {props.heading} */}
                            کارخانه کوشافن پارس
                        </h2>
                        <p className='' style={{ minHeight: '2' }}>
                            امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
                        </p>
                        <Link className='ms-auto mt-lg-4 mt-3' href={'#!'}>مطالعه بیشتر
                            <FaArrowLeft className='ms-2' style={{ fontWeight: '100' }} />
                        </Link>
                    </div>
                </div>
                <div className='courses-box course-box-companies row p-lg-4 p-3 my-lg-3 my-2 justify-content-center col-lg-11' >
                    <div className='col-md-5 position-relative companies-pic-col'>
                        <Image src={images.company_1} width={1200} // Set your max width
                            height={800} // Set your max height
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }} alt='image' />
                    </div>
                    <div className='col-md-7 d-flex flex-column justify-content-center gap-lg-5 gap-3 align-items-between gap-2 course-box-desc'>
                        <h2 className='fs-1 fw-bold'>
                            {/* {props.heading} */}
                            کارخانه کوشافن پارس
                        </h2>
                        <p className='' style={{ minHeight: '2' }}>
                            امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
                        </p>
                        <Link className='ms-auto mt-lg-4 mt-3' href={'#!'}>مطالعه بیشتر
                            <FaArrowLeft className='ms-2' style={{ fontWeight: '100' }} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
