import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useInquiry } from "../../contexts/InquiryContext";   // ✅ fixed path

const ACCENT = '#00E5C0';
const INK = '#1a1b2e';
const MUTED = '#6b7280';

// Reused crop-mark corners — keeps the Labs family visually related.
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

// --- Custom line-art illustrations, one per service ---

function IllustrationWebApp() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      <rect x="50" y="18" width="140" height="100" rx="8" fill="#fff" stroke="#e6e9f0" strokeWidth="1.5" />
      <rect x="50" y="18" width="140" height="18" rx="8" fill="#f2f4f8" />
      <circle cx="60" cy="27" r="2.5" fill="#e0a" opacity="0" />
      <circle cx="60" cy="27" r="2.5" fill={ACCENT} />
      <circle cx="68" cy="27" r="2.5" fill="#d8dbe3" />
      <circle cx="76" cy="27" r="2.5" fill="#d8dbe3" />
      <rect x="62" y="46" width="46" height="30" rx="5" fill={`${ACCENT}22`} />
      <rect x="112" y="46" width="66" height="6" rx="3" fill="#e6e9f0" />
      <rect x="112" y="58" width="50" height="4" rx="2" fill="#eef0f4" />
      <rect x="112" y="66" width="58" height="4" rx="2" fill="#eef0f4" />
      <rect x="62" y="86" width="116" height="4" rx="2" fill="#eef0f4" />
      <rect x="62" y="96" width="80" height="4" rx="2" fill="#eef0f4" />
      <rect x="62" y="106" width="30" height="8" rx="4" fill={ACCENT} />
    </svg>
  );
}

function IllustrationFrontend() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      <rect x="42" y="30" width="106" height="72" rx="6" fill="#fff" stroke="#e6e9f0" strokeWidth="1.5" />
      <rect x="42" y="30" width="106" height="12" rx="6" fill="#f2f4f8" />
      <rect x="52" y="52" width="86" height="4" rx="2" fill="#e6e9f0" />
      <rect x="52" y="62" width="60" height="4" rx="2" fill="#eef0f4" />
      <rect x="52" y="80" width="30" height="8" rx="4" fill={ACCENT} />
      <rect x="160" y="20" width="40" height="70" rx="8" fill="#fff" stroke={INK} strokeWidth="2" />
      <rect x="166" y="30" width="28" height="42" rx="3" fill="#f8faff" stroke="#e6e9f0" strokeWidth="1" />
      <rect x="178" y="78" width="4" height="4" rx="2" fill="#d8dbe3" />
      <path d="M148 65 L160 55" stroke={ACCENT} strokeWidth="1.5" strokeDasharray="3 3" />
    </svg>
  );
}

function IllustrationBackend() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      <rect x="100" y="14" width="40" height="26" rx="6" fill="#fff" stroke={INK} strokeWidth="1.6" />
      <text x="120" y="31" textAnchor="middle" fontSize="9" fontWeight="700" fill={INK} fontFamily="monospace">API</text>
      <line x1="120" y1="40" x2="70" y2="72" stroke="#d8dbe3" strokeWidth="1.4" />
      <line x1="120" y1="40" x2="120" y2="72" stroke="#d8dbe3" strokeWidth="1.4" />
      <line x1="120" y1="40" x2="170" y2="72" stroke="#d8dbe3" strokeWidth="1.4" />
      {[70, 120, 170].map((x, i) => (
        <g key={x}>
          <rect x={x - 24} y="72" width="48" height="34" rx="6" fill={i === 1 ? `${ACCENT}22` : '#fff'} stroke={i === 1 ? ACCENT : '#e6e9f0'} strokeWidth="1.5" />
          <rect x={x - 16} y="82" width="32" height="3.5" rx="1.5" fill="#d8dbe3" />
          <rect x={x - 16} y="90" width="20" height="3.5" rx="1.5" fill="#e6e9f0" />
        </g>
      ))}
    </svg>
  );
}

