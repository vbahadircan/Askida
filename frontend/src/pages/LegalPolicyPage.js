import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './LegalPolicyPage.module.css';
import './LegalPolicyPage.css';
import logo from '../assets/images/logo_beyaz.webp';
import LoadingSpinner from '../components/PaymentLoadingScreen';

const LegalPolicyPage = ({ contentFile }) => {
  const [contentData, setContentData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadContent = async () => {
      const response = await import(`../${contentFile}`);
      setContentData(response.default);
      setLoading(false);
    };

    loadContent();
  }, [contentFile]);

  if (loading) return <LoadingSpinner />; // Show loading spinner while loading

  const { title, description, content } = contentData;

  return (
    <div className="legal-policy-page">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Navbar logo={logo} customClass={styles.customNavbar} />
      <div className="legal-policy-content">
        <h1>{title}</h1>
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default LegalPolicyPage;