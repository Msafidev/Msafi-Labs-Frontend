// components/About/Technologies.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faAws, faFigma,faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faCloud, faPaintBrush, faPenNib } from '@fortawesome/free-solid-svg-icons';

const INK = '#1a1b2e';
const MUTED = '#6b7280';

const techStack = [
  {
    name: 'React',
    icon: faReact,
    color: '#61DAFB',
    bg: '#61DAFB15',
    description: 'Frontend & UI Development',
  },
  {
    name: 'Django',
    icon: faPython,
    color: '#092E20',
    bg: '#092E2015',
    description: 'Backend & APIs',
  },
  {
    name: 'Supabase / PostgreSQL',
    icon: faCloud,
    color: '#3ECF8E',
    bg: '#3ECF8E15',
    description: 'Cloud Infrastructure & Database',
  },
  {
    name: 'Figma',
    icon: faFigma,
    color: '#F24E1E',
    bg: '#F24E1E15',
    description: 'Design & Prototyping',
  },
  {
    name: 'Photoshop',
    icon: faPaintBrush,         
    color: '#31A8FF',
    bg: '#31A8FF15',
    description: 'Image Editing & Photo Manipulation',
  },
  {
    name: 'Illustrator',
    icon: faPenNib,             
    color: '#FF9A00',
    bg: '#FF9A0015',
    description: 'Vector Graphics & Illustration',
  },
   {
      name: 'Node.js',
      icon: faNodeJs,
      color: '#339933',
      bg: '#33993315',
      description: 'Backend  & APIs',
    },
];

export default function Technologies() {
  return (
    <section style={{ padding: '0 6vw 64px' }}>
      <div style={{ marginBottom: 32, textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: '#94a0b3', marginBottom: 10 }}>
          THE STACK
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 800, color: INK, margin: 0 }}>Technologies We Use</h2>
        <p style={{ fontSize: 14.5, color: MUTED, marginTop: 8 }}>
          Modern tools powering our labs every day.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 20,
          maxWidth: 1000,
          margin: '0 auto',
        }}
      >
        {techStack.map((tech) => (
          <div
            key={tech.name}
            style={{
              background: '#fff',
              border: '1px solid #edf0f5',
              borderRadius: 16,
              padding: '28px 20px 24px',
              textAlign: 'center',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
              cursor: 'default',
              boxShadow: '0 4px 12px rgba(26,27,46,0.04)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 20px 40px -20px rgba(26,27,46,0.18)';
              e.currentTarget.style.borderColor = tech.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(26,27,46,0.04)';
              e.currentTarget.style.borderColor = '#edf0f5';
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: tech.bg,
                color: tech.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32,
                margin: '0 auto 14px',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <FontAwesomeIcon icon={tech.icon} />
            </div>

            <div style={{ fontSize: 16, fontWeight: 700, color: INK, marginBottom: 4 }}>
              {tech.name}
            </div>
            <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.4 }}>
              {tech.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}