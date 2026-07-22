// components/About/OurProcess.jsx
import React from 'react';

const INK = '#1a1b2e';
const MUTED = '#6b7280';
const ACCENT = '#6c63ff';

const steps = [
  { step: '01', title: 'Discover', copy: 'We listen to your goals and challenges.' },
  { step: '02', title: 'Design', copy: 'We craft intuitive user experiences.' },
  { step: '03', title: 'Build', copy: 'We code robust, scalable solutions.' },
  { step: '04', title: 'Launch', copy: 'We deploy, test, and fine-tune for performance.' },
  { step: '05', title: 'Grow', copy: 'We provide ongoing support and iteration.' },
];

export default function OurProcess() {
  return (
    <section style={{ padding: '0 6vw 72px' }}>
      <style>{`
        .op-track {
          display: flex;
          gap: 0;
          position: relative;
        }
        .op-track::before {
          content: '';
          position: absolute;
          top: 17px;
          left: 17px;
          right: 17px;
          height: 1.5px;
          background: #e2e8f0;
          z-index: 0;
        }
        .op-step {
          flex: 1;
          position: relative;
          z-index: 1;
          padding-right: 20px;
        }
        .op-marker {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #fff;
          border: 1.5px solid ${ACCENT};
          color: ${ACCENT};
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        @media (max-width: 860px) {
          .op-track {
            flex-direction: column;
            gap: 28px;
          }
          .op-track::before {
            top: 17px;
            bottom: 17px;
            left: 17px;
            right: auto;
            width: 1.5px;
            height: auto;
          }
          .op-step {
            display: flex;
            gap: 18px;
            padding-right: 0;
          }
          .op-marker {
            margin-bottom: 0;
            flex-shrink: 0;
          }
        }
      `}</style>

      <div style={{ marginBottom: 36, textAlign: 'center' }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', color: '#94a0b3', marginBottom: 10 }}>
       HOW IT RUNS
      </div>
      <h2 style={{ fontSize: 26, fontWeight: 800, color: INK, margin: 0 }}>Our Process</h2>
    </div>

      <div className="op-track">
        {steps.map((s) => (
          <div key={s.step} className="op-step">
            <div className="op-marker">{s.step}</div>
            <div>
              <h3 style={{ fontSize: 15.5, fontWeight: 700, color: INK, marginBottom: 6 }}>{s.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: MUTED, margin: 0, maxWidth: 200 }}>{s.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}