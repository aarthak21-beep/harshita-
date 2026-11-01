import React, { useState } from 'react';
import { Heart, Eye, Sparkles } from 'lucide-react';
import { BlouseDesign } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface DesignCardProps {
  design: BlouseDesign;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
  onSelectDesign: (design: BlouseDesign) => void;
}

export const DesignCard: React.FC<DesignCardProps> = ({
  design,
  isWishlisted,
  onToggleWishlist,
  onSelectDesign,
}) => {
  const [showModelView, setShowModelView] = useState(false);
  const currentImage = showModelView ? design.modelImage : design.image;

  return (
    <div className="royal-design-card group relative bg-white rounded-2xl border border-[#EADBFA] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">
      {/* Visual Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F7F3FB]">
        <ImageWithFallback
          src={currentImage}
          alt={design.name}
          category={design.category}
          name={design.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* View mode toggle button: Craft vs Model wearing */}
        <div className="absolute top-2.5 left-2.5 z-10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowModelView(!showModelView);
            }}
            className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-white/90 hover:bg-white text-[#5B3E8C] border border-[#D8CCE8] backdrop-blur-xs shadow-xs transition-all flex items-center gap-1 cursor-pointer"
            title="ब्लाउज डिटेल / मॉडेल लुक बदला"
          >
            <Sparkles className="w-3 h-3 text-[#8A63B8]" />
            <span>{showModelView ? 'Model Look' : 'Detail View'}</span>
          </button>
        </div>

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(design.id);
          }}
          className={`absolute top-2.5 right-2.5 z-10 p-2 rounded-full backdrop-blur-xs transition-colors shadow-xs cursor-pointer ${
            isWishlisted
              ? 'bg-[#5B3E8C] text-white'
              : 'bg-white/90 text-[#6B5383] hover:text-[#5B3E8C] hover:bg-white'
          }`}
          aria-label={isWishlisted ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick View Hover Overlay Button */}
        <div className="absolute inset-x-0 bottom-3 px-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            type="button"
            onClick={() => onSelectDesign(design)}
            className="w-full py-2 bg-white/95 hover:bg-white text-[#3B1F56] text-xs font-semibold rounded-md shadow-md border border-[#E6DBF5] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#5B3E8C]" />
            <span>View Full Details & Photos</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category & Tag */}
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#7C5DA6] mb-1">
            <span>{design.category}</span>
            <span aria-hidden="true">·</span>
            <span className="truncate max-w-[130px]">{design.neckType}</span>
          </div>

          {/* Design Name */}
          <h3
            onClick={() => onSelectDesign(design)}
            className="text-sm font-serif font-bold text-[#2D1B44] line-clamp-1 group-hover:text-[#5B3E8C] transition-colors cursor-pointer"
            title={design.name}
          >
            {design.name}
          </h3>

          {/* Fabric & Work specs */}
          <p className="text-xs text-[#6A5A7B] line-clamp-1 mt-1">
            {design.fabric} · {design.work}
          </p>
        </div>

        {/* Price & Action Section */}
        <div className="pt-2 border-t border-[#F2ECF9] space-y-2">
          {/* MANDATORY PRICE REQUIREMENT: "Price साठी संपर्क करा" */}
          <div className="text-center py-1 px-2 rounded bg-[#FAF6FD] border border-[#EFE7FA]">
            <span className="text-xs font-semibold text-[#5B3E8C] tracking-wide">
              Price साठी संपर्क करा
            </span>
          </div>        </div>
      </div>
    </div>
  );
};
