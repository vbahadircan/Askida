import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Landing from './Landing';
import HomePage from './HomePage';
import QrCodeGeneration from './pages/QrCodeGeneration';
import ComingSoonPage from './pages/ComingSoonPage';
import GizlilikPage from './pages/GizlilikPage';
import AccDeletionPage from './pages/AccDeletionPage';

import { updateFavicon } from './utils/favicon'; // Import the utility function

function App() {
  const location = useLocation();

  React.useLayoutEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Anasayfa';
        updateFavicon('/logo_beyaz.svg'); // Update favicon for '/'
        break;
      case '/askida':
        document.title = 'Askıda';
        updateFavicon('/iced-coffee-orange.svg'); // Update favicon for '/askida'
        break;
      case '/askida/askiya-birak':
        document.title = 'Askıya Bırak';
        updateFavicon('/iced-coffee-orange.svg'); // Update favicon for '/askida'
        break;
      default:
        document.title = 'Asunatech';
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/askida" element={<HomePage />} />
        <Route path="/askida/askiya-birak" element={<QrCodeGeneration />} />
        <Route path="/404" element={<ComingSoonPage />} />
        <Route path="/gizlilik-politikasi" element={<GizlilikPage />} />
        <Route path="/account-deletion" element={<AccDeletionPage />} />

      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}