function IllustrationEcommerce() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      {[0, 1].map((row) =>
        [0, 1].map((col) => {
          const isHighlight = row === 0 && col === 1;
          const x = 74 + col * 56;
          const y = 20 + row * 56;
          return (
            <g key={`${row}-${col}`}>
              <rect x={x} y={y} width="46" height="46" rx="8" fill={isHighlight ? `${ACCENT}22` : '#fff'} stroke={isHighlight ? ACCENT : '#e6e9f0'} strokeWidth="1.5" />
              <rect x={x + 10} y={y + 12} width="26" height="16" rx="3" fill="#e6e9f0" />
              <rect x={x + 10} y={y + 32} width="18" height="4" rx="2" fill="#d8dbe3" />
            </g>
          );
        })
      )}
      <circle cx="185" cy="98" r="16" fill={ACCENT} />
      <path d="M178 98 L183 103 L192 92" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IllustrationCMS() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      <rect x="56" y="20" width="128" height="92" rx="8" fill={INK} />
      <rect x="56" y="20" width="128" height="16" rx="8" fill="#26273f" />
      <circle cx="66" cy="28" r="2.2" fill="#ff6161" />
      <circle cx="74" cy="28" r="2.2" fill="#ffc84a" />
      <circle cx="82" cy="28" r="2.2" fill={ACCENT} />
      <text x="68" y="54" fontSize="8" fill={ACCENT} fontFamily="monospace">$ deploy --prod</text>
      <text x="68" y="66" fontSize="8" fill="#8b93a8" fontFamily="monospace">building assets...</text>
      <text x="68" y="78" fontSize="8" fill="#8b93a8" fontFamily="monospace">optimizing...</text>
      <text x="68" y="90" fontSize="8" fill={ACCENT} fontFamily="monospace">✓ live in 12s</text>
      <rect x="66" y="98" width="60" height="4" rx="2" fill="#3a3b58" />
    </svg>
  );
}

const services = [
  {
    id: 'webapp',
    illustration: IllustrationWebApp,
    title: 'Custom Web Applications',
    description:
      'Building powerful, dynamic software platforms from the ground up — not templates bent to fit, but architecture built for what you actually need.',
  },
  {
    id: 'frontend',
    illustration: IllustrationFrontend,
    title: 'Sleek Frontend Development',
    description:
      'Turning static designs into fast-loading, mobile-responsive web pages that hold up on every screen size, not just the one in the mockup.',
  },
  {
    id: 'backend',
    illustration: IllustrationBackend,
    title: 'Robust Backend & APIs',
    description:
      'Engineering secure servers, data structures, and system communication pipelines that stay stable as your traffic and team both grow.',
  },
  {
    id: 'ecommerce',
    illustration: IllustrationEcommerce,
    title: 'E-Commerce Storefronts',
    description:
      'Digital stores complete with secure shopping carts and payment integrations, built to convert browsers into customers without friction.',
  },
  {
    id: 'cms',
    illustration: IllustrationCMS,
    title: 'CMS Platform Deployment',
    description:
      'Setting up flexible content systems (WordPress/Webflow) for easy client editing — so updates don\'t require calling a developer.',
  },
];

const process = [
  { step: '01', title: 'Plan', copy: 'We map data, users, and edge cases before a single component gets built.' },
  { step: '02', title: 'Build', copy: 'Iterative development with real, working previews at every milestone — not a black box.' },
  { step: '03', title: 'Ship', copy: 'Tested, deployed, and documented, so your team can maintain it without us.' },
];

