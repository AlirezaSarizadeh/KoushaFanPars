
'use client';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeLine.css'
import Image from 'next/image';
import images from '@/app/public/assets/images';

export default function Timeline() {
  const timelineData = [
    {
      // date: "۲۰۲۵/۰۱/۰۱",
      title: "شروع پروژه",
      description: "پروژه با هدف ایجاد یک وبسایت منحصر به فرد آغاز شد.",
      icon: "bi-rocket-takeoff-fill",
      color: "#0d6efd"
    },
    {
      // date: "۲۰۲۵/۰۲/۱۵",
      title: "طراحی رابط کاربری",
      description: "طراحی صفحات و تجربه کاربری انجام شد.",
      icon: "bi-brush-fill",
      color: "#198754"
    },
    {
      // date: "۲۰۲۵/۰۳/۱۰",
      title: "شروع توسعه",
      description: "برنامه نویسی سایت آغاز شد.",
      icon: "bi-code-slash",
      color: "#6610f2"
    },
  ];

  return (
    <div className="py-5 rounded-3 mt-lg-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: '#0069b0' }}>تاریخچه شرکت</h2>

      <VerticalTimeline className="timeline-rtl">
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            contentStyle={{ background: item.color, color: '#fff' }}
            contentArrowStyle={{ borderLeft: `0` , border:'none' }} // چپ به جای راست
            iconStyle={{ background: index % 2 === 0 ? '#0069b0' : '#fff', color: '#fff' }}
            icon={<i className={`bi ${item.icon} fs-2`}></i>}
            className={index % 2 === 0 ? "left" : "right"}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <p>{item.description}</p>
            {/* <Image className='mt-lg-4 mt-2' src={images.event_image} alt='alt' /> */}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}