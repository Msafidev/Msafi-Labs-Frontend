import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useInquiry } from '../../contexts/InquiryContext'; // ✅ import hook

const ACCENT = '#E10A7F';
const INK = '#1a1b2e';
const MUTED = '#6b7280';

// Small reusable print-crop-mark corners — a real design-studio artifact,
// used throughout instead of generic rounded-card shadows.
function CropMarks({ color = '#d8dbe3' }) {
  const corner = (top, left, rotate) => (
    <svg
      width="14" height="14" viewBox="0 0 14 14"
      style={{
        position: 'absolute', top, left, transform: `rotate(${rotate}deg)`,
        pointerEvents: 'none',
      }}
    >
      <path d="M0 4 L0 0 L4 0" stroke={color} strokeWidth="1.4" fill="none" />
    </svg>
  );
  return (
    <>
      {corner(-6, -6, 0)}
      {corner(-6, 'calc(100% - 8px)', 90)}
      {corner('calc(100% - 8px)', 'calc(100% - 8px)', 180)}
      {corner('calc(100% - 8px)', -6, 270)}
    </>
  );
}

// --- Custom line-art illustrations ---
function IllustrationLogo() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      <circle cx="120" cy="70" r="42" fill="none" stroke="#e6e9f0" strokeWidth="1" strokeDasharray="3 4" />
      <line x1="120" y1="18" x2="120" y2="122" stroke="#e6e9f0" strokeWidth="1" />
      <line x1="68" y1="70" x2="172" y2="70" stroke="#e6e9f0" strokeWidth="1" />
      <circle cx="120" cy="70" r="30" fill="none" stroke={ACCENT} strokeWidth="2" />
      <text x="120" y="80" textAnchor="middle" fontSize="30" fontWeight="800" fill={ACCENT} fontFamily="'Plus Jakarta Sans', sans-serif">M</text>
    </svg>
  );
}

function IllustrationUIUX() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      <rect x="88" y="10" width="64" height="120" rx="10" fill="none" stroke={INK} strokeWidth="2" />
      <rect x="96" y="26" width="48" height="6" rx="3" fill={ACCENT} />
      <rect x="96" y="38" width="48" height="4" rx="2" fill="#e6e9f0" />
      <rect x="96" y="46" width="34" height="4" rx="2" fill="#e6e9f0" />
      <rect x="96" y="60" width="48" height="30" rx="6" fill="#faf0f5" stroke="#e6e9f0" strokeWidth="1" />
      <circle cx="108" cy="106" r="3" fill={ACCENT} />
      <circle cx="120" cy="106" r="3" fill="#e6e9f0" />
      <circle cx="132" cy="106" r="3" fill="#e6e9f0" />
    </svg>
  );
}

function IllustrationCorporate() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      <g transform="rotate(-6 100 78)">
        <rect x="60" y="58" width="90" height="52" rx="6" fill="#fff" stroke="#e6e9f0" strokeWidth="1.5" />
        <circle cx="78" cy="76" r="8" fill="none" stroke={ACCENT} strokeWidth="1.6" />
        <rect x="94" y="72" width="40" height="4" rx="2" fill="#d8dbe3" />
        <rect x="94" y="82" width="28" height="3" rx="1.5" fill="#e6e9f0" />
      </g>
      <g transform="rotate(4 130 88)">
        <rect x="96" y="66" width="90" height="52" rx="6" fill="#fff" stroke="#e6e9f0" strokeWidth="1.5" />
        <circle cx="114" cy="84" r="8" fill={ACCENT} opacity="0.15" />
        <rect x="130" y="80" width="40" height="4" rx="2" fill="#d8dbe3" />
        <rect x="130" y="90" width="28" height="3" rx="1.5" fill="#e6e9f0" />
      </g>
    </svg>
  );
}

function IllustrationMarketing() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      <rect x="72" y="12" width="96" height="116" rx="6" fill="#fff" stroke="#e6e9f0" strokeWidth="1.5" />
      <polygon points="72,12 168,12 168,50 72,90" fill={ACCENT} opacity="0.12" />
      <line x1="82" y1="70" x2="82" y2="118" stroke="#e6e9f0" strokeWidth="1" />
      <rect x="88" y="70" width="68" height="6" rx="3" fill={INK} />
      <rect x="88" y="82" width="50" height="4" rx="2" fill="#d8dbe3" />
      <rect x="88" y="92" width="58" height="4" rx="2" fill="#d8dbe3" />
      <rect x="88" y="108" width="30" height="10" rx="5" fill={ACCENT} />
    </svg>
  );
}

