import React from 'react';
import { MessageCircle, Sparkles, CheckCircle2, HeartHandshake, Award, Clock } from 'lucide-react';
import { BASE_WHATSAPP_URL } from '../utils/whatsapp';

export const AboutHarshita: React.FC = () => {
  return (
    <section id="about-harshita" className="py-16 bg-white border-b border-[#EADBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Harshita's Photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              {/* Decorative lavender backdrop glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#CBB6EA] via-[#EADBFA] to-[#FAF8FC] rounded-2xl transform -rotate-2 opacity-80" />

              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-[#E0D2F3]">
                <img
                  src="/src/assets/images/harshita_founder_1793545820422.jpg"
                  alt="Harshita - Founder & Head Designer, HARSHITA CREATION"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom glass nametag */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-white">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-[#E9D5FF] block">
                    HARSHITA CREATION
                  </span>
                  <p className="text-lg font-serif font-bold">Harshita</p>
                  <p className="text-xs text-white/90">Lead Designer & Master Stylist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Content, Philosophy & WhatsApp Consultation */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE7FA] border border-[#D8CCE8] text-xs font-semibold uppercase tracking-widest text-[#5B3E8C]">
              <Sparkles className="w-3.5 h-3.5 text-[#7C5DA6]" />
              <span>Meet Your Designer</span>
            </div>

            {/* MANDATORY HEADING */}
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3B1F56]">
              About Harshita
            </h2>

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
                    Personalized WhatsApp Styling
                  </h4>
                  <p className="text-[11px] text-[#64507A] leading-snug mt-0.5">
                    Share your saree picture on WhatsApp to get tailored neckline and sleeve recommendations.
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

            {/* Direct Consultation Link */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`${BASE_WHATSAPP_URL}?text=${encodeURIComponent(
                  'Hello Harshita! मला तुमच्याशी माझ्या साडीच्या ब्लाउज डिझाईन आणि स्टिचिंगबद्दल थेट बोलायचे आहे.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#5B3E8C] hover:bg-[#472E6F] text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-xs transition"
              >
                <MessageCircle className="w-4 h-4 text-[#A7F3D0]" />
                <span>Chat Directly with Harshita (9082867663)</span>
              </a>

              <span className="text-xs text-[#7C5DA6] text-center sm:text-left">
                Direct consultation for measurements, fabrics & quotes.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
