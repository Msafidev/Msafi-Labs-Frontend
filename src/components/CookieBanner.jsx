import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem('cookiesAccepted');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;
  return (
    <div className="fixed bottom-5 left-5 right-5 md:left-auto md:right-5 md:bottom-5 md:max-w-md bg-spaceNavy border border-indigoViolet rounded-2xl p-4 shadow-xl z-50 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <span className="text-sm">🍪 We use cookies to enhance your experience.</span>
        <button onClick={accept} className="bg-indigoViolet px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">Accept</button>
      </div>
    </div>
  );
};

export default CookieBanner;