export default function CodeLab() {
  const inquiry = useInquiry(); // ✅ get modal controls

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: INK, background: '#FBFEFD' }}>
      <style>{`
        .cl-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
        }
        .cl-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -20px rgba(0, 229, 192, 0.28);
          border-color: ${ACCENT}66;
        }
        .cl-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -8px rgba(108, 99, 255, 0.35);
        }
        .cl-back:hover { gap: 10px; }
        @keyframes clFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes clBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .cl-cursor { animation: clBlink 1s step-start infinite; }
        @media (max-width: 900px) {
          .cl-hero-grid { grid-template-columns: 1fr !important; }
          .cl-board { display: none !important; }
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
            'linear-gradient(#e2f7f2 1px, transparent 1px), linear-gradient(90deg, #e2f7f2 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          backgroundPosition: 'center top',
          maskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
        }}
      >
        <div className="cl-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 40, alignItems: 'center' }}>
          <div>
            <Link
              to="/the-labs"
              className="cl-back"
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
                background: `${ACCENT}1A`, color: '#009e80', fontSize: 12, fontWeight: 700,
                letterSpacing: '0.08em', marginBottom: 20,
              }}
            >
              CODE LAB
            </div>

            <h1 style={{ fontSize: 'clamp(32px, 4.6vw, 50px)', fontWeight: 800, lineHeight: 1.1, maxWidth: 560, margin: '0 0 16px 0' }}>
              We engineer software that holds up under real use.
            </h1>

            <p style={{ fontSize: 15, fontWeight: 600, color: '#009e80', marginBottom: 20 }}>
              Full-Stack Engineering & Web Architecture
            </p>

            <p style={{ fontSize: 16, lineHeight: 1.7, color: MUTED, maxWidth: 520, marginBottom: 32 }}>
              From custom platforms to storefronts to the APIs holding it all together, we build
              systems meant to scale with you — clean frontend, dependable backend, and content
              tools your team can actually run without calling us every time.
            </p>

            {/* ✅ Button – opens inquiry modal with "appointment" variant */}
            <button
              onClick={() => inquiry.open('appointment')}
              className="cl-cta"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 26px',
                borderRadius: 35, fontSize: 14, fontWeight: 600, background: '#6c63ff', color: '#fff',
                border: 'none', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              Book a Build Consultation
              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 12 }} />
            </button>
          </div>

          {/* Terminal + snippet mock */}
          <div className="cl-board" style={{ position: 'relative', height: 340 }}>
            <div
              style={{
                position: 'absolute', top: 0, right: 20, width: 240, background: INK,
                borderRadius: 14, padding: 18, boxShadow: '0 30px 60px -24px rgba(26,27,46,0.35)',
                animation: 'clFloat 7s ease-in-out infinite', fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff6161' }} />
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffc84a' }} />
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: ACCENT }} />
              </div>
              <div style={{ fontSize: 12, color: ACCENT, marginBottom: 6 }}>$ npm run build</div>
              <div style={{ fontSize: 12, color: '#8b93a8', marginBottom: 6 }}>compiling modules...</div>
              <div style={{ fontSize: 12, color: '#8b93a8', marginBottom: 6 }}>running type checks...</div>
              <div style={{ fontSize: 12, color: ACCENT, marginBottom: 6 }}>✓ 0 errors, 0 warnings</div>
              <div style={{ fontSize: 12, color: '#e6e9f0' }}>
                $ <span className="cl-cursor">▍</span>
              </div>
            </div>

            <div
              style={{
                position: 'absolute', bottom: 6, left: 0, width: 180, background: '#fff',
                borderRadius: 14, border: '1px solid #dcf5ef', padding: 16,
                boxShadow: '0 24px 48px -20px rgba(26,27,46,0.14)', transform: 'rotate(-4deg)',
                fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, lineHeight: 1.7,
              }}
            >
              <CropMarks color="#dcf5ef" />
              <div><span style={{ color: '#c47bd1' }}>const</span> <span style={{ color: '#009e80' }}>api</span> = {'{'}</div>
              <div style={{ paddingLeft: 10, color: '#4a5568' }}>status: <span style={{ color: '#009e80' }}>'live'</span>,</div>
              <div style={{ paddingLeft: 10, color: '#4a5568' }}>uptime: <span style={{ color: '#009e80' }}>99.9</span></div>
              <div>{'}'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '20px 6vw 84px' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>What we build</h2>
        <p style={{ fontSize: 14, color: MUTED, marginBottom: 40 }}>
          Five disciplines, one dependable stack underneath every one of them.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
          {services.map((service) => {
            const Illustration = service.illustration;
            return (
              <div
                key={service.id}
                className="cl-card"
                style={{ border: '1px solid #e6f7f2', borderRadius: 16, background: '#fff', overflow: 'hidden' }}
              >
                <div style={{ background: '#F5FDFB', padding: '18px 18px 0' }}>
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
      <section style={{ padding: '20px 6vw 90px', borderTop: '1px solid #e6f7f2' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: '36px 0 40px' }}>How it runs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
          {process.map((p) => (
            <div key={p.step}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#009e80', marginBottom: 10 }}>{p.step}</div>
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
            className="cl-cta"
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