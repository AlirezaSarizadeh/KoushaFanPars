import React from 'react'
import './eventcard.css'
import { Card } from "react-bootstrap";
import Image from 'next/image';
import images from '@/app/public/assets/images';
import Title from '../utils/title/Title';
import Link from 'next/link';
import DOMPurify from 'dompurify';
import { usePathname } from 'next/navigation'

const EvenetCard = ({ data }) => {
        const pathname = usePathname()
    // Don't render if all main content fields are empty
    if (!data?.image && !data?.short_content && !data?.writer && !data?.title) {
        return null;
    }

    const imageSrc = data?.image || images.event_image || '/fallback.jpg';
    const shortContent = data?.short_content || 'محتوایی برای نمایش وجود ندارد.';
    const writer = data?.writer || 'ناشناس';
    const timeRead = data?.time_read || 'نامشخص';

    return (
        <Link href={`${data.id}`}>
            <Card className="rounded-4 border-0 p-2 float-start event-card w-100" style={{ margin: "auto", backgroundColor: "#FFF" }}>
                <Card.Body className='p-0 p-lg-4'>
                    <div className="d-flex flex-column flex-md-row">
                        {/* Image Section */}
                        <div className="me-md-3 mb-3 mb-md-0">
                            <img
                                src={imageSrc}
                                alt={data?.title || 'blog image'}
                                className='rounded-3 blog_image'
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/fallback.jpg';
                                }}
                            />
                        </div>

                        {/* Content Section */}
                        <div className='d-flex flex-column justify-content-between w-100'>
                            <div className='d-flex justify-content-between flex-column flex-md-row align-items-lg-start gap-2 gap-lg-0'>
                                <Title title="وبلاگ ها" fontSize="18px" />
                                <small className='small fw-light d-flex align-items-center gap-1' style={{ fontSize: '13px' }}>
                                    <Image src={images.calendarIcon} alt='' />
                                    ۳ دی ۱۴۰۳
                                </small>
                                <small className='small fw-light d-flex align-items-center gap-1 d-none d-lg-flex' style={{ fontSize: '13px' }}>
                                    <Image src={images.clockIcon} alt='' />
                                    زمان مطالعه: {timeRead}
                                </small>
                            </div>

                            <h4 className="fw-bold text-start py-3">
                                {data?.title || 'عنوانی وارد نشده است'}
                            </h4>

                            <div
                                className="text-muted limit-4-lines text-justify"
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(shortContent),
                                }}
                            />

                            <div className='d-flex align-items-end justify-content-between'>
                                <p className="mt-2 mb-0 fw-light small d-flex flex-column align-items-start fw-bold">
                                    نویسنده :
                                    <span className='fw-light'>
                                        {writer}
                                    </span>
                                </p>
                                <span className='textColor' >
                                    مطالعه بیشتر
                                </span>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default EvenetCard;
