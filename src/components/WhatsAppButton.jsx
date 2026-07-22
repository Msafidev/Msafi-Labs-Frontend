import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

/**
 * <WhatsAppButton phoneNumber="254712345678" />
 *
 * phoneNumber: international format, digits only, no "+" or leading 0
 *   e.g. Kenyan number 0712 345 678 -> "254712345678"
 */
export default function WhatsAppButton({
  phoneNumber = "254759015376", // TODO: replace with your real number
  message = "Hi Msafi Labs! I'd like to know more about your services.",
  bottom = 24,
  right = 24,
}) {
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom,
        right,
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "#25D366",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 26,
        boxShadow: "0 8px 24px rgba(37,211,102,0.4)",
        textDecoration: "none",
        zIndex: 999,
        transition: "transform 0.15s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  );
}
