import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function TeacherRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [subject, setSubject] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('attendance-monitoring-system-alpha.vercel.app/api/teachers/register', { name, email, password, subject })
            .then(result => {
                console.log(result);
                navigate('/teacher/login');  // Navigate to teacher login page after successful registration
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input 
                            type="text" 
                            placeholder="Enter Name" 
                            name="name" 
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
                            name="email" 
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            name="password" 
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subject">
                            <strong>Subject</strong>
                        </label>
                        <input 
                            type="text" 
                            placeholder="Enter Subject" 
                            name="subject" 
                            className="form-control rounded-0"
                            onChange={(e) => setSubject(e.target.value)} 
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>
                <p className="mt-3">Already Have an Account?</p>
                <Link to="/teacher/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default TeacherRegister;
