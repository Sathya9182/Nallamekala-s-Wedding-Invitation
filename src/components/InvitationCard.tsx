import React, { useState } from 'react';
import { Calendar, MapPin, Copy, Check, Share2, ExternalLink, Phone, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { Language } from '../types/wedding';

interface InvitationCardProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onShowerBlessings: () => void;
  blessingsCount: number;
}

export const InvitationCard: React.FC<InvitationCardProps> = ({
  language,
  onLanguageChange,
  onShowerBlessings,
  blessingsCount,
}) => {
  const [copied, setCopied] = useState(false);
  const isTe = language === 'te';

  const handleCopyVenue = () => {
    const address = `${weddingData.venue.nameEn}, ${weddingData.venue.addressEn}, ${weddingData.venue.cityEn}`;
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    const shareText = isTe
      ? `నల్లమేకల వారి వివాహ ఆహ్వాన పత్రిక: చి॥ తేజ సాయి (Managing Director of NAMATE) మరియు చి॥ల॥సౌ॥ మాన్సి B.Tech ల కళ్యాణ మహోత్సవం - తేది 16-10-2026, రెడ్ల కళ్యాణ మండపము, ప్రొద్దుటూరు.`
      : `Nallamekala's Wedding Invitation: Chi. Teja Sai (MD of NAMATE) weds Chi.La.Sow. Mansi on Friday 16th October 2026 at Reddy Function Hall, Proddatur.`;

    if (navigator.share) {
      navigator
        .share({
          title: "Nallamekala's Wedding Invitation - Teja Sai & Mansi",
          text: shareText,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Invitation link copied to clipboard!');
    }
  };

  return (
    <section id="invitation-card" className="relative max-w-4xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
      {/* Language Switcher & Share Bar */}
      <div className="flex items-center justify-between mb-4 sm:mb-6 border-b border-[#EADFBE]/60 pb-3 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#9E731B] font-cinzel font-semibold hidden xs:inline">
            Language:
          </span>
          <div className="inline-flex p-0.5 sm:p-1 bg-[#F5EFE1] rounded-lg border border-[#D4AF37]/30">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium rounded-md transition-all cursor-pointer ${
                !isTe
                  ? 'bg-white text-[#7A5812] shadow-sm font-semibold'
                  : 'text-[#6B5E51] hover:text-[#2C2723]'
              }`}
            >
              English
            </button>
            <button
              onClick={() => onLanguageChange('te')}
              className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium rounded-md transition-all cursor-pointer font-telugu ${
                isTe
                  ? 'bg-white text-[#7A5812] shadow-sm font-bold'
                  : 'text-[#6B5E51] hover:text-[#2C2723]'
              }`}
            >
              తెలుగు
            </button>
          </div>
        </div>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D4AF37]/40 bg-white hover:bg-amber-50/50 text-[#7A5812] text-xs font-medium transition-colors cursor-pointer shadow-2xs active:scale-95"
        >
          <Share2 className="w-3.5 h-3.5 text-[#B8860B]" />
          <span>{isTe ? 'పంచుకోండి' : 'Share'}</span>
        </button>
      </div>

      {/* Main Luxury White & Gold Invitation Card */}
      <div className="relative bg-[#FFFFFF] rounded-2xl sm:rounded-3xl gold-border-frame shadow-xl p-4 sm:p-10 md:p-14 overflow-hidden">
        
        {/* Subtle Decorative Golden Corner Motifs */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 w-6 h-6 sm:w-10 sm:h-10 border-t-2 border-l-2 border-[#D4AF37]/70" />
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-6 h-6 sm:w-10 sm:h-10 border-t-2 border-r-2 border-[#D4AF37]/70" />
        <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 w-6 h-6 sm:w-10 sm:h-10 border-b-2 border-l-2 border-[#D4AF37]/70" />
        <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 w-6 h-6 sm:w-10 sm:h-10 border-b-2 border-r-2 border-[#D4AF37]/70" />

        {/* Auspicious Vedic Invocation Header matching Page 1 & Page 2 */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FAF5E6] border border-[#D4AF37]/40 text-[#8C6212] font-semibold text-[11px] sm:text-sm tracking-wider sm:tracking-widest uppercase mb-2 sm:mb-3">
            {isTe ? 'శ్రీరస్తు ! శుభమస్తు !! అవిఘ్నమస్తు !!!' : 'Srirasthu ! Shubhamasthu!! Avignamasthu!!!'}
          </div>

          {/* Authentic Slokam from Page 1 */}
          <p className="text-[11px] sm:text-sm text-[#8A7561] font-telugu italic max-w-xl mx-auto leading-relaxed px-1">
            {isTe ? (
              weddingData.slokamTe
            ) : (
              weddingData.slokamEn
            )}
          </p>

          <h1 className="mt-3 sm:mt-4 text-xl sm:text-3xl md:text-4xl font-bold font-telugu text-[#2C2723] tracking-tight">
            {isTe ? weddingData.familyTitleTe : weddingData.familyTitleEn}
          </h1>

          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#6B5E51] font-cormorant italic max-w-xl mx-auto px-1">
            {isTe ? weddingData.poeticProseTe : weddingData.poeticProseEn}
          </p>
        </div>

        {/* Bride & Groom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 relative my-6 sm:my-10">
          
          {/* Vertical Divider / Ampersand for Desktop */}
          <div className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 flex-col items-center justify-center pointer-events-none">
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
            <div className="absolute my-auto bg-white px-2.5 py-1 border border-[#D4AF37]/40 rounded-full text-xs font-serif text-[#9E731B] shadow-sm">
              &
            </div>
          </div>

          {/* Groom's Profile (చి॥ తేజ సాయి) */}
          <div className="bg-[#FFFDF9] rounded-xl sm:rounded-2xl p-4 sm:p-7 border border-[#EADBBD] text-center shadow-xs">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#B8860B] font-cinzel font-semibold">
              {isTe ? weddingData.groom.titleTe : weddingData.groom.titleEn}
            </span>

            <h3 className="mt-1.5 sm:mt-2 text-xl sm:text-3xl font-bold text-[#8A181A] font-telugu">
              {isTe ? weddingData.groom.nameTe : weddingData.groom.nameEn}
            </h3>

            <div className="mt-1 inline-block px-3 py-0.5 sm:py-1 rounded-full bg-amber-50 border border-[#D4AF37]/40 text-[11px] sm:text-xs font-semibold text-[#8C6212]">
              {isTe ? weddingData.groom.roleTe : weddingData.groom.roleEn}
            </div>

            <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-[#F0E6D0] space-y-2.5 text-xs sm:text-sm text-[#4F4438]">
              <div>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A7561] font-semibold">
                  {isTe ? 'తల్లిదండ్రులు (Parents)' : 'Parents'}
                </p>
                <p className="font-semibold font-telugu text-[#2C2723]">
                  {isTe ? weddingData.groom.parentsTe : weddingData.groom.parentsEn}
                </p>
              </div>

              <div>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A7561] font-semibold">
                  {isTe ? 'తాతయ్య మరియు నాయనమ్మ (Grandparents)' : 'Grandparents'}
                </p>
                <p className="text-xs text-[#6B5E51] font-telugu">
                  {isTe ? weddingData.groom.grandparentsTe : weddingData.groom.grandparentsEn}
                </p>
              </div>

              <p className="text-[10px] sm:text-[11px] text-[#8C7D6D]">
                {isTe ? weddingData.groom.nativeTe : weddingData.groom.nativeEn}
              </p>
            </div>
          </div>

          {/* Bride's Profile (చి॥ల॥సౌ॥ మాన్సి) */}
          <div className="bg-[#FFFDF9] rounded-xl sm:rounded-2xl p-4 sm:p-7 border border-[#EADBBD] text-center shadow-xs">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#B8860B] font-cinzel font-semibold">
              {isTe ? weddingData.bride.titleTe : weddingData.bride.titleEn}
            </span>

            <h3 className="mt-1.5 sm:mt-2 text-xl sm:text-3xl font-bold text-[#8A181A] font-telugu">
              {isTe ? weddingData.bride.nameTe : weddingData.bride.nameEn}
            </h3>

            <div className="mt-1 inline-block px-3 py-0.5 sm:py-1 rounded-full bg-amber-50 border border-[#D4AF37]/40 text-[11px] sm:text-xs font-semibold text-[#8C6212]">
              {isTe ? weddingData.bride.qualificationTe : weddingData.bride.qualificationEn}
            </div>

            <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-[#F0E6D0] space-y-2.5 text-xs sm:text-sm text-[#4F4438]">
              <div>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A7561] font-semibold">
                  {isTe ? 'తల్లిదండ్రులు (Parents)' : 'Parents'}
                </p>
                <p className="font-semibold font-telugu text-[#2C2723]">
                  {isTe ? weddingData.bride.parentsTe : weddingData.bride.parentsEn}
                </p>
              </div>

              <div>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A7561] font-semibold">
                  {isTe ? 'నివాసం (Residence)' : 'Residence'}
                </p>
                <p className="text-xs text-[#6B5E51] font-telugu">
                  {isTe ? weddingData.bride.nativeTe : weddingData.bride.nativeEn}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Sumuhurtham Highlight Box */}
        <div className="my-6 sm:my-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FFFDF5] via-[#FFF9E6] to-[#FFFDF5] border-2 border-[#D4AF37]/60 p-4 sm:p-8 text-center shadow-md">
          <div className="inline-flex items-center gap-2 mb-1.5 sm:mb-2">
            <span className="h-[1px] w-4 sm:w-6 bg-[#D4AF37]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#9E731B] font-cinzel font-bold">
              {isTe ? 'సుముహూర్తం · Sumuhurtham' : 'Auspicious Sumuhurtham'}
            </span>
            <span className="h-[1px] w-4 sm:w-6 bg-[#D4AF37]" />
          </div>

          <h2 className="text-xl sm:text-3xl font-bold text-[#8A181A] font-telugu mt-1 mb-1.5 sm:mb-2">
            {isTe ? weddingData.sumuhurtham.timeTe : weddingData.sumuhurtham.timeEn}
          </h2>

          <p className="text-sm sm:text-lg font-semibold text-[#2C2723] font-telugu">
            {isTe ? weddingData.sumuhurtham.dateTe : weddingData.sumuhurtham.dateEn}
          </p>

          <p className="text-xs sm:text-sm text-[#785C19] font-telugu mt-1 font-medium">
            {isTe ? weddingData.sumuhurtham.lagnaTe : weddingData.sumuhurtham.lagnaEn}
            <span className="mx-1.5">·</span>
            {isTe ? weddingData.sumuhurtham.nakshatramTe : weddingData.sumuhurtham.nakshatramEn}
          </p>

          <div className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/80 border border-[#D4AF37]/40 text-[11px] sm:text-xs font-semibold text-[#8C6212]">
            <Heart className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#8A181A] fill-[#8A181A]/40 shrink-0" />
            <span>
              {isTe
                ? 'జీలకర్ర బెల్లం & మాంగల్యధారణ వేళ'
                : 'Jeelakarra Bellam & Mangalasutra Dharana'}
            </span>
          </div>
        </div>

        {/* Reception & Venue Dual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
          
          {/* Reception Box */}
          <div className="rounded-xl bg-[#FAF9F5] border border-[#EBDDB7] p-4 sm:p-6 text-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8A7561] font-cinzel font-semibold">
              {isTe ? 'రిసెప్షన్, విందు, వినోదం' : 'Reception & Dinner'}
            </span>

            <h4 className="text-base sm:text-xl font-bold text-[#8A181A] font-telugu mt-1">
              {isTe ? weddingData.reception.dateTe : weddingData.reception.dateEn}
            </h4>

            <p className="text-xs sm:text-sm font-semibold text-[#2C2723] font-sans mt-0.5">
              {isTe ? weddingData.reception.timeTe : weddingData.reception.timeEn}
            </p>

            <p className="text-[11px] sm:text-xs text-[#7A6C5D] font-sans mt-1">
              {isTe
                ? 'విందు మరియు వినోద కార్యక్రమాలు'
                : 'Grand reception & traditional royal banquet dinner'}
            </p>
          </div>

          {/* Venue Box */}
          <div className="rounded-xl bg-[#FAF9F5] border border-[#EBDDB7] p-4 sm:p-6 text-center">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#8A7561] font-cinzel font-semibold">
              {isTe ? 'కళ్యాణ వేదిక · Venue' : 'Kalyana Mandapam Venue'}
            </span>

            <h4 className="text-base sm:text-xl font-bold text-[#2C2723] font-telugu mt-1">
              {isTe ? weddingData.venue.nameTe : weddingData.venue.nameEn}
            </h4>

            <p className="text-xs sm:text-sm text-[#5C5043] font-sans mt-1">
              {isTe ? weddingData.venue.addressTe : weddingData.venue.addressEn}
            </p>

            <p className="text-[11px] sm:text-xs text-[#8C7D6D] font-sans mt-0.5">
              {isTe ? weddingData.venue.cityTe : weddingData.venue.cityEn}
            </p>

            <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${weddingData.venue.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white border border-[#D4AF37] text-[#7A5812] hover:bg-amber-50/60 text-xs font-semibold transition-all shadow-xs cursor-pointer active:scale-98"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{isTe ? 'మ్యాప్స్ లో చూడండి' : 'Open in Maps'}</span>
                <ExternalLink className="w-3 h-3 text-[#9E731B]" />
              </a>

              <button
                onClick={handleCopyVenue}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white border border-[#DCD3BE] text-[#5C5043] hover:text-[#2C2723] text-xs font-medium transition-colors cursor-pointer active:scale-98"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (isTe ? 'కాపీ చేయబడింది' : 'Copied') : (isTe ? 'చిరునామా కాపీ' : 'Copy Address')}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Cordially Yours & Compliments from Pages 2 & 3 */}
        <div className="rounded-xl bg-[#FFFDF7] border border-[#EADBBD] p-4 sm:p-7 text-center space-y-2.5 sm:space-y-3">
          <div className="space-y-0.5 sm:space-y-1">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#B8860B] font-cinzel font-semibold">
              {isTe ? 'ఆహ్వానించువారు · Cordially Yours' : 'Cordially Yours'}
            </span>
            <h4 className="text-sm sm:text-lg font-bold text-[#8A181A] font-telugu">
              {isTe ? weddingData.hosts.namesTe : weddingData.hosts.namesEn}
            </h4>
            <p className="text-[11px] sm:text-xs font-semibold text-[#524434]">
              {isTe ? weddingData.hosts.businessTe : weddingData.hosts.businessEn}
            </p>
            <p className="text-[11px] sm:text-xs text-[#7A6C5D]">
              {isTe ? weddingData.hosts.addressTe : weddingData.hosts.addressEn}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-[#5C5043]">
            <span className="inline-flex items-center gap-1 font-medium text-[11px] sm:text-xs">
              <Phone className="w-3 h-3 text-[#9E731B]" />
              Contact:
            </span>
            {weddingData.hosts.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="py-1 px-2.5 rounded-md bg-[#FAF5E6] border border-[#EBDDB7] text-[#7A0D0E] font-medium text-[11px] sm:text-xs hover:bg-amber-100/50 transition-colors"
              >
                {phone}
              </a>
            ))}
          </div>

          <p className="text-[11px] sm:text-xs text-[#8A7561] font-telugu italic pt-1">
            {isTe ? weddingData.hosts.complimentsTe : weddingData.hosts.complimentsEn}
          </p>
        </div>

        {/* Akshatulu Blessings Shower Interactive Bar */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#F0E6D0] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-center sm:text-left">
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8A7561] font-semibold">
              {isTe ? 'సామూహిక ఆశీర్వచనం' : 'Community Blessings'}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#8A181A] font-telugu">
              {blessingsCount} {isTe ? 'సార్లు అక్షతలు సమర్పించబడ్డాయి' : 'blessing showers bestowed'}
            </p>
          </div>

          <button
            onClick={onShowerBlessings}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3DE8A] to-[#D4AF37] hover:brightness-105 text-[#4D3807] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
          >
            <Heart className="w-4 h-4 text-[#8A181A] fill-[#8A181A]/40" />
            <span className="font-telugu">{isTe ? 'అక్షతలు చల్లండి' : 'Shower Akshatulu (Sacred Rice)'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
