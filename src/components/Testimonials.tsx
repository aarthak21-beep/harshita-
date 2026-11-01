import React from 'react';
import { Star, Sparkles, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-[#FBF9FD] border-b border-[#EADBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#7C5DA6]">
            <Sparkles className="w-3.5 h-3.5 text-[#5B3E8C]" />
            <span>Customer Love & Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3B1F56]">
            What Our Clients Say
          </h2>

          <p className="text-sm text-[#5B4770] leading-relaxed">
            Real experiences from brides, festive saree lovers, and happy clients who trusted Harshita Creation for their special days.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl p-6 border border-[#EADBFA] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#D7C6EB]" />
                </div>

                {/* Marathi Quote */}
                <p className="text-sm text-[#3B1F56] font-medium leading-relaxed italic">
                  "{t.quoteMarathi}"
                </p>

                {/* English Translation */}
                <p className="text-xs text-[#6F5B85] leading-relaxed">
                  {t.quoteEnglish}
                </p>
              </div>

              {/* Client Info & Occasion */}
              <div className="pt-3 border-t border-[#F2ECF9] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-sm text-[#3B1F56]">
                    {t.name}
                  </span>
                  <span className="text-[11px] text-[#8C74A8]">{t.date}</span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#7C5DA6]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#5B3E8C]" />
                    <span>{t.city}</span>
                  </span>
                  <span className="truncate max-w-[160px] text-[10px] bg-[#F7F3FB] px-1.5 py-0.5 rounded">
                    {t.occasion}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
