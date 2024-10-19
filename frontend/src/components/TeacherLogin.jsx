import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function TeacherLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/teachers/login', { email, password })
        .then(result => {
            console.log(result);
            if (result.status === 200) {
                localStorage.setItem('teacherToken', result.data.token);
                navigate('/home');
            }
        })
        .catch(err => {
            console.error(err);
            setErrorMessage('Invalid credentials. Please try again.');
        });
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-100 w-md-50 w-lg-25" style={{ maxWidth: "400px" }}>
                <h1 className="text-center">Teacher Login</h1>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="form-control rounded-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="form-control rounded-0"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                </form>
                <p className="text-center mt-3">Don't Have an Account?</p>
                <Link to="/teacher/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Sign Up
                </Link>
            </div>
        </div>
    );
}

export default TeacherLogin;
