import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useInquiry } from "../../contexts/InquiryContext";   // ✅ fixed path

const ACCENT = '#FFC947';
const ACCENT_TEXT = '#8a6d17';
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

// --- Custom line-art illustrations, one per service ---

function IllustrationAutomation() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      <rect x="30" y="60" width="40" height="30" rx="7" fill="#fff" stroke="#e6e9f0" strokeWidth="1.5" />
      <text x="50" y="79" textAnchor="middle" fontSize="8" fill={MUTED} fontFamily="monospace">TASK</text>
      <path d="M70 75 L104 75" stroke="#d8dbe3" strokeWidth="1.4" markerEnd="url(#arrow1)" />
      <rect x="104" y="55" width="40" height="40" rx="9" fill={`${ACCENT}30`} stroke={ACCENT} strokeWidth="1.6" />
      <path d="M118 70 L124 76 L134 62" stroke={ACCENT_TEXT} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M144 75 L178 75" stroke="#d8dbe3" strokeWidth="1.4" markerEnd="url(#arrow1)" />
      <rect x="178" y="60" width="40" height="30" rx="7" fill="#fff" stroke="#e6e9f0" strokeWidth="1.5" />
      <text x="198" y="79" textAnchor="middle" fontSize="8" fill={MUTED} fontFamily="monospace">DONE</text>
      <defs>
        <marker id="arrow1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#d8dbe3" />
        </marker>
      </defs>
    </svg>
  );
}

function IllustrationChatbot() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      <rect x="50" y="16" width="130" height="34" rx="16" fill="#f2f4f8" />
      <rect x="62" y="27" width="90" height="5" rx="2.5" fill="#d8dbe3" />
      <rect x="62" y="37" width="60" height="5" rx="2.5" fill="#e6e9f0" />
      <rect x="90" y="58" width="120" height="36" rx="16" fill={`${ACCENT}30`} stroke={ACCENT} strokeWidth="1.4" />
      <rect x="102" y="70" width="70" height="5" rx="2.5" fill={ACCENT_TEXT} opacity="0.6" />
      <rect x="102" y="80" width="40" height="5" rx="2.5" fill={ACCENT_TEXT} opacity="0.4" />
      <circle cx="60" cy="106" r="4" fill="#d8dbe3" />
      <circle cx="72" cy="106" r="4" fill="#e6e9f0" />
      <circle cx="84" cy="106" r="4" fill="#f2f4f8" />
    </svg>
  );
}

function IllustrationIntegration() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      <rect x="40" y="46" width="60" height="46" rx="8" fill="#fff" stroke="#e6e9f0" strokeWidth="1.5" />
      <rect x="50" y="58" width="40" height="5" rx="2.5" fill="#e6e9f0" />
      <rect x="50" y="68" width="28" height="5" rx="2.5" fill="#eef0f4" />
      <rect x="50" y="78" width="34" height="5" rx="2.5" fill="#eef0f4" />
      <circle cx="150" cy="69" r="30" fill={`${ACCENT}22`} stroke={ACCENT} strokeWidth="1.6" strokeDasharray="4 3" />
      <path d="M138 69 L146 77 L163 58" stroke={ACCENT_TEXT} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M100 69 L120 69" stroke="#d8dbe3" strokeWidth="1.6" />
    </svg>
  );
}

