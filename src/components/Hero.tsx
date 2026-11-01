import React from 'react';
import { ArrowDown, Sparkles, Scissors, ShieldCheck, Ruler } from 'lucide-react';
import heroBlouseImage from '../assets/images/hero_designer_blouses_1793545819948.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="royal-hero relative overflow-hidden bg-gradient-to-b from-[#FAF7FD] via-[#F4EDFC] to-[#FAF8FC] border-b border-[#EBDFF7]">
      {/* Delicate background ambient highlights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E6D8F8]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#F0E6FC]/50 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Brand, Tagline, Welcome Message, Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline kicker */}
            <div className="royal-kicker inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFE7FA] border border-[#D8CCE8] text-xs font-semibold uppercase tracking-widest text-[#5B3E8C]">
              <Sparkles className="w-3.5 h-3.5 text-[#7C5DA6]" />
              <span>Exclusive Designer Blouses</span>
            </div>

            {/* Brand Title */}
            <h1 className="royal-hero-title text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-[#3B1F56] tracking-tight leading-[1.08]">
              HARSHITA CREATION
            </h1>

            {/* Welcome message from Harshita */}
            <div className="space-y-3 max-w-xl">
              <p className="text-lg sm:text-xl font-serif italic text-[#5B3E8C]">
                "Welcome to Harshita Creation! Where every blouse is handcrafted with passion, precision fitting, and timeless Indian elegance."
              </p>
              <p className="text-sm sm:text-base text-[#554366] leading-relaxed">
                Discover over 50+ exquisite designs—from opulent bridal maggam work and fancy back neck cuts to understated traditional silk and everyday minimalist styles. Custom stitched to your unique measurements with premium fabrics and flawless finishing.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#gallery"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#5B3E8C] hover:bg-[#472E6F] text-white font-medium text-sm tracking-wider uppercase rounded-md shadow-md hover:shadow-lg transition-all"
              >
                <span>Explore Our Collection</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Value Pillars */}
            <div className="pt-6 border-t border-[#E6DBF5] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#523F68]">
              <div className="flex items-center gap-2">
                <Scissors className="w-4 h-4 text-[#7C5DA6] shrink-0" />
                <span className="font-medium">Custom Tailored Fit</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#7C5DA6] shrink-0" />
                <span className="font-medium">50+ Unique Designs</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#7C5DA6] shrink-0" />
                <span className="font-medium">Online Measurements</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#7C5DA6] shrink-0" />
                <span className="font-medium">Premium Handwork</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Model Editorial Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative lavender border frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#CBB6EA] to-[#F1EAFB] rounded-2xl transform rotate-1 opacity-70 blur-xs" />

              <div className="royal-hero-image relative rounded-[1.6rem] overflow-hidden bg-white shadow-xl border border-[#E0D2F3]">
                <img
                  src={heroBlouseImage}
                  alt="HARSHITA CREATION - Exclusive Lavender Designer Blouse"
                  className="w-full h-[460px] sm:h-[540px] object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom glass overlay label */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-[#E9D5FF] block mb-0.5">
                    Bridal & Couture Highlight
                  </span>
                  <p className="text-base font-serif font-semibold">
                    Royal Lavender Hand-Embroidered Zardozi Blouse
                  </p>
                  <div className="mt-2 flex items-center justify-between text-xs text-white/90">
                    <span>Price साठी संपर्क करा</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
