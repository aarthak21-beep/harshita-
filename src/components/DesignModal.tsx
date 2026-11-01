import React, { useState } from 'react';
import {
  X,
  Heart,
  Sparkles,
  Scissors,
  CheckCircle2,
  Calendar,
  Layers,
  HelpCircle,
} from 'lucide-react';
import { BlouseDesign } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface DesignModalProps {
  design: BlouseDesign | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
  onOpenMeasurementGuide: () => void;
}

export const DesignModal: React.FC<DesignModalProps> = ({
  design,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onOpenMeasurementGuide,
}) => {
  if (!design) return null;

  const [activeTab, setActiveTab] = useState<'blouse' | 'model'>('blouse');

  const currentDisplayImage = activeTab === 'blouse' ? design.image : design.modelImage;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#EADBFA] overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0E6FC] bg-[#FAF8FC]">
          <div className="flex items-center gap-2 text-xs text-[#7C5DA6] font-medium">
            <span>{design.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono text-[11px] text-[#A28BBF]">{design.id}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleWishlist(design.id)}
              className={`p-2 rounded-full border border-[#E4D5F7] transition cursor-pointer ${
                isWishlisted
                  ? 'bg-[#5B3E8C] text-white'
                  : 'bg-white text-[#6B5383] hover:text-[#5B3E8C]'
              }`}
              title="Add to Wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white hover:bg-[#F3ECFB] text-[#4F3B66] border border-[#E4D5F7] transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[80vh] overflow-y-auto">
          {/* Left Column: Visual Showcase with Dual Tabs */}
          <div className="md:col-span-6 p-6 bg-[#FBF9FD] border-b md:border-b-0 md:border-r border-[#F0E6FC] flex flex-col">
            {/* View switcher tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#EFE7FA] rounded-lg mb-4 text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab('blouse')}
                className={`flex-1 py-1.5 px-3 rounded-md transition-all cursor-pointer text-center ${
                  activeTab === 'blouse'
                    ? 'bg-white text-[#3B1F56] shadow-xs font-semibold'
                    : 'text-[#6C5586] hover:text-[#3B1F56]'
                }`}
              >
                Blouse Detail View
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('model')}
                className={`flex-1 py-1.5 px-3 rounded-md transition-all cursor-pointer text-center ${
                  activeTab === 'model'
                    ? 'bg-white text-[#3B1F56] shadow-xs font-semibold'
                    : 'text-[#6C5586] hover:text-[#3B1F56]'
                }`}
              >
                Model Wearing View
              </button>
            </div>

            {/* Main display image */}
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-[#E7D9F7] bg-white shadow-xs">
              <ImageWithFallback
                src={currentDisplayImage}
                alt={`${design.name} - ${activeTab === 'blouse' ? 'Blouse Detail' : 'Model Look'}`}
                category={design.category}
                name={design.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded tracking-wide font-medium">
                {activeTab === 'blouse' ? 'Handcraft Detail' : 'Draped Model View'}
              </div>
            </div>

            {/* Thumbnail switcher */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <button
                onClick={() => setActiveTab('blouse')}
                className={`p-1 rounded-lg border text-left transition flex items-center gap-2 cursor-pointer ${
                  activeTab === 'blouse'
                    ? 'border-[#5B3E8C] bg-white ring-1 ring-[#5B3E8C]'
                    : 'border-transparent bg-white/60 hover:bg-white'
                }`}
              >
                <div className="w-12 h-12 rounded overflow-hidden shrink-0">
                  <ImageWithFallback
                    src={design.image}
                    alt="Detail thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[11px] leading-tight">
                  <p className="font-semibold text-[#3B1F56]">Craft Detail</p>
                  <p className="text-[#7C5DA6]">Embroidery</p>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('model')}
                className={`p-1 rounded-lg border text-left transition flex items-center gap-2 cursor-pointer ${
                  activeTab === 'model'
                    ? 'border-[#5B3E8C] bg-white ring-1 ring-[#5B3E8C]'
                    : 'border-transparent bg-white/60 hover:bg-white'
                }`}
              >
                <div className="w-12 h-12 rounded overflow-hidden shrink-0">
                  <ImageWithFallback
                    src={design.modelImage}
                    alt="Model thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[11px] leading-tight">
                  <p className="font-semibold text-[#3B1F56]">Model Look</p>
                  <p className="text-[#7C5DA6]">Full Drape</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Specifications & WhatsApp Order Inquiry Form */}
          <div className="md:col-span-6 p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Title & Tagline */}
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#3B1F56]">
                  {design.name}
                </h2>
                <p className="text-xs text-[#7C5DA6] font-medium mt-0.5">
                  Category: {design.category}
                </p>
              </div>

              {/* MANDATORY PRICE REQUIREMENT */}
              <div className="p-3 bg-gradient-to-r from-[#FAF5FF] via-[#F3EBFB] to-[#FAF5FF] rounded-lg border border-[#E9DAF8] flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#7C5DA6] block font-medium">
                    Pricing & Stitching
                  </span>
                  <p className="text-base font-bold text-[#5B3E8C]">
                    Price साठी संपर्क करा
                  </p>
                </div>
              </div>

              {/* Design Description */}
              <p className="text-xs sm:text-sm text-[#544368] leading-relaxed">
                {design.description}
              </p>

              {/* Specifications Matrix */}
              <div className="grid grid-cols-2 gap-3 text-xs bg-[#FAF7FD] p-3.5 rounded-lg border border-[#ECE0F8]">
                <div>
                  <span className="text-[#8A6FA8] font-medium block text-[10px] uppercase">
                    Fabric (कापड)
                  </span>
                  <span className="font-semibold text-[#3B1F56]">{design.fabric}</span>
                </div>
                <div>
                  <span className="text-[#8A6FA8] font-medium block text-[10px] uppercase">
                    Handwork / Work
                  </span>
                  <span className="font-semibold text-[#3B1F56]">{design.work}</span>
                </div>
                <div>
                  <span className="text-[#8A6FA8] font-medium block text-[10px] uppercase">
                    Front Neck
                  </span>
                  <span className="font-semibold text-[#3B1F56]">{design.neckType}</span>
                </div>
                <div>
                  <span className="text-[#8A6FA8] font-medium block text-[10px] uppercase">
                    Back Neck Style
                  </span>
                  <span className="font-semibold text-[#3B1F56]">{design.backDesign}</span>
                </div>
                <div>
                  <span className="text-[#8A6FA8] font-medium block text-[10px] uppercase">
                    Sleeve Style
                  </span>
                  <span className="font-semibold text-[#3B1F56]">{design.sleeveStyle}</span>
                </div>
                <div>
                  <span className="text-[#8A6FA8] font-medium block text-[10px] uppercase">
                    Ideal Occasion
                  </span>
                  <span className="font-semibold text-[#3B1F56]">{design.idealFor}</span>
                </div>
              </div>

              {/* Interactive WhatsApp Topic Selector */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-semibold text-[#3B1F56] flex items-center justify-between">
                  <span>तुमची चौकशी कशाबद्दल आहे? (Select Enquiry Topic):</span>
                  <button
                    onClick={onOpenMeasurementGuide}
                    className="text-[11px] text-[#7C5DA6] hover:text-[#5B3E8C] underline font-normal cursor-pointer"
                  >
                    मापे कशी घ्यावी?
                  </button>
                </label>

                <div className="grid grid-cols-2 gap-1.5">
                  {enquiryTopics.map((topic) => (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopic(topic.id)}
                      className={`px-2.5 py-1.5 text-xs text-left rounded border transition-all cursor-pointer ${
                        selectedTopic === topic.id
                          ? 'border-[#5B3E8C] bg-[#5B3E8C] text-white font-medium'
                          : 'border-[#E7D9F7] bg-white text-[#4A3860] hover:bg-[#FAF6FD]'
                      }`}
                    >
                      <span className="block text-[10px] opacity-80">{topic.marathi}</span>
                      <span className="truncate block font-medium">{topic.label}</span>
                    </button>
                  ))}
                </div>

                <div className="pt-1">
                  <input
                    type="text"
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="काही विशेष टीप? (उदा. लग्नाची तारीख किंवा रंग बदल)"
                    className="w-full px-3 py-2 text-xs border border-[#DDCDEE] rounded-md focus:outline-none focus:ring-1 focus:ring-[#7C5DA6] bg-[#FAF8FC]"
                  />
                </div>
              </div>
            </div>\n          </div>\n        </div>
      </div>
    </div>
  );
};
