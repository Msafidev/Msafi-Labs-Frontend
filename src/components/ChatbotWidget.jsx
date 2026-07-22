import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faXmark, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const COLORS = {
  cta: "#6c63ff",
  design: "#E10A7F",
  code: "#00E5C0",
  ai: "#FFC947",
  platform: "#2563eb",
  ink: "#12121a",
  slate: "#5b5b6b",
  line: "#e7e7ef",
  paper: "#ffffff",
  bubble: "#f2f2f7",
};

const GRADIENT_BEAM = `linear-gradient(90deg, ${COLORS.design} 0%, ${COLORS.code} 33%, ${COLORS.ai} 66%, ${COLORS.platform} 100%)`;

/* ============================================================
   FAQ CONTENT — edit this to change what the bot says.
   Each node has:
     - bot: the message(s) shown when this node is entered
     - options: buttons shown below the message, each pointing
       at another node key (or an "action" instead of a node)
   ============================================================ */
const FAQ_TREE = {
  root: {
    bot: ["Hi! I'm the Msafi Labs assistant. What can I help you with?"],
    options: [
      { label: "Our services", to: "services" },
      { label: "Pricing", to: "pricing" },
      { label: "See our work", to: "portfolio" },
      { label: "Talk to a human", to: "human" },
    ],
  },
  services: {
    bot: ["We work across four labs — which one are you curious about?"],
    options: [
      { label: "Design Lab", to: "service_design" },
      { label: "Code Lab", to: "service_code" },
      { label: "AI Lab", to: "service_ai" },
      { label: "Msafi Platform", to: "service_platform" },
      { label: "← Back", to: "root" },
    ],
  },
  service_design: {
    bot: [
      "Design Lab covers brand identity, logo design, and visual systems — everything that makes a brand look and feel consistent.",
    ],
    options: [
      { label: "See pricing", to: "pricing" },
      { label: "Request a quote", action: "quote" },
      { label: "← Back to services", to: "services" },
    ],
  },
  service_code: {
    bot: [
      "Code Lab builds custom websites, web apps, and e-commerce stores — built to your spec, not a template.",
    ],
    options: [
      { label: "See pricing", to: "pricing" },
      { label: "Request a quote", action: "quote" },
      { label: "← Back to services", to: "services" },
    ],
  },
  service_ai: {
    bot: [
      "AI Lab builds chatbots and automation — like the one you're talking to right now — plus custom AI integrations for your business.",
    ],
    options: [
      { label: "See pricing", to: "pricing" },
      { label: "Request a quote", action: "quote" },
      { label: "← Back to services", to: "services" },
    ],
  },
  service_platform: {
    bot: [
      "Msafi Platform is our own product suite — tools we're building to help businesses run online, beyond one-off client projects.",
    ],
    options: [
      { label: "Request a quote", action: "quote" },
      { label: "← Back to services", to: "services" },
    ],
  },
  pricing: {
    bot: [
      "Pricing depends on scope, but as a rough guide:",
      "• Under KSh 50,000 — small sites, single-page brands\n• KSh 50,000–150,000 — full websites, brand identity packages\n• KSh 150,000–400,000 — e-commerce, custom web apps\n• KSh 400,000+ — larger platforms, AI integrations",
      "Want an exact number for your project?",
    ],
    options: [
      { label: "Request a quote", action: "quote" },
      { label: "← Back", to: "root" },
    ],
  },
  portfolio: {
    bot: ["You can browse everything we've built on our Portfolio page."],
    options: [
      { label: "Go to Portfolio", action: "portfolio_link" },
      { label: "← Back", to: "root" },
    ],
  },
  human: {
    bot: [
      "Happy to connect you directly — pick whichever's easiest:",
    ],
    options: [
      { label: "WhatsApp us", action: "whatsapp" },
      { label: "Fill out a quick form", action: "quote" },
      { label: "← Back", to: "root" },
    ],
  },
};

/**
 * <ChatbotWidget
 *   onOpenInquiry={(variant) => ...}   // wire to your useInquiryModal().open
 *   whatsappNumber="254712345678"
 *   portfolioPath="/portfolio"
 * />
 */
