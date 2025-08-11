'use client'
import React, { useRef, useEffect, useState } from 'react';
import './companiesSlider.css';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import Title from '../../utils/title/Title';
import Button from '../../utils/button/Button';
import { Autoplay, Navigation } from 'swiper/modules';
import LicenseCard from '../../LicenseCard/LicenseCard';

const CompaniesSlider = () => {
    const prevRef = useRef(null);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = await fetch("/api/about_categories" , {
                    method: 'post',
                }); // <-- change to your API endpoint
                const data = await res.json();
                setCompanies(data);
            } catch (error) {
                console.error("Error fetching companies:", error);
            }
        };
        fetchCompanies();
    }, []);

    return (
        <div className="companies-slider-wrapper" style={{ position: 'relative' }}>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 1.3 },
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.nextEl = prevRef.current;
                    swiper.params.navigation.prevEl = null;
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
            >
                {companies.map((company) => (
                    <SwiperSlide key={company.id} className='p-4 about-us-swiperslide'>
                        <Card className="rounded-4 border-0 p-0 float-start event-card" style={{ margin: "auto", backgroundColor: "#FFF" }}>
                            <Card.Body className='p-0 about-us-card'>
                                <div className="d-flex flex-column-reverse flex-lg-row">
                                    {/* Content Section */}
                                    <div className='d-flex flex-column justify-content-between p-lg-4'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <Title title={company.title} fontSize={'18px'} />
                                        </div>
                                        <div
                                            className="text-muted text-justify pe-lg-3"
                                            dangerouslySetInnerHTML={{ __html: company.desc }}
                                        />
                                        <div className='d-flex align-items-end justify-content-between'>
                                            <Button href={`aboutus/${company.id}`} variant='primary' title={'درباره کارخانه'} />
                                        </div>
                                    </div>

                                    {/* Image Section */}
                                    <div className="mb-lg-0 mb-4">
                                        <Image
                                            src={company.image} // adjust path
                                            alt={company.title}
                                            className='rounded-3 about-us-slider-pic'
                                            width={400}
                                            height={300}
                                        />
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Awards Section */}
            <section className='py-4 px-5 product-list-container my-lg-5 my-4' style={{ backgroundColor: '#eff6ff', borderRadius: '15px' }}>
                <div className='d-flex align-items-center justify-content-between pb-lg-2 pb-2 w-100'>
                    <Title title={'جوایز'} />
                </div>
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1400: { slidesPerView: 4 },
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Autoplay]}
                    className="mySwiper popCours-card"
                >
                    <SwiperSlide style={{ backgroundColor: 'transparent' }}><LicenseCard /></SwiperSlide>
                    <SwiperSlide style={{ backgroundColor: 'transparent' }}><LicenseCard /></SwiperSlide>
                    <SwiperSlide style={{ backgroundColor: 'transparent' }}><LicenseCard /></SwiperSlide>
                    <SwiperSlide style={{ backgroundColor: 'transparent' }}><LicenseCard /></SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default CompaniesSlider;
