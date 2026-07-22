import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const TermsPage = () => {
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
          Terms of Service
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '30px' }}>Last updated: July 2026</p>

        <div style={{
          background: '#fff',
          padding: '40px',
          borderRadius: '16px',
          border: '1px solid #edf0f5',
        }}>
          <p style={{ color: '#4a5568', lineHeight: 1.8 }}>
            Welcome to Msafi Labs. By using our website and services, you agree to the following terms and conditions. Please read them carefully.
          </p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1a1b2e', margin: '28px 0 10px 0' }}>
            1. Acceptance of Terms
          </h3>
          <p style={{ color: '#4a5568', lineHeight: 1.8 }}>
            By accessing our website or using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
          </p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1a1b2e', margin: '28px 0 10px 0' }}>
            2. Services & Intellectual Property
          </h3>
          <p style={{ color: '#4a5568', lineHeight: 1.8 }}>
            All content, designs, code, and deliverables provided by Msafi Labs remain our intellectual property until final payment is made. Upon full payment, ownership of the final deliverables is transferred to you.
          </p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1a1b2e', margin: '28px 0 10px 0' }}>
            3. Client Responsibilities
          </h3>
          <ul style={{ color: '#4a5568', lineHeight: 1.8, paddingLeft: '20px' }}>
            <li>Provide clear, timely feedback and required assets</li>
            <li>Ensure you have the rights to any content you supply</li>
            <li>Use the services in compliance with applicable laws</li>
          </ul>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1a1b2e', margin: '28px 0 10px 0' }}>
            4. Payment & Refunds
          </h3>
          <p style={{ color: '#4a5568', lineHeight: 1.8 }}>
            Payment terms are outlined in each project’s proposal. Refunds are handled on a case‑by‑case basis; we always work toward a fair resolution.
          </p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1a1b2e', margin: '28px 0 10px 0' }}>
            5. Limitation of Liability
          </h3>
          <p style={{ color: '#4a5568', lineHeight: 1.8 }}>
            To the fullest extent permitted by law, Msafi Labs is not liable for indirect, incidental, or consequential damages arising from use of our services.
          </p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1a1b2e', margin: '28px 0 10px 0' }}>
            6. Changes to Terms
          </h3>
          <p style={{ color: '#4a5568', lineHeight: 1.8 }}>
            We may update these terms from time to time. Continued use of our services constitutes acceptance of the updated terms.
          </p>

          <p style={{ color: '#6b7280', marginTop: '30px', fontSize: '0.9rem' }}>
            For any questions, please{' '}
            <Link to="/contact" style={{ color: '#6c63ff', textDecoration: 'none' }}>contact us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;