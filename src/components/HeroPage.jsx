import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useInquiry } from '../contexts/InquiryContext'; // ✅ import the hook
import heroBg from "../assets/HeroBg.png";

export default function HeroPage() {
  const inquiry = useInquiry(); // ✅ get modal controls
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 'calc(100vh - 64px)',
        zIndex: 1,
        backgroundImage: `linear-gradient(rgba(20, 35, 55, 0.4), rgba(20, 35, 55, 0.4)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: isMobile ? 'center' : 'flex-end',
        textAlign: isMobile ? 'center' : 'right',
        paddingLeft: isMobile ? '24px' : '40px',
        paddingRight: isMobile ? '24px' : '8%',
        boxSizing: 'border-box',
      }}
    >
      {/* Main Content Container */}
      <div style={{ maxWidth: '600px', transform: 'translateY(-10px)' }}>
        <h1
          style={{
            fontSize: 'clamp(2rem, 7vw, 4.2rem)',
            fontWeight: '800',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            margin: '0 0 20px 0',
            lineHeight: '1.2',
          }}
        >
          CREATE . CODE <br /> INNOVATE
        </h1>

        <p
          style={{
            fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
            fontWeight: '300',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.85)',
            margin: isMobile ? '0 auto 40px auto' : '0 0 40px auto',
          }}
        >
          At Msafi Labs, we design and develop modern websites, web applications, mobile apps, and custom software that help businesses grow, innovate, and succeed in the digital world.
        </p>

        {/* Call to Action Button – now opens the modal */}
        <button
          onClick={() => inquiry.open('quote')}
          style={{
            background: 'transparent',
            color: '#ffffff',
            border: '2px solid #ffffff',
            padding: isMobile ? '10px 28px' : '12px 36px',
            fontSize: isMobile ? '13px' : '14px',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            borderRadius: '40px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.color = '#142337';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#ffffff';
          }}
        >
          Request a Quote
        </button>
      </div>

      {/* Bottom Social Links */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: isMobile ? '0' : '40px',
          right: isMobile ? '0' : '8%',
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'flex-end',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="https://facebook.com/msafilabs" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '19px', opacity: 0.85 }}><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="https://linkedin.com/in/austineochiengdev " title="Vanity URL name" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '19px', opacity: 0.85 }}><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://twitter.com/msafilabs" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '19px', opacity: 0.85 }}><FontAwesomeIcon icon={faXTwitter} /></a>
          <a href="https://instagram.com/msafi.labs" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '19px', opacity: 0.85 }}><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
    </section>
  );
}