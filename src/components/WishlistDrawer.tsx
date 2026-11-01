import React from 'react';
import { X, Heart, Trash2 } from 'lucide-react';
import { BlouseDesign } from '../types';
import { ImageWithFallback } from './ImageWithFallback';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  designs: BlouseDesign[];
  onRemoveFromWishlist: (id: string) => void;
  onSelectDesign: (design: BlouseDesign) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  designs,
  onRemoveFromWishlist,
  onSelectDesign,
}) => {
  if (!isOpen) return null;

  const wishlistedDesigns = designs.filter((d) => wishlistIds.includes(d.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#F0E6FC] bg-[#FAF8FC] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#5B3E8C] fill-current" />
            <div>
              <h3 className="font-serif font-bold text-base text-[#3B1F56]">
                माझे सेव्ह केलेले डिझाईन्स
              </h3>
              <p className="text-xs text-[#7C5DA6]">
                Saved Designs ({wishlistedDesigns.length})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F3ECFB] text-[#4F3B66] border border-[#E4D5F7] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Designs List */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3">
          {wishlistedDesigns.length > 0 ? (
            wishlistedDesigns.map((design) => (
              <div
                key={design.id}
                className="flex items-center gap-3 p-2.5 rounded-lg border border-[#EADBFA] bg-[#FAF8FD] hover:bg-white transition group"
              >
                <div
                  onClick={() => {
                    onClose();
                    onSelectDesign(design);
                  }}
                  className="w-16 h-20 rounded overflow-hidden shrink-0 cursor-pointer bg-gray-100"
                >
                  <ImageWithFallback
                    src={design.image}
                    alt={design.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  onClick={() => {
                    onClose();
                    onSelectDesign(design);
                  }}
                  className="flex-1 min-w-0 cursor-pointer"
                >
                  <span className="text-[10px] text-[#7C5DA6] font-medium block">
                    {design.category}
                  </span>
                  <h4 className="text-xs font-serif font-bold text-[#3B1F56] truncate">
                    {design.name}
                  </h4>
                  <p className="text-[11px] text-[#635078] truncate mt-0.5">
                    {design.neckType} · {design.fabric}
                  </p>
                  <span className="text-[10px] font-semibold text-[#5B3E8C] mt-1 block">
                    Price साठी संपर्क करा
                  </span>
                </div>

                <button
                  onClick={() => onRemoveFromWishlist(design.id)}
                  className="p-1.5 text-gray-400 hover:text-red-500 transition cursor-pointer"
                  title="Remove from saved"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-16 space-y-3">
              <Heart className="w-10 h-10 mx-auto text-[#D4C3EA]" />
              <p className="text-sm font-serif font-bold text-[#3B1F56]">
                कोणतेही डिझाईन सेव्ह केलेले नाही
              </p>
              <p className="text-xs text-[#705C85] max-w-xs mx-auto">
                तुम्हाला आवडलेल्या डिझाईन्सवरील Heart (❤️) आयकॉनवर क्लिक करा, म्हणजे ते येथे एकत्र दिसतील.
              </p>
            </div>
          )}
        </div>\n      </div>\n    </div>\n  );
};
