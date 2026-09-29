import React from 'react';
import { Mail, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { Language } from '../types/wedding';

interface FooterProps {
  language: Language;
  onReopenEnvelope: () => void;
  onReopenSplash: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onReopenEnvelope,
  onReopenSplash,
}) => {
  const isTe = language === 'te';

  return (
    <footer className="mt-12 sm:mt-16 border-t border-[#EBDDB7] bg-white py-8 sm:py-12 px-3 sm:px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4">
        
        <div className="inline-block p-1.5 sm:p-2 rounded-full bg-[#FAF5E6] border border-[#D4AF37]/40 mb-1">
          <span className="text-[10px] sm:text-xs font-semibold text-[#8C6212] uppercase tracking-widest font-cinzel">
            {isTe ? 'శుభం భూయాత్' : 'Shubham Bhooyath'}
          </span>
        </div>

        <h3 className="text-lg sm:text-2xl font-bold font-telugu text-[#2C2723]">
          {isTe ? 'ఆహ్వానించువారు' : 'Cordially Invited By'}
        </h3>

        <div className="max-w-xl mx-auto text-xs sm:text-sm text-[#5C5043] font-telugu leading-relaxed space-y-1">
          <p className="font-semibold text-[#7A0D0E]">
            {isTe
              ? 'శ్రీమతి & శ్రీ నల్లమేకల లక్ష్మీదేవి - నాగరాజు మరియు కుటుంబ సభ్యులు'
              : 'Smt. & Sri Nallamekala Lakshmidevi - Nagaraju & Family'}
          </p>
          <p className="text-[11px] sm:text-xs text-[#6B5E51]">
            {isTe
              ? 'శ్రీ నీలకంఠేశ్వర స్టీల్స్, ప్రొద్దుటూరు'
              : 'Sri Neelakanteswara Steels, Proddatur'}
          </p>
          <p className="font-semibold text-[#7A0D0E] pt-1">
            {isTe
              ? 'శ్రీమతి & శ్రీ పొట్టెండ్ల అంజన - భగవాన్ మరియు కుటుంబ సభ్యులు'
              : 'Smt. & Sri Pottendla Anjana - Bhagavan & Family'}
          </p>
          <p className="text-[11px] sm:text-xs text-[#6B5E51]">
            {isTe
              ? 'గ్రీన్‌లాండ్ కాలనీ, ప్రొద్దుటూరు'
              : 'Green Land Colony, Proddatur'}
          </p>
          <p className="text-[#8C7D6D] pt-1.5 italic text-[11px] sm:text-xs">
            {isTe ? weddingData.hosts.complimentsTe : weddingData.hosts.complimentsEn}
          </p>
        </div>

        {/* Quick Replay Controls */}
        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
          <button
            onClick={onReopenSplash}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-[#D4AF37]/50 bg-[#FFFDF7] hover:bg-amber-50 text-[#7A5812] text-xs font-medium transition-colors cursor-pointer shadow-2xs active:scale-95"
          >
            <Heart className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="font-telugu">{isTe ? 'ప్రారంభ కార్డ్ ఓపెనర్ (Splash Card)' : 'Open Splash Card Screen'}</span>
          </button>

          <button
            onClick={onReopenEnvelope}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-[#D4AF37]/50 bg-[#FFFDF7] hover:bg-amber-50 text-[#7A5812] text-xs font-medium transition-colors cursor-pointer shadow-2xs active:scale-95"
          >
            <Mail className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="font-telugu">{isTe ? 'శుభలేఖ కవరు తెరవండి' : 'Open Envelope Modal'}</span>
          </button>
        </div>

        <p className="text-[10px] sm:text-[11px] text-[#A69785] pt-3 font-sans">
          Nallamekala's Kalyana Mahotsavam · Proddatur, YSR Kadapa Dist., 2026
        </p>

      </div>
    </footer>
  );
};
