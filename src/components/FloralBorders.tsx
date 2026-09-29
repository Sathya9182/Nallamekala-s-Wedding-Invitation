import React from 'react';

// Real high-resolution photography assets generated for authentic Kalyana Mandapam decor
const MARIGOLD_VERTICAL = '/src/assets/images/marigold_garland_vertical_1790611930430.jpg';
const MANGO_TORANAM = '/src/assets/images/mango_leaf_toranam_1790611944652.jpg';
const BRASS_URULI = '/src/assets/images/brass_uruli_flowers_1790611957439.jpg';

interface FloralBordersProps {
  showToranam?: boolean;
  showSideGarlands?: boolean;
  showUruli?: boolean;
}

export const FloralBorders: React.FC<FloralBordersProps> = ({
  showToranam = true,
  showSideGarlands = true,
  showUruli = true,
}) => {
  return (
    <>
      {/* Top Mango Leaf Toranam across the mandapam archway (Desktop & Tablet) */}
      {showToranam && (
        <div className="pointer-events-none hidden md:block fixed top-0 left-0 right-0 z-30 overflow-hidden shadow-sm">
          <div className="relative h-14 md:h-18 w-full overflow-hidden">
            <img
              src={MANGO_TORANAM}
              alt="Traditional South Indian Mango Leaf Toranam (మామిడి ఆకుల తోరణం)"
              className="h-full w-full object-cover object-center filter brightness-95 contrast-105"
              referrerPolicy="no-referrer"
            />
            {/* Subtle gold bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-75" />
          </div>
        </div>
      )}

      {/* Left side authentic Marigold & Jasmine garland hanging */}
      {showSideGarlands && (
        <div className="pointer-events-none fixed top-12 md:top-16 left-0 bottom-0 z-20 hidden md:block w-14 lg:w-20 overflow-hidden select-none">
          <div className="relative h-full w-full">
            <img
              src={MARIGOLD_VERTICAL}
              alt="Authentic Marigold & Jasmine Floral Hangings (బంతి & మల్లె పూల దండలు)"
              className="h-full w-full object-cover object-top opacity-90 drop-shadow-md"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-[#D4AF37]/50 via-transparent to-[#D4AF37]/40" />
          </div>
        </div>
      )}

      {/* Right side authentic Marigold & Jasmine garland hanging (mirrored) */}
      {showSideGarlands && (
        <div className="pointer-events-none fixed top-12 md:top-16 right-0 bottom-0 z-20 hidden md:block w-14 lg:w-20 overflow-hidden select-none">
          <div className="relative h-full w-full scale-x-[-1]">
            <img
              src={MARIGOLD_VERTICAL}
              alt="Authentic Marigold & Jasmine Floral Hangings (బంతి & మల్లె పూల దండలు)"
              className="h-full w-full object-cover object-top opacity-90 drop-shadow-md"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-[#D4AF37]/50 via-transparent to-[#D4AF37]/40" />
          </div>
        </div>
      )}

      {/* Subtle floating brass uruli badge indicator on bottom right for mandapam ambiance */}
      {showUruli && (
        <div className="fixed bottom-4 right-4 z-20 hidden lg:flex items-center gap-3 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl gold-border-frame shadow-lg">
          <div className="h-10 w-10 rounded-full overflow-hidden border border-[#D4AF37]/60 shrink-0">
            <img
              src={BRASS_URULI}
              alt="Sacred Brass Uruli with floating flowers"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-left">
            <p className="text-[11px] font-semibold text-[#8C6212] tracking-wide uppercase font-cinzel">Kalyana Mandapam</p>
            <p className="text-[12px] text-[#554D45] font-telugu">మంగళకరమైన వేదిక</p>
          </div>
        </div>
      )}
    </>
  );
};
