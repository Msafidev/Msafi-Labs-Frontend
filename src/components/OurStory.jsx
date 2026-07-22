// components/About/OurStory.jsx
import React from 'react';
import AccentDivider from './AccentDivider';

const INK = '#1a1b2e';
const MUTED = '#6b7280';

export default function OurStory() {
  return (
    <section style={{ padding: '64px 6vw' }}>
      <div
        style={{
          background: '#fff',
          border: '1px solid #edf0f5',
          borderRadius: 20,
          padding: '44px 40px',
          boxShadow: '0 24px 48px -32px rgba(26,27,46,0.12)',
          // 🟢 ONLY THESE 4 LINES WERE ADDED to center everything
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: '#94a0b3', marginBottom: 14 }}>
          THE WHY
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 800, color: INK, marginBottom: 18, maxWidth: 560 }}>
          Our Story
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: MUTED, maxWidth: 640, marginBottom: 24 }}>
          Msafi Labs was born from a singular frustration: great ideas were dying because of bad
          execution. We saw businesses trapped by rigid templates, slow agencies, and technology
          that was built for yesterday. We founded Msafi to bridge the gap between raw innovation
          and polished delivery.
        </p>
        <p style={{ fontSize: 17, fontWeight: 700, color: INK, margin: 0 }}>
          We are technologists who care about aesthetics, and designers who understand code.
        </p>
        <AccentDivider margin="28px 0 0" />
      </div>
    </section>
  );
}