function IllustrationSocial() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      {[0, 1, 2].map(row =>
        [0, 1, 2].map(col => {
          const isHighlight = row === 1 && col === 1;
          return (
            <rect
              key={`${row}-${col}`}
              x={78 + col * 30}
              y={16 + row * 38}
              width="26"
              height="26"
              rx="6"
              fill={isHighlight ? ACCENT : '#fff'}
              stroke={isHighlight ? ACCENT : '#e6e9f0'}
              strokeWidth="1.5"
            />
          );
        })
      )}
    </svg>
  );
}

const services = [
  {
    id: 'logo',
    illustration: IllustrationLogo,
    title: 'Brand Identity & Logo Design',
    description:
      'Your logo, color system, and typography rules — documented in a brand book your team and vendors can follow without guessing.',
  },
  {
    id: 'uiux',
    illustration: IllustrationUIUX,
    title: 'UI/UX Digital Mockups',
    description:
      'Full interface designs for web and mobile, screen by screen, so you can see and test the product before a single line of code gets written.',
  },
  {
    id: 'corporate',
    illustration: IllustrationCorporate,
    title: 'Corporate Branding Kits',
    description:
      'Business cards, letterheads, and stationery that carry your identity consistently, from the boardroom to the mailroom.',
  },
  {
    id: 'marketing',
    illustration: IllustrationMarketing,
    title: 'Marketing Graphics & Posters',
    description:
      'Flyers, banners, and campaign assets built to convert — sized correctly for print and every platform you post to.',
  },
  {
    id: 'social',
    illustration: IllustrationSocial,
    title: 'Social Media Aesthetic Curation',
    description:
      'Templates and layout systems that keep your feed cohesive, so anyone on your team can post on-brand without redesigning from scratch.',
  },
];

const process = [
  { step: '01', title: 'Discover', copy: 'We map your audience, competitors, and what your brand needs to say before anything gets designed.' },
  { step: '02', title: 'Design', copy: 'Concepts, revisions, and a system built to hold up across every surface it touches.' },
  { step: '03', title: 'Deliver', copy: 'Final files, a usage guide, and a brand book your team can actually run with.' },
];

const palette = ['#E10A7F', '#1a1b2e', '#FFC947', '#00E5C0', '#F4E9EF'];

