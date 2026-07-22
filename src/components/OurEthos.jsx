// components/About/OurEthos.jsx
import React from 'react';
import { ACCENTS } from './AccentDivider';

const MUTED = '#a0a8ba';

// Mission + Vision merged into one short manifesto, not two corporate blocks.
export default function OurEthos() {
  return (
    <section style={{ padding: '0 6vw 64px' }}>
      <div
        style={{
          background: '#1a1b2e',
          borderRadius: 24,
          padding: '56px 44px',
          position: 'relative',
          overflow: 'hidden',
          // 🟢 ONLY THESE 3 LINES WERE ADDED to center everything
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 3,
            display: 'flex',
          }}
        >
          {Object.values(ACCENTS).map((c) => (
            <div key={c} style={{ flex: 1, background: c }} />
          ))}
        </div>

        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: '#6c8dff', marginBottom: 18 }}>
          OUR ETHOS
        </div>

        <h2
          style={{
            fontSize: 'clamp(26px, 3.4vw, 38px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.25,
            maxWidth: 620,
            marginBottom: 22,
          }}
        >
          To democratize world-class technology.
        </h2>

        <p style={{ fontSize: 15.5, lineHeight: 1.8, color: MUTED, maxWidth: 560, margin: 0 }}>
          Whether you're a startup in Nairobi or an enterprise in London, you deserve
          bleeding-edge solutions without the corporate friction. Our vision is to make Africa a
          global benchmark for digital excellence — one project at a time.
        </p>
      </div>
    </section>
  );
}