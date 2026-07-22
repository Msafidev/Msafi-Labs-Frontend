import React from "react";
import { useProjects } from "../api/useProjects";
import { Link } from "react-router-dom";

const COLORS = {
  design: "#E10A7F",
  code: "#00E5C0",
  ai: "#FFC947",
  platform: "#2563eb",
  ink: "#12121a",
  slate: "#5b5b6b",
  line: "#e7e7ef",
  paper: "#ffffff",
};

const LAB_LABELS = {
  design: "Design Lab",
  code: "Code Lab",
  ai: "AI Lab",
  platform: "Msafi Platform",
};

export default function PortfolioGrid({ lab, featured }) {
  const { projects, loading, error } = useProjects({ lab, featured });

  if (loading) {
    return <p style={{ color: COLORS.slate, padding: "24px 0" }}>Loading projects…</p>;
  }

  if (error) {
    return (
      <p style={{ color: "#e0245e", padding: "24px 0" }}>
        Couldn't load projects: {error}. Check that Django is running on the URL
        set in VITE_API_BASE_URL, and that CORS_ALLOWED_ORIGINS includes your
        React dev server's origin.
      </p>
    );
  }

  if (projects.length === 0) {
    return (
      <p style={{ color: COLORS.slate, padding: "24px 0" }}>
        No projects here yet — Wait for Admin to add some. He is really working on a big project, so it will be worth the wait!
      </p>
    );
  }

  return (
    <div style={styles.grid}>
      {projects.map((p) => (
        <Link
          key={p.id}
          to={`/project/${p.slug}`}
          style={styles.card}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.04)";
          }}
        >
          <div style={styles.imageWrap}>
            <img src={p.cover_image} alt={p.title} style={styles.image} />
            <div style={styles.imageOverlay}>
              <span
                style={{
                  ...styles.labBadge,
                  background: COLORS[p.lab] || COLORS.slate,
                }}
              >
                {LAB_LABELS[p.lab] || p.lab}
              </span>
            </div>
          </div>
          <div style={styles.body}>
            <h3 style={styles.title}>{p.title}</h3>
            <p style={styles.summary}>{p.summary}</p>
            {p.tech_stack_list?.length > 0 && (
              <div style={styles.tagRow}>
                {p.tech_stack_list.map((t) => (
                  <span key={t} style={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            )}
            {/* 👇 NEW: "View Details" button */}
            <div style={styles.detailsButton}>
              View Details →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

// ========== STYLES ==========
const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: 32,
    padding: "0 0 24px",
  },

  card: {
    display: "block",
    textDecoration: "none",
    color: "inherit",
    borderRadius: 20,
    overflow: "hidden",
    background: COLORS.paper,
    boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    willChange: "transform",
    border: "1px solid rgba(0,0,0,0.02)",
  },

  imageWrap: {
    position: "relative",
    aspectRatio: "16 / 10",
    overflow: "hidden",
    background: "#f0f0f5",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.4s ease",
  },

  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 60%)",
    pointerEvents: "none",
  },

  labBadge: {
    position: "absolute",
    top: 16,
    left: 16,
    padding: "5px 14px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
    color: "#fff",
    letterSpacing: "0.03em",
    textTransform: "uppercase",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    pointerEvents: "none",
  },

  body: {
    padding: "20px 22px 24px",
  },

  title: {
    margin: "0 0 6px",
    fontSize: 19,
    fontWeight: 700,
    color: COLORS.ink,
    letterSpacing: "-0.01em",
    lineHeight: 1.3,
  },

  summary: {
    margin: "0 0 14px",
    fontSize: 14,
    color: COLORS.slate,
    lineHeight: 1.6,
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },

  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 4,
  },

  tag: {
    fontSize: 12,
    padding: "3px 12px",
    borderRadius: 999,
    background: "#f2f2f7",
    color: COLORS.slate,
    fontWeight: 500,
    letterSpacing: "0.01em",
  },

  // 👇 NEW STYLE: subtle "View Details" button
  detailsButton: {
    marginTop: 14,
    fontSize: 13,
    fontWeight: 600,
    color: COLORS.ink,
    letterSpacing: "0.02em",
    display: "inline-block",
    borderBottom: `2px solid ${COLORS.ink}`,
    paddingBottom: 2,
    transition: "opacity 0.2s",
    opacity: 0.7,
  },
};