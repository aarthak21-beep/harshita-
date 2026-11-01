import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
  name?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  category,
  name,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#F5F0FB] via-[#EFE7FA] to-[#E5D7F6] text-[#4A2D6C] p-4 overflow-hidden border border-[#D8CCE8]/50 ${className}`}
        role="img"
        aria-label={alt}
      >
        {/* Subtle decorative background paisley watermark */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10 text-[#5B3E8C] pointer-events-none"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 20 C60 20 30 60 40 100 C50 140 90 170 120 180 C150 170 180 140 170 100 C160 50 120 20 100 20 Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1.5" />
          <path d="M100 70 Q130 100 100 130 Q70 100 100 70 Z" fill="currentColor" opacity="0.3" />
        </svg>

        <div className="relative z-10 text-center">
          <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-white/80 border border-[#D8CCE8] flex items-center justify-center text-[#5B3E8C] shadow-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
              />
            </svg>
          </div>
          <span className="block text-xs font-semibold uppercase tracking-wider text-[#7C5DA6] mb-1">
            {category || 'HARSHITA CREATION'}
          </span>
          <p className="text-xs font-serif italic text-[#3B1F56] line-clamp-2 max-w-[200px]">
            {name || 'Exclusive Designer Blouse'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#F4EEFA] animate-pulse flex items-center justify-center">
          <span className="text-[10px] uppercase tracking-widest text-[#9A81BC] font-medium">
            Loading...
          </span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};
