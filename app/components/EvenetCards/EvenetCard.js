import React from 'react'
import './eventcard.css'
import { Card, Button } from "react-bootstrap";
import Image from 'next/image';
import images from '@/app/public/assets/images';
import Title from '../utils/title/Title';
import Link from 'next/link';

const EvenetCard = () => {
    return (
        <Card className="rounded-4 border-0 p-2 float-start event-card" style={{ margin: "auto", backgroundColor: "#FFF" }}>
            <Card.Body className='p-0 p-lg-4'>
                <div className="d-flex flex-column flex-md-row">
                    {/* Image Section */}
                    <div className="me-md-3 mb-3 mb-md-0">
                        <Image src={images.event_image} alt='blog_image' className='rounded-3' />
                    </div>

                    {/* Content Section */}
                    <div className='d-flex flex-column justify-content-between'>
                        <div className='d-flex align-items-center justify-content-between'>

                            <Title title={'وبلاگ ها'} fontSize={'18px'} />
                            <small className='small fw-light d-flex align-items-center gap-1' style={{ fontSize: '13px' }}>
                                <Image src={images.calendarIcon} alt=''/>
                                ۳ دی ۱۴۰۳
                            </small>
                            <small className='small fw-light d-flex align-items-center gap-1' style={{ fontSize: '13px' }}>
                                <Image src={images.clockIcon} alt=''/>
                                زمان مطالعه: ۱۰ دقیقه
                            </small>
                        </div>
                        <h4 className="fw-bold text-start py-3">ایمپلنت دندانی اویتا</h4>
                        <p className="text-muted limit-4-lines text-justify">
                            مرکز آموزش گوداشن پارس، دروازه ورود به دنیای نوین دندانپزشکی است. این مرکز جامع آموزشی با ارائه دوره‌های متنوع در سطوح مبتدی، نیمه پیشرفته و پیشرفته، پاسخگوی نیازهای تمام دندانپزشکان و دندان‌یاران است...
                            مرکز آموزش گوداشن پارس، دروازه ورود به دنیای نوین دندانپزشکی است. این مرکز جامع آموزشی با ارائه دوره‌های متنوع در سطوح مبتدی، نیمه پیشرفته و پیشرفته، پاسخگوی نیازهای تمام دندانپزشکان و دندان‌یاران است...
                        </p>

                        <div className='d-flex align-items-end justify-content-between'>
                            <p className="mt-2 mb-0 fw-light small d-flex flex-column align-items-start fw-bold">
                                نویسنده :
                                <span className='fw-light'>
                                    مجتبی پوربخش
                                </span>
                            </p>

                            <Link className='textColor' href={''}>
                                مطالعه بیشتر
                            </Link>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default EvenetCard
