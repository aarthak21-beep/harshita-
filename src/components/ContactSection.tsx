import React, { useState } from 'react';
import { Clock, Truck, CheckCircle2, Sparkles, ChevronDown } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'माझे माप आणि कापड मी कसे पाठवू शकते?',
      a: 'तुम्ही तुमचे कापड कुरिअर / पोस्टने पाठवू शकता. मापे आणि फिटिंगविषयी माहिती संपर्काद्वारे घेऊ शकता.',
    },
    {
      q: 'ब्लाउज शिवून मिळायला किती दिवस लागतात?',
      a: 'ब्लाउजच्या डिझाईन आणि वर्कनुसार लागणारा वेळ बदलू शकतो. ऑर्डर देण्यापूर्वी अपेक्षित तारीख नक्की कळवा.',
    },
    {
      q: 'फिटिंग व्यवस्थित न बसल्यास काय करता येईल?',
      a: 'फिटिंगविषयी काही अडचण असल्यास संपर्क साधा. आवश्यक बदलांबद्दल बोलून योग्य मार्ग काढता येईल.',
    },
    {
      q: 'डिलिव्हरी कशी केली जाते?',
      a: 'कुरिअर / पोस्टद्वारे डिलिव्हरीची व्यवस्था उपलब्धतेनुसार केली जाऊ शकते. ऑर्डर देताना तपशील निश्चित करा.',
    },
  ];

  return (
    <section id="contact" className="py-16 bg-white border-b border-[#EADBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#7C5DA6]">
            <Sparkles className="w-3.5 h-3.5 text-[#5B3E8C]" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3B1F56]">
            Get In Touch With Harshita
          </h2>
          <p className="text-sm text-[#5C4872] leading-relaxed">
            ब्लाउज डिझाईन, शिलाई आणि ऑर्डरविषयी अधिक माहितीसाठी खाली दिलेले WhatsApp बटण वापरा.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="rounded-xl border border-[#EADBFA] bg-[#FAF8FC] p-5 text-center space-y-2">
            <Clock className="w-6 h-6 mx-auto text-[#7C5DA6]" />
            <h3 className="font-semibold text-sm text-[#3B1F56]">Working Hours</h3>
            <p className="text-xs text-[#5D4B72]">10:00 AM – 8:30 PM</p>
          </div>
          <div className="rounded-xl border border-[#EADBFA] bg-[#FAF8FC] p-5 text-center space-y-2">
            <Truck className="w-6 h-6 mx-auto text-[#7C5DA6]" />
            <h3 className="font-semibold text-sm text-[#3B1F56]">Delivery</h3>
            <p className="text-xs text-[#5D4B72]">Courier options can be discussed</p>
          </div>
          <div className="rounded-xl border border-[#EADBFA] bg-[#FAF8FC] p-5 text-center space-y-2">
            <CheckCircle2 className="w-6 h-6 mx-auto text-[#7C5DA6]" />
            <h3 className="font-semibold text-sm text-[#3B1F56]">Made With Care</h3>
            <p className="text-xs text-[#5D4B72]">Attention to design and fitting</p>
          </div>
        </div>

        <div className="pt-6 border-t border-[#F0E6FC] max-w-3xl mx-auto space-y-4">
          <div className="text-center space-y-1">
            <h3 className="text-xl font-serif font-bold text-[#3B1F56]">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-[#705B86]">ब्लाउज ऑर्डर आणि डिलिव्हरीविषयी सामान्य प्रश्न</p>
          </div>
          <div className="space-y-2.5 pt-2">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-lg border border-[#EADBFA] bg-[#FAF8FD] overflow-hidden transition">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-4 py-3.5 text-left text-xs sm:text-sm font-semibold text-[#3B1F56] flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#7C5DA6] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-[#5C4971] leading-relaxed border-t border-[#EFE7FA]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
