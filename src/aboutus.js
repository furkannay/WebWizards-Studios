import React from 'react';
import './aboutus.css';
import aboutimg from "./about.png"; // Logo bileşeninin import edildiğini varsayalım

const AboutUs = () => {
  return (
    <div className="about-us-container">
      
      <div className="aboutus-container2">
      <h2 className="section-title">About Us</h2>
      <p className="section-description">
      At WebWizards Studios, we're more than just a web development agency – we're your digital partner in success. With a passion for innovation and a commitment to excellence, we specialize in crafting captivating and responsive websites tailored to meet the unique needs of each client. Our team of skilled professionals combines creativity with technical expertise to deliver cutting-edge solutions that elevate brands and drive results. Whether you're a startup looking to make your mark or an established business aiming to expand your online presence, we're here to turn your vision into reality. Join us on the journey to digital greatness with WebWizards Studios.
      </p>
    </div>
    <img src={aboutimg} alt="WebWizards Studios-img" className="aboutimg" />
    </div>
  );
};

export default AboutUs;