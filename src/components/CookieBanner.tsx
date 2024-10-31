import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/80 text-sm">
          Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
        </p>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="bg-primary-gold hover:bg-primary-beige text-white px-4 py-2 rounded transition-colors"
          >
            Akzeptieren
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="border border-white/20 hover:border-white/40 text-white px-4 py-2 rounded transition-colors"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;