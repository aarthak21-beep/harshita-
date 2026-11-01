import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, X, Heart, SlidersHorizontal } from 'lucide-react';
import { BlouseDesign, BlouseCategory } from '../types';
import { BLOUSE_CATEGORIES } from '../data/blouseDesigns';
import { DesignCard } from './DesignCard';

interface DesignGalleryProps {
  designs: BlouseDesign[];
  wishlist: string[];
  onToggleWishlist: (id: string) => void;
  onSelectDesign: (design: BlouseDesign) => void;
}

export const DesignGallery: React.FC<DesignGalleryProps> = ({
  designs,
  wishlist,
  onToggleWishlist,
  onSelectDesign,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Designs');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyWishlisted, setOnlyWishlisted] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'trending'>('featured');

  // Filter & Search Logic
  const filteredDesigns = useMemo(() => {
    return designs
      .filter((design) => {
        // Category check
        if (selectedCategory !== 'All Designs' && design.category !== selectedCategory) {
          return false;
        }

        // Wishlist check
        if (onlyWishlisted && !wishlist.includes(design.id)) {
          return false;
        }

        // Search check
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = design.name.toLowerCase().includes(q);
          const matchCategory = design.category.toLowerCase().includes(q);
          const matchFabric = design.fabric.toLowerCase().includes(q);
          const matchWork = design.work.toLowerCase().includes(q);
          const matchNeck = design.neckType.toLowerCase().includes(q);
          const matchBack = design.backDesign.toLowerCase().includes(q);
          const matchTags = design.tags.some((tag) => tag.toLowerCase().includes(q));

          return matchName || matchCategory || matchFabric || matchWork || matchNeck || matchBack || matchTags;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'trending') {
          return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0);
        }
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }
        return 0; // featured default
      });
  }, [designs, selectedCategory, searchQuery, onlyWishlisted, wishlist, sortBy]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All Designs': designs.length };
    designs.forEach((d) => {
      counts[d.category] = (counts[d.category] || 0) + 1;
    });
    return counts;
  }, [designs]);

  return (
    <section id="gallery" className="royal-gallery py-16 sm:py-20 bg-[#FAF8FC] border-b border-[#EADBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#7C5DA6]">
            <Sparkles className="w-3.5 h-3.5 text-[#5B3E8C]" />
            <span>Exclusive Collection</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#3B1F56]">
            Blouse Design Gallery
          </h2>

          <p className="text-sm text-[#5C4872] leading-relaxed">
            Browse our curated catalogue of 50+ distinctive designer blouses. Every piece can be custom stitched to your exact measurements with bespoke neckline, sleeve, and embroidery options.
          </p>
        </div>

        {/* Search, Filter & Sorting Bar */}
        <div className="royal-filter-panel bg-white p-5 sm:p-6 rounded-2xl border border-[#E8DAF7] shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9A81BC]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by design name, fabric (Silk, Paithani, Velvet), neck style or maggam work..."
                className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-[#FAF8FC] border border-[#DCCDEE] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#7C5DA6] text-[#3B1F56] placeholder-[#9D88B9]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A81BC] hover:text-[#5B3E8C]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Filter Controls */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Wishlist quick toggle */}
              <button
                type="button"
                onClick={() => setOnlyWishlisted(!onlyWishlisted)}
                className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer ${
                  onlyWishlisted
                    ? 'bg-[#5B3E8C] text-white border-[#5B3E8C]'
                    : 'bg-[#FAF8FC] text-[#55406C] border-[#DCCDEE] hover:bg-[#F3ECFB]'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${onlyWishlisted ? 'fill-current' : ''}`} />
                <span>Saved ({wishlist.length})</span>
              </button>

              {/* Sort Selector */}
              <div className="flex items-center gap-1 bg-[#FAF8FC] border border-[#DCCDEE] rounded-lg px-2.5 py-1 text-xs text-[#55406C]">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#7C5DA6]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  aria-label="Sort designs by"
                  className="bg-transparent border-none text-xs font-medium text-[#4A3860] focus:outline-none cursor-pointer py-1"
                >
                  <option value="featured">Featured First</option>
                  <option value="trending">Trending Designs</option>
                  <option value="name">Alphabetical (A-Z)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Tabs (Section 4 categories) */}
          <div id="categories" className="pt-2 border-t border-[#F4EDFC] overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-2 pb-1 min-w-max">
              {BLOUSE_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count = categoryCounts[cat] || 0;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setOnlyWishlisted(false);
                    }}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'bg-[#5B3E8C] text-white shadow-xs'
                        : 'bg-[#F6F1FC] text-[#5A4670] hover:bg-[#EADBFA] hover:text-[#3B1F56]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`ml-1.5 text-[10px] font-mono opacity-80 ${
                        isSelected ? 'text-[#EFE7FA]' : 'text-[#7C5DA6]'
                      }`}
                    >
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Gallery Results Count & Active Filters */}
        <div className="flex items-center justify-between text-xs text-[#6E5985] px-1">
          <p>
            Showing <span className="font-semibold text-[#3B1F56]">{filteredDesigns.length}</span> of {designs.length} Exclusive Designs
            {selectedCategory !== 'All Designs' && ` in "${selectedCategory}"`}
          </p>

          {(selectedCategory !== 'All Designs' || searchQuery || onlyWishlisted) && (
            <button
              onClick={() => {
                setSelectedCategory('All Designs');
                setSearchQuery('');
                setOnlyWishlisted(false);
              }}
              className="text-[#7C5DA6] hover:text-[#5B3E8C] underline font-medium cursor-pointer"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {/* Designs Grid */}
        {filteredDesigns.length > 0 ? (
          <div className="royal-design-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {filteredDesigns.map((design) => (
              <DesignCard
                key={design.id}
                design={design}
                isWishlisted={wishlist.includes(design.id)}
                onToggleWishlist={onToggleWishlist}
                onSelectDesign={onSelectDesign}
              />
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="text-center py-16 bg-white rounded-xl border border-[#EADBFA] p-8 space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#FAF5FF] border border-[#E6DBF5] flex items-center justify-center text-[#7C5DA6]">
              <Search className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-serif font-bold text-[#3B1F56]">
                No matching blouse designs found
              </h3>
              <p className="text-xs text-[#705B87]">
                We couldn't find designs matching "{searchQuery}". Try searching for terms like "Silk", "Maggam", "Back Neck", or explore all categories.
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedCategory('All Designs');
                setSearchQuery('');
                setOnlyWishlisted(false);
              }}
              className="px-4 py-2 bg-[#5B3E8C] hover:bg-[#472E6F] text-white text-xs font-semibold rounded-md shadow-xs transition cursor-pointer"
            >
              Reset Filters & Show All 50+ Designs
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
