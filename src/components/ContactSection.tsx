import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Clock,
  MapPin,
  Send,
  HelpCircle,
  Sparkles,
  ChevronDown,
  Truck,
  CheckCircle2,
} from 'lucide-react';
import { BASE_WHATSAPP_URL, WHATSAPP_PHONE } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [quickName, setQuickName] = useState('');
  const [quickSareeType, setQuickSareeType] = useState('');
  const [quickQuery, setQuickQuery] = useState('');

  const faqs = [
    {
      q: 'माझे माप आणि कापड मी कसे पाठवू शकते? (How to send fabric & measurements?)',
      a: 'तुम्ही तुमचे कापड कुरिअर / पोस्टने पाठवू शकता किंवा आम्ही सांगितलेल्या मापांच्या मार्गदर्शनानुसार WhatsApp वर मापे पाठवू शकता. तुमच्याकडे आधीच चांगला बसणारा जुना ब्लाउज असेल, तर तो कुरिअरने पाठवल्यास तसाच नवीन ब्लाउज शिवून मिळतो.',
    },
    {
      q: 'ब्लाउज शिवून मिळायला किती दिवस लागतात? (Stitching Turnaround Time)',
      a: 'साधे आणि डिझायनर ब्लाउज ५ ते ७ दिवसांत तयार होतात. हेवी मागम वर्क किंवा ब्रायडल जरदोसी ब्लाउजसाठी १० ते १५ दिवस लागतात. लग्न किंवा कार्यक्रमासाठी तातडीची (Express Stitching) सुविधाही उपलब्ध आहे.',
    },
    {
      q: 'फिटिंग व्यवस्थित न बसल्यास काय करता येईल? (Alterations Policy)',
      a: 'प्रत्येक ब्लाउजमध्ये आम्ही आतून २ इंचांचे एक्स्ट्रा कापड (मार्जिन) ठेवतो, जेणेकरून भविष्यात माप सैल किंवा घट्ट करणे अत्यंत सोपे होते. काही अडचण आल्यास मोफत अल्ट्रेशन करून दिले जाते.',
    },
    {
      q: 'डिलिव्हरी कशी केली जाते? (Delivery Options)',
      a: 'संपूर्ण महाराष्ट्र आणि भारतात सुरक्षित कुरिअरद्वारे होम डिलिव्हरी केली जाते. पार्सल पाठवल्यावर WhatsApp वर ट्रॅकिंग नंबर दिला जातो.',
    },
  ];

  const handleSendQuickEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      'Hello Harshita Creation!',
      quickName ? `नाव: ${quickName}` : '',
      quickSareeType ? `साडीचा प्रकार: ${quickSareeType}` : '',
      quickQuery ? `चौकशी: ${quickQuery}` : 'मला ब्लाउज डिझाईन आणि स्टिचिंगबद्दल माहिती हवी आहे.',
    ]
      .filter(Boolean)
      .join('\n');

    const url = `${BASE_WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 bg-white border-b border-[#EADBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#7C5DA6]">
            <Sparkles className="w-3.5 h-3.5 text-[#5B3E8C]" />
            <span>Connect & Order</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#3B1F56]">
            Get In Touch With Harshita
          </h2>

          <p className="text-sm text-[#5C4872] leading-relaxed">
            Have a question about stitching charges, custom patterns, or bridal deadlines? We are just a message away on WhatsApp.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct WhatsApp Contact Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#FAF7FD] via-[#F4EDFC] to-[#FAF8FC] p-6 sm:p-8 rounded-2xl border border-[#E0D2F3] space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#7C5DA6] block mb-1">
                Direct WhatsApp Channel
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#3B1F56]">
                WhatsApp: {WHATSAPP_PHONE}
              </h3>
              <p className="text-xs text-[#5D4B72] mt-1 leading-relaxed">
                Connect directly for instant price quotes, neckline consultation, fabric selection, and order booking.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#4F3C64]">
                <Clock className="w-4 h-4 text-[#7C5DA6] shrink-0" />
                <span>Working Hours: 10:00 AM – 8:30 PM (All 7 Days)</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#4F3C64]">
                <Truck className="w-4 h-4 text-[#7C5DA6] shrink-0" />
                <span>Pan-India Courier & Doorstep Delivery Available</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#4F3C64]">
                <CheckCircle2 className="w-4 h-4 text-[#7C5DA6] shrink-0" />
                <span>Pre-shrunk Pure Cotton Double Lining Included</span>
              </div>
            </div>

            <a
              href={`${BASE_WHATSAPP_URL}?text=${encodeURIComponent(
                'Hello Harshita Creation! मला तुमच्या ब्लाउज डिझाईन्स आणि स्टिचिंगबद्दल चौकशी करायची आहे.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-md transition flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp (9082867663)</span>
            </a>
          </div>

          {/* Right Column: Quick WhatsApp Consultation Message Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#EADBFA] shadow-xs space-y-5">
            <div>
              <h3 className="text-lg font-serif font-bold text-[#3B1F56]">
                Quick WhatsApp Consultation Form
              </h3>
              <p className="text-xs text-[#6A577F] mt-0.5">
                Fill the details below to generate an immediate customized enquiry directly to Harshita.
              </p>
            </div>

            <form onSubmit={handleSendQuickEnquiry} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-[#3B1F56] block">
                    तुमचे नाव (Your Name)
                  </label>
                  <input
                    type="text"
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    placeholder="उदा. प्रियांका पाटील"
                    className="w-full px-3 py-2 border border-[#DACBE8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#7C5DA6] bg-[#FAF8FC]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-[#3B1F56] block">
                    साडीचा प्रकार (Saree / Fabric Type)
                  </label>
                  <input
                    type="text"
                    value={quickSareeType}
                    onChange={(e) => setQuickSareeType(e.target.value)}
                    placeholder="उदा. पैठणी, कांजीवरम, सिल्क, ऑर्गेन्झा"
                    className="w-full px-3 py-2 border border-[#DACBE8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#7C5DA6] bg-[#FAF8FC]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-[#3B1F56] block">
                  तुमची चौकशी किंवा डिझाईनची आवड (Your Query or Design Preference)
                </label>
                <textarea
                  rows={3}
                  value={quickQuery}
                  onChange={(e) => setQuickQuery(e.target.value)}
                  placeholder="उदा. मला लग्नाच्या रिसेप्शनसाठी डीप व्ही बॅक डिझाईन शिवून हवे आहे. शिलाई शुल्क किती होईल?"
                  className="w-full px-3 py-2 border border-[#DACBE8] rounded-md focus:outline-none focus:ring-1 focus:ring-[#7C5DA6] bg-[#FAF8FC]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#5B3E8C] hover:bg-[#472E6F] text-white font-bold uppercase tracking-wider rounded-md shadow-xs transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>WhatsApp वर पाठवा (9082867663)</span>
              </button>
            </form>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="pt-6 border-t border-[#F0E6FC] max-w-3xl mx-auto space-y-4">
          <div className="text-center space-y-1">
            <h3 className="text-xl font-serif font-bold text-[#3B1F56]">
              Frequently Asked Questions (वारंवार विचारले जाणारे प्रश्न)
            </h3>
            <p className="text-xs text-[#705B86]">
              Clear answers regarding measurements, fabric courier, stitching charges, and delivery.
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-lg border border-[#EADBFA] bg-[#FAF8FD] overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-4 py-3.5 text-left text-xs sm:text-sm font-semibold text-[#3B1F56] flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#7C5DA6] transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
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
