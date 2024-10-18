import React from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
    const location = useLocation();
    const { attendanceDetails } = location.state || { attendanceDetails: [] };

    const totalStudents = attendanceDetails.length;
    const presentCount = attendanceDetails.filter(record => record.status === 'present').length;
    const absentCount = attendanceDetails.filter(record => record.status === 'absent').length;
    const presentPercentage = totalStudents > 0 ? ((presentCount / totalStudents) * 100).toFixed(2) : 0;
    const absentPercentage = totalStudents > 0 ? ((absentCount / totalStudents) * 100).toFixed(2) : 0;

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Dashboard</h2>
            
            <div className="row text-center mb-4">
                <div className="col-md-4">
                    <div className="card shadow-sm p-3 mb-3 bg-body rounded">
                        <div className="card-body">
                            <h5>Total Students</h5>
                            <h3>{totalStudents}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm p-3 mb-3 bg-body rounded">
                        <div className="card-body">
                            <h5>Present</h5>
                            <h3>{presentCount}</h3>
                            <p>{presentPercentage}%</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm p-3 mb-3 bg-body rounded">
                        <div className="card-body">
                            <h5>Absent</h5>
                            <h3>{absentCount}</h3>
                            <p>{absentPercentage}%</p>
                        </div>
                    </div>
                </div>
            </div>


            {attendanceDetails.length > 0 ? (
                <div>
                    <h3 className="text-center">Submitted Attendance Details</h3>
                    <table className="table table-bordered mt-3">
                        <thead className="thead-dark">
                            <tr>
                                <th>Student Name</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendanceDetails.map((record, index) => (
                                <tr key={index}>
                                    <td>{record.student}</td>
                                    <td>{record.date}</td>
                                    <td>
                                        <span className={`badge ${record.status === 'present' ? 'bg-success' : 'bg-danger'}`}>
                                            {record.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center mt-4">No attendance data available.</p>
            )}
        </div>
    );
}

export default Dashboard;
