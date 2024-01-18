import React from 'react';
import './Footer.css';
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1 className="footer-logo">Besti's Park</h1>
        <p className="footer-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eaque corporis earum quisquam fuga
          dolore exercitationem repudiandae unde sunt, tempore, et in velit dolorum, sit
        </p>
        <div className="footer-social">
          <div className="social-icon">
            <FaFacebook />
          </div>
          <div className="social-icon">
            <FaInstagram />
          </div>
          <div className="social-icon">
            <FaTwitter />
          </div>
          <div className="social-icon">
            <FaWhatsapp />
          </div>
        </div>
      </div>
      <div className="footer-center">
        <h3 className="footer-title">Useful Links</h3>
        <ul className="footer-list">
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3 className="footer-title">Contact</h3>
        <div className="contact-item">
          <FaMapMarkerAlt style={{ marginRight: '10px' }} />
          Govt School opposite Kumalalan Kuttai Velusamy Complex Erode 638011	

        </div>
        <div className="contact-item">
          <FaPhone style={{ marginRight: '10px' }} />919965580936	                                                       
        </div>
        <div className="contact-item">
          <FaEnvelope style={{ marginRight: '10px' }} /> sivakumar1496@gmail.com 
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
