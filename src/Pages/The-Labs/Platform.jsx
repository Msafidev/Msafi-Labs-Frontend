import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useInquiry } from "../../contexts/InquiryContext";   // ✅ fixed path

const ACCENT = '#2563eb';
const INK = '#1a1b2e';
const MUTED = '#6b7280';

function CropMarks({ color = '#d8dbe3' }) {
  const corner = (top, left, rotate) => (
    <svg
      width="14" height="14" viewBox="0 0 14 14"
      style={{ position: 'absolute', top, left, transform: `rotate(${rotate}deg)`, pointerEvents: 'none' }}
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

// --- Custom line-art illustrations, one per pillar ---

function IllustrationArchitecture() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={80 - i * 6}
          y={96 - i * 26}
          width={80 + i * 12}
          height="20"
          rx="6"
          fill={i === 2 ? `${ACCENT}22` : '#fff'}
          stroke={i === 2 ? ACCENT : '#e6e9f0'}
          strokeWidth="1.6"
        />
      ))}
      <path d="M120 40 L120 16" stroke="#d8dbe3" strokeWidth="1.4" strokeDasharray="3 3" />
      <circle cx="120" cy="14" r="4" fill={ACCENT} />
    </svg>
  );
}

function IllustrationEngagement() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      <circle cx="90" cy="60" r="20" fill="none" stroke="#e6e9f0" strokeWidth="1.6" />
      <circle cx="140" cy="52" r="14" fill="none" stroke="#e6e9f0" strokeWidth="1.6" />
      <circle cx="150" cy="82" r="10" fill="none" stroke="#e6e9f0" strokeWidth="1.6" />
      <path
        d="M108 68 C104 58 116 52 120 62 C124 52 136 58 132 68 C128 76 120 82 120 82 C120 82 112 76 108 68 Z"
        fill={ACCENT} opacity="0.85"
      />
      <circle cx="150" cy="82" r="3" fill={ACCENT} />
      <circle cx="140" cy="52" r="3" fill={ACCENT} />
    </svg>
  );
}

function IllustrationStrategy() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      <line x1="50" y1="90" x2="190" y2="90" stroke="#e6e9f0" strokeWidth="1.6" />
      {[
        { x: 66, filled: true },
        { x: 106, filled: false },
        { x: 146, filled: false },
        { x: 178, filled: true },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy="90" r="7" fill={p.filled ? ACCENT : '#fff'} stroke={ACCENT} strokeWidth="1.6" />
          <rect x={p.x - 16} y={p.filled ? 54 : 62} width="32" height="4" rx="2" fill="#e6e9f0" />
        </g>
      ))}
    </svg>
  );
}

function IllustrationAnalytics() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      <line x1="52" y1="26" x2="52" y2="106" stroke="#e6e9f0" strokeWidth="1.4" />
      <line x1="52" y1="106" x2="196" y2="106" stroke="#e6e9f0" strokeWidth="1.4" />
      <path
        d="M60 94 L88 78 L112 88 L138 54 L164 62 L188 34"
        stroke={ACCENT} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
      {[[60, 94], [88, 78], [112, 88], [138, 54], [164, 62], [188, 34]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.4" fill="#fff" stroke={ACCENT} strokeWidth="1.8" />
      ))}
    </svg>
  );
}

const pillars = [
  {
    id: 'architecture',
    illustration: IllustrationArchitecture,
    title: 'Scalable Architecture',
    description:
      'Every platform is built on infrastructure designed to handle growth from day one, so a surge in users never means a rebuild.',
  },
  {
    id: 'engagement',
    illustration: IllustrationEngagement,
    title: 'Engagement Systems',
    description:
      'Features and flows engineered around what keeps people coming back, not just what gets them to sign up once.',
  },
  {
    id: 'strategy',
    illustration: IllustrationStrategy,
    title: 'Strategic Deployment',
    description:
      'Technology decisions grounded in a real roadmap, so every feature shipped moves the platform toward a clear long-term goal.',
  },
  {
    id: 'analytics',
    illustration: IllustrationAnalytics,
    title: 'Growth Analytics',
    description:
      'Built-in measurement from launch, so decisions after go-live are driven by real usage data, not guesswork.',
  },
];

const process = [
  { step: '01', title: 'Strategy', copy: 'We define what growth actually means for this platform before any architecture gets chosen.' },
  { step: '02', title: 'Deploy', copy: 'A build sequenced for scale, launched in stages so real usage informs each next step.' },
  { step: '03', title: 'Grow', copy: 'Ongoing iteration guided by analytics, so the platform keeps compounding after launch.' },
];

// Animated growth-metrics dashboard — signature element for this page.
function GrowthDashboard() {
  const bars = [28, 40, 34, 52, 46, 64, 58, 78];
  return (
    <svg viewBox="0 0 220 110" width="100%" height="110">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={10 + i * 26}
          y={100 - h}
          width="16"
          rx="4"
          fill={i === bars.length - 1 ? ACCENT : '#e8edfb'}
          height={h}
          style={{
            transformOrigin: `${10 + i * 26 + 8}px 100px`,
            animation: `platformGrow 2.4s ease ${i * 0.08}s both`,
          }}
        />
      ))}
    </svg>
  );
}

