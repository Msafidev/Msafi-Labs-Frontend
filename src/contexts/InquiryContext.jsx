import React, { createContext, useContext } from 'react';
import { useInquiryModal } from '../hooks/useInquiryModal';
import InquiryModal from '../components/InquiryModal';

const InquiryContext = createContext();

export function InquiryProvider({ children, endpoint = '/api/inquiries/', mock = false }) {
  const inquiry = useInquiryModal();

  return (
    <InquiryContext.Provider value={inquiry}>
      {children}
      <InquiryModal
        isOpen={inquiry.isOpen}
        variant={inquiry.variant}
        onClose={inquiry.close}
        endpoint={endpoint}
        mock={mock}
      />
    </InquiryContext.Provider>
  );
}

// ✅ This must be exported – that's what Navbar imports
export function useInquiry() {
  return useContext(InquiryContext);
}