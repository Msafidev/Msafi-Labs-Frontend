// components/About/CoreValues.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faScaleBalanced, faWandMagicSparkles, faRocket } from '@fortawesome/free-solid-svg-icons';

const INK = '#1a1b2e';
const MUTED = '#6b7280';
const ACCENT = '#6c63ff';

const values = [
  { icon: faGem, title: 'Craftsmanship', copy: 'We obsess over the details.' },
  { icon: faScaleBalanced, title: 'Integrity', copy: 'We tell you what you need to hear, not just what you want to hear.' },
  { icon: faWandMagicSparkles, title: 'Innovation', copy: 'We use AI to automate the boring stuff, so we can focus on the creative stuff.' },
  { icon: faRocket, title: 'Empowerment', copy: 'We build tools that make you look like a rockstar to your customers.' },
];

export default function CoreValues() {
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
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: '#94a0b3', textAlign : 'center', marginBottom: 10 }}>
          WHAT WE STAND FOR
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 800, color: INK, textAlign : 'center', marginBottom: 32 }}>Our Core Values</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {values.map((v) => (
            <div key={v.title} style={{ display: 'flex', gap: 14 }}>
              <div
                style={{
                  width: 36, height: 36, borderRadius: 10, background: `${ACCENT}14`, color: ACCENT,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0,
                }}
              >
                <FontAwesomeIcon icon={v.icon} />
              </div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: INK, marginBottom: 4 }}>{v.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: MUTED, margin: 0 }}>{v.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}