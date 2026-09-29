import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Languages, Mail, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { Language } from '../types/wedding';
import MANGO_TORANAM from '../assets/images/mango_leaf_toranam_1790611944652.jpg';
import MARIGOLD_VERTICAL from '../assets/images/marigold_garland_vertical_1790611930430.jpg';

interface SplashScreenProps {
  isOpen: boolean;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onEnterInvitation: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  isOpen,
  language,
  onLanguageChange,
  onEnterInvitation,
}) => {
  const [guestName, setGuestName] = useState('');
  const [isOpening, setIsOpening] = useState(false);
  const isTe = language === 'te';

  const handleOpenCard = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Smooth cinematic opening delay
    setTimeout(() => {
      onEnterInvitation();
      setIsOpening(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.96, y: -25 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 overflow-y-auto bg-[#FAF9F5] text-[#2C2723] flex flex-col justify-between"
      >
        {/* Top Traditional Mango Leaf Toranam */}
        <div className="w-full h-11 sm:h-18 relative overflow-hidden shadow-xs shrink-0 select-none">
          <img
            src={MANGO_TORANAM}
            alt="Traditional South Indian Mango Leaf Toranam"
            className="w-full h-full object-cover object-center filter brightness-95"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-85" />
        </div>

        {/* Flanking Marigold & Jasmine Garlands for All Screen Sizes */}
        <div className="pointer-events-none fixed top-11 sm:top-16 left-0 bottom-0 z-10 w-3.5 sm:w-6 md:w-14 xl:w-20 overflow-hidden select-none">
          <img
            src={MARIGOLD_VERTICAL}
            alt="Marigold & Jasmine Garland"
            className="h-full w-full object-cover object-top opacity-90 drop-shadow-sm"
          />
        </div>
        <div className="pointer-events-none fixed top-11 sm:top-16 right-0 bottom-0 z-10 w-3.5 sm:w-6 md:w-14 xl:w-20 overflow-hidden select-none">
          <img
            src={MARIGOLD_VERTICAL}
            alt="Marigold & Jasmine Garland"
            className="h-full w-full object-cover object-top opacity-90 drop-shadow-sm scale-x-[-1]"
          />
        </div>

        {/* Center Main Card Opener Section */}
        <div className="max-w-xl mx-auto w-full px-3 sm:px-4 py-4 sm:py-8 my-auto relative z-20">
          
          {/* Subtle Language & Quick Toggle at top of Splash Screen */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs text-[#8C6212] font-cinzel font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Nallamekala's Wedding Invitation</span>
            </div>

            <div className="inline-flex items-center p-0.5 bg-[#F2ECDC] rounded-lg border border-[#D4AF37]/40 shadow-2xs">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-0.5 rounded-md text-[11px] sm:text-xs transition-all cursor-pointer ${
                  !isTe ? 'bg-white text-[#7A0D0E] font-semibold shadow-xs' : 'text-[#6B5E51] hover:text-[#2C2723]'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onLanguageChange('te')}
                className={`px-2.5 py-0.5 rounded-md text-[11px] sm:text-xs font-telugu transition-all cursor-pointer ${
                  isTe ? 'bg-white text-[#7A0D0E] font-bold shadow-xs' : 'text-[#6B5E51] hover:text-[#2C2723]'
                }`}
              >
                తెలుగు
              </button>
            </div>
          </div>

          {/* Premium Royal Wedding Card Container */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="relative bg-white rounded-2xl sm:rounded-3xl gold-border-frame shadow-2xl p-4 sm:p-8 md:p-10 text-center overflow-hidden"
          >
            {/* Inner Gold Foil Filigree Border Frame */}
            <div className="absolute top-2 left-2 right-2 bottom-2 sm:top-3 sm:left-3 sm:right-3 sm:bottom-3 rounded-xl sm:rounded-2xl border border-[#D4AF37]/35 pointer-events-none" />
            <div className="absolute top-3 left-3 right-3 bottom-3 sm:top-4 sm:left-4 sm:right-4 sm:bottom-4 rounded-xl sm:rounded-2xl border border-dashed border-[#D4AF37]/25 pointer-events-none" />

            {/* Corner Ornate Gold Accents */}
            <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-[#D4AF37]" />
            <div className="absolute bottom-2.5 left-2.5 sm:bottom-3.5 sm:left-3.5 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-3.5 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-[#D4AF37]" />

            {/* Top Vedic Inscription */}
            <div className="mb-3">
              <p className="text-[11px] sm:text-sm font-bold tracking-widest text-[#B8860B] uppercase font-cinzel">
                {isTe ? '॥ శ్రీరస్తు ! శుభమస్తు !! అవిఘ్నమస్తు !!! ॥' : '॥ Srirasthu ! Shubhamasthu!! Avignamasthu!!! ॥'}
              </p>
              <p className="text-[10px] sm:text-xs text-[#8C7D6D] font-telugu mt-0.5 italic">
                {isTe ? 'శ్లో॥ కల్యాణాద్భుత గాత్రాయ కామితార్థ ప్రదాయినే శ్రీనివాసాయ మంగళం ॥' : 'With Divine Blessings of Sri Venkateswara Swamy'}
              </p>
            </div>

            {/* Interactive Royal Wax Seal Flap */}
            <div className="my-3 sm:my-4 relative">
              <motion.div
                animate={isOpening ? { scale: 1.15, rotate: 12, opacity: 0 } : { scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="cursor-pointer inline-block group"
                onClick={handleOpenCard}
                title="Tap to break the seal and open invitation"
              >
                {/* Ornate Gold Filigree Ring */}
                <div className="w-16 h-16 sm:w-22 sm:h-22 mx-auto rounded-full p-[2.5px] bg-gradient-to-tr from-[#9E731B] via-[#F5E084] to-[#C2922E] shadow-xl royal-crest-glow group-hover:scale-105 active:scale-95 transition-transform duration-200">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#7A0D0E] via-[#8F1618] to-[#590506] border border-[#F5E084]/50 flex flex-col items-center justify-center shadow-inner relative overflow-hidden">
                    <span className="text-xl sm:text-3xl font-telugu text-[#FDEAA7] font-bold drop-shadow-md select-none">
                      శ్రీ
                    </span>
                    <span className="text-[8px] sm:text-[9px] uppercase font-cinzel tracking-widest text-[#F5DE8C]/90 font-semibold select-none -mt-0.5 sm:-mt-1">
                      SEAL
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Family Title from Wedding Card */}
            <div className="space-y-0.5 mb-3 sm:mb-4">
              <h2 className="text-base sm:text-xl font-bold font-serif text-[#7A0D0E] tracking-tight">
                {isTe ? weddingData.familyTitleTe : weddingData.familyTitleEn}
              </h2>
              <p className="text-[11px] sm:text-xs text-[#8C7D6D] font-sans">
                {isTe ? 'కళ్యాణ మహోత్సవ శుభలేఖ' : "Nallamekala's Wedding Invitation"}
              </p>
            </div>

            {/* Royal Couple Name Typography */}
            <div className="py-2.5 px-3 sm:px-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-transparent via-[#FAF5E6] to-transparent border-y border-[#D4AF37]/35 my-3">
              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                <span className="text-xl sm:text-3xl font-bold font-playfair tracking-wide text-[#7A0D0E] drop-shadow-[0_1px_1px_rgba(212,175,55,0.2)]">
                  Teja Sai
                </span>
                <span className="font-script text-2xl sm:text-4xl text-[#C2922E] px-1 -rotate-6 inline-block leading-none select-none font-normal">
                  weds
                </span>
                <span className="text-xl sm:text-3xl font-bold font-playfair tracking-wide text-[#7A0D0E] drop-shadow-[0_1px_1px_rgba(212,175,55,0.2)]">
                  Mansi
                </span>
              </div>

              {/* Telugu Names */}
              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 mt-1.5">
                <span className="text-[11px] sm:text-xs font-semibold font-telugu text-[#5A4535]">
                  చి॥ తేజ సాయి (MD of NAMATE)
                </span>
                <span className="text-[#C2922E] text-xs font-bold">&amp;</span>
                <span className="text-[11px] sm:text-xs font-semibold font-telugu text-[#5A4535]">
                  చి॥ల॥సౌ॥ మాన్సి B.Tech
                </span>
              </div>
            </div>

            {/* Sumuhurtham & Venue Capsule */}
            <div className="inline-block bg-[#FFFDF7] rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 border border-[#EADBBD] text-center my-1.5 shadow-2xs">
              <p className="text-xs sm:text-sm font-bold text-[#8A181A] font-telugu">
                {isTe ? 'సుముహూర్తం: 16-10-2026 శుక్రవారం ఉదయం 07:58 ని॥లకు' : 'Sumuhurtham: Friday, 16th October 2026 at 07:58 AM'}
              </p>
              <p className="text-[10px] sm:text-xs text-[#5C5043] font-sans mt-0.5">
                Reddy Function Hall (రెడ్ల కళ్యాణ మండపము), Proddatur
              </p>
            </div>

            {/* Personalized "To: [Guest Name]" Line */}
            <div className="my-3 sm:my-4 p-3 sm:p-4 rounded-xl bg-[#FAF7EE] border border-[#E2D8C3] text-left">
              <label className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A7561] font-semibold mb-1 font-cinzel">
                To (ఆహ్వానితులు):
              </label>
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder={isTe ? 'శ్రీయుతులు / మీ పేరు ఇక్కడ నమోదు చేయండి...' : 'Enter your name / Dear Guest & Family...'}
                className="w-full pb-1 border-b-2 border-dashed border-[#D4AF37] bg-transparent text-sm sm:text-base font-medium text-[#2C2723] focus:outline-none focus:border-[#7A0D0E]"
              />
              <p className="text-[9px] sm:text-[10px] text-[#8C7D6D] font-sans mt-1">
                {isTe ? 'సకుటుంబ సపరివార సమేతంగా విచ్చేయవలసిందిగా ప్రార్థన' : 'We solicit your gracious presence with family and friends'}
              </p>
            </div>

            {/* Host Details from Page 4 */}
            <div className="pt-2 text-xs text-[#6B5E51] border-t border-[#F0E6D0] text-left flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#8C6212] font-semibold">From (ఆహ్వానించువారు):</p>
                <p className="font-semibold text-[#7A0D0E] font-telugu text-[11px] sm:text-xs">{weddingData.hosts.namesTe}</p>
                <p className="text-[10px] text-[#7A6C5D]">{weddingData.hosts.businessEn}</p>
              </div>
              <div className="text-left sm:text-right text-[10px] sm:text-[11px] text-[#8C7D6D]">
                <p>Cell: {weddingData.hosts.phones[0]}, {weddingData.hosts.phones[1]}</p>
              </div>
            </div>

            {/* Premium Interactive Open Invitation Button */}
            <div className="mt-4 sm:mt-5 pt-1">
              <button
                onClick={handleOpenCard}
                disabled={isOpening}
                className="w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#7A0D0E] via-[#C2922E] to-[#7A0D0E] hover:brightness-105 text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer flex items-center justify-center gap-2 sm:gap-3 group relative overflow-hidden"
              >
                {/* Button shine reflection */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/15 skew-x-[-20deg] group-hover:translate-x-full transition-transform duration-1000" />
                
                <span className="font-telugu font-bold tracking-wide">
                  {isOpening ? 'శుభలేఖ తెరుచుకుంటోంది...' : 'ఆహ్వాన పత్రికను తెరవండి'}
                </span>
                <span className="text-[11px] sm:text-xs text-white/90 font-sans tracking-wide">
                  (Break Seal & Open)
                </span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[10px] sm:text-[11px] text-[#8C7D6D] font-sans mt-2">
                {isTe ? 'సువర్ణ ముద్రను తాకి కళ్యాణ ఆహ్వాన పత్రికను వీక్షించండి' : 'Tap the golden wax seal or button to open the wedding invitation'}
              </p>
            </div>

          </motion.div>

        </div>

        {/* Bottom Footer Note of Splash Screen */}
        <div className="text-center py-2.5 text-[10px] sm:text-[11px] text-[#A69785] font-sans border-t border-[#EBDDB7]/40 shrink-0">
          Nallamekala's Kalyana Mahotsavam &bull; Proddatur, YSR Kadapa District &bull; 2026
        </div>

      </motion.div>
    </AnimatePresence>
  );
};
