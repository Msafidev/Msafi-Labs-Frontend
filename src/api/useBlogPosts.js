import { useState, useEffect } from "react";

const API_BASE_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_BASE_URL) ||
  "http://127.0.0.1:8000/api";

/**
 * useBlogPosts
 * Fetches the published blog post list from Django.
 *
 *   const { posts, loading, error } = useBlogPosts();                     // all
 *   const { posts, loading, error } = useBlogPosts({ category: "news" }); // filtered
 */
export function useBlogPosts({ category } = {}) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams();
    if (category) params.set("category", category);

    const url = `${API_BASE_URL}/blog/${params.toString() ? `?${params}` : ""}`;
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        return res.json();
      })
      .then((data) => {
        setPosts(Array.isArray(data) ? data : data.results || []);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [category]);

  return { posts, loading, error };
}

/**
 * useBlogPost
 * Fetches a single post's full content by slug.
 */
export function useBlogPost(slug) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    fetch(`${API_BASE_URL}/blog/${slug}/`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        return res.json();
      })
      .then(setPost)
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [slug]);

  return { post, loading, error };
}
