import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaMusic, FaUtensils, FaPhotoVideo, FaBirthdayCake } from 'react-icons/fa';

const Service = () => {
  return (
    <section className="service" id="service">
      <h1 className="heading"> our <span>services</span> </h1>
      <div className="box-container">
        <div className="box">
          <FaMapMarkerAlt />
          <h3>venue selection</h3>
          <p>Find the perfect location that matches your theme and budget.</p>
        </div>
        <div className="box">
          <FaEnvelope />
          <h3>invitation card</h3>
          <p>Beautifully designed invites to set the right tone for your event.</p>
        </div>
        <div className="box">
          <FaMusic />
          <h3>entertainment</h3>
          <p>Live music, DJs, dance performances, and fun activities to engage your guests.</p>
        </div>
        <div className="box">
          <FaUtensils />
          <h3>food and drinks</h3>
          <p>A delicious menu curated by expert chefs to suit all tastes.</p>
        </div>
        <div className="box">
          <FaPhotoVideo />
          <h3>photos and videos</h3>
          <p>Professional photography and videography to capture your precious moments.</p>
        </div>
        <div className="box">
          <FaBirthdayCake />
          <h3>custom food</h3>
          <p>Personalized dishes and catering options based on your preferences.</p>
        </div>
      </div>
    </section>
  );
};

export default Service;