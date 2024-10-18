import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sign from './components/Sign';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Sign />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
