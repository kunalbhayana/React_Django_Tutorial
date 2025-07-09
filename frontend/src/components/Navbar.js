import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Student Portal</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/signup" className="navbar-link">Sign Up</Link>
          <Link to="/about" className="navbar-link">About Us</Link>
          <Link to="/dashboard" className="navbar-link">Student Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
