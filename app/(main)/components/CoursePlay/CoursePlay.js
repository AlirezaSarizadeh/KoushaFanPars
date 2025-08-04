'use client';
import React, { useState, useEffect } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { Tab, Tabs } from "react-bootstrap";
import images from '@/app/public/assets/images';
import Image from 'next/image';
import { Card } from 'react-bootstrap';
import './coursePlay.css'

const CoursePlay = () => {
  const videos = [
    {
      title: 'جلسه اول',
      url: '/video-sample.mp4',
      poster: '/images/coursePlayCover.png',
      subtitles: '/subtitles/video1.vtt',
    },
    {
      title: 'جلسه دوم',
      url: '/video-sample2.mp4',
      poster: '/images/coursePlayCover.png',
      subtitles: '/subtitles/video2.vtt',
    },
    {
      title: 'جلسه سوم',
      url: '/video-sample3.mp4',
      poster: '/images/coursePlayCover.png',
      subtitles: '/subtitles/video2.vtt',
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [duration, setDuration] = useState(null);
  const [videoDurations, setVideoDurations] = useState({}); // 👈 جدید
  const [key, setKey] = useState("tab1");

  // گرفتن مدت زمان ویدیوها هنگام بارگذاری صفحه
  useEffect(() => {
    videos.forEach((video) => {
      const tempVideo = document.createElement('video');
      tempVideo.src = video.url;
      tempVideo.addEventListener('loadedmetadata', () => {
        setVideoDurations((prev) => ({
          ...prev,
          [video.url]: formatTime(tempVideo.duration),
        }));
      });
    });
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  return (
    <>
      {/* courses box */}
      <div className='courses-box row p-lg-4 p-3 mb-lg-3 mb-2' >

        <div className='col-md-12 d-flex flex-column justify-content-start align-items-start gap-2 course-box-desc pb-lg-4 pb-3'>
          <Image src={images.coursesHeartIcon} alt='heart icon' />
          <h2 className='fs-1 fw-bold'>
            دوره دندانسـازی سرامیک
          </h2>
          <p>
            امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت.امیدواریم به همـت و حمایت جامعه دندانپزشـکان و دندانسـازان، دانشـگاه هـا و مراکـز علمـی بـا امیـد بـه آینـده روشـن، همواره پشـتیبان و حامـی ایـن عزیزان باشـیم.
          </p>
        </div>
        <div className='col-md-7 d-flex flex-column justify-content-start align-items-start gap-2 course-box-desc'>

          <VideoPlayer currentVideo={currentVideo} onDuration={setDuration} />
          <h5 className="mt-3">
            {currentVideo.title}
            {duration && (
              <small className="text-muted ms-2">({duration})</small>
            )}
          </h5>
          {/* <Link className='ms-auto mt-lg-4 mt-3' href={'#!'}>مطالعه بیشتر</Link> */}
        </div>
        <div className='col-md-5 position-relative'>

          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 coursePlay-tabs"
          >
            <Tab eventKey="tab1" title="فصل یک">

              <ul className="list-group courseList-group">
                {videos.map((video, index) => (
                  <li
                    key={index}
                    className={`list-group-item d-flex align-items-lg-center align-items-start gap-2 flex-column flex-lg-row ${video.url === currentVideo.url ? 'active' : ''
                      }`}
                    role="button"
                    onClick={() => setCurrentVideo(video)}
                  >
                    <img
                      src={video.poster}
                      alt={video.title}
                      width="125"
                      height="100"
                      style={{ objectFit: 'cover', borderRadius: '10px' }}
                    />
                    <div className="d-flex flex-column">
                      <div className='d-flex align-items-center justify-content-between'>
                        <span>{video.title}</span>
                        {videoDurations[video.url] && (
                          <small className="text-muted">
                            {videoDurations[video.url]}
                          </small>
                        )}
                      </div>
                      <p className='' style={{ fontSize: '10px', lineHeight: '2.5' }}>
                        امـروز سـاختار مجموعـه کوشـافن پارس بر پایـه تعامل با مشـتریان، درک نیاز و تحقق خواسـته های آنهاسـت کـه همانـا لبخنـد رضایتشـان دلگرمـی مدیریـت و پرسـنل در نیل بـه اهداف عالـی سـازمان اسـت
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Tab>
            <Tab eventKey="tab2" title="فصل دو">

              <ul className="list-group courseList-group">
                {videos.map((video, index) => (
                  <li
                    key={index}
                    className={`list-group-item d-flex align-items-lg-center align-items-start gap-2 flex-column flex-lg-row ${video.url === currentVideo.url ? 'active' : ''
                      }`}
                    role="button"
                    onClick={() => setCurrentVideo(video)}
                  >
                    <img
                      src={video.poster}
                      alt={video.title}
                      width="60"
                      height="40"
                      style={{ objectFit: 'cover', borderRadius: '4px' }}
                    />
                    <div className="d-flex flex-column">
                      <span>{video.title}</span>
                      {videoDurations[video.url] && (
                        <small className="text-muted">
                          {videoDurations[video.url]}
                        </small>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Tab>
            <Tab eventKey="tab3" title="فصل سه">

              <ul className="list-group courseList-group">
                {videos.map((video, index) => (
                  <li
                    key={index}
                    className={`list-group-item d-flex align-items-lg-center align-items-start gap-2 flex-column flex-lg-row ${video.url === currentVideo.url ? 'active' : ''
                      }`}
                    role="button"
                    onClick={() => setCurrentVideo(video)}
                  >
                    <img
                      src={video.poster}
                      alt={video.title}
                      width="60"
                      height="40"
                      style={{ objectFit: 'cover', borderRadius: '4px' }}
                    />
                    <div className="d-flex flex-column">
                      <span>{video.title}</span>
                      {videoDurations[video.url] && (
                        <small className="text-muted">
                          {videoDurations[video.url]}
                        </small>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Tab>
            <Tab eventKey="tab4" title="فصل چهار">

              <ul className="list-group courseList-group">
                {videos.map((video, index) => (
                  <li
                    key={index}
                    className={`list-group-item d-flex align-items-lg-center align-items-start gap-2 flex-column flex-lg-row ${video.url === currentVideo.url ? 'active' : ''
                      }`}
                    role="button"
                    onClick={() => setCurrentVideo(video)}
                  >
                    <img
                      src={video.poster}
                      alt={video.title}
                      width="60"
                      height="40"
                      style={{ objectFit: 'cover', borderRadius: '4px' }}
                    />
                    <div className="d-flex flex-column">
                      <span>{video.title}</span>
                      {videoDurations[video.url] && (
                        <small className="text-muted">
                          {videoDurations[video.url]}
                        </small>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Tab>
          </Tabs>
        </div>

      </div>
    </>
  );
};

export default CoursePlay;
