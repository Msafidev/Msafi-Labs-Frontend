// components/About/AboutHero.jsx
import React from 'react';
import { ACCENTS } from './AccentDivider';

const INK = '#1a1b2e';
const MUTED = '#6b7280';

export default function AboutHero() {
  return (
    <section
      style={{
        padding: '88px 6vw 72px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        backgroundImage:
          'linear-gradient(#eef0f6 1px, transparent 1px), linear-gradient(90deg, #eef0f6 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        backgroundPosition: 'center top',
        maskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          padding: '6px 14px',
          borderRadius: 20,
          background: '#6c63ff14',
          color: '#6c63ff',
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.08em',
          marginBottom: 24,
        }}
      >
        ABOUT MSAFI LABS
      </div>

      <h1
        style={{
          fontSize: 'clamp(34px, 5vw, 56px)',
          fontWeight: 800,
          lineHeight: 1.08,
          maxWidth: 780,
          margin: '0 auto 22px',
          color: INK,
        }}
      >
        Engineering Impact,{' '}
        <span
          style={{
            backgroundImage: `linear-gradient(90deg, ${Object.values(ACCENTS).join(', ')})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Designing Futures.
        </span>
      </h1>

      <p
        style={{
          fontSize: 17,
          lineHeight: 1.7,
          color: MUTED,
          maxWidth: 620,
          margin: '0 auto 36px',
        }}
      >
        Msafi Labs is a technology ecosystem where creative design, robust engineering, and
        intelligent automation converge. We don't just build websites or apps; we architect
        scalable digital experiences that transform how brands operate and connect with their
        audiences.
      </p>

      <AccentDividerInline />
      <AccentOrbit />
    </section>
  );
}

// A slightly wider, top-level version of the divider for the hero specifically,
// now centered via margin auto rather than relying on inherited text-align.
function AccentDividerInline() {
  return (
    <div style={{ display: 'flex', height: 4, width: 220, borderRadius: 3, overflow: 'hidden', margin: '0 auto' }}>
      {Object.values(ACCENTS).map((c) => (
        <div key={c} style={{ flex: 1, background: c }} />
      ))}
    </div>
  );
}

// Small centered signature: four accent dots orbiting a shared center point,
// echoing the "four labs, one studio" idea without repeating the divider bar look.
function AccentOrbit() {
  const dots = Object.values(ACCENTS);
  const radius = 26;
  return (
    <div
      style={{
        position: 'relative',
        width: 12,
        height: 12,
        margin: '40px auto 0',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: INK,
          transform: 'translate(-50%, -50%)',
        }}
      />
      {dots.map((c, i) => {
        const angle = (i / dots.length) * 2 * Math.PI - Math.PI / 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <div
            key={c}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: c,
              transform: `translate(${x - 4}px, ${y - 4}px)`,
            }}
          />
        );
      })}
    </div>
  );
}