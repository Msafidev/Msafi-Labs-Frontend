// components/About/AboutCTA.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ACCENTS } from './AccentDivider';
import { useInquiry } from '../contexts/InquiryContext';   // ✅ correct path

export default function AboutCTA() {
  const inquiry = useInquiry(); // ✅ get modal controls

  return (
    <section style={{ padding: '0 6vw 90px' }}>
      <div
        style={{
          background: '#1a1b2e',
          borderRadius: 24,
          padding: '56px 40px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 3, display: 'flex' }}>
          {Object.values(ACCENTS).map((c) => (
            <div key={c} style={{ flex: 1, background: c }} />
          ))}
        </div>

        <h2 style={{ fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 12, maxWidth: 480 }}>
          Ready to work with a studio that does both?
        </h2>
        <p style={{ fontSize: 14.5, color: '#a0a8ba', marginBottom: 28, maxWidth: 460 }}>
          Let's talk about what your project actually needs — no black boxes, no floppy disks.
        </p>

        {/* ✅ Button – opens inquiry modal with "appointment" variant */}
        <button
          onClick={() => inquiry.open('appointment')}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 26px',
            borderRadius: 35, fontSize: 14, fontWeight: 600, background: '#6c63ff', color: '#fff',
            border: 'none', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          Book Appointment
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 12 }} />
        </button>
      </div>
    </section>
  );
}