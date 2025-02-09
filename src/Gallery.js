import React from 'react';
import { FaHeart, FaShare, FaEye } from 'react-icons/fa';

const Gallery = () => {
  const images = [
    { src: 'slide1.jpeg' },
    { src: 'slide-2.jpeg' },
    { src: 'slide-3.jpeg' },
    { src: 'slide-24.jpeg' },
    { src: 'slide-25.jpeg' },
    { src: 'slide-27.jpeg' },
    { src: 'slide1.jpeg' },
    { src: 'slide1.jpeg' },
    { src: 'slide1.jpeg' },
  ];

  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">our <span>gallery</span></h1>
      <div className="box-container">
        {images.map((image, index) => (
          <div className="box" key={index}>
            <img src={image.src} alt="" />
            <h3 className="title">photos and events</h3>
            <div className="icons">
              <a href="#"><FaHeart /></a>
              <a href="#"><FaShare /></a>
              <a href="#"><FaEye /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;