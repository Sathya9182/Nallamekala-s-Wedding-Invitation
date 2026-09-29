import React from 'react';
import { Shirt, UtensilsCrossed, HeartHandshake } from 'lucide-react';
import { Language } from '../types/wedding';

interface MandapamHighlightsProps {
  language: Language;
}

export const MandapamHighlights: React.FC<MandapamHighlightsProps> = ({ language }) => {
  const isTe = language === 'te';

  return (
    <section className="max-w-4xl mx-auto px-2 sm:px-4 py-6 sm:py-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl gold-border-frame p-4 sm:p-8 shadow-xs">
        
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#B8860B] font-cinzel font-semibold">
            {isTe ? 'కళ్యాణ మండప ఆచారాలు' : 'Kalyana Mandapam Traditions'}
          </span>
          <h2 className="text-lg sm:text-2xl font-bold font-telugu text-[#2C2723] mt-1">
            {isTe ? 'ఆంధ్ర సంస్కృతి & అతిథి మర్యాదలు' : 'Andhra Heritage & Hospitality'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
          
          {/* Card 1: Sacred Jeelakarra Bellam */}
          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#FFFDF7] border border-[#EADBBD] text-center space-y-2 shadow-2xs">
            <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-full bg-[#FAF3E1] border border-[#D4AF37]/50 flex items-center justify-center text-[#9E731B]">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-[#8A181A] font-telugu">
              {isTe ? 'జీలకర్ర బెల్లం ప్రాశస్త్యం' : 'Jeelakarra Bellam'}
            </h3>
            <p className="text-xs text-[#5C5043] font-telugu leading-relaxed">
              {isTe
                ? 'జీలకర్ర మరియు బెల్లం కలిపితే ఎలా విడదీయలేమో, దంపతుల మనస్సులు కూడా సుఖదుఃఖాల్లో ఎన్నటికీ విడిపోరాదని ఆచరించే ఆంధ్రుల విశిష్ట సంప్రదాయం.'
                : 'The sacred paste of cumin and jaggery signifies that just as the two substances become inseparable, husband and wife become one soul in life’s sweet and bitter moments.'}
            </p>
          </div>

          {/* Card 2: Traditional Dress Code */}
          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#FFFDF7] border border-[#EADBBD] text-center space-y-2 shadow-2xs">
            <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-full bg-[#FAF3E1] border border-[#D4AF37]/50 flex items-center justify-center text-[#9E731B]">
              <Shirt className="w-4 h-4" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-[#8A181A] font-telugu">
              {isTe ? 'సాంప్రదాయ వస్త్రధారణ' : 'Attire & Dress Code'}
            </h3>
            <p className="text-xs text-[#5C5043] font-telugu leading-relaxed">
              {isTe
                ? 'మహిళలకు కాంచీపురం పట్టుచీరలు, పురుషులకు సాంప్రదాయ పట్టు పంచె-కండువా లేదా కుర్తా ధరించి కళ్యాణ వైభవాన్ని ఇనుమడింపజేయగలరు.'
                : 'Traditional Indian festive attire is encouraged: Kanjeevaram / Pattu silk sarees for women, and silk Dhoti (Pancha-Kanduva) or Kurta for men.'}
            </p>
          </div>

          {/* Card 3: Mandapam Hospitality */}
          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#FFFDF7] border border-[#EADBBD] text-center space-y-2 shadow-2xs">
            <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto rounded-full bg-[#FAF3E1] border border-[#D4AF37]/50 flex items-center justify-center text-[#9E731B]">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-[#8A181A] font-telugu">
              {isTe ? 'పానకం, వడపప్పు & తాంబూలం' : 'Sacred Hospitality'}
            </h3>
            <p className="text-xs text-[#5C5043] font-telugu leading-relaxed">
              {isTe
                ? 'ప్రవేశం వద్ద చల్లని పానకం, సుగంధ వడపప్పు, విందు అనంతరం ఆకు-వక్కలతో కూడిన తాంబూల సత్కారాలు మీకోసం సిద్ధం చేయబడ్డాయి.'
                : 'Guests will be served cooling traditional Panakam (jaggery-cardamom beverage), Vadapappu, and scented betel nut Tambulam following the feast.'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
