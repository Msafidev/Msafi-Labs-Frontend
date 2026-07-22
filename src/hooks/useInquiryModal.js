import { useState, useCallback } from "react";

/**
 * useInquiryModal
 * Small controller hook so any button anywhere in the app (nav, hero,
 * footer, lab pages) can open the shared InquiryModal with the right
 * variant, without prop-drilling modal state everywhere.
 *
 * Usage:
 *   const inquiry = useInquiryModal();
 *   <button onClick={() => inquiry.open("quote")}>Request a Quote</button>
 *   <InquiryModal
 *     isOpen={inquiry.isOpen}
 *     variant={inquiry.variant}
 *     onClose={inquiry.close}
 *     endpoint="/api/inquiries/"
 *   />
 */
export function useInquiryModal(defaultVariant = "quote") {
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState(defaultVariant);

  const open = useCallback((v = defaultVariant) => {
    setVariant(v);
    setIsOpen(true);
  }, [defaultVariant]);

  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, variant, open, close };
}
