import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Home() {
    const [students, setStudents] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [attendance, setAttendance] = useState({});
    const [message, setMessage] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate

    // Fetch students when the component is mounted
    useEffect(() => {
        axios.get('http://localhost:3001/api/students')
            .then(response => setStudents(response.data))
            .catch(err => {
                console.error('Failed to fetch students:', err);
            });
    }, []);

    // Handle attendance marking for each student
    const handleAttendanceChange = (studentId, status) => {
        setAttendance(prev => ({
            ...prev,
            [studentId]: status
        }));
    };

    // Handle submit button click
    const handleSubmit = () => {
        const attendancePromises = students.map(student => {
            return axios.post('http://localhost:3001/api/attendance', {
                studentId: student._id,
                date: selectedDate,
                status: attendance[student._id] || 'absent',
                markedBy: student._id,
            }).then(response => ({
                student: student.name,
                date: selectedDate,
                status: attendance[student._id] || 'absent',
            }));
        });

        Promise.all(attendancePromises)
            .then((attendanceDetails) => {
                setMessage('Attendance marked successfully');
                navigate('/dashboard', { state: { attendanceDetails } });
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Mark Attendance</h2>

            {/* Date input for selecting the date */}
            <div className="mb-4">
                <label htmlFor="date" className="form-label">Select Date:</label>
                <input
                    id="date"
                    type="date"
                    className="form-control"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
            </div>

            <div className="list-group mb-4">
                {students.map(student => (
                    <div key={student._id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{student.name}</span>
                        <div>
                            <button
                                className="btn btn-success btn-sm me-2"
                                onClick={() => handleAttendanceChange(student._id, 'present')}
                            >
                                Present
                            </button>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleAttendanceChange(student._id, 'absent')}
                            >
                                Absent
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Submit Attendance
                </button>
            </div>

            {message && <div className="alert alert-success mt-3">{message}</div>}
        </div>
    );
}

export default Home;
