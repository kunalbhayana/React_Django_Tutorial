import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignupForm from './components/SignupForm';
import AboutUs from './pages/AboutUs';
import StudentDashboard from './pages/StudentDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
