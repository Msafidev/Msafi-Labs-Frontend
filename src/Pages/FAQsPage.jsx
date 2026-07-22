import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const FAQsPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const faqs = [
    {
      q: 'What services does Msafi Labs offer?',
      a: 'We provide Design, Software Development (Web/Mobile), AI/Automation, and Platform strategy. Our labs cover everything from brand identity to custom APIs and intelligent workflows.',
    },
    {
      q: 'How do I get a quote?',
      a: 'Simply click the “Request a Quote” button anywhere on our site, fill in the brief, and we’ll get back to you within 24 hours with a scoped estimate.',
    },
    {
      q: 'Do you work with startups?',
      a: 'Absolutely. We partner with early‑stage companies to build MVPs, brand identities, and scalable infrastructure – always with growth in mind.',
    },
    {
      q: 'What’s your typical project timeline?',
      a: 'It depends on scope, but we work in iterative sprints so you see progress every 1–2 weeks. We’ll define a clear roadmap before we start.',
    },
    {
      q: 'Can you integrate with our existing systems?',
      a: 'Yes – we build APIs and connectors to fit into your current tech stack, whether it’s a CRM, ERP, or custom tool.',
    },
    {
      q: 'Do you offer ongoing support after launch?',
      a: 'We provide maintenance and evolution plans, so your product stays secure and up‑to‑date long after go‑live.',
    },
  ];

  return (
    <div style={{
      minHeight: 'calc(100vh - 64px)',
      padding: '60px 6vw',
      background: '#f8fafc',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <button
          onClick={goBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#6b7280',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '32px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>

        <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#1a1b2e', marginBottom: '8px' }}>
          Frequently Asked Questions
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '40px' }}>
          Everything you need to know about working with us.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {faqs.map((item, idx) => (
            <div key={idx} style={{
              background: '#fff',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #edf0f5',
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1b2e', margin: '0 0 8px 0' }}>
                {item.q}
              </h3>
              <p style={{ margin: 0, color: '#4a5568', lineHeight: 1.6 }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;