function IllustrationDataInsights() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      <line x1="52" y1="30" x2="52" y2="106" stroke="#e6e9f0" strokeWidth="1.4" />
      <line x1="52" y1="106" x2="196" y2="106" stroke="#e6e9f0" strokeWidth="1.4" />
      {[
        { x: 68, h: 30, fill: '#e6e9f0' },
        { x: 92, h: 46, fill: '#e6e9f0' },
        { x: 116, h: 26, fill: '#e6e9f0' },
        { x: 140, h: 58, fill: ACCENT },
        { x: 164, h: 40, fill: '#e6e9f0' },
      ].map((bar) => (
        <rect key={bar.x} x={bar.x} y={106 - bar.h} width="16" height={bar.h} rx="3" fill={bar.fill} />
      ))}
      <path d="M68 82 L92 66 L116 90 L140 48 L164 68" stroke={ACCENT_TEXT} strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function IllustrationCreative() {
  return (
    <svg viewBox="0 0 240 140" width="100%" height="140">
      <rect x="60" y="20" width="60" height="60" rx="8" fill="#fff" stroke="#e6e9f0" strokeWidth="1.5" />
      <path d="M70 66 L84 48 L94 58 L110 36" stroke="#d8dbe3" strokeWidth="1.6" fill="none" />
      <circle cx="76" cy="34" r="5" fill="#eef0f4" />
      <path d="M126 50 L148 50" stroke="#d8dbe3" strokeWidth="1.4" markerEnd="url(#arrow2)" />
      <rect x="148" y="18" width="64" height="64" rx="8" fill={`${ACCENT}22`} stroke={ACCENT} strokeWidth="1.6" />
      <path d="M160 62 L172 40 L184 54 L198 32" stroke={ACCENT_TEXT} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="168" cy="30" r="5" fill={ACCENT} />
      <defs>
        <marker id="arrow2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#d8dbe3" />
        </marker>
      </defs>
    </svg>
  );
}

const services = [
  {
    id: 'automation',
    illustration: IllustrationAutomation,
    title: 'Smart Automation Workflows',
    description:
      'Streamlining repetitive business processes using autonomous AI agents, so your team spends time on decisions, not data entry.',
  },
  {
    id: 'chatbots',
    illustration: IllustrationChatbot,
    title: 'Custom Chatbots & Assistants',
    description:
      'Developing intelligent, natural-language customer service tools that actually understand what people are asking, not just keyword-match.',
  },
  {
    id: 'integration',
    illustration: IllustrationIntegration,
    title: 'AI Feature Integration',
    description:
      'Embedding smart algorithms, generative tools, and analytical models into web apps you already have, without a full rebuild.',
  },
  {
    id: 'insights',
    illustration: IllustrationDataInsights,
    title: 'Data Analysis & Insights',
    description:
      'Structuring complex data to predict trends and automate decision-making, turning scattered numbers into a plan you can act on.',
  },
  {
    id: 'creative',
    illustration: IllustrationCreative,
    title: 'AI Creative Workflows',
    description:
      'Accelerating design pipelines and content generation using advanced local models, so more concepts get explored per project.',
  },
];

const process = [
  { step: '01', title: 'Diagnose', copy: 'We find the repetitive, error-prone parts of your workflow worth automating first.' },
  { step: '02', title: 'Train', copy: 'Models and prompts tuned to your actual data and use case, not a generic demo.' },
  { step: '03', title: 'Integrate', copy: 'Deployed into tools your team already uses, with clear guardrails and monitoring.' },
];

// Small animated node-network — the signature element for this lab.
function NeuralBoard() {
  const nodes = [
    { x: 20, y: 40 }, { x: 20, y: 90 }, { x: 20, y: 140 },
    { x: 100, y: 60 }, { x: 100, y: 115 },
    { x: 180, y: 90 },
  ];
  const edges = [
    [0, 3], [1, 3], [1, 4], [2, 4], [3, 5], [4, 5],
  ];
  return (
    <svg viewBox="0 0 210 180" width="100%" height="100%">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke={ACCENT} strokeWidth="1.3" opacity="0.5"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x} cy={n.y}
          r={i === 5 ? 9 : 6}
          fill={i === 5 ? ACCENT : '#fff'}
          stroke={ACCENT}
          strokeWidth="1.8"
          style={{ animation: `aiPulse 2.4s ease-in-out ${i * 0.3}s infinite` }}
        />
      ))}
    </svg>
  );
}

