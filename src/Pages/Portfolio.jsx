import React, { useState } from "react";
import PortfolioGrid from "../components/PortfolioGrid";

const LAB_FILTERS = [
  { value: null, label: "All Work", color: "#6c63ff" },
  { value: "design", label: "Design Lab", color: "#E10A7F" },
  { value: "code", label: "Code Lab", color: "#00E5C0" },
  { value: "ai", label: "AI Lab", color: "#FFC947" },
  { value: "platform", label: "Msafi Platform", color: "#2563eb" },
];

export default function Portfolio() {
  const [activeLab, setActiveLab] = useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",    // 👈 pushed up
        justifyContent: "center",
        padding: "60px 24px",
        background: "#fafaff",
      }}
    >
      <div style={{ maxWidth: 1200, width: "100%" }}>
        {/* Header – fully centred */}
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#6c63ff",
              display: "inline-block",
              background: "#6c63ff14",
              padding: "4px 14px",
              borderRadius: 999,
            }}
          >
            Our Work
          </span>
          <h1
            style={{
              margin: "14px 0 8px",
              fontSize: 40,
              fontWeight: 800,
              color: "#12121a",
              letterSpacing: "-0.02em",
            }}
          >
            Portfolio
          </h1>
          <p
            style={{
              margin: "0 auto",
              fontSize: 16,
              color: "#5b5b6b",
              maxWidth: 560,
              lineHeight: 1.6,
            }}
          >
            A look at projects across Design, Code, AI, and Platform work.
          </p>
        </div>

        {/* Filters – centred */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 40,
            justifyContent: "center",
          }}
        >
          {LAB_FILTERS.map((f) => {
            const active = activeLab === f.value;
            return (
              <button
                key={f.label}
                onClick={() => setActiveLab(f.value)}
                style={{
                  padding: "10px 22px",
                  borderRadius: 999,
                  border: `1.5px solid ${active ? f.color : "#e2e2ec"}`,
                  background: active ? `${f.color}18` : "#ffffff",
                  color: active ? f.color : "#4a4a5a",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: active ? `0 4px 12px ${f.color}30` : "0 1px 2px rgba(0,0,0,0.02)",
                  transform: active ? "scale(1.02)" : "scale(1)",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.borderColor = f.color;
                    e.currentTarget.style.color = f.color;
                    e.currentTarget.style.background = `${f.color}08`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.borderColor = "#e2e2ec";
                    e.currentTarget.style.color = "#4a4a5a";
                    e.currentTarget.style.background = "#ffffff";
                  }
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <PortfolioGrid lab={activeLab || undefined} />
      </div>
    </div>
  );
}