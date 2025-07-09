import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <p>
          The Student Portal is an educational platform developed to streamline the student registration process
          and provide a centralized hub for academic information.
        </p>
        <p>
          Our mission is to create an intuitive and efficient system that helps students manage their academic journey
          while providing administrators with tools to support student success.
        </p>
        
        <div className="team-section">
          <h2 className="section-title">Our Team</h2>
          <p>
            We are a dedicated team of developers and educators committed to improving the educational experience
            through technology. Our diverse backgrounds in education and software development allow us to create
            solutions that address real needs in academic environments.
          </p>
        </div>
        
        <div className="contact-section">
          <h2 className="section-title">Contact Information</h2>
          <p>Email: support@studentportal.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Education Lane, Learning City, ED 12345</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
