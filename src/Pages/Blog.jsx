import React from "react";
import { Link } from "react-router-dom";
import { useBlogPosts } from "../api/useBlogPosts";

const COLORS = {
  cta: "#6c63ff",
  ink: "#12121a",
  slate: "#5b5b6b",
  line: "#e7e7ef",
  paper: "#ffffff",
};

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const { posts, loading, error } = useBlogPosts();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",    // 👈 content pushed up
        justifyContent: "center",
        padding: "60px 24px",
        background: "#fafaff",
      }}
    >
      <div style={{ maxWidth: 1000, width: "100%" }}>
        {/* Header – fully centred, same style as Portfolio */}
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: COLORS.cta,
              display: "inline-block",
              background: "#6c63ff14",
              padding: "4px 14px",
              borderRadius: 999,
            }}
          >
            Insights
          </span>
          <h1
            style={{
              margin: "14px 0 8px",
              fontSize: 40,
              fontWeight: 800,
              color: COLORS.ink,
              letterSpacing: "-0.02em",
            }}
          >
            Blog
          </h1>
          <p
            style={{
              margin: "0 auto",
              fontSize: 16,
              color: COLORS.slate,
              maxWidth: 560,
              lineHeight: 1.6,
            }}
          >
            Notes on design, code, AI, and building Msafi Labs.
          </p>
        </div>

        {loading && <p style={{ color: COLORS.slate, textAlign: "center" }}>Loading posts…</p>}

        {error && (
          <p style={{ color: "#e0245e", textAlign: "center" }}>
            Couldn't load posts: {error}. Check Django is running and
            CORS_ALLOWED_ORIGINS includes your dev server's origin.
          </p>
        )}

        {!loading && !error && posts.length === 0 && (
          <p style={{ color: COLORS.slate, textAlign: "center" }}>
            No projects here yet — Wait for Admin to add some. He is really working on a big project, so it will be worth the wait!.
          </p>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              style={{
                display: "flex",
                gap: 20,
                textDecoration: "none",
                color: "inherit",
                border: `1px solid ${COLORS.line}`,
                borderRadius: 16,
                padding: 20,
                background: COLORS.paper,
                transition: "box-shadow 0.2s ease, transform 0.15s ease",
                boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.02)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {post.cover_image && (
                <img
                  src={post.cover_image}
                  alt={post.title}
                  style={{
                    width: 160,
                    height: 110,
                    objectFit: "cover",
                    borderRadius: 10,
                    flexShrink: 0,
                  }}
                />
              )}
              <div>
                {post.category && (
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: COLORS.cta,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {post.category.name}
                  </span>
                )}
                <h2
                  style={{
                    margin: "6px 0 6px",
                    fontSize: 19,
                    color: COLORS.ink,
                    fontWeight: 700,
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    margin: "0 0 8px",
                    fontSize: 14,
                    color: COLORS.slate,
                    lineHeight: 1.6,
                  }}
                >
                  {post.excerpt}
                </p>
                <span
                  style={{
                    fontSize: 12.5,
                    color: COLORS.slate,
                    opacity: 0.8,
                  }}
                >
                  {post.author_name} · {formatDate(post.published_at)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}