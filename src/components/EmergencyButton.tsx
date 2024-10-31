import React from 'react';
import { Phone } from 'lucide-react';

const EmergencyButton = () => {
  return (
    <a
      href="tel:112"
      className="fixed left-8 bottom-8 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-lg transition-colors z-50"
    >
      <Phone className="w-5 h-5 animate-pulse" />
      <span className="font-semibold">Notfall-Hotline</span>
    </a>
  );
};

export default EmergencyButton;