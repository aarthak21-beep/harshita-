import React, { useState } from 'react';
import { Heart, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  wishlistCount: number;
  onOpenWishlist: () => void;
  onOpenMeasurementGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  wishlistCount,
  onOpenWishlist,
  onOpenMeasurementGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EBDFF7] transition-all">
      {/* Top Bar Announcement Strip */}
      <div className="bg-gradient-to-r from-[#65438C] via-[#7B54A6] to-[#65438C] text-white text-[12px] py-1.5 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#E6DBF5]" />
        <span>Exclusive Designer Blouses · Custom Stitching & Maggam Work</span>
      </div>

      {/* Main Navigation (3-Zone Top Bar Contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-serif font-bold tracking-wider text-[#3B1F56] hover:text-[#5B3E8C] transition-colors whitespace-nowrap shrink-0"
        >
          HARSHITA CREATION
        </a>

        {/* Zone 2: Single-line Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4F3B66]">
          <a
            href="#gallery"
            className="hover:text-[#3B1F56] transition-colors hover:underline underline-offset-8 decoration-[#8A63B8] decoration-2 whitespace-nowrap shrink-0"
          >
            Collection
          </a>
          <a
            href="#categories"
            className="hover:text-[#3B1F56] transition-colors hover:underline underline-offset-8 decoration-[#8A63B8] decoration-2 whitespace-nowrap shrink-0"
          >
            Categories
          </a>
          <a
            href="#about-harshita"
            className="hover:text-[#3B1F56] transition-colors hover:underline underline-offset-8 decoration-[#8A63B8] decoration-2 whitespace-nowrap shrink-0"
          >
            About Harshita
          </a>
          <button
            onClick={onOpenMeasurementGuide}
            className="hover:text-[#3B1F56] transition-colors hover:underline underline-offset-8 decoration-[#8A63B8] decoration-2 whitespace-nowrap shrink-0 cursor-pointer text-left"
          >
            Measurement Guide
          </button>
          <a
            href="#testimonials"
            className="hover:text-[#3B1F56] transition-colors hover:underline underline-offset-8 decoration-[#8A63B8] decoration-2 whitespace-nowrap shrink-0"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="hover:text-[#3B1F56] transition-colors hover:underline underline-offset-8 decoration-[#8A63B8] decoration-2 whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>{/* Primary Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            className="relative p-2.5 rounded-full hover:bg-[#F3ECFB] text-[#4F3B66] hover:text-[#3B1F56] transition-colors cursor-pointer"
            aria-label="View Saved Designs"
            title="माझे सेव्ह केलेले डिझाईन्स"
          >
            <Heart className="w-5 h-5 text-[#65438C]" />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#7B54A6] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#4F3B66] hover:bg-[#F3ECFB]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#EBDFF7] px-5 py-5 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 font-medium text-[#3B1F56]">
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gray-100 hover:text-[#5B3E8C]"
            >
              Explore 50+ Designs
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gray-100 hover:text-[#5B3E8C]"
            >
              Browse Categories
            </a>
            <a
              href="#about-harshita"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gray-100 hover:text-[#5B3E8C]"
            >
              About Harshita
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMeasurementGuide();
              }}
              className="py-2 border-b border-gray-100 text-left hover:text-[#5B3E8C]"
            >
              Blouse Measurement Guide
            </button>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-gray-100 hover:text-[#5B3E8C]"
            >
              Customer Reviews
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#5B3E8C]"
            >
              Contact & Location
            </a>
          </div>

          <div className="pt-2">
            <a
              href={`${BASE_WHATSAPP_URL}?text=${encodeURIComponent(
                'Hello Harshita Creation! मला तुमच्या designer blouse collection बद्दल माहिती हवी आहे.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-semibold rounded-md shadow"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp वर Order करा (9082867663)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
