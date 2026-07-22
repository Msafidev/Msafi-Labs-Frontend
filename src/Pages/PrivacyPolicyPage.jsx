import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div style={{
      minHeight: 'calc(100vh - 64px)',
      padding: '60px 6vw',
      background: '#f8fafc',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <button
          onClick={goBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#6b7280',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '32px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>

        <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#1a1b2e', marginBottom: '8px' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '30px' }}>Last updated: July 2026</p>

        <div style={{
          background: '#fff',
          padding: '40px',
          borderRadius: '16px',
          border: '1px solid #edf0f5',
        }}>
          <p style={{ color: '#4a5568', lineHeight: 1.8 }}>
            At Msafi Labs, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you interact with our website and services.
          </p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1a1b2e', margin: '28px 0 10px 0' }}>
            1. Information We Collect
          </h3>
          <p style={{ color: '#4a5568', lineHeight: 1.8 }}>
            We collect information you provide directly, such as your name, email address, phone number, and project details when you fill out our inquiry form. We also collect usage data through cookies to improve your browsing experience.
          </p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1a1b2e', margin: '28px 0 10px 0' }}>
            2. How We Use Your Information
          </h3>
          <ul style={{ color: '#4a5568', lineHeight: 1.8, paddingLeft: '20px' }}>
            <li>To respond to your inquiries and provide the services you request</li>
            <li>To send you project updates and relevant communications</li>
            <li>To improve our website and services based on usage patterns</li>
          </ul>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1a1b2e', margin: '28px 0 10px 0' }}>
            3. Data Security
          </h3>
          <p style={{ color: '#4a5568', lineHeight: 1.8 }}>
            We implement industry‑standard security measures to protect your data from unauthorized access, alteration, or disclosure.
          </p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1a1b2e', margin: '28px 0 10px 0' }}>
            4. Your Rights
          </h3>
          <p style={{ color: '#4a5568', lineHeight: 1.8 }}>
            You may request access, correction, or deletion of your personal data at any time by contacting us at{' '}
            <a href="mailto:msafilabs@gmail.com" style={{ color: '#6c63ff', textDecoration: 'none' }}>msafilabs@gmail.com</a>.
          </p>

          <p style={{ color: '#6b7280', marginTop: '30px', fontSize: '0.9rem' }}>
            This policy may be updated occasionally. Please check back for the latest version.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;