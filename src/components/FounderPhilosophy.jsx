// components/About/FounderPhilosophy.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { ACCENTS } from './AccentDivider';

const INK = '#1a1b2e';
const MUTED = '#6b7280';

// Replaces the "Team" section — no headshots needed, just the thinking
// behind the four labs.
export default function FounderPhilosophy() {
  return (
    <section style={{ padding: '0 6vw 64px' }}>
      <div
        style={{
          background: '#fff',
          border: '1px solid #edf0f5',
          borderRadius: 20,
          padding: '44px 40px',
          // 🟢 REPLACED grid with flex to center everything
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: '#94a0b3', marginBottom: 14 }}>
            THE THINKING
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: INK, marginBottom: 20 }}>
            Founder's Philosophy
          </h2>

          <FontAwesomeIcon icon={faQuoteLeft} style={{ color: ACCENTS.design, fontSize: 18, marginBottom: 12 }} />

          <p style={{ fontSize: 17, lineHeight: 1.8, color: INK, maxWidth: 600, fontWeight: 500, marginBottom: 18 }}>
            Four labs, one instinct: a business shouldn't have to choose between looking good and
            working well. Every project we take on gets filtered through the same question —
            does this hold up under real use, and does it feel considered while doing it?
          </p>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: MUTED, maxWidth: 560, margin: '0 auto' }}>
            That's the whole premise behind running Design, Code, AI, and Platform as one studio
            instead of three separate vendors you'd have to stitch together yourself.
          </p>
        </div>

        {/* Small accent-dot cluster instead of a headshot — ties back to the 4 labs. */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 24 }}>
          {Object.values(ACCENTS).map((c) => (
            <div key={c} style={{ width: 34, height: 34, borderRadius: 10, background: `${c}22`, border: `1.5px solid ${c}` }} />
          ))}
        </div>
      </div>
    </section>
  );
}