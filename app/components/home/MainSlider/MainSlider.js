import React from 'react';
import './mainSlider.css';
import images from '@/app/public/assets/images'; // Make sure this is correct

const MainSlider = () => {
  return (
    <div
      className='mainSlider-container'
      style={{
        backgroundImage: `url(${images.main_slider_desktop_bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '500px', // optional height
      }}
    >
      <h1 style={{ color: '#fff' }}>Your Content</h1>
    </div>
  );
};

export default MainSlider;
