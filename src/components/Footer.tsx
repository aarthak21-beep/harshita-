import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';
import { BASE_WHATSAPP_URL, WHATSAPP_PHONE } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#231535] text-white pt-16 pb-12 border-t border-[#3B1F56]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold tracking-wider text-white">
              HARSHITA CREATION
            </h3>
            <p className="text-sm tracking-widest uppercase font-medium text-[#D8CCE8]">
              Exclusive Designer Blouses
            </p>
            <p className="text-xs text-[#BFAACF] leading-relaxed max-w-sm">
              Bringing exquisite craftsmanship, bespoke blouse designs, and impeccable custom fitting to discerning women across India.
            </p>
            <div className="pt-2">
              <a
                href={`${BASE_WHATSAPP_URL}?text=${encodeURIComponent(
                  'Hello Harshita Creation! मला तुमच्या blouse designs बद्दल माहिती हवी आहे.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#A7F3D0] hover:text-white transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order: {WHATSAPP_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Quick Categories Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#EADBFA]">
              Design Categories
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#C6B6D6]">
              <a href="#gallery" className="hover:text-white transition">Simple Designs</a>
              <a href="#gallery" className="hover:text-white transition">Traditional Blouses</a>
              <a href="#gallery" className="hover:text-white transition">Bridal Blouses</a>
              <a href="#gallery" className="hover:text-white transition">Party Wear Blouses</a>
              <a href="#gallery" className="hover:text-white transition">Designer Cuts</a>
              <a href="#gallery" className="hover:text-white transition">Maggam Work</a>
              <a href="#gallery" className="hover:text-white transition">Fancy Back Necks</a>
              <a href="#gallery" className="hover:text-white transition">Sleeve Designs</a>
              <a href="#gallery" className="hover:text-white transition">Trending Styles</a>
            </div>
          </div>

          {/* Services & Contact */}
          <div className="md:col-span-3 space-y-3 text-xs text-[#C6B6D6]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#EADBFA]">
              Services & Highlights
            </h4>
            <ul className="space-y-1.5">
              <li>• Made-to-measure tailoring</li>
              <li>• Pure Silk & Handloom fabrics</li>
              <li>• Heavy bridal maggam & kundan work</li>
              <li>• Double cotton soft lining & margins</li>
              <li>• Safe doorstep courier delivery</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#3B1F56]/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#BFAACF]">
          {/* EXACT REQUIRED FOOTER SPECIFICATIONS */}
          <div className="text-center sm:text-left space-y-1">
            <p className="font-serif text-sm font-bold text-white tracking-wide">
              HARSHITA CREATION
            </p>
            <p className="text-xs text-[#D8CCE8]">
              Exclusive Designer Blouses
            </p>
          </div>

          {/* EXACT REQUIRED DEVELOPER CREDIT */}
          <div className="text-center sm:text-right">
            <p className="font-semibold text-white tracking-wide">
              Designed & Developed by MOTI Technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
