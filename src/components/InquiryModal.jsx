import React, { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCheck,
  faSpinner,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

/* ============================================================
   BRAND TOKENS — keep in sync with the rest of the site
   ============================================================ */
const COLORS = {
  cta: "#6c63ff", // Indigo Violet
  design: "#E10A7F",
  code: "#00E5C0",
  ai: "#FFC947",
  platform: "#2563eb",
  ink: "#12121a",
  slate: "#5b5b6b",
  line: "#e7e7ef",
  paper: "#ffffff",
  danger: "#e0245e",
};

const GRADIENT_BEAM = `linear-gradient(90deg, ${COLORS.design} 0%, ${COLORS.code} 33%, ${COLORS.ai} 66%, ${COLORS.platform} 100%)`;

/* ============================================================
   API BASE URL — your Django backend runs on a different origin
   (127.0.0.1:8000) than your Vite dev server (5173), so a relative
   "/api/..." path won't hit Django unless you've set up a proxy.
   Set VITE_API_BASE_URL in your React app's .env file, e.g.:
     VITE_API_BASE_URL=http://127.0.0.1:8000/api
   If you're on Create React App instead of Vite, swap the line
   below for: process.env.REACT_APP_API_BASE_URL
   ============================================================ */
const API_BASE_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_BASE_URL) ||
  "http://127.0.0.1:8000/api";

/* ============================================================
   VARIANT CONFIG — copy + behavior per CTA
   ============================================================ */
const VARIANTS = {
  quote: {
    eyebrow: "Request a Quote",
    title: "Tell us what you're building.",
    subtitle:
      "Give us a few details and we'll come back with a scoped quote — usually within one business day.",
    submitLabel: "Send request",
    showSchedule: false,
  },
  project: {
    eyebrow: "Start Your Project",
    title: "Let's get your project moving.",
    subtitle:
      "Walk us through what you need. A Msafi Labs lead will reach out to map the first steps.",
    submitLabel: "Start the project",
    showSchedule: false,
  },
  appointment: {
    eyebrow: "Book an Appointment",
    title: "Pick a time to talk it through.",
    subtitle:
      "Share a couple of time slots that work for you and we'll confirm one that fits our schedule too.",
    submitLabel: "Request appointment",
    showSchedule: true,
  },
  talk: {
    eyebrow: "Let's Talk",
    title: "No brief needed — just say hi.",
    subtitle:
      "Not sure what you need yet? Tell us a bit about what's on your mind and we'll take it from there.",
    submitLabel: "Send message",
    showSchedule: false,
  },
};

const LAB_OPTIONS = [
  { value: "design", label: "Design Lab", color: COLORS.design },
  { value: "code", label: "Code Lab", color: COLORS.code },
  { value: "ai", label: "AI Lab", color: COLORS.ai },
  { value: "platform", label: "Msafi Platform", color: COLORS.platform },
  { value: "unsure", label: "Not sure yet", color: COLORS.slate },
];

const BUDGET_OPTIONS = [
  "Under KSh 50,000",
  "KSh 50,000 – 150,000",
  "KSh 150,000 – 400,000",
  "KSh 400,000+",
  "Not sure yet",
];

const CONTACT_OPTIONS = [
  { value: "whatsapp", label: "WhatsApp", icon: faWhatsapp },
  { value: "email", label: "Email", icon: null },
  { value: "phone", label: "Phone call", icon: null },
];

/* ============================================================
   CSRF helper — Django's SessionMiddleware/CsrfViewMiddleware
   sets a "csrftoken" cookie; it must be echoed back as the
   X-CSRFToken header on unsafe methods (POST/PUT/PATCH/DELETE).
   If you're using DRF with TokenAuth/JWT instead of sessions,
   swap the header below for your Authorization header.
   ============================================================ */
function getCookie(name) {
  const match = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]+)")
  );
  return match ? decodeURIComponent(match[2]) : null;
}

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  lab: "unsure",
  budget: BUDGET_OPTIONS[4],
  preferredContact: "whatsapp",
  preferredDate: "",
  preferredTime: "",
  message: "",
};


