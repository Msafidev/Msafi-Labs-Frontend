// components/About/OurLabs.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCode, faRobot, faLayerGroup, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ACCENTS } from './AccentDivider';

const INK = '#1a1b2e';
const MUTED = '#6b7280';

const labs = [
  { id: 'design', icon: faPalette, accent: ACCENTS.design, name: 'Design Lab', copy: 'Brand identity, UI/UX, and visual storytelling.', path: '/the-labs/design' },
  { id: 'code', icon: faCode, accent: ACCENTS.code, name: 'Code Lab', copy: 'Full-stack engineering, web apps, and e-commerce.', path: '/the-labs/code' },
  { id: 'ai', icon: faRobot, accent: ACCENTS.ai, name: 'AI Lab', copy: 'Workflow automation, custom chatbots, and data insights.', path: '/the-labs/ai' },
  { id: 'platform', icon: faLayerGroup, accent: ACCENTS.platform, name: 'Msafi Platform', copy: 'Our flagship scalable products designed for long-term growth.', path: '/the-labs/platform' },
];

export default function OurLabs() {
  return (
    <section style={{ padding: '0 6vw 64px' }}>
      <style>{`
        .lab-card { transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease; }
        .lab-card:hover { transform: translateY(-4px); }
        .lab-readmore svg { transition: transform 0.2s ease; }
        .lab-readmore:hover svg { transform: translateX(3px); }
      `}</style>

      <div style={{ marginBottom: 28, textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: '#94a0b3', marginBottom: 10 }}>
          WHAT WE DO
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 800, color: INK, margin: 0 }}>Our Labs</h2>
        <p style={{ fontSize: 14.5, color: MUTED, marginTop: 8 }}>
          Our structure is unique. We operate as four specialized verticals.
        </p>
      </div>

     
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
        {labs.map((lab) => (
          <div
            key={lab.id}
            className="lab-card"
            style={{
              background: '#fff',
              border: '1px solid #edf0f5',
              borderRadius: 16,
              padding: 24,
              boxShadow: '0 16px 32px -24px rgba(26,27,46,0.14)',
            }}
          >
            <div
              style={{
                width: 40, height: 40, borderRadius: 11, background: `${lab.accent}1A`,
                color: lab.accent, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, marginBottom: 16,
              }}
            >
              <FontAwesomeIcon icon={lab.icon} />
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: INK, marginBottom: 8 }}>{lab.name}</h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, color: MUTED, marginBottom: 18 }}>{lab.copy}</p>
            <Link
              to={lab.path}
              className="lab-readmore"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: lab.accent, textDecoration: 'none' }}
            >
              Explore lab
              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 10 }} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}