export default function DesignLab() {
  const inquiry = useInquiry(); // ✅ get modal controls

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: INK, background: '#FFFCFD' }}>
      <style>{`
        .dl-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
        }
        .dl-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -20px rgba(225, 10, 127, 0.22);
          border-color: ${ACCENT}44;
        }
        .dl-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -8px rgba(108, 99, 255, 0.35);
        }
        .dl-back:hover { gap: 10px; }
        @keyframes dlFloat {
          0%, 100% { transform: translateY(0px) rotate(-4deg); }
          50% { transform: translateY(-8px) rotate(-4deg); }
        }
        @media (max-width: 900px) {
          .dl-hero-grid { grid-template-columns: 1fr !important; }
          .dl-board { display: none !important; }
        }
      `}</style>

      {/* HERO */}
      <section
        style={{
          paddingTop: 72,
          paddingBottom: 72,
          paddingLeft: '6vw',
          paddingRight: '6vw',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage:
            'linear-gradient(#efe3ea 1px, transparent 1px), linear-gradient(90deg, #efe3ea 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          backgroundPosition: 'center top',
          maskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
        }}
      >
        <div className="dl-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 40, alignItems: 'center' }}>
          <div>
            <Link
              to="/the-labs"
              className="dl-back"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600,
                color: MUTED, textDecoration: 'none', marginBottom: 28, transition: 'gap 0.2s ease',
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 11 }} />
              All Labs
            </Link>

            <div
              style={{
                display: 'inline-block', padding: '6px 14px', borderRadius: 20,
                background: `${ACCENT}14`, color: ACCENT, fontSize: 12, fontWeight: 700,
                letterSpacing: '0.08em', marginBottom: 20,
              }}
            >
              DESIGN LAB
            </div>

            <h1 style={{ fontSize: 'clamp(32px, 4.6vw, 50px)', fontWeight: 800, lineHeight: 1.1, maxWidth: 560, margin: '0 0 16px 0' }}>
              We design identities people don't forget.
            </h1>

            <p style={{ fontSize: 15, fontWeight: 600, color: ACCENT, marginBottom: 20 }}>
              Visual Identity & Brand Architecture
            </p>

            <p style={{ fontSize: 16, lineHeight: 1.7, color: MUTED, maxWidth: 520, marginBottom: 32 }}>
              From a first logo sketch to a fully documented brand book, we build the visual
              language your business runs on — interfaces designed before a line of code,
              stationery that feels considered, campaign graphics tuned for launch, and a social
              system your team can actually keep up with.
            </p>

            {/* ✅ Button – now opens inquiry modal with "appointment" variant */}
            <button
              onClick={() => inquiry.open('appointment')}
              className="dl-cta"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 26px',
                borderRadius: 35, fontSize: 14, fontWeight: 600, background: '#6c63ff', color: '#fff',
                border: 'none', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              Book a Design Consultation
              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 12 }} />
            </button>
          </div>

          {/* Brand board */}
          <div className="dl-board" style={{ position: 'relative', height: 340 }}>
            <div
              style={{
                position: 'absolute', top: 0, right: 30, width: 210, background: '#fff',
                borderRadius: 16, border: '1px solid #edf0f5', padding: 20,
                boxShadow: '0 30px 60px -24px rgba(26,27,46,0.18)',
                animation: 'dlFloat 7s ease-in-out infinite',
              }}
            >
              <CropMarks />
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#b7bdc9', marginBottom: 10 }}>
                COLOR SYSTEM
              </div>
              <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
                {palette.map((c) => (
                  <div key={c} style={{ width: 26, height: 26, borderRadius: 7, background: c, border: c === '#F4E9EF' ? '1px solid #edd9e3' : 'none' }} />
                ))}
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#b7bdc9', marginBottom: 6 }}>
                TYPE SPECIMEN
              </div>
              <div style={{ fontSize: 42, fontWeight: 800, color: INK, lineHeight: 1 }}>Aa</div>
              <div style={{ fontSize: 11, color: MUTED, marginTop: 4 }}>Plus Jakarta Sans</div>
            </div>

            <div
              style={{
                position: 'absolute', bottom: 10, left: 10, width: 140, background: '#fff',
                borderRadius: 14, border: '1px solid #edf0f5', padding: 16,
                boxShadow: '0 24px 48px -20px rgba(26,27,46,0.16)', transform: 'rotate(5deg)',
              }}
            >
              <CropMarks />
              <div style={{ width: 34, height: 34, borderRadius: 9, border: `2px solid ${ACCENT}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: ACCENT, marginBottom: 8 }}>
                M
              </div>
              <div style={{ fontSize: 10, color: MUTED, lineHeight: 1.4 }}>Primary mark<br />+ clearspace rule</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '20px 6vw 84px' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>What we build</h2>
        <p style={{ fontSize: 14, color: MUTED, marginBottom: 40 }}>
          Five disciplines, one consistent identity across every one of them.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
          {services.map((service) => {
            const Illustration = service.illustration;
            return (
              <div
                key={service.id}
                className="dl-card"
                style={{ border: '1px solid #edf0f5', borderRadius: 16, background: '#fff', overflow: 'hidden' }}
              >
                <div style={{ background: '#FBF6F8', padding: '18px 18px 0' }}>
                  <Illustration />
                </div>
                <div style={{ padding: 22 }}>
                  <h3 style={{ fontSize: 15.5, fontWeight: 700, marginBottom: 8 }}>{service.title}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.6, color: MUTED, margin: 0 }}>{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: '20px 6vw 90px', borderTop: '1px solid #edf0f5' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: '36px 0 40px' }}>How it runs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
          {process.map((p) => (
            <div key={p.step}>
              <div style={{ fontSize: 13, fontWeight: 700, color: ACCENT, marginBottom: 10 }}>{p.step}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: MUTED, margin: 0 }}>{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          margin: '0 6vw 80px', padding: '56px 40px', borderRadius: 24,
          background: INK, position: 'relative', overflow: 'hidden',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 3, background: ACCENT }} />
          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 12, maxWidth: 480 }}>
            Ready to build a brand people remember?
          </h2>
          <p style={{ fontSize: 14.5, color: '#a0a8ba', marginBottom: 28, maxWidth: 460 }}>
            Let's talk about what your identity needs before we design a single pixel of it.
          </p>

          {/* ✅ Button – now opens inquiry modal with "project" variant */}
          <button
            onClick={() => inquiry.open('project')}
            className="dl-cta"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 26px',
              borderRadius: 35, fontSize: 14, fontWeight: 600, background: '#6c63ff', color: '#fff',
              border: 'none', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            Start a Project
            <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 12 }} />
          </button>
        </div>
      </section>
    </div>
  );
}