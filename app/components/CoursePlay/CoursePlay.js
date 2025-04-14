'use client';
import React, { useState, useEffect } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const CoursePlay = () => {
  const videos = [
    {
      title: 'جلسه اول',
      url: '/video-sample.mp4',
      poster: '/images/cover.png',
      subtitles: '/subtitles/video1.vtt',
    },
    {
      title: 'جلسه دوم',
      url: '/video-sample2.mp4',
      poster: '/images/cover.png',
      subtitles: '/subtitles/video2.vtt',
    },
    {
      title: 'جلسه سوم',
      url: '/video-sample3.mp4',
      poster: '/images/cover.png',
      subtitles: '/subtitles/video2.vtt',
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [duration, setDuration] = useState(null);
  const [videoDurations, setVideoDurations] = useState({}); // 👈 جدید

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
    <div className="container py-5">
      <div className="row">
        {/* پلیر */}
        <div className="col-md-8 mb-4">
          <VideoPlayer currentVideo={currentVideo} onDuration={setDuration} />
          <h5 className="mt-3">
            {currentVideo.title}
            {duration && (
              <small className="text-muted ms-2">({duration})</small>
            )}
          </h5>
        </div>

        {/* لیست جلسات با کاور و مدت زمان */}
        <div className="col-md-4">
          <h6>لیست جلسات</h6>
          <ul className="list-group">
            {videos.map((video, index) => (
              <li
                key={index}
                className={`list-group-item d-flex align-items-center gap-2 ${
                  video.url === currentVideo.url ? 'active' : ''
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
        </div>
      </div>
    </div>
  );
};

export default CoursePlay;
