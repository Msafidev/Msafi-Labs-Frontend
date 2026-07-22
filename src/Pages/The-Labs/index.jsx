import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const tabs = [
  { name: 'Design Lab', path: 'design', accent: '#E10A7F' },
  { name: 'Code Lab', path: 'code', accent: '#00E5C0' },
  { name: 'AI Lab', path: 'ai', accent: '#FFC947' },
  { name: 'Msafi Platform', path: 'platform', accent: '#6C63FF' },
];

export default function TheLabs() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans'", background: '#FFFCFD', minHeight: '100%' }}>
      <header
        style={{
          padding: '56px 6vw 28px',
          borderBottom: '1px solid #edf0f5',
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
            marginBottom: 16,
          }}
        >
          THE LABS
        </div>

        <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#1a1b2e', margin: '0 0 10px' }}>
          Four disciplines. One studio.
        </h1>
        <p style={{ fontSize: 15, color: '#6b7280', maxWidth: 520, marginBottom: 32 }}>
          Pick a lab to see how we work, what we build, and what it's like to work with us.
        </p>

        <nav style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              style={({ isActive }) => ({
                padding: '9px 18px',
                borderRadius: 30,
                fontSize: 13.5,
                fontWeight: 600,
                textDecoration: 'none',
                border: `1.5px solid ${isActive ? tab.accent : '#e2e8f0'}`,
                color: isActive ? tab.accent : '#4a5568',
                background: isActive ? `${tab.accent}12` : '#fff',
                transition: 'all 0.2s ease',
              })}
            >
              {tab.name}
            </NavLink>
          ))}
        </nav>
      </header>

      {/* Child routes (design, code, ai) render here */}
      <Outlet />
    </div>
  );
}