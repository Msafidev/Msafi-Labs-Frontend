import { useState, useEffect } from "react";

const API_BASE_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_BASE_URL) ||
  "http://127.0.0.1:8000/api";

/**
 * useProjects
 * Fetches the portfolio project list from Django.
 *
 *   const { projects, loading, error } = useProjects();               // all
 *   const { projects, loading, error } = useProjects({ lab: "design" }); // one lab
 *   const { projects, loading, error } = useProjects({ featured: true }); // homepage highlights
 */
export function useProjects({ lab, featured } = {}) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams();
    if (lab) params.set("lab", lab);
    if (featured !== undefined) params.set("featured", String(featured));

    const url = `${API_BASE_URL}/portfolio/${params.toString() ? `?${params}` : ""}`;
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        return res.json();
      })
      .then((data) => {
        // DRF pagination wraps results in { count, next, previous, results }
        setProjects(Array.isArray(data) ? data : data.results || []);
      })
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [lab, featured]);

  return { projects, loading, error };
}

/**
 * useProject
 * Fetches a single project's full case-study data by slug.
 */
export function useProject(slug) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    fetch(`${API_BASE_URL}/portfolio/${slug}/`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        return res.json();
      })
      .then(setProject)
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [slug]);

  return { project, loading, error };
}