export default function AiLab() {
  const inquiry = useInquiry(); // ✅ get modal controls

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: INK, background: '#FFFDF8' }}>
      <style>{`
        .ai-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
        }
        .ai-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -20px rgba(255, 201, 71, 0.35);
          border-color: ${ACCENT}99;
        }
        .ai-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -8px rgba(108, 99, 255, 0.35);
        }
        .ai-back:hover { gap: 10px; }
        @keyframes aiPulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes aiFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes aiTyping {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .ai-dot { animation: aiTyping 1.2s ease-in-out infinite; }
        @media (max-width: 900px) {
          .ai-hero-grid { grid-template-columns: 1fr !important; }
          .ai-board { display: none !important; }
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
            'linear-gradient(#f7ecd0 1px, transparent 1px), linear-gradient(90deg, #f7ecd0 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          backgroundPosition: 'center top',
          maskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)',
        }}
      >
        <div className="ai-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 40, alignItems: 'center' }}>
          <div>
            <Link
              to="/the-labs"
              className="ai-back"
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
                background: `${ACCENT}22`, color: ACCENT_TEXT, fontSize: 12, fontWeight: 700,
                letterSpacing: '0.08em', marginBottom: 20,
              }}
            >
              AI LAB
            </div>

            <h1 style={{ fontSize: 'clamp(32px, 4.6vw, 50px)', fontWeight: 800, lineHeight: 1.1, maxWidth: 560, margin: '0 0 16px 0' }}>
              We build intelligence into how your business runs.
            </h1>

            <p style={{ fontSize: 15, fontWeight: 600, color: ACCENT_TEXT, marginBottom: 20 }}>
              Intelligent Automation & Advanced Systems
            </p>

            <p style={{ fontSize: 16, lineHeight: 1.7, color: MUTED, maxWidth: 520, marginBottom: 32 }}>
              From workflows that run themselves to assistants that actually understand your
              customers, we embed AI where it removes real friction — not as a gimmick bolted
              onto a product, but as infrastructure your team can rely on.
            </p>

            {/* ✅ Button – opens inquiry modal with "appointment" variant */}
            <button
              onClick={() => inquiry.open('appointment')}
              className="ai-cta"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 26px',
                borderRadius: 35, fontSize: 14, fontWeight: 600, background: '#6c63ff', color: '#fff',
                border: 'none', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              Book an AI Consultation
              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 12 }} />
            </button>
          </div>

          {/* Pulsing node network + chat mock */}
          <div className="ai-board" style={{ position: 'relative', height: 340 }}>
            <div
              style={{
                position: 'absolute', top: 0, right: 10, width: 210, height: 180,
                background: '#fff', borderRadius: 16, border: '1px solid #f4e8c8',
                boxShadow: '0 30px 60px -24px rgba(26,27,46,0.16)',
                animation: 'aiFloat 7s ease-in-out infinite', padding: 8,
              }}
            >
              <NeuralBoard />
            </div>

            <div
              style={{
                position: 'absolute', bottom: 10, left: 0, width: 190, background: '#fff',
                borderRadius: 14, border: '1px solid #f4e8c8', padding: 16,
                boxShadow: '0 24px 48px -20px rgba(26,27,46,0.14)', transform: 'rotate(4deg)',
              }}
            >
              <CropMarks color="#f4e8c8" />
              <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 10 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', background: ACCENT }} />
                <div style={{ fontSize: 11, fontWeight: 700, color: INK }}>Assistant</div>
              </div>
              <div style={{ display: 'flex', gap: 4, padding: '8px 10px', background: '#FFF8E6', borderRadius: 10, width: 'fit-content' }}>
                <span className="ai-dot" style={{ width: 5, height: 5, borderRadius: '50%', background: ACCENT_TEXT, animationDelay: '0s' }} />
                <span className="ai-dot" style={{ width: 5, height: 5, borderRadius: '50%', background: ACCENT_TEXT, animationDelay: '0.2s' }} />
                <span className="ai-dot" style={{ width: 5, height: 5, borderRadius: '50%', background: ACCENT_TEXT, animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '20px 6vw 84px' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>What we build</h2>
        <p style={{ fontSize: 14, color: MUTED, marginBottom: 40 }}>
          Five disciplines, one goal: intelligence that actually saves you time.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
          {services.map((service) => {
            const Illustration = service.illustration;
            return (
              <div
                key={service.id}
                className="ai-card"
                style={{ border: '1px solid #f4e8c8', borderRadius: 16, background: '#fff', overflow: 'hidden' }}
              >
                <div style={{ background: '#FFFAEE', padding: '18px 18px 0' }}>
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
      <section style={{ padding: '20px 6vw 90px', borderTop: '1px solid #f4e8c8' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, margin: '36px 0 40px' }}>How it runs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
          {process.map((p) => (
            <div key={p.step}>
              <div style={{ fontSize: 13, fontWeight: 700, color: ACCENT_TEXT, marginBottom: 10 }}>{p.step}</div>
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
            className="ai-cta"
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