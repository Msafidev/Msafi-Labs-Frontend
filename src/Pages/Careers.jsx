// src/Pages/Careers.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faRocket } from '@fortawesome/free-solid-svg-icons';

const Careers = () => {
  return (
    <div style={{
      minHeight: 'calc(100vh - 64px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: '#f8fafc',
      textAlign: 'center',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      {/* Subtle background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity: 0.03,
        backgroundImage: `
          linear-gradient(#6c63ff 1px, transparent 1px),
          linear-gradient(90deg, #6c63ff 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
        {/* Back link */}
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#6b7280',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '40px',
            transition: 'gap 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.gap = '12px'}
          onMouseLeave={(e) => e.currentTarget.style.gap = '8px'}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Home
        </Link>

        {/* Icon */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80px',
          height: '80px',
          borderRadius: '20px',
          background: '#6c63ff14',
          color: '#6c63ff',
          fontSize: '36px',
          marginBottom: '24px',
        }}>
          <FontAwesomeIcon icon={faRocket} />
        </div>

        <h1 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          fontWeight: 800,
          color: '#1a1b2e',
          marginBottom: '12px',
          letterSpacing: '-0.02em',
        }}>
          Careers <br />
          <span style={{ color: '#6c63ff' }}>Coming Soon</span>
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: '#6b7280',
          lineHeight: 1.7,
          marginBottom: '32px',
        }}>
          We're building something amazing for our team. <br />
          Check back soon for opportunities to join the Msafi Labs family.
        </p>

        {/* Notify button (optional) – opens inquiry modal with "talk" variant */}
        <button
          onClick={() => {
            // You'll need to import useInquiry here if you want this button to work.
            // For now, it's just a placeholder.
            alert('We\'ll notify you when we open positions!');
          }}
          style={{
            padding: '12px 36px',
            borderRadius: '40px',
            fontSize: '15px',
            fontWeight: 600,
            background: '#6c63ff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            boxShadow: '0 4px 14px rgba(108, 99, 255, 0.25)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 12px 28px -6px rgba(108, 99, 255, 0.4)';
            e.currentTarget.style.background = '#5b54e0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(108, 99, 255, 0.25)';
            e.currentTarget.style.background = '#6c63ff';
          }}
        >
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default Careers;