export default function Platform() {
  const inquiry = useInquiry(); // ✅ get modal controls

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: INK, background: '#F8FAFF' }}>
      <style>{`
        .pf-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
        }
        .pf-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -20px rgba(37, 99, 235, 0.25);
          border-color: ${ACCENT}55;
        }
        .pf-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -8px rgba(37, 99, 235, 0.35);
        }
        .pf-back:hover { gap: 10px; }
        @keyframes platformGrow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes pfFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pfCountUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pf-metric { animation: pfCountUp 0.6s ease 0.3s both; }
        @media (max-width: 900px) {
          .pf-hero-grid { grid-template-columns: 1fr !important; }
          .pf-board { display: none !important; }
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
            'linear-gradient(#e3eafd 1px, transparent 1px), linear-gradient(90deg, #e3eafd 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          backgroundPosition: 'center top',
          maskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
        }}
      >
        <div className="pf-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 40, alignItems: 'center' }}>
          <div>
            <Link
              to="/the-labs"
              className="pf-back"
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
              MSAFI PLATFORM
            </div>

            <h1 style={{ fontSize: 'clamp(32px, 4.6vw, 50px)', fontWeight: 800, lineHeight: 1.1, maxWidth: 560, margin: '0 0 16px 0' }}>
              Products built to grow, not just launch.
            </h1>

            <p style={{ fontSize: 15, fontWeight: 600, color: ACCENT, marginBottom: 20 }}>
              Scalable Growth Products
            </p>

            <p style={{ fontSize: 16, lineHeight: 1.7, color: MUTED, maxWidth: 520, marginBottom: 32 }}>
              We combine strategy and modern technology to deploy platforms built intentionally
              for long-term scalability and absolute user engagement — not a launch-day demo,
              but infrastructure meant to still be working for you years in.
            </p>

            {/* ✅ Button – opens inquiry modal with "appointment" variant */}
            <button
              onClick={() => inquiry.open('appointment')}
              className="pf-cta"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 26px',
                borderRadius: 35, fontSize: 14, fontWeight: 600, background: '#6c63ff', color: '#fff',
                border: 'none', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              Book a Platform Consultation
              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 12 }} />
            </button>
          </div>

          {/* Growth dashboard mock */}
          <div className="pf-board" style={{ position: 'relative', height: 340 }}>
            <div
              style={{
                position: 'absolute', top: 0, right: 10, width: 260, background: '#fff',
                borderRadius: 16, border: '1px solid #e3eafd', padding: 20,
                boxShadow: '0 30px 60px -24px rgba(26,27,46,0.18)',
                animation: 'pfFloat 7s ease-in-out infinite',
              }}
            >
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#b7bdc9', marginBottom: 10 }}>
                MONTHLY ACTIVE USERS
              </div>
              <GrowthDashboard />
              <div className="pf-metric" style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 10 }}>
                <span style={{ fontSize: 26, fontWeight: 800, color: INK }}>+164%</span>
                <span style={{ fontSize: 11.5, color: MUTED }}>since launch</span>
              </div>
            </div>

            <div
              style={{
                position: 'absolute', bottom: 6, left: 0, width: 170, background: '#fff',
                borderRadius: 14, border: '1px solid #e3eafd', padding: 16,
                boxShadow: '0 24px 48px -20px rgba(26,27,46,0.14)', transform: 'rotate(-5deg)',
              }}
            >
              <CropMarks color="#e3eafd" />
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: '#b7bdc9', marginBottom: 8 }}>
                UPTIME
              </div>
              <div style={{ fontSize: 24, fontWeight: 800, color: ACCENT }}>99.98%</div>
              <div style={{ fontSize: 10.5, color: MUTED, marginTop: 2 }}>Rolling 90 days</div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section style={{ padding: '20px 6vw 84px' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>How the platform is built</h2>
        <p style={{ fontSize: 14, color: MUTED, marginBottom: 40 }}>
          Four pillars, one product built for the long run.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
          {pillars.map((pillar) => {
            const Illustration = pillar.illustration;
            return (
              <div
                key={pillar.id}
                className="pf-card"
                style={{ border: '1px solid #e3eafd', borderRadius: 16, background: '#fff', overflow: 'hidden' }}
              >
                <div style={{ background: '#F5F8FF', padding: '18px 18px 0' }}>
                  <Illustration />
                </div>
                <div style={{ padding: 22 }}>
                  <h3 style={{ fontSize: 15.5, fontWeight: 700, marginBottom: 8 }}>{pillar.title}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.6, color: MUTED, margin: 0 }}>{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: '20px 6vw 90px', borderTop: '1px solid #e3eafd' }}>
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

          {/* ✅ Button – opens inquiry modal with "project" variant */}
          <button
            onClick={() => inquiry.open('project')}
            className="pf-cta"
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