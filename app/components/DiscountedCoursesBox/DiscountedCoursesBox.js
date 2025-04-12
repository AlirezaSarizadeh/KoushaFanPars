'use client'
import { Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './discountedCoursesBox.module.css'
import images from '@/app/public/assets/images';
import Title from '../utils/title/Title';

const DiscountedCoursesBox = ({ initialTime = "12:56:23" , doctorImage}) => {
  // Parse initial time from props
  const parseTimeString = (timeStr) => {
    const [hours, minutes, seconds] = timeStr.split(':').map(Number);
    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(parseTimeString(initialTime));
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  // Countdown timer effect
  useEffect(() => {
    if (!isTimerRunning) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        }
        if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        }
        if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        }

        // Timer reaches 0
        setIsTimerRunning(false);
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerRunning]);

  // Format time with leading zeros
  const formatTime = (time) => time.toString().padStart(2, '0');

  return (
    <>
      <Card className={`${styles.doctorCard} border-0 overflow-hidden`}>
        <div className={styles.cardBackground}>
          <Image
            src={doctorImage}
            alt="Doctor Bahoosh"
            layout="fill"
            objectFit="cover"
            quality={100}
            className={styles.backgroundImage}
          />
          <div className={styles.overlay}></div>
        </div>

        <Card.Body className={`position-relative ${styles.cardBody}`}>
          <div className={styles.cardContent}>
            <Card.Title className="text-text-dark mb-2 fw-bold fs-2">دکتر باهوش</Card.Title>
            <Card.Subtitle className="text-dark mb-3">دوره مبتدی دندانسازی</Card.Subtitle>

            <Card.Text className={`text-dark ${styles.cardText}`}>
              امروز ساختار مجموعه گوشافی پارس برپایه تعامل با مشتریان، درک نیاز و تحقق خواسته های آنهاست که همان ایجاد رضایتشان دلگر می‌مدیریت و پرسنل در لیل به اهداف عالی سازمان است.
            </Card.Text>

            <Button variant="transparent" className="mt-1 text-primary fw-light opacity-75">
              مطالعه بیشتر
            </Button>
          </div>

          <div className={styles.timerContainer}>
            <Image src={images.clockDiscount} alt='clock-discout' />
            <div className={styles.timerLabel}>تخفیف روزانه</div>
            <div className={styles.timer}>
              <span>{formatTime(timeLeft.hours)}</span>:
              <span>{formatTime(timeLeft.minutes)}</span>:
              <span>{formatTime(timeLeft.seconds)}</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default DiscountedCoursesBox;