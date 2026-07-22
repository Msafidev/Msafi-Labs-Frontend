import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useInquiry } from '../contexts/InquiryContext';

const ContactSection = () => {
  const inquiry = useInquiry();

  return (
    <section style={{ 
      padding: '80px 6vw', 
      background: '#f8fafc',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle background pattern (like other sections) */}
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

      <div style={{ 
        maxWidth: '1100px', 
        margin: '0 auto', 
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: '20px',
            background: '#6c63ff14',
            color: '#6c63ff',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            Contact
          </span>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.8rem)', 
            fontWeight: 800, 
            margin: '0 0 8px 0',
            color: '#1a1b2e',
          }}>
            Get in Touch
          </h2>
          <p style={{ 
            fontSize: '1.05rem', 
            color: '#6b7280', 
            maxWidth: '500px', 
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            We’d love to hear about your project. Reach out any way you prefer.
          </p>
        </div>

        {/* Contact cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '24px',
          marginBottom: '48px',
        }}>
          {[
            { icon: faEnvelope, title: 'Email', detail: 'Msafilabs@gmail.com', link: 'mailto:Msafilabs@gmail.com' },
            { icon: faPhone, title: 'Phone', detail: '+254 759 015 376', link: 'tel:+254759015376' },
            { icon: faMapMarkerAlt, title: 'Location', detail: 'Nairobi, Kenya', link: null },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                padding: '28px 24px',
                borderRadius: '16px',
                border: '1px solid #edf0f5',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                transition: 'all 0.25s ease',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#6c63ff44';
                e.currentTarget.style.boxShadow = '0 12px 28px -8px rgba(108,99,255,0.12)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#edf0f5';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: '#6c63ff0c',
                color: '#6c63ff',
                fontSize: '24px',
                marginBottom: '16px',
              }}>
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <h4 style={{ 
                fontSize: '1rem', 
                fontWeight: 700, 
                margin: '0 0 6px 0',
                color: '#1a1b2e',
              }}>
                {item.title}
              </h4>
              {item.link ? (
                <a 
                  href={item.link} 
                  style={{ 
                    color: '#4a5568', 
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#6c63ff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#4a5568'}
                >
                  {item.detail}
                </a>
              ) : (
                <p style={{ margin: 0, color: '#4a5568', fontSize: '0.95rem' }}>
                  {item.detail}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => inquiry.open('talk')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 40px',
              borderRadius: '40px',
              fontSize: '16px',
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
            Let's Talk
            <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '14px' }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;