import React, { useState, useEffect } from 'react';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [studentInfo, setStudentInfo] = useState({
    name: 'John Doe',
    id: 'ST12345',
    program: 'Computer Science',
    year: '2nd Year',
    gpa: '3.8'
  });
  
  const [courses, setCourses] = useState([
    { id: 'CS101', name: 'Introduction to Programming', grade: 'A' },
    { id: 'CS201', name: 'Data Structures', grade: 'A-' },
    { id: 'MATH101', name: 'Calculus I', grade: 'B+' },
    { id: 'ENG101', name: 'English Composition', grade: 'A' }
  ]);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Student Dashboard</h1>
      
      <div className="dashboard-grid">
        {/* Student Information Card */}
        <div className="info-card">
          <h2 className="card-title">Student Information</h2>
          <div className="student-info">
            <p><strong>Name:</strong> {studentInfo.name}</p>
            <p><strong>Student ID:</strong> {studentInfo.id}</p>
            <p><strong>Program:</strong> {studentInfo.program}</p>
            <p><strong>Year:</strong> {studentInfo.year}</p>
            <p><strong>GPA:</strong> {studentInfo.gpa}</p>
          </div>
        </div>
        
        {/* Courses Card */}
        <div className="courses-card">
          <h2 className="card-title">Enrolled Courses</h2>
          <div>
            <table className="courses-table">
              <thead>
                <tr>
                  <th>Course ID</th>
                  <th>Course Name</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => (
                  <tr key={course.id}>
                    <td>{course.id}</td>
                    <td>{course.name}</td>
                    <td>{course.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Announcements Section */}
      <div className="announcements-section">
        <h2 className="card-title">Announcements</h2>
        <div>
          <div className="announcement">
            <h3 className="announcement-title">Registration for Fall Semester</h3>
            <p className="announcement-date">Posted on July 9, 2025</p>
            <p className="announcement-content">Registration for the Fall semester is now open. Please complete your course selection by July 30.</p>
          </div>
          <div className="announcement">
            <h3 className="announcement-title">Midterm Exam Schedule</h3>
            <p className="announcement-date">Posted on July 7, 2025</p>
            <p className="announcement-content">The midterm exam schedule has been posted. Please check your student portal for dates and locations.</p>
          </div>
          <div className="announcement">
            <h3 className="announcement-title">Campus Career Fair</h3>
            <p className="announcement-date">Posted on July 5, 2025</p>
            <p className="announcement-content">Don't miss the upcoming Career Fair on August 15. Over 50 companies will be present with internship and job opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