export default function InquiryModal({
  isOpen,
  onClose,
  variant = "quote",
  mock = false,
  endpoint,
}) {
  const config = VARIANTS[variant] || VARIANTS.quote;
  const submitUrl = endpoint || `${API_BASE_URL}/inquiries/`;
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  // Prime the CSRF cookie once, as early as possible — this component is
  // typically mounted at app load (even while isOpen is false), so by the
  // time the user actually opens the modal, "csrftoken" is already set.
  useEffect(() => {
  fetch(`${API_BASE_URL}/csrf/`, {
    credentials: "include",
  }).catch(() => {
    // Non-fatal
  });
}, []);

  // Reset state whenever the modal is opened fresh
  useEffect(() => {
    if (isOpen) {
      setForm(initialForm);
      setStatus("idle");
      setErrorMsg("");
      setFieldErrors({});
    }
  }, [isOpen, variant]);

  // Escape key closes the modal
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && status !== "submitting") onClose?.();
    },
    [onClose, status]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please add your name.";
    if (!form.email.trim()) {
      errs.email = "Please add an email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errs.email = "That email doesn't look right.";
    }
    if (!form.message.trim()) errs.message = "Tell us a little about it.";
    if (config.showSchedule && !form.preferredDate) {
      errs.preferredDate = "Pick a preferred date.";
    }
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMsg("");

    const payload = {
      inquiry_type: variant, // "quote" | "project" | "appointment" | "talk"
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      lab_interest: form.lab,
      budget_range: form.budget,
      preferred_contact: form.preferredContact,
      preferred_date: config.showSchedule ? form.preferredDate : null,
      preferred_time: config.showSchedule ? form.preferredTime : null,
      message: form.message.trim(),
    };

    // 🔁 MOCK MODE – skip real fetch, useful for UI work with no backend running
    if (mock) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Mock submission data:", payload);
      setStatus("success");
      return;
    }

    // REAL FETCH — hits your Django/DRF backend
    try {
      const res = await fetch(submitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie("csrftoken") || "",
        },
        credentials: "include", // sends the sessionid + csrftoken cookies
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // DRF validation errors typically come back as { field: ["msg"] }
        let data = null;
        try {
          data = await res.json();
        } catch {
          /* non-JSON error body */
        }
        const message =
          (data && (data.detail || Object.values(data).flat().join(" "))) ||
          `Something went wrong (${res.status}). Please try again.`;
        throw new Error(message);
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err.message || "Couldn't send that. Check your connection and try again."
      );
    }
  }

  return (
    <div
      style={styles.overlay}
      onMouseDown={(e) =>
        e.target === e.currentTarget && status !== "submitting" && onClose?.()
      }
    >
      <div
        style={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-modal-title"
      >
        <div style={styles.beam} />

        <button
          type="button"
          onClick={onClose}
          disabled={status === "submitting"}
          style={styles.closeBtn}
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div style={styles.header}>
          <span style={styles.eyebrow}>{config.eyebrow}</span>
          <h2 id="inquiry-modal-title" style={styles.title}>
            {config.title}
          </h2>
          <p style={styles.subtitle}>{config.subtitle}</p>
        </div>

        {status === "success" ? (
          <div style={styles.successBox}>
            <div style={styles.successIconWrap}>
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: COLORS.paper, fontSize: 20 }}
              />
            </div>
            <h3 style={{ margin: "16px 0 6px", color: COLORS.ink }}>
              Got it — thank you.
            </h3>
            <p style={{ margin: 0, color: COLORS.slate, lineHeight: 1.6 }}>
              We'll be in touch at <strong>{form.email}</strong>
              {form.preferredContact === "whatsapp" ? " or over WhatsApp" : ""}{" "}
              soon.
            </p>
            <button
              type="button"
              onClick={onClose}
              style={{ ...styles.submitBtn, marginTop: 24 }}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate style={styles.form}>
            <div style={styles.row2}>
              <Field label="Full name" error={fieldErrors.name}>
                <input
                  style={inputStyle(fieldErrors.name)}
                  value={form.name}
                  onChange={update("name")}
                  placeholder="e.g. Jane Doe"
                  disabled={status === "submitting"}
                />
              </Field>
              <Field label="Email" error={fieldErrors.email}>
                <input
                  type="email"
                  style={inputStyle(fieldErrors.email)}
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@company.com"
                  disabled={status === "submitting"}
                />
              </Field>
            </div>

            <div style={styles.row2}>
              <Field label="Phone / WhatsApp (optional)">
                <input
                  style={inputStyle()}
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+254 7XX XXX XXX"
                  disabled={status === "submitting"}
                />
              </Field>
              <Field label="Company / project name (optional)">
                <input
                  style={inputStyle()}
                  value={form.company}
                  onChange={update("company")}
                  placeholder="e.g. Msafi Labs"
                  disabled={status === "submitting"}
                />
              </Field>
            </div>

            <Field label="Which lab fits best?">
              <div style={styles.chipRow}>
                {LAB_OPTIONS.map((opt) => {
                  const active = form.lab === opt.value;
                  return (
                    <button
                      type="button"
                      key={opt.value}
                      onClick={() => setForm((f) => ({ ...f, lab: opt.value }))}
                      disabled={status === "submitting"}
                      style={{
                        ...styles.chip,
                        borderColor: active ? opt.color : COLORS.line,
                        background: active ? `${opt.color}14` : COLORS.paper,
                        color: active ? opt.color : COLORS.slate,
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 999,
                          background: opt.color,
                          display: "inline-block",
                        }}
                      />
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </Field>

            <div style={styles.row2}>
              <Field label="Budget range">
                <select
                  style={inputStyle()}
                  value={form.budget}
                  onChange={update("budget")}
                  disabled={status === "submitting"}
                >
                  {BUDGET_OPTIONS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred contact method">
                <select
                  style={inputStyle()}
                  value={form.preferredContact}
                  onChange={update("preferredContact")}
                  disabled={status === "submitting"}
                >
                  {CONTACT_OPTIONS.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            {config.showSchedule && (
              <div style={styles.row2}>
                <Field label="Preferred date" error={fieldErrors.preferredDate}>
                  <input
                    type="date"
                    style={inputStyle(fieldErrors.preferredDate)}
                    value={form.preferredDate}
                    onChange={update("preferredDate")}
                    disabled={status === "submitting"}
                  />
                </Field>
                <Field label="Preferred time (optional)">
                  <input
                    type="time"
                    style={inputStyle()}
                    value={form.preferredTime}
                    onChange={update("preferredTime")}
                    disabled={status === "submitting"}
                  />
                </Field>
              </div>
            )}

            <Field label="Tell us about it" error={fieldErrors.message}>
              <textarea
                style={{
                  ...inputStyle(fieldErrors.message),
                  minHeight: 110,
                  resize: "vertical",
                }}
                value={form.message}
                onChange={update("message")}
                placeholder="What are you trying to build, and by when?"
                disabled={status === "submitting"}
              />
            </Field>

            {status === "error" && (
              <div style={styles.errorBanner}>
                <strong>Couldn't send that.</strong> {errorMsg}
              </div>
            )}

            <button
              type="submit"
              style={styles.submitBtn}
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin /> Sending…
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} /> {config.submitLabel}
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <label style={styles.fieldWrap}>
      <span style={styles.label}>{label}</span>
      {children}
      {error && <span style={styles.fieldError}>{error}</span>}
    </label>
  );
}

function inputStyle(hasError) {
  return {
    width: "100%",
    boxSizing: "border-box",
    padding: "11px 14px",
    fontSize: 14.5,
    borderRadius: 10,
    border: `1.5px solid ${hasError ? COLORS.danger : COLORS.line}`,
    outline: "none",
    fontFamily: "inherit",
    color: COLORS.ink,
    background: COLORS.paper,
    transition: "border-color 0.15s ease",
  };
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(18,18,26,0.55)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: 16,
  },
  modal: {
    position: "relative",
    width: "100%",
    maxWidth: 560,
    maxHeight: "90vh",
    overflowY: "auto",
    background: COLORS.paper,
    borderRadius: 20,
    boxShadow: "0 24px 70px rgba(18,18,26,0.35)",
    padding: "28px 28px 30px",
  },
  beam: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 5,
    borderRadius: "20px 20px 0 0",
    background: GRADIENT_BEAM,
  },
  closeBtn: {
    position: "absolute",
    top: 18,
    right: 18,
    width: 32,
    height: 32,
    borderRadius: 999,
    border: "none",
    background: "#f2f2f7",
    color: COLORS.slate,
    cursor: "pointer",
    fontSize: 14,
  },
  header: { marginTop: 10, marginBottom: 20, paddingRight: 30 },
  eyebrow: {
    display: "inline-block",
    fontSize: 12.5,
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: COLORS.cta,
    marginBottom: 8,
  },
  title: { margin: "0 0 8px", fontSize: 22, color: COLORS.ink, lineHeight: 1.25 },
  subtitle: { margin: 0, fontSize: 14.5, color: COLORS.slate, lineHeight: 1.55 },
  form: { display: "flex", flexDirection: "column", gap: 16 },
  row2: { display: "flex", gap: 14, flexWrap: "wrap" },
  fieldWrap: { display: "flex", flexDirection: "column", gap: 6, flex: "1 1 200px" },
  label: { fontSize: 12.5, fontWeight: 600, color: COLORS.ink },
  fieldError: { fontSize: 12, color: COLORS.danger },
  chipRow: { display: "flex", flexWrap: "wrap", gap: 8 },
  chip: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "8px 13px",
    borderRadius: 999,
    border: "1.5px solid",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    background: COLORS.paper,
  },
  errorBanner: {
    background: "#fdeaf0",
    color: COLORS.danger,
    fontSize: 13.5,
    padding: "10px 14px",
    borderRadius: 10,
    lineHeight: 1.5,
  },
  submitBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    marginTop: 4,
    padding: "13px 20px",
    borderRadius: 12,
    border: "none",
    background: COLORS.cta,
    color: "#fff",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
  },
  successBox: { textAlign: "center", padding: "20px 10px 6px" },
  successIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 999,
    background: COLORS.cta,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
