import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct capitalization
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    {/* Import React.StrictMode properly */}
    <App />
  </React.StrictMode>,
);
