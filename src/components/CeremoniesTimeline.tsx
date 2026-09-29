import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { weddingCeremonies } from '../data/weddingData';
import { Language, CeremonyEvent } from '../types/wedding';

interface CeremoniesTimelineProps {
  language: Language;
}

export const CeremoniesTimeline: React.FC<CeremoniesTimelineProps> = ({ language }) => {
  const isTe = language === 'te';
  const [expandedId, setExpandedId] = useState<string | null>('muhurtham');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleAddToCalendar = (event: CeremonyEvent) => {
    // Generate clean Google Calendar link
    const title = encodeURIComponent(`${event.titleEn} - Teja Sai & Mansi Wedding`);
    const details = encodeURIComponent(`${event.descriptionEn}\nSignificance: ${event.significanceEn}`);
    const location = encodeURIComponent(`${event.locationEn}, Proddatur, YSR Kadapa Dist.`);
    
    // Dates formatted for Oct 2026
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=20261016T022800Z/20261016T050000Z`;
    window.open(gcalUrl, '_blank');
  };

  return (
    <section id="ceremonies" className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
      {/* Section Header */}
      <div className="text-center mb-6 sm:mb-10">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="h-[1px] w-6 sm:w-8 bg-[#D4AF37]" />
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#B8860B] font-cinzel font-semibold">
            {isTe ? 'ఆంధ్రా వివాహ సాంప్రదాయాలు' : 'Sacred Wedding Ceremonies'}
          </span>
          <span className="h-[1px] w-6 sm:w-8 bg-[#D4AF37]" />
        </div>
        <h2 className="text-xl sm:text-3xl font-bold font-telugu text-[#2C2723]">
          {isTe ? 'శుభకార్య వివరాలు & క్రమం' : 'Itinerary of Auspicious Rituals'}
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#736555] max-w-xl mx-auto font-sans px-2">
          {isTe
            ? 'వేద మంత్రోచ్ఛారణలు, సాంప్రదాయ ఘట్టాలతో కూడిన వివాహ వేడుకల వివరములు'
            : 'Each ceremony holds deep spiritual significance rooted in Telugu heritage.'}
        </p>
      </div>

      {/* Ceremonies Vertical Cards */}
      <div className="space-y-3 sm:space-y-4">
        {weddingCeremonies.map((ceremony, idx) => {
          const isExpanded = expandedId === ceremony.id;
          const isMainMuhurtham = ceremony.id === 'muhurtham';

          return (
            <div
              key={ceremony.id}
              className={`rounded-xl sm:rounded-2xl transition-all duration-200 border ${
                isMainMuhurtham
                  ? 'bg-gradient-to-r from-[#FFFDF8] via-[#FFF9ED] to-[#FFFDF8] border-[#D4AF37] shadow-sm'
                  : 'bg-white border-[#EADBBD] hover:border-[#D4AF37]/60 shadow-2xs'
              }`}
            >
              {/* Event Header Summary Bar */}
              <div
                onClick={() => toggleExpand(ceremony.id)}
                className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 cursor-pointer select-none"
              >
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 border ${
                      isMainMuhurtham
                        ? 'bg-[#8A181A] border-[#D4AF37] text-[#FDEAA7]'
                        : 'bg-[#FAF5E6] border-[#D4AF37]/40 text-[#8C6212]'
                    }`}
                  >
                    <span className="font-cinzel text-[11px] sm:text-xs font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-[#2C2723] font-telugu">
                        {isTe ? ceremony.titleTe : ceremony.titleEn}
                      </h3>
                      {isMainMuhurtham && (
                        <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] uppercase font-bold tracking-wider bg-[#8A181A] text-white">
                          Sumuhurtham
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] sm:text-xs text-[#8C7D6D] font-sans mt-0.5">
                      {isTe ? ceremony.ritualTe : ceremony.ritualEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 text-xs pl-11 sm:pl-0">
                  <div className="text-left sm:text-right">
                    <p className="font-semibold text-[#8A181A] font-telugu text-[11px] sm:text-xs">
                      {isTe ? ceremony.dateTe : ceremony.dateEn}
                    </p>
                    <p className="text-[#6B5E51] font-sans text-[10px] sm:text-xs">
                      {isTe ? ceremony.timeTe : ceremony.timeEn}
                    </p>
                  </div>

                  <div className="p-1 rounded-full text-[#8C7D6D] bg-[#F7F3E6] shrink-0">
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  </div>
                </div>
              </div>

              {/* Collapsible Details */}
              {isExpanded && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1 sm:pt-2 border-t border-[#F2E8D3] space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-[#4A4036] font-telugu leading-relaxed">
                    {isTe ? ceremony.descriptionTe : ceremony.descriptionEn}
                  </p>

                  <div className="bg-[#FAF7EE] rounded-lg p-2.5 sm:p-3 border border-[#EBE1C6] text-xs text-[#6B5E51]">
                    <span className="font-semibold text-[#8C6212]">
                      {isTe ? 'ప్రాముఖ్యత (Significance): ' : 'Significance: '}
                    </span>
                    <span>{isTe ? ceremony.significanceTe : ceremony.significanceEn}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1">
                    <div className="inline-flex items-center gap-1.5 text-xs text-[#7A6C5D]">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{isTe ? ceremony.locationTe : ceremony.locationEn}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCalendar(ceremony);
                      }}
                      className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white border border-[#D4AF37]/50 text-[#7A5812] hover:bg-[#FAF5E6] text-xs font-medium transition-colors cursor-pointer active:scale-98 shadow-2xs"
                    >
                      <Calendar className="w-3 h-3 text-[#B8860B]" />
                      <span>{isTe ? 'క్యాలెండర్‌కు జోడించండి' : 'Add to Calendar'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
