import React from 'react';
import { Sparkles, ArrowUp, Scissors, Truck, Gem } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#241536] via-[#35204D] to-[#21132F] text-white border-t border-[#8A63B8]/40">
      <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#9B75C8]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-[#B99ADD]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-14 sm:pt-16 pb-7">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <a href="#" className="inline-flex items-center gap-2 text-2xl sm:text-3xl font-serif font-bold tracking-[0.12em] text-white hover:text-[#E7D7F8] transition-colors">
              <Sparkles className="w-6 h-6 text-[#C9A9EA]" />
              HARSHITA CREATION
            </a>
            <div className="h-px w-20 bg-gradient-to-r from-[#C9A9EA] to-transparent" />
            <p className="text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-[#DCC9F0]">
              Exclusive Designer Blouses
            </p>
            <p className="text-sm text-[#C7B7D7] leading-7 max-w-md">
              सुंदर डिझाईन्स, आकर्षक शिलाई आणि खास प्रसंगांसाठी खास ब्लाउज.
            </p>
            <a href="#gallery" className="inline-flex items-center gap-2 rounded-full border border-[#A98BC8]/50 px-4 py-2.5 text-xs font-semibold text-[#F0E7F8] hover:bg-white/10 hover:border-[#D7BDEB] transition">
              Explore Collection <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Categories */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E8D9F5]">
              <Gem className="w-4 h-4 text-[#C9A9EA]" /> Design Categories
            </h4>
            <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-[#C9BBD8]">
              <a href="#gallery" className="hover:text-white hover:translate-x-1 transition duration-200">Simple Designs</a>
              <a href="#gallery" className="hover:text-white hover:translate-x-1 transition duration-200">Traditional Blouses</a>
              <a href="#gallery" className="hover:text-white hover:translate-x-1 transition duration-200">Bridal Blouses</a>
              <a href="#gallery" className="hover:text-white hover:translate-x-1 transition duration-200">Party Wear</a>
              <a href="#gallery" className="hover:text-white hover:translate-x-1 transition duration-200">Designer Cuts</a>
              <a href="#gallery" className="hover:text-white hover:translate-x-1 transition duration-200">Maggam Work</a>
              <a href="#gallery" className="hover:text-white hover:translate-x-1 transition duration-200">Fancy Back Necks</a>
              <a href="#gallery" className="hover:text-white hover:translate-x-1 transition duration-200">Sleeve Designs</a>
              <a href="#gallery" className="hover:text-white hover:translate-x-1 transition duration-200">Trending Styles</a>
            </div>
          </div>

          {/* Craft */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8D9F5]">
              Our Craft
            </h4>
            <ul className="space-y-4 text-sm text-[#C9BBD8]">
              <li className="flex items-start gap-3"><Scissors className="w-4 h-4 mt-0.5 shrink-0 text-[#C9A9EA]" /><span>Made-to-measure tailoring</span></li>
              <li className="flex items-start gap-3"><Gem className="w-4 h-4 mt-0.5 shrink-0 text-[#C9A9EA]" /><span>Bridal maggam & kundan work</span></li>
              <li className="flex items-start gap-3"><Truck className="w-4 h-4 mt-0.5 shrink-0 text-[#C9A9EA]" /><span>Courier delivery options</span></li>
            </ul>
          </div>
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#8F70AD]/70 to-transparent" />

        <div className="relative flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#E6D9F0]">
            Designed &amp; Developed by MOTI Technologies
          </p>
          <a href="#" aria-label="Back to top" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#A98BC8]/50 text-[#E6D9F0] hover:bg-white/10 hover:text-white transition">
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};
