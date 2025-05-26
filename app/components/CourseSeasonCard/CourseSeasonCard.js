'use client'
import images from '@/app/public/assets/images';
import Image from 'next/image';
import React from 'react';
import { Card } from 'react-bootstrap';
import './coursesSeasonCard.css'

const CourseSeasonCard = () => {
  return (
    <Card style={{ width: '18rem', background:'#FFF' , borderRadius: '10px' }} className='courses-season-card border-0 m-auto d-flex flex-column justify-content-center align-items-center gap-3 text-center'>
      <Card.Body>
        <Image className='mb-lg-4 mb-2' src={images.courseSeasonCircleBadge} alt="icondory" />
        <Card.Title style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          موضوع فصل یک
        </Card.Title>
        <Card.Subtitle style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>
          مرکز آموزش کوشافی پارس، دروازه
          <br />
          ورود به دنیای نوین دندانپزشکی
          <br />
          است
        </Card.Subtitle>
        <Card.Text className='shadow-sm p-2' style={{ fontSize: '0.8rem', color: '#0b7077', marginTop: '1.5rem' , borderRadius:'10px' , fontWeight:'700'}}>
          تعداد قسمت: ۰٫۶ عدد
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CourseSeasonCard;