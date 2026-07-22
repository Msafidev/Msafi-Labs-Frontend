// components/About/WhyChooseUs.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faShieldHalved, faBolt, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { ACCENTS } from './AccentDivider';

const INK = '#1a1b2e';
const MUTED = '#6b7280';

const points = [
  { icon: faEyeSlash, accent: ACCENTS.design, title: 'No Black Boxes', copy: 'Transparent pricing and weekly client syncs.' },
  { icon: faShieldHalved, accent: ACCENTS.code, title: 'Future-Proof Code', copy: 'Clean, documented code you can scale for years.' },
  { icon: faBolt, accent: ACCENTS.ai, title: 'Speed & Agility', copy: 'Decisions are made in hours, not weeks.' },
  { icon: faWandMagicSparkles, accent: ACCENTS.platform, title: 'Visual Excellence', copy: 'Software that looks bad usually performs bad.' },
];

export default function WhyChooseUs() {
  return (
    <section style={{ padding: '0 6vw 64px' }}>
      <div
        style={{
          background: '#fff',
          border: '1px solid #edf0f5',
          borderRadius: 20,
          padding: '44px 40px',
        }}
      >
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: '#94a0b3', marginBottom: 10 }}>
          THE DIFFERENTIATOR
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 800, color: INK, marginBottom: 8 }}>Why Choose Us</h2>
        <p style={{ fontSize: 14.5, color: MUTED, marginBottom: 32, maxWidth: 560 }}>
          We don't hand you a floppy disk and wave goodbye. We embed ourselves as a true partner.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {points.map((p) => (
            <div key={p.title} style={{ borderTop: `3px solid ${p.accent}`, paddingTop: 16 }}>
              <div
                style={{
                  width: 34, height: 34, borderRadius: 9, background: `${p.accent}1A`, color: p.accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, marginBottom: 12,
                }}
              >
                <FontAwesomeIcon icon={p.icon} />
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: INK, marginBottom: 6 }}>{p.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: MUTED, margin: 0 }}>{p.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}