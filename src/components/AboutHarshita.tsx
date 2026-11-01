import React from 'react';
import { Sparkles, CheckCircle2, HeartHandshake, Award, Clock } from 'lucide-react';

export const AboutHarshita: React.FC = () => {
  return (
    <section id="about-harshita" className="py-16 bg-white border-b border-[#EADBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE7FA] border border-[#D8CCE8] text-xs font-semibold uppercase tracking-widest text-[#5B3E8C]">
              <Sparkles className="w-3.5 h-3.5 text-[#7C5DA6]" />
              <span>Meet Your Designer</span>
            </div>

            {/* MANDATORY CONTENT BLOCK */}
            <div className="relative pl-5 border-l-2 border-[#8A63B8] space-y-3">
              <p className="text-base sm:text-lg text-[#3B1F56] font-serif italic leading-relaxed">
                "Welcome to Harshita Creation! We bring beautiful blouse designs and quality stitching together. From simple everyday styles to elegant bridal and designer blouses, every creation is made with care, creativity and attention to detail."
              </p>
            </div>

            <p className="text-sm text-[#554366] leading-relaxed">
              With a deep understanding of Indian textiles, bridal aesthetics, and ergonomic blouse patterning, Harshita works directly with every customer. Whether you are looking for an intricate bridal maggam creation with antique kundan stones, a Paithani border placement for festive pujas, or a showstopping back neck cut for a wedding reception, every blouse is treated like wearable art.
            </p>

            {/* Quality Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF7FD] border border-[#ECE0F8]">
                <Award className="w-5 h-5 text-[#7C5DA6] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#3B1F56]">
                    Perfect Comfort & Fit
                  </h4>
                  <p className="text-[11px] text-[#64507A] leading-snug mt-0.5">
                    Custom cup positioning, breathable cotton lining, and generous 2-inch alteration margins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF7FD] border border-[#ECE0F8]">
                <HeartHandshake className="w-5 h-5 text-[#7C5DA6] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#3B1F56]">
                    Personalized Design Guidance
                  </h4>
                  <p className="text-[11px] text-[#64507A] leading-snug mt-0.5">
                    Get tailored neckline and sleeve recommendations to complement your saree.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF7FD] border border-[#ECE0F8]">
                <Clock className="w-5 h-5 text-[#7C5DA6] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#3B1F56]">
                    Reliable Timely Delivery
                  </h4>
                  <p className="text-[11px] text-[#64507A] leading-snug mt-0.5">
                    Strict adherence to wedding and event timelines with express stitching options.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF7FD] border border-[#ECE0F8]">
                <CheckCircle2 className="w-5 h-5 text-[#7C5DA6] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#3B1F56]">
                    Authentic Hand Embroidery
                  </h4>
                  <p className="text-[11px] text-[#64507A] leading-snug mt-0.5">
                    Real zardozi bullion, seed pearls, kundan, mirror work, and aari needlework.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
