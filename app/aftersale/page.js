import React from 'react'
import RootLayout from '../(main)/layout'
import CustomerServices from '../components/home/CustomerServices/CustomerServices'
import Counters from '../components/home/counters/Counters'
import Title from '../components/utils/title/Title'
import Lead from '../components/utils/lead/Lead'
import { Col, Row } from 'react-bootstrap'
import images from '../public/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import { LuPhoneCall } from 'react-icons/lu'
import { FaEnvelope, FaEnvelopeOpen, FaEnvelopeSquare, FaSms } from 'react-icons/fa'
import { BaggageClaim } from 'lucide-react'
import CardTest from '../components/CardTest/CardTest'
import BlogSlider from '../components/BlogSlider/BlogSlider'
import LicenseSlider from '../components/LicenseSlider/LicenseSlider'
import AnimatedInput from '../components/AnimatedInput/AnimatedInput'
import Button from '../components/utils/button/Button'


const page = () => {
    return (
        <RootLayout>
            <CustomerServices />
            <div className='mt-lg-5 mt-3' style={{ backgroundColor: '#f1f8ff' }}>
                <Counters />
            </div>
            <div className='row align-items-center mt-lg-5 mt-3'>
                {/* <div className='col-lg-4'>

                    <CardTest />
                </div> */}
                <div className='col-lg-8'>
                    <Title title={'معرفی کوشایار'} />
                    <p className='text-justify py-2'>
                        امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
                    </p>
                    <div className='d-flex align-items-center gap-lg-4 border-0 bg-transparent px-0'>
                        <Link href={'s'} className='btn btn-light p-2 py-3 fs-5 d-flex align-items-center justify-content-center gap-2'>
                            <LuPhoneCall className="textColor mx-1 fs-4" />
                            021 - 4420806
                        </Link>
                        <Link href={'s'} className='btn btn-light p-2 py-3 fs-5 d-flex align-items-center justify-content-center gap-2'>
                            <FaEnvelopeSquare className="textColor mx-1 fs-4" />
                            021 - 4420806
                        </Link>
                    </div>
                </div>
                <div className='col-lg-4 mt-4 mt-lg-0'>
                    <Row className="g-2">
                        <Col md={4} className='p-0'>
                            <Row>
                                <Col md={12}>
                                    <span className='p-1 d-block'>
                                        <Image
                                            src={images.event_image}
                                            alt="Small 1"

                                            className="rounded w-100 h-100"
                                        />
                                    </span>
                                </Col>
                                <Col md={12}>
                                    <span className='p-1 d-block'>
                                        <Image
                                            src={images.event_image}
                                            alt="Small 1"

                                            className="rounded w-100 h-100"
                                        />
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={8} className='p-0'>
                            <span className='p-1 d-block'>
                                <Image
                                    src={images.event_image}
                                    alt="Small 1"

                                    className="rounded w-100 h-100"
                                />
                            </span>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* blog list slider */}
            <div className='row align-items-center mt-lg-3 mt-3'>
                {/* <div className='col-lg-4'>

                    <CardTest />
                </div> */}
                <div className='col-lg-12'>
                    <BlogSlider />
                </div>
            </div>

            {/* License list slider */}
            <div className='row align-items-center mt-lg-3 mt-3'>
                {/* <div className='col-lg-4'>

                    <CardTest />
                </div> */}
                <div className='col-lg-12'>
                    <LicenseSlider />
                </div>
            </div>

            {/* Voice of Customer slider */}
            <div className='row align-items-center mt-lg-3 mt-3'>
                {/* <div className='col-lg-4'>

                    <CardTest />
                </div> */}
                <div className='col-lg-11 m-auto'>
                <div className=" p-3 rounded">
                        <span className="d-flex align-items-center gap-2 mt-lg-3 mt-2">
                            <Image src={images.chatIcon} alt="icon" />
                            <Title title={'صدای مشتری'} />
                        </span>
                        <h6 className="fw-normal fs-5 mt-lg-4 mt-2">
                            نظر خود را درباره این محصول ثبت نمایید
                        </h6>
                        <form>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-4 mt-lg-5 mt-2 pt-3 pt-lg-0">
                                    <span className="mt-3 mt-lg-5">
                                        <AnimatedInput id="name" label="نام" name="name" type="text" />
                                    </span>
                                </div>
                                <div className="col-lg-4 mt-lg-5 mt-2 pt-3 pt-lg-0">
                                    <span className="mt-3 mt-lg-5">
                                        <AnimatedInput id="name" label="نام خانوادگی" name="name" type="text" />
                                    </span>
                                </div>
                                <div className="col-lg-4 mt-lg-5 mt-2 pt-3 pt-lg-0">
                                    <span className="mt-3 mt-lg-5">
                                        <AnimatedInput id="name" label="نام" name="name" type="text" />
                                    </span>
                                </div>
                                <div className="col-lg-4 mt-lg-5 mt-2 pt-3 pt-lg-0">
                                    <span className="mt-3 mt-lg-5">
                                        <AnimatedInput id="name" label="نام خانوادگی" name="name" type="text" />
                                    </span>
                                </div>
                                <div className="col-lg-4 mt-lg-5 mt-2 pt-3 pt-lg-0">
                                    <span className="mt-3 mt-lg-5">
                                        <AnimatedInput id="name" label="نام" name="name" type="text" />
                                    </span>
                                </div>
                                <div className="col-lg-4 mt-lg-5 mt-2 pt-3 pt-lg-0">
                                    <span className="mt-3 mt-lg-5">
                                        <AnimatedInput id="name" label="نام خانوادگی" name="name" type="text" />
                                    </span>
                                </div>
                                <div className="col-lg-4 mt-lg-5 mt-2 pt-3 pt-lg-0">
                                    <span className="mt-3 mt-lg-5">
                                        <AnimatedInput id="name" label="نام" name="name" type="text" />
                                    </span>
                                </div>
                                <div className="col-lg-4 mt-lg-5 mt-2 pt-3 pt-lg-0">
                                    <span className="mt-3 mt-lg-5">
                                        <AnimatedInput id="name" label="نام خانوادگی" name="name" type="text" />
                                    </span>
                                </div>
                                <div className="col-lg-4 mt-lg-5 mt-2 pt-3 pt-lg-0">
                                    <span className="mt-3 mt-lg-5">
                                        <AnimatedInput id="name" label="نام" name="name" type="text" />
                                    </span>
                                </div>
                                <div className="col-lg-12 mt-lg-5 mt-2 pt-3 pt-lg-0">
                                    <span className="mt-3 mt-lg-5">
                                        <AnimatedInput id="description" label="شرح دهید" name="description" as="textarea" rows="4" />
                                    </span>
                                </div>
                                <div className="col-12 mt-lg-4 mt-2 d-flex align-items-center justify-content-end">
                                    <Button title={'ثبت دیدگاه'} variant={'primary'} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </RootLayout>
    )
}

export default page
