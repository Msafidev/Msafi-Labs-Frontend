import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faPenNib,
  faMobileScreen,
  faAddressCard,
  faBullhorn,
  faImages,
} from '@fortawesome/free-solid-svg-icons';

const ACCENT = '#E10A7F';

const services = [
  {
    icon: faPenNib,
    title: 'Brand Identity & Logo Design',
    description:
      'Your logo, color system, and typography rules — documented in a brand book your team and vendors can follow without guessing.',
  },
  {
    icon: faMobileScreen,
    title: 'UI/UX Digital Mockups',
    description:
      'Full interface designs for web and mobile, screen by screen, so you can see and test the product before a single line of code gets written.',
  },
  {
    icon: faAddressCard,
    title: 'Corporate Branding Kits',
    description:
      'Business cards, letterheads, and stationery that carry your identity consistently, from the boardroom to the mailroom.',
  },
  {
    icon: faBullhorn,
    title: 'Marketing Graphics & Posters',
    description:
      'Flyers, banners, and campaign assets built to convert — sized correctly for print and every platform you post to.',
  },
  {
    icon: faImages,
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

export default function DesignLab() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#1a1b2e' }}>
      <style>{`
        @keyframes designLabFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .design-lab-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .design-lab-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -16px rgba(225, 10, 127, 0.18);
          border-color: ${ACCENT}55;
        }
        .design-lab-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -8px rgba(108, 99, 255, 0.4);
        }
        .design-lab-back:hover {
          gap: 10px;
        }
      `}</style>

      {/* HERO */}
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 80,
          paddingLeft: '6vw',
          paddingRight: '6vw',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative brand-book swatches, kept soft so they don't compete with the text */}
        <div
          style={{
            position: 'absolute',
            top: 110,
            right: '6vw',
            width: 220,
            height: 220,
            display: 'none',
          }}
          className="design-lab-decor"
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 60,
            right: '8vw',
            width: 260,
            height: 260,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${ACCENT}22 0%, transparent 70%)`,
            animation: 'designLabFloat 6s ease-in-out infinite',
          }}
        />

        <Link
          to="/the-labs"
          className="design-lab-back"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 13,
            fontWeight: 600,
            color: '#94a0b3',
            textDecoration: 'none',
            marginBottom: 32,
            transition: 'gap 0.2s ease',
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 11 }} />
          All Labs
        </Link>

        <div
          style={{
            display: 'inline-block',
            padding: '6px 14px',
            borderRadius: 20,
            background: `${ACCENT}14`,
            color: ACCENT,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.08em',
            marginBottom: 20,
          }}
        >
          DESIGN LAB
        </div>

        <h1
          style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: 680,
            margin: '0 0 16px 0',
          }}
        >
          We design identities people don't forget.
        </h1>

        <p style={{ fontSize: 15, fontWeight: 600, color: ACCENT, marginBottom: 20 }}>
          Visual Identity & Brand Architecture
        </p>

        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: '#4a5568',
            maxWidth: 560,
            marginBottom: 36,
          }}
        >
          From a first logo sketch to a fully documented brand book, we build the visual
          language your business runs on — interfaces designed before a line of code,
          stationery that feels considered, campaign graphics tuned for launch, and a social
          system your team can actually keep up with.
        </p>

        <a
          href="https://calendly.com/msafilabs/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="design-lab-cta"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 26px',
            borderRadius: 35,
            fontSize: 14,
            fontWeight: 600,
            background: '#6c63ff',
            color: '#fff',
            textDecoration: 'none',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          Book a Design Consultation
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 12 }} />
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '20px 6vw 80px' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>What we build</h2>
        <p style={{ fontSize: 14, color: '#94a0b3', marginBottom: 40 }}>
          Five disciplines, one consistent identity across every one of them.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="design-lab-card"
              style={{
                border: '1px solid #edf0f5',
                borderRadius: 16,
                padding: 26,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  background: `${ACCENT}14`,
                  color: ACCENT,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                  marginBottom: 16,
                }}
              >
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 style={{ fontSize: 15.5, fontWeight: 700, marginBottom: 8 }}>
                {service.title}
              </h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: '#5b6472', margin: 0 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: '20px 6vw 90px' }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 40 }}>How it runs</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 32,
          }}
        >
          {process.map((p) => (
            <div key={p.step}>
              <div style={{ fontSize: 13, fontWeight: 700, color: ACCENT, marginBottom: 10 }}>
                {p.step}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: '#5b6472', margin: 0 }}>
                {p.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          margin: '0 6vw 80px',
          padding: '56px 40px',
          borderRadius: 24,
          background: '#1a1b2e',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: -40,
            right: -40,
            width: 3,
            height: 3,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 3,
            background: ACCENT,
          }}
        />
        <h2 style={{ fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 12, maxWidth: 480 }}>
          Ready to build a brand people remember?
        </h2>
        <p style={{ fontSize: 14.5, color: '#a0a8ba', marginBottom: 28, maxWidth: 460 }}>
          Let's talk about what your identity needs before we design a single pixel of it.
        </p>
        <a
          href="https://calendly.com/msafilabs/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="design-lab-cta"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 26px',
            borderRadius: 35,
            fontSize: 14,
            fontWeight: 600,
            background: '#6c63ff',
            color: '#fff',
            textDecoration: 'none',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          Start a Project
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 12 }} />
        </a>
      </section>
    </div>
  );
}