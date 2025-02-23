import React, { useEffect, useState } from 'react';
// https://picsum.photos/800/400
import './slider.css';
const images = [
  'https://picsum.photos/id/1/800/400',
  'https://picsum.photos/id/2/800/400',
  'https://picsum.photos/id/3/800/400',
  'https://picsum.photos/id/4/800/400',
  'https://picsum.photos/id/5/800/400',
  'https://picsum.photos/id/6/800/400',
  'https://picsum.photos/id/7/800/400'
];
export const ImageSlider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const nextImage = () => {
    console.log('next image');
    setActiveImage((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    console.log('prevImage');
    setActiveImage((prev) => Math.abs((prev - 1) % images.length));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='image-slider'>
      <img
        onClick={prevImage}
        className='left slider-button'
        src='prev.png'
      />
      <img
        className='slider-image'
        src={images[activeImage]}
      />
      <img
        onClick={nextImage}
        className='right slider-button'
        src='next.png'
      />
    </div>
  );
};
