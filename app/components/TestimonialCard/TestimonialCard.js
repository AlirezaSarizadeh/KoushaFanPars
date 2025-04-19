import images from '@/app/public/assets/images';
import Image from 'next/image';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';
import './testimonialCard.css'

const TestimonialCard = () => {
    const rating = 5; // You can make this dynamic if needed

    return (
        <Card style={{
            width: '24rem',
            border: 'none',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f8f9fa'
        }}>
            <Card.Body style={{ padding: '1rem' }}>
                {/* Star Rating */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    marginBottom: '1rem',
                    color: '#ffc107' // Gold color for stars
                }}>
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            size={18}
                            style={{ marginLeft: '0.2rem' }}
                            fill={i < rating ? 'currentColor' : '#e4e5e9'}
                        />
                    ))}
                </div>

                <Card.Text style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    textAlign: 'right',
                    marginBottom: '1.5rem'
                }}>
                    امروز ساختار مجموعه کوشافن پارس بر پایه تعامل با مشتریان، درک نیاز و تحقق خواسته های آنهاست که همانا لبخند رضایتمان دلگرمی مدیریت و پرسنل در نیل به اهداف عالی سازمان است.
                </Card.Text>

                <div className='testimonial-code' style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    color: '#6c757d',
                }}>
                    <FaQuoteRight size={24} />
                </div>



                <div style={{
                    paddingTop: '1rem',
                    marginTop: '1rem',
                    textAlign: 'right'
                }}>
                    <div className='d-flex align-items-center justify-content-start gap-2'>
                        <Image src={images.testimonialCardAvatar} alt='' />
                        <div className='d-flex flex-column'>
                            <Card.Subtitle style={{
                                fontWeight: 'bold',
                                marginBottom: '0.2rem'
                            }}>
                                علی ساری زاده
                            </Card.Subtitle>
                            <Card.Text style={{
                                fontSize: '0.85rem',
                                color: '#6c757d'
                            }}>
                                برنامه نویس
                            </Card.Text>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TestimonialCard;