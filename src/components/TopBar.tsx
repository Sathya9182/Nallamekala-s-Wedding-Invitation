import React from 'react';
import { Languages, Mail, Heart } from 'lucide-react';
import { Language } from '../types/wedding';

interface TopBarProps {
  language: Language;
  onLanguageToggle: () => void;
  onShowerBlessings: () => void;
  onNavigateToSection: (sectionId: string) => void;
  onOpenSplashScreen: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  language,
  onLanguageToggle,
  onShowerBlessings,
  onNavigateToSection,
  onOpenSplashScreen,
}) => {
  const isTe = language === 'te';

  return (
    <div className="sticky top-0 z-40">
      {/* Top Auspicious Announcement Banner */}
      <div className="bg-gradient-to-r from-[#7A0D0E] via-[#941A1C] to-[#7A0D0E] text-white py-1 px-3 sm:px-4 text-center border-b border-[#D4AF37]/50 shadow-xs">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-medium tracking-wide">
          <span className="font-telugu font-bold text-[#FFF2C2] whitespace-nowrap">తేజ వెడ్స్ మాన్సి</span>
          <span className="text-white/60">·</span>
          <span className="font-playfair italic font-semibold text-white tracking-wider whitespace-nowrap">Teja Weds Mansi</span>
          <span className="hidden md:inline text-white/60">·</span>
          <span className="hidden md:inline text-xs text-[#FDEAA7]">16-10-2026 · Reddy Function Hall, Proddatur</span>
        </div>
      </div>

      {/* Main Header Navbar */}
      <header className="bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#EBDDB7]/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-18 flex items-center justify-between gap-2">
          
          {/* Zone 1: Stylish & Premium Brand Portion (Teja weds Mansi) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToSection('top');
            }}
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer select-none py-1 min-w-0"
          >
            {/* Royal Concentric Gold & Crimson Crest Monogram */}
            <div className="relative shrink-0">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#9E731B] via-[#F5E084] to-[#C2922E] shadow-md royal-crest-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#7A0D0E] via-[#8F1618] to-[#590506] border border-[#F5E084]/40 flex items-center justify-center">
                  <span className="text-gold-bright font-cinzel-dec font-bold text-[11px] sm:text-sm tracking-tight drop-shadow-xs">
                    TM
                  </span>
                </div>
              </div>
            </div>

            {/* Premium Stylish Typography for Teja weds Mansi */}
            <div className="flex flex-col justify-center min-w-0">
              <div className="flex items-baseline gap-1">
                <span className="text-base sm:text-2xl font-bold font-playfair tracking-wide text-[#7A0D0E] drop-shadow-[0_1px_1px_rgba(212,175,55,0.2)]">
                  Teja
                </span>
                <span className="font-script text-xl sm:text-3xl text-[#C2922E] px-0.5 sm:px-1 -rotate-6 inline-block leading-none select-none font-normal">
                  weds
                </span>
                <span className="text-base sm:text-2xl font-bold font-playfair tracking-wide text-[#7A0D0E] drop-shadow-[0_1px_1px_rgba(212,175,55,0.2)]">
                  Mansi
                </span>
              </div>

              {/* Stylish Telugu Subtitle */}
              <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap">
                <span className="text-[10px] sm:text-xs font-semibold font-telugu text-[#5A4535] tracking-wide">
                  చి॥ తేజ సాయి
                </span>
                <span className="text-[#C2922E] text-[9px] font-bold">&amp;</span>
                <span className="text-[10px] sm:text-xs font-semibold font-telugu text-[#5A4535] tracking-wide">
                  చి॥ల॥సౌ॥ మాన్సి
                </span>
              </div>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop only) */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-[#6B5E51]">
            <button
              onClick={() => onNavigateToSection('invitation-card')}
              className="hover:text-[#7A0D0E] transition-colors whitespace-nowrap cursor-pointer font-telugu"
            >
              {isTe ? 'శుభలేఖ' : 'Invitation'}
            </button>
            <button
              onClick={() => onNavigateToSection('ceremonies')}
              className="hover:text-[#7A0D0E] transition-colors whitespace-nowrap cursor-pointer font-telugu"
            >
              {isTe ? 'కార్యక్రమాలు' : 'Rituals'}
            </button>
          </nav>

          {/* Zone 3: Primary Actions (Touch-friendly on mobile) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Revisit Splash Card Opener */}
            <button
              onClick={onOpenSplashScreen}
              title={isTe ? 'ప్రారంభ కార్డ్ ఓపెనర్ చూడండి' : 'Open Splash Card Opener'}
              className="p-1.5 sm:p-2 rounded-lg border border-[#D4AF37]/50 bg-white hover:bg-amber-50/50 text-[#7A5812] text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 shadow-2xs active:scale-95"
            >
              <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
              <span className="hidden lg:inline font-telugu">{isTe ? 'కార్డ్ ఓపెనర్' : 'Card Opener'}</span>
            </button>

            {/* Language Toggle Button */}
            <button
              onClick={onLanguageToggle}
              aria-label="Toggle language"
              className="px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-[#D4AF37]/50 bg-white hover:bg-amber-50/50 text-[#7A5812] text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer shadow-2xs active:scale-95"
            >
              <Languages className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B8860B]" />
              <span className="font-telugu font-semibold text-[11px] sm:text-xs">{isTe ? 'EN' : 'తెలుగు'}</span>
            </button>

            {/* Quick Shower Akshatulu */}
            <button
              onClick={onShowerBlessings}
              className="px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 rounded-lg bg-gradient-to-r from-[#C2922E] to-[#D4AF37] hover:brightness-105 text-white font-medium text-xs transition-all shadow-sm active:scale-90 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white fill-white/80" />
              <span className="font-telugu text-[11px] sm:text-xs">{isTe ? 'అక్షతలు' : 'Akshatulu'}</span>
            </button>
          </div>

        </div>
      </header>
    </div>
  );
};
