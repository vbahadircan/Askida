// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import QrCodeGeneration from './pages/QrCodeGeneration';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/askiya-birak" element={<QrCodeGeneration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
