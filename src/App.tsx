/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DesignGallery } from './components/DesignGallery';
import { AboutHarshita } from './components/AboutHarshita';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DesignModal } from './components/DesignModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { MeasurementGuideModal } from './components/MeasurementGuideModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BLOUSE_DESIGNS } from './data/blouseDesigns';
import { BlouseDesign } from './types';
import { Sparkles, Ruler } from 'lucide-react';
import bridalMaggamImage from './assets/images/bridal_maggam_showcase_1793545820641.jpg';
import backNeckImage from './assets/images/back_neck_designer_blouse_1793545820860.jpg';

export default function App() {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('harshita_creation_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedDesign, setSelectedDesign] = useState<BlouseDesign | null>(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isMeasurementGuideOpen, setIsMeasurementGuideOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('harshita_creation_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist', e);
    }
  }, [wishlist]);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8FC] text-[#2D2438] antialiased">
      {/* Navbar with 3-Zone top bar contract */}
      <Navbar
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenMeasurementGuide={() => setIsMeasurementGuideOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Spotlight Showcase Banner: Bridal & Back Neck Masterpieces */}
        <section className="bg-gradient-to-r from-[#FAF6FE] via-[#F4EBFB] to-[#FAF6FE] py-10 border-b border-[#EADBFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1: Bridal Maggam Work */}
              <div className="p-6 rounded-2xl bg-white/90 border border-[#E4D5F7] shadow-xs flex flex-col sm:flex-row items-center gap-5">
                <div className="w-full sm:w-36 h-40 rounded-xl overflow-hidden shrink-0 border border-[#EADBFA]">
                  <img
                    src={bridalMaggamImage}
                    alt="Bridal Maggam Kundan Blouse"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2 text-left flex-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#7C5DA6] flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#5B3E8C]" />
                    Bridal Special
                  </span>
                  <h3 className="font-serif font-bold text-base text-[#3B1F56]">
                    Handcrafted Bridal Maggam & Kundan Work
                  </h3>
                  <p className="text-xs text-[#5D4973] leading-relaxed">
                    Over 80 hours of hand aari embroidery with real pearls and kundan stones on pure raw silk.
                  </p>
                  <div className="pt-1"><span className="text-xs font-semibold text-[#5B3E8C]">Price साठी संपर्क करा</span></div>
                </div>
              </div>

              {/* Feature 2: Fancy Back Neck Artistry */}
              <div className="p-6 rounded-2xl bg-white/90 border border-[#E4D5F7] shadow-xs flex flex-col sm:flex-row items-center gap-5">
                <div className="w-full sm:w-36 h-40 rounded-xl overflow-hidden shrink-0 border border-[#EADBFA]">
                  <img
                    src={backNeckImage}
                    alt="Fancy Back Neck Designer Blouse"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2 text-left flex-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#7C5DA6] flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#5B3E8C]" />
                    Trending Silhouette
                  </span>
                  <h3 className="font-serif font-bold text-base text-[#3B1F56]">
                    Deep V-Cut Tassel & Dori Back Necks
                  </h3>
                  <p className="text-xs text-[#5D4973] leading-relaxed">
                    Statement back cuts tailored with handmade latkan tassels, pearl borders, and secure fit.
                  </p>
                  <div className="pt-1"><span className="text-xs font-semibold text-[#5B3E8C]">Price साठी संपर्क करा</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 50+ Blouse Design Gallery */}
        <DesignGallery
          designs={BLOUSE_DESIGNS}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onSelectDesign={(design) => setSelectedDesign(design)}
        />

        {/* About Harshita Section */}
        <AboutHarshita />

        {/* Interactive Measurement Callout Banner */}
        <section className="bg-gradient-to-r from-[#65438C] to-[#4F2D74] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#E6DBF5] flex items-center justify-center md:justify-start gap-1.5">
                <Ruler className="w-4 h-4 text-[#C4B5FD]" />
                Bespoke Made-To-Measure Fit
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold">
                Online Measurements & Fitting Consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#E2D4F0] max-w-xl">
                घरबसल्या आपल्या ब्लाउजचे योग्य माप तयार ठेवा. फिटिंगविषयी मार्गदर्शनासाठी खालील संपर्क बटण वापरा.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => setIsMeasurementGuideOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#3B1F56] font-bold text-xs uppercase tracking-wider rounded-md hover:bg-[#F3ECFB] transition shadow-md cursor-pointer"
              >
                Open Measurement Guide
              </button>
              
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact & Consultation Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Design Detail Modal */}
      <DesignModal
        design={selectedDesign}
        onClose={() => setSelectedDesign(null)}
        isWishlisted={selectedDesign ? wishlist.includes(selectedDesign.id) : false}
        onToggleWishlist={toggleWishlist}
        onOpenMeasurementGuide={() => {
          setSelectedDesign(null);
          setIsMeasurementGuideOpen(true);
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        designs={BLOUSE_DESIGNS}
        onRemoveFromWishlist={toggleWishlist}
        onSelectDesign={(design) => setSelectedDesign(design)}
      />

      {/* Measurement Guide Modal */}
      <MeasurementGuideModal
        isOpen={isMeasurementGuideOpen}
        onClose={() => setIsMeasurementGuideOpen(false)}
      />
    </div>
  );
}
