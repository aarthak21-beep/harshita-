import React, { useState } from 'react';
import heroBlouseImage from '../assets/images/hero_designer_blouses_1793545819948.jpg';
import bridalMaggamImage from '../assets/images/bridal_maggam_showcase_1793545820641.jpg';
import backNeckImage from '../assets/images/back_neck_designer_blouse_1793545820860.jpg';

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
    const fallbackImage = /bridal|maggam/i.test(category || '')
      ? bridalMaggamImage
      : /back|neck|sleeve/i.test(category || '')
        ? backNeckImage
        : heroBlouseImage;

    return (
      <div className={`relative overflow-hidden ${className}`} role="img" aria-label={alt}>
        <img
          src={fallbackImage}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 inset-x-0 px-2 py-1 bg-gradient-to-t from-black/60 to-transparent">
          <span className="text-[10px] text-white/90">HARSHITA CREATION</span>
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
