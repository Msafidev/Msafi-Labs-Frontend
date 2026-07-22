// components/About/AccentDivider.jsx
import React from 'react';

export const ACCENTS = {
  design: '#E10A7F',
  code: '#00E5C0',
  ai: '#FFC947',
  platform: '#2563eb',
};

export default function AccentDivider({ margin = '0' }) {
  return (
    <div style={{ display: 'flex', height: 3, width: '100%', borderRadius: 2, overflow: 'hidden', margin }}>
      {Object.values(ACCENTS).map((c) => (
        <div key={c} style={{ flex: 1, background: c }} />
      ))}
    </div>
  );
}