import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faXTwitter, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function TopBar({ hidden }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hide TopBar completely on mobile devices to optimize viewport vertical space
  if (isMobile) return null;

  return (
    <div
      style={{
        background: '#F6F7FA',
        color: '#6C63FF',
        fontSize: 13,
        padding: '0 2rem',
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        opacity: hidden ? 0 : 1,
      }}
    >
      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <span><FontAwesomeIcon icon={faPhone} style={{ marginRight: 6 }} />+254 759 015 376</span>
        <span><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 6 }} />msafilabs@gmail.com</span>
      </div>
      
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <a href="https://instagram.com/msafi.labs" target="_blank" rel="noopener noreferrer" style={{ color: '#6C63FF' }}><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://x.com/msafilabs" target="_blank" rel="noopener noreferrer" style={{ color: '#6C63FF' }}><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href="https://tiktok.com/@msafi_labs" target="_blank" rel="noopener noreferrer" style={{ color: '#6C63FF' }}><FontAwesomeIcon icon={faTiktok} /></a>
        <a href="https://linkedin.com/in/austineochiengdev" target="_blank" rel="noopener noreferrer" style={{ color: '#6C63FF' }}><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    </div>
  );
}