import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BASE_WHATSAPP_URL, WHATSAPP_PHONE } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 z-40 flex items-center group"
    >
      <a
        href={`${BASE_WHATSAPP_URL}?text=${encodeURIComponent(
          'Hello Harshita Creation! मला तुमच्या designer blouse collection आणि stitching बद्दल अधिक माहिती हवी आहे.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
        aria-label="Chat on WhatsApp 9082867663"
      >
        <MessageCircle className="w-6 h-6 fill-white text-transparent shrink-0" />
        <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
          Order on WhatsApp ({WHATSAPP_PHONE})
        </span>
      </a>
    </aside>
  );
};
