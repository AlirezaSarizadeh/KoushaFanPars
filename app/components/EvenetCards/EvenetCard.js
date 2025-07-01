import React from 'react'
import './eventcard.css'
import { Card, Button } from "react-bootstrap";
import Image from 'next/image';
import images from '@/app/public/assets/images';
import Title from '../utils/title/Title';
import Link from 'next/link';
import DOMPurify from 'dompurify';

const EvenetCard = (props) => {
    console.log(props.data);

    return (
        <Card className="rounded-4 border-0 p-2 float-start event-card w-100" style={{ margin: "auto", backgroundColor: "#FFF" }}>
            <Card.Body className='p-0 p-lg-4'>
                <div className="d-flex flex-column flex-md-row">
                    {/* Image Section */}
                    <div className="me-md-3 mb-3 mb-md-0">
                        {/* <Image src={images.event_image} alt='blog_image' className='rounded-3 blog_image' /> */}
                        <img src={props.data[0].image} alt={props.data[0].title} className='rounded-3 blog_image' />
                    </div>

                    {/* Content Section */}
                    <div className='d-flex flex-column justify-content-between w-100'>
                        <div className='d-flex justify-content-between flex-column flex-md-row align-items-lg-start gap-2 gap-lg-0'>

                            <Title title={'وبلاگ ها'} fontSize={'18px'} />
                            <small className='small fw-light d-flex align-items-center gap-1' style={{ fontSize: '13px' }}>
                                <Image src={images.calendarIcon} alt='' />
                                ۳ دی ۱۴۰۳
                            </small>
                            <small className='small fw-light d-flex align-items-center gap-1 d-none d-lg-flex' style={{ fontSize: '13px' }}>
                                <Image src={images.clockIcon} alt='' />
                                زمان مطالعه: {props.data[0].time_read}
                            </small>
                        </div>
                        <h4 className="fw-bold text-start py-3">ایمپلنت دندانی اویتا</h4>
                        <p className="text-muted limit-4-lines text-justify">
                            {props.data[0].short_content}
                        </p>

                        <div className='d-flex align-items-end justify-content-between'>
                            <p className="mt-2 mb-0 fw-light small d-flex flex-column align-items-start fw-bold">
                                نویسنده :
                                <span className='fw-light'>
                                    {props.data[0].writer}
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
