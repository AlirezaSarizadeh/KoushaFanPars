// components/Testimonial.js
import React from 'react';
import './circledtestimonial.css';
import Image from 'next/image';
import images from '@/app/public/assets/images';

const CircledTestimonial = ({ name, image, message }) => {
    return (
        <div className='testimonial'>
            <Image src={images.circledTestimonial} alt='' />

            <div className='testi-item'>
                <div className='testi-item-images position-relative'>
                    <Image src={images.testiMan1} className='testi-pic' alt='man' width={95} height={95} />
                    <Image src={images.testiTick} className='testi-pic-approved' alt='man'/>
                </div>
                <p className='testi-text shadow-sm limit-2-lines'>
                    <span>
                        دکتر باهوش
                    </span>
                    باعث افتخار بود حضور بنده در دوره ایمپلنت اویتا
                </p>
            </div>

            <div className='testi-item2'>
                <div className='testi-item-images position-relative'>
                    <Image src={images.testiMan2} className='testi-pic' alt='man' width={95} height={95} />
                    <Image src={images.testiTick} className='testi-pic-approved' alt='man'/>
                </div>
                <p className='testi-text shadow-sm limit-2-lines'>
                    <span>
                        دکتر باهوش
                    </span>
                    باعث افتخار بود حضور بنده در دوره ایمپلنت اویتا
                </p>
            </div>
        </div>
    );
};

export default CircledTestimonial;