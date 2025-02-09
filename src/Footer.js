import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>branches</h3>
          <a href="#"><FaMapMarkerAlt /> mumbai</a>
          <a href="#"><FaMapMarkerAlt /> jogeshwari</a>
          <a href="#"><FaMapMarkerAlt /> goregaon</a>
          <a href="#"><FaMapMarkerAlt /> navi mumbai</a>
          <a href="#"><FaMapMarkerAlt /> andheri</a>
        </div>
        <div className="box">
          <h3>quick links</h3>
          <a href="#"><FaArrowRight /> home</a>
          <a href="#"><FaArrowRight /> service</a>
          <a href="#"><FaArrowRight /> about</a>
          <a href="#"><FaArrowRight /> gallery</a>
          <a href="#"><FaArrowRight /> price</a>
          <a href="#"><FaArrowRight /> review</a>
          <a href="#"><FaArrowRight /> contact</a>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <a href="#"><FaPhone /> +123-456-7890</a>
          <a href="#"><FaPhone /> +111-222-3333</a>
          <a href="#"><FaEnvelope /> shaikhanas@gmail.com</a>
          <a href="#"><FaEnvelope /> anasshaikh@gmail.com</a>
          <a href="#"><FaMapMarkerAlt /> mumbai, india - 400104</a>
        </div>
        <div className="box">
          <h3>follow us</h3>
          <a href="#"><FaFacebookF /> facebook</a>
          <a href="#"><FaTwitter /> twitter</a>
          <a href="#"><FaInstagram /> instagram</a>
          <a href="#"><FaLinkedin /> linkedin</a>
        </div>
      </div>
      <div className="credit"> created by <span>suji</span> | all rights reserved </div>
    </section>
  );
};

export default Footer;