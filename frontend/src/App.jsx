import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sign from './components/Sign';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import TeacherRegister from './components/TeacherSign';
import Credentails from './components/Credentials';
import TeacherLogin from './components/TeacherLogin';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Credentails/>}></Route>
          <Route path='/register' element={<Sign />} />
          <Route path="/teacher/register" element={<TeacherRegister/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/teacher/login' element={<TeacherLogin/>}></Route>
          <Route path='/home' element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
