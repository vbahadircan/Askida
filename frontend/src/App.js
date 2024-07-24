import React, { useState } from 'react';
import QRCode from 'qrcode.react'; // Import QRCode component
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import QRCodeGenerator from './pages/QrCodeGenerator';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar'; // Import the Navbar component




function App() {
  return (
    <Router>
       <Navbar /> 
      <Routes>
        <Route path="/askiyabirak" element={<QRCodeGenerator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
