'use client';
import React, { useState } from 'react';
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
    const [duration, setDuration] = useState(null); // 👈 جدید


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

                {/* لیست جلسات با کاور */}
                <div className="col-md-4">
                    <h6>لیست جلسات</h6>
                    <ul className="list-group">
                        {videos.map((video, index) => (
                            <li
                                key={index}
                                className={`list-group-item d-flex align-items-center gap-2 ${video.url === currentVideo.url ? 'active' : ''
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
                                <span>{video.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CoursePlay;
