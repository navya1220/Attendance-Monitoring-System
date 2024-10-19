import React from 'react';
import { useNavigate } from 'react-router-dom';

function Credentials() {
  const navigate = useNavigate();

  const handleStudentClick = () => {
    navigate('/register'); 
  };

  const handleTeacherClick = () => {
    navigate('/teacher/register'); 
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Welcome to the Attendance Management System</h2>
      <p>Select your role to continue:</p>
      <div className="mt-4">
        <button className="btn btn-primary mx-2" onClick={handleStudentClick}>
          Student
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleTeacherClick}>
          Teacher
        </button>
      </div>
    </div>
  );
}

export default Credentials;
