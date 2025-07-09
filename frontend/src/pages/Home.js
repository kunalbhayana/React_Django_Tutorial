import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Student Portal</h1>
      <div className="home-content">
        <p>
          This is a comprehensive platform designed to help students register and manage their academic information.
        </p>
        <p>
          Our portal provides easy access to registration, course information, and student resources.
        </p>
        <div className="features-section">
          <h2 className="features-title">Features:</h2>
          <ul className="features-list">
            <li>Simple user registration and authentication</li>
            <li>Student dashboard with personalized information</li>
            <li>Course registration and management</li>
            <li>Academic resources and support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