export default function ChatbotWidget({
  onOpenInquiry,
  whatsappNumber = "254700000000",
  portfolioPath = "/portfolio",
  bottom = 96,
  right = 24,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([{ node: "root" }]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  function goTo(nodeKey, chosenLabel) {
    setHistory((h) => [...h, { node: nodeKey, chosenLabel }]);
  }

  function handleOption(opt) {
    if (opt.action === "quote") {
      onOpenInquiry?.("quote");
      setIsOpen(false);
      return;
    }
    if (opt.action === "whatsapp") {
      const msg = "Hi Msafi Labs! I'd like to know more about your services.";
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
      return;
    }
    if (opt.action === "portfolio_link") {
      window.location.href = portfolioPath;
      return;
    }
    goTo(opt.to, opt.label);
  }

  const canGoBack = history.length > 1;
  function handleBack() {
    setHistory((h) => h.slice(0, -1));
  }

  return (
    <>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: bottom + 68,
            right: Math.min(right, 12),
            width: "min(340px, calc(100vw - 24px))",
            maxHeight: "min(480px, calc(100vh - 160px))",
            display: "flex",
            flexDirection: "column",
            background: COLORS.paper,
            borderRadius: 18,
            boxShadow: "0 20px 60px rgba(18,18,26,0.28)",
            overflow: "hidden",
            zIndex: 998,
          }}
        >
          <div style={{ height: 4, background: GRADIENT_BEAM, flexShrink: 0 }} />

          <div
            style={{
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: `1px solid ${COLORS.line}`,
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {canGoBack && (
                <button
                  onClick={handleBack}
                  aria-label="Back"
                  style={{
                    border: "none",
                    background: "transparent",
                    color: COLORS.slate,
                    cursor: "pointer",
                    fontSize: 14,
                    padding: 4,
                  }}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
              )}
              <span style={{ fontWeight: 700, fontSize: 14.5, color: COLORS.ink }}>
                Msafi Labs Assistant
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              style={{
                border: "none",
                background: "transparent",
                color: COLORS.slate,
                cursor: "pointer",
                fontSize: 14,
                padding: 4,
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div
            ref={scrollRef}
            style={{
              padding: 16,
              overflowY: "auto",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {history.map((step, i) => {
              const node = FAQ_TREE[step.node];
              return (
                <div key={i}>
                  {step.chosenLabel && (
                    <div
                      style={{
                        alignSelf: "flex-end",
                        background: COLORS.cta,
                        color: "#fff",
                        padding: "8px 13px",
                        borderRadius: "12px 12px 2px 12px",
                        fontSize: 13.5,
                        marginBottom: 10,
                        marginLeft: "auto",
                        maxWidth: "80%",
                        textAlign: "right",
                        width: "fit-content",
                      }}
                    >
                      {step.chosenLabel}
                    </div>
                  )}
                  {node.bot.map((line, li) => (
                    <div
                      key={li}
                      style={{
                        background: COLORS.bubble,
                        color: COLORS.ink,
                        padding: "9px 13px",
                        borderRadius: "12px 12px 12px 2px",
                        fontSize: 13.5,
                        lineHeight: 1.5,
                        whiteSpace: "pre-line",
                        marginBottom: 8,
                        maxWidth: "90%",
                      }}
                    >
                      {line}
                    </div>
                  ))}
                  {i === history.length - 1 && (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                        marginTop: 4,
                      }}
                    >
                      {node.options.map((opt) => (
                        <button
                          key={opt.label}
                          onClick={() => handleOption(opt)}
                          style={{
                            padding: "7px 13px",
                            borderRadius: 999,
                            border: `1.5px solid ${COLORS.cta}`,
                            background: "#fff",
                            color: COLORS.cta,
                            fontSize: 12.5,
                            fontWeight: 600,
                            cursor: "pointer",
                          }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        style={{
          position: "fixed",
          bottom,
          right,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: COLORS.cta,
          color: "#fff",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          boxShadow: "0 8px 24px rgba(108,99,255,0.4)",
          cursor: "pointer",
          zIndex: 999,
          transition: "transform 0.15s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faComments} />
      </button>
    </>
  );
}
