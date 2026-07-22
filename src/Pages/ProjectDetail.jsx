import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useProjects } from "../api/useProjects";

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

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { projects: allProjects, loading: allLoading } = useProjects();

  // Build API URL without double /api
  const getApiUrl = (path) => {
    const base = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
    const cleanBase = base.replace(/\/+$/, "");
    const hasApi = cleanBase.endsWith("/api");
    const prefix = hasApi ? "" : "/api";
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${cleanBase}${prefix}${cleanPath}`;
  };

  // Fetch full detail (includes gallery)
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const url = getApiUrl(`/portfolio/${slug}/`);
        console.log("🔍 Fetching detail from:", url);
        const response = await fetch(url);
        if (!response.ok) {
          const text = await response.text();
          throw new Error(`HTTP ${response.status} - ${text}`);
        }
        const data = await response.json();
        console.log("✅ Detail data (with gallery):", data);
        setProject(data);
        setError(null);
        setLoading(false);
      } catch (err) {
        console.warn("⚠️ Detail fetch failed:", err.message);
        setError(err.message);
        setLoading(false);
      }
    };

    if (slug) fetchDetail();
  }, [slug]);

  // Fallback: use list data if detail fetch failed
  useEffect(() => {
    if (error && !allLoading && allProjects.length > 0) {
      const found = allProjects.find((p) => p.slug === slug);
      if (found) {
        console.log("✅ Using list fallback (no gallery):", found);
        setProject(found);
        setError(null);
        setLoading(false);
      } else {
        setError("Project not found in list.");
      }
    }
  }, [error, allLoading, allProjects, slug]);

  if (loading || allLoading) {
    return (
      <div style={styles.page}>
        <div style={styles.loading}>Loading project…</div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div style={styles.page}>
        <div style={styles.errorBox}>
          <p style={styles.errorText}>{error || "Project not found."}</p>
          <Link to="/portfolio" style={styles.backLink}>
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // ========== Render ==========
  const extraImages = project.gallery || [];
  console.log("🖼️ Extra images from detail (or empty):", extraImages);

  // Normalize: if objects, extract 'image' field
  const normalizedImages =
    extraImages.length > 0 && typeof extraImages[0] === "object"
      ? extraImages.map((img) => img.image || img.url || img.src || img)
      : extraImages;

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <Link to="/portfolio" style={styles.backLink}>
          ← Back to Portfolio
        </Link>

        <div style={styles.card}>
          <div style={styles.header}>
            <span
              style={{
                ...styles.labBadge,
                background: COLORS[project.lab] || COLORS.slate,
              }}
            >
              {LAB_LABELS[project.lab] || project.lab}
            </span>
            <h1 style={styles.title}>{project.title}</h1>
            <p style={styles.summary}>{project.summary}</p>
          </div>

          {project.cover_image && (
            <div style={styles.imageWrapper}>
              <img
                src={project.cover_image}
                alt={project.title}
                style={styles.coverImage}
              />
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div style={styles.gallery}>
                {project.gallery.map((img) => (
                <div key={img.id} style={styles.galleryItem}>
                    <img
                    src={img.image}
                    alt={img.caption || project.title}
                    style={styles.galleryImage}
                    />
                </div>
                ))}
            </div>
            )}

          {project.description && (
            <div style={styles.descriptionWrapper}>
              <h2 style={styles.sectionHeading}>About this project</h2>
              <p style={styles.descriptionText}>{project.description}</p>
            </div>
          )}

          {project.tech_stack_list?.length > 0 && (
            <div style={styles.techSection}>
              <h3 style={styles.sectionHeading}>Tech Stack</h3>
              <div style={styles.tagRow}>
                {project.tech_stack_list.map((t) => (
                  <span key={t} style={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.live_url && (
            <div style={styles.buttonWrapper}>
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.liveButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.04)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(18,18,26,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 14px rgba(18,18,26,0.25)";
                }}
              >
                Visit Live Project →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ========== STYLES (copy your existing styles object here) ==========
const styles = {
  page: {
    background: "#fafaff",
    minHeight: "100vh",
    padding: "40px 24px 80px",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: 900,
    width: "100%",
  },
  backLink: {
    display: "inline-block",
    marginBottom: 24,
    color: COLORS.slate,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 14,
    transition: "color 0.2s",
    cursor: "pointer",
  },
  card: {
    background: COLORS.paper,
    borderRadius: 24,
    boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
    padding: "32px 40px 40px",
    border: "1px solid rgba(0,0,0,0.02)",
  },
  header: { marginBottom: 24 },
  labBadge: {
    display: "inline-block",
    padding: "4px 16px",
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 700,
    color: "#fff",
    letterSpacing: "0.03em",
    textTransform: "uppercase",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  title: {
    fontSize: 40,
    fontWeight: 800,
    color: COLORS.ink,
    margin: "16px 0 8px 0",
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
  },
  summary: {
    fontSize: 18,
    color: COLORS.slate,
    lineHeight: 1.6,
    margin: 0,
  },
  imageWrapper: {
    borderRadius: 16,
    overflow: "hidden",
    margin: "24px 0 20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
  },
  coverImage: {
    width: "100%",
    maxHeight: 400,
    objectFit: "cover",
    display: "block",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: 12,
    margin: "0 0 32px",
  },
  galleryItem: {
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  },
  galleryImage: {
    width: "100%",
    height: 120,
    objectFit: "cover",
    display: "block",
    transition: "transform 0.2s",
    cursor: "pointer",
  },
  descriptionWrapper: {
    margin: "32px 0",
    paddingTop: 24,
    borderTop: `1px solid ${COLORS.line}`,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 1.7,
    color: COLORS.ink,
    margin: 0,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 700,
    color: COLORS.ink,
    margin: "0 0 12px 0",
  },
  techSection: {
    margin: "32px 0",
    paddingTop: 24,
    borderTop: `1px solid ${COLORS.line}`,
  },
  tagRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },
  tag: {
    fontSize: 13,
    padding: "4px 14px",
    borderRadius: 999,
    background: "#f2f2f7",
    color: COLORS.slate,
    fontWeight: 600,
  },
  buttonWrapper: {
    marginTop: 40,
    textAlign: "center",
  },
  liveButton: {
    display: "inline-block",
    padding: "14px 40px",
    borderRadius: 999,
    background: COLORS.ink,
    color: "#fff",
    fontWeight: 700,
    fontSize: 16,
    textDecoration: "none",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
    boxShadow: "0 4px 14px rgba(18,18,26,0.25)",
    cursor: "pointer",
  },
  loading: {
    textAlign: "center",
    color: COLORS.slate,
    padding: "60px 0",
    fontSize: 18,
  },
  errorBox: {
    background: "#ffe8e8",
    padding: "32px 40px",
    borderRadius: 16,
    textAlign: "center",
    maxWidth: 600,
    margin: "0 auto",
  },
  errorText: {
    color: "#d63031",
    fontSize: 16,
    margin: "0 0 16px 0",
  },
};