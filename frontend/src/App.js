import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import HomePage from './HomePage';
import QrCodeGeneration from './pages/QrCodeGeneration';
import ComingSoonPage from './pages/ComingSoonPage';
import GizlilikPage from './pages/GizlilikPage';
import AccDeletionPage from './pages/AccDeletionPage';
import PaymentPage from './pages/PaymentPage';
import LegalPolicyPage from './pages/LegalPolicyPage';
import PaymentStatusPage from './pages/PaymentStatusPage';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/askida" element={<HomePage />} />
        <Route path="/askida/askiya-birak" element={<QrCodeGeneration />} />
        <Route path="/404" element={<ComingSoonPage />} />
        <Route path="/gizlilik-politikasi" element={<GizlilikPage />} />
        <Route path="/account-deletion" element={<AccDeletionPage />} />
        <Route path="/askida/askiya-birak/uzaktan/" element={<PaymentPage />} />
        <Route path="/mesafeli-satis-sozlesmesi" element={<LegalPolicyPage contentFile="data/mesafeli-satis-sozlesmesi.json" />} />
        <Route path="/iptal-ve-iade-kosullari" element={<LegalPolicyPage contentFile="data/iptal-ve-iade-kosullari.json" />} />
        <Route path="/uyelik-ve-kullanim-sartlari" element={<LegalPolicyPage contentFile="data/uyelik-ve-kullanim-sartlari.json" />} />
        <Route path="/payment-status" element={<PaymentStatusPage />} />      
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

