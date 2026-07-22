import React from "react";
import { useParams, Link } from "react-router-dom";
import { useBlogPost } from "../api/useBlogPosts";

const COLORS = {
  cta: "#6c63ff",
  ink: "#12121a",
  slate: "#5b5b6b",
  line: "#e7e7ef",
};

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const { post, loading, error } = useBlogPost(slug);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "60px 24px",
          background: "#fafaff",
        }}
      >
        <p style={{ color: COLORS.slate, textAlign: "center" }}>Loading…</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "60px 24px",
          background: "#fafaff",
        }}
      >
        <div style={{ maxWidth: 760, width: "100%" }}>
          <p style={{ color: "#e0245e", textAlign: "center" }}>
            Couldn't load this post{error ? `: ${error}` : ""}.
          </p>
          <Link to="/blog" style={{ color: COLORS.cta, display: "block", textAlign: "center" }}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "60px 24px",
        background: "#fafaff",
      }}
    >
      <div style={{ maxWidth: 760, width: "100%" }}>
        <Link
          to="/blog"
          style={{
            fontSize: 13.5,
            color: COLORS.slate,
            textDecoration: "none",
            display: "inline-block",
            marginBottom: 24,
          }}
        >
          ← Back to Blog
        </Link>

        {/* Flex container: image left, content right */}
        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "flex-start",
          }}
        >
          {/* Image – left side */}
          {post.cover_image && (
            <img
              src={post.cover_image}
              alt={post.title}
              style={{
                maxWidth: 300,
                width: "100%",
                height: "auto",
                borderRadius: 16,
                flexShrink: 0,
              }}
            />
          )}

          {/* Content – right side */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {post.category && (
              <span
                style={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  color: COLORS.cta,
                  textTransform: "uppercase",
                }}
              >
                {post.category.name}
              </span>
            )}

            <h1
              style={{
                margin: "10px 0 12px",
                fontSize: 32,
                color: COLORS.ink,
                lineHeight: 1.2,
              }}
            >
              {post.title}
            </h1>

            <p style={{ margin: "0 0 28px", fontSize: 13.5, color: COLORS.slate }}>
              {post.author_name} · {formatDate(post.published_at)}
            </p>

            <div
              style={{
                fontSize: 16,
                color: COLORS.ink,
                lineHeight: 1.75,
                whiteSpace: "pre-wrap",
              }}
            >
              {post.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}