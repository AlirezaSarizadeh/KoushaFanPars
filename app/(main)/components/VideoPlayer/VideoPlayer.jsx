'use client';
import React, { useRef, useEffect, useState } from 'react'; // 👈 useState هم اضافه شد
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './videoPlayer.css'

const VideoPlayer = ({ currentVideo, onDuration }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
  };

  useEffect(() => {
    const player = playerRef.current;

    if (!player) {
      playerRef.current = videojs(videoRef.current, {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        playbackRates: [0.5, 1, 1.5, 2],
      });

      playerRef.current.ready(() => {
        playerRef.current.src({ src: currentVideo.url, type: 'video/mp4' });
        playerRef.current.poster(currentVideo.poster || '');

        // گوش بده به زمان لود شدن metadata
        playerRef.current.one('loadedmetadata', () => {
          const duration = playerRef.current.duration();
          onDuration(formatTime(duration)); // 👈 این رو به والد پاس بده
        });

        if (currentVideo.subtitles) {
          playerRef.current.addRemoteTextTrack(
            {
              kind: 'subtitles',
              src: currentVideo.subtitles,
              srcLang: 'fa',
              label: 'زیرنویس فارسی',
              default: true,
            },
            false
          );
        }
      });
    } else {
      player.src({ src: currentVideo.url, type: 'video/mp4' });
      player.poster(currentVideo.poster || '');

      // حذف زیرنویس‌های قبلی
      if (player.remoteTextTracks().length) {
        Array.from(player.remoteTextTracks()).forEach((track) => {
          player.removeRemoteTextTrack(track);
        });
      }

      if (currentVideo.subtitles) {
        player.addRemoteTextTrack(
          {
            kind: 'subtitles',
            src: currentVideo.subtitles,
            srcLang: 'fa',
            label: 'زیرنویس فارسی',
            default: true,
          },
          false
        );
      }

      // وقتی ویدیو تغییر کرد دوباره مدت زمان بگیر
      player.one('loadedmetadata', () => {
        const duration = player.duration();
        onDuration(formatTime(duration)); // 👈 این هم بفرست بالا
      });
    }
  }, [currentVideo]);

  return (
    <div data-vjs-player style={{maxHeight:'400px'}}>
      <video
        ref={videoRef}
        className="video-js vjs-theme-city vjs-big-play-centered"
        playsInline
      />
    </div>
  );
};

export default VideoPlayer;
