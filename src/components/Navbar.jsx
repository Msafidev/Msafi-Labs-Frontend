import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faBars,
  faTimes,
  faChevronDown,
  faArrowRight,
  faPalette,
  faCode,
  faRobot,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import Msafilogo from "../assets/Msafilogo.svg";
import Msafi from "../assets/Msafi.png";
import { useInquiry } from '../contexts/InquiryContext';

const links = [
  { name: 'Home', path: '/' },
  { name: 'The Labs', path: '/the-labs' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },        // lowercase for case‑sensitive routing
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

const labsData = [
  {
    id: 'design',
    type: 'services',
    name: 'Design Lab',
    tagline: 'Visual Identity & Brand Architecture',
    accent: '#E10A7F',
    icon: faPalette,
    path: '/the-labs/design',
    services: [
      'Brand Identity & Logo Design',
      'UI/UX Digital Mockups',
      'Corporate Branding Kits',
      'Marketing Graphics & Posters',
      'Social Media Aesthetic Curation',
    ],
  },
  {
    id: 'code',
    type: 'services',
    name: 'Code Lab',
    tagline: 'Full-Stack Engineering & Web Architecture',
    accent: '#00E5C0',
    icon: faCode,
    path: '/the-labs/code',
    services: [
      'Custom Web Applications',
      'Sleek Frontend Development',
      'Robust Backend & APIs',
      'E-Commerce Storefronts',
      'CMS Platform Deployment',
    ],
  },
  {
    id: 'ai',
    type: 'services',
    name: 'AI Lab',
    tagline: 'Intelligent Automation & Advanced Systems',
    accent: '#FFC947',
    icon: faRobot,
    path: '/the-labs/ai',
    services: [
      'Smart Automation Workflows',
      'Custom Chatbots & Assistants',
      'AI Feature Integration',
      'Data Analysis & Insights',
      'AI Creative Workflows',
    ],
  },
  {
    id: 'platform',
    type: 'platform',
    name: 'Msafi Platform',
    tagline: '(Scalable Growth Products)',
    description:
      'We combine strategy and modern technology to deploy platforms built intentionally for long-term scalability and absolute user engagement.',
    image: Msafi,
    accent: '#2563eb',
    icon: faLayerGroup,
    path: '/the-labs/platform',
  },
];

export default function MainNav({ hidden, topBarVisible }) {
  const inquiry = useInquiry();   // get modal controls

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [labsOpen, setLabsOpen] = useState(false);
  const [mobileLabsOpen, setMobileLabsOpen] = useState(false);
  const labsRef = useRef(null);
  const closeTimer = useRef(null);

  const topOffset = (!isMobile && topBarVisible) ? 36 : 0;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        setMobileLabsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (labsRef.current && !labsRef.current.contains(e.target)) {
        setLabsOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setLabsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const openLabs = () => {
    clearTimeout(closeTimer.current);
    setLabsOpen(true);
  };
  const scheduleCloseLabs = () => {
    closeTimer.current = setTimeout(() => setLabsOpen(false), 150);
  };

  return (
    <>
      <style>{`
        @keyframes msafiBeamGrow {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes msafiPanelIn {
          from { opacity: 0; transform: translate(-50%, -8px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .msafi-labs-trigger {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }
        .msafi-labs-chevron {
          font-size: 10px;
          transition: transform 0.25s ease;
        }
        .msafi-labs-chevron.open {
          transform: rotate(180deg);
        }
        .msafi-lab-col {
          position: relative;
          padding: 0 18px;
          flex: 1;
          min-width: 0;
        }
        .msafi-lab-col + .msafi-lab-col {
          border-left: 1px solid #edf0f5;
        }
        .msafi-lab-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          margin-bottom: 12px;
        }
        .msafi-lab-service {
          font-size: 12px;
          color: #5b6472;
          line-height: 1.5;
          padding-left: 14px;
          position: relative;
          margin-bottom: 6px;
        }
        .msafi-lab-image {
          width: 100%;
          height: 84px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 12px;
          display: block;
        }
        .msafi-lab-description {
          font-size: 12px;
          color: #5b6472;
          line-height: 1.55;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .msafi-lab-readmore {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          margin-top: 14px;
        }
        .msafi-lab-readmore svg {
          font-size: 10px;
          transition: transform 0.2s ease;
        }
        .msafi-lab-readmore:hover svg {
          transform: translateX(3px);
        }
        .msafi-mobile-lab-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-radius: 8px;
          text-decoration: none;
          margin-bottom: 6px;
        }
      `}</style>

      <nav
        style={{
          background: '#fff',
          borderBottom: '0.5px solid #e2e8f0',
          padding: '0 1.5rem',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'fixed',
          top: topOffset,
          left: 0,
          right: 0,
          zIndex: 99,
          transition: 'transform 0.3s ease, top 0.3s ease, opacity 0.3s ease',
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
          opacity: hidden ? 0 : 1,
        }}
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => setMenuOpen(false)}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={Msafilogo}
              alt="Arc.Studio logo"
              style={{ height: isMobile ? 55 : 75, width: 'auto', objectFit: 'contain' }}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </Link>

        {!isMobile && (
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            {links.map(link =>
              link.name === 'The Labs' ? (
                <div
                  key={link.name}
                  ref={labsRef}
                  style={{ position: 'relative' }}
                  onMouseEnter={openLabs}
                  onMouseLeave={scheduleCloseLabs}
                >
                  <button
                    className="msafi-labs-trigger"
                    onClick={() => setLabsOpen(o => !o)}
                    aria-expanded={labsOpen}
                    style={{
                      padding: '6px 14px', borderRadius: 8, fontSize: 14,
                      fontWeight: 500, color: '#4a5568',
                    }}
                  >
                    {link.name}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`msafi-labs-chevron ${labsOpen ? 'open' : ''}`}
                    />
                  </button>

                  {labsOpen && (
  <div
    style={{
      position: 'fixed',
      top: topOffset + 64,                // exactly at navbar bottom
      left: '50%',
      width: 960,
      maxWidth: 'calc(100vw - 48px)',
      background: '#fff',
      borderRadius: '0 0 18px 18px',      // only bottom corners rounded
      boxShadow: '0 24px 48px -12px rgba(20, 20, 43, 0.18)',
      border: '1px solid #edf0f5',
      borderTop: 'none',                  // remove top border – navbar’s border takes its place
      overflow: 'hidden',
      animation: 'msafiPanelIn 0.22s ease forwards',
      zIndex: 100,
    }}
  >
    {/* the colored beam (3px) stays inside, unchanged */}
    <div style={{ height: 3, background: '#f2f3f7', overflow: 'hidden' }}></div>

    {/* rest of dropdown content – unchanged */}
    <div style={{ display: 'flex', padding: '12px 8px' }}>
      {labsData.map(lab => (
        <div className="msafi-lab-col" key={lab.id}>
          {lab.type === 'platform' ? (
            <img src={lab.image} alt={lab.name} className="msafi-lab-image" />
          ) : (
            <div
              className="msafi-lab-icon"
              style={{ background: `${lab.accent}1A`, color: lab.accent }}
            >
              <FontAwesomeIcon icon={lab.icon} />
            </div>
          )}

          <div style={{ fontSize: 15, fontWeight: 700, color: '#1a1b2e', marginBottom: 2 }}>
            {lab.name}
          </div>
          <div style={{ fontSize: 11.5, color: '#94a0b3', marginBottom: 14, lineHeight: 1.4 }}>
            {lab.tagline}
          </div>

          {lab.type === 'platform' ? (
            <p className="msafi-lab-description">{lab.description}</p>
          ) : (
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {lab.services.map(service => (
                <li key={service} className="msafi-lab-service">
                  <span
                    style={{
                      position: 'absolute', left: 0, top: 6,
                      width: 5, height: 5, borderRadius: '50%',
                      background: lab.accent,
                    }}
                  />
                  {service}
                </li>
              ))}
            </ul>
          )}

          <Link
            to={lab.path}
            className="msafi-lab-readmore"
            style={{ color: lab.accent, textDecoration: 'none' }}
            onClick={() => setLabsOpen(false)}
          >
            Read more
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      ))}
    </div>
  </div>
  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    padding: '6px 14px', borderRadius: 8, fontSize: 14,
                    fontWeight: 500, textDecoration: 'none', color: '#4a5568',
                  }}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        )}

        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <button
            onClick={() => {
              inquiry.open('appointment');
              setMenuOpen(false);
            }}
            style={{
              padding: '10px 18px',
              borderRadius: 8,
              backgroundColor: '#2563eb',
              color: '#ffffff',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Book Appointment
          </button>

          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '22px',
                color: '#4a5568',
                cursor: 'pointer',
                padding: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
          )}
        </div>
      </nav>

      {isMobile && menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: topOffset + 74,
            left: '16px',
            width: '260px',
            height: 'auto',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
            zIndex: 98,
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            gap: '8px',
            boxSizing: 'border-box',
          }}
        >
          {links.map(link =>
            link.name === 'The Labs' ? (
              <div key={link.name}>
                <button
                  onClick={() => setMobileLabsOpen(o => !o)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: '#4a5568',
                    background: '#f8fafc',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  {link.name}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{
                      fontSize: 11,
                      transition: 'transform 0.2s ease',
                      transform: mobileLabsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>

                {mobileLabsOpen && (
                  <div style={{ marginTop: 6, paddingLeft: 4 }}>
                    {labsData.map(lab => (
                      <Link
                        key={lab.id}
                        to={lab.path}
                        className="msafi-mobile-lab-row"
                        style={{ 
                          background: `${lab.accent}0D`,
                          textDecoration: 'none',
                        }}
                        onClick={() => setMenuOpen(false)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <FontAwesomeIcon icon={lab.icon} style={{ color: lab.accent, fontSize: 13 }} />
                          <span style={{ fontSize: 13.5, fontWeight: 600, color: '#1a1b2e' }}>
                            {lab.name}
                          </span>
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} style={{ color: lab.accent, fontSize: 11 }} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '10px 14px',
                  fontSize: '15px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: '#4a5568',
                  borderRadius: '8px',
                  background: '#f8fafc',
                  transition: 'background 0.2s ease',
                }}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      )}
    </>
  );
}