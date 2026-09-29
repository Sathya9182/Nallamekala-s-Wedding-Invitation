import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Mail } from 'lucide-react';
import { weddingData } from '../data/weddingData';

const LORD_SHIVA_IMAGE = '/src/assets/images/lord_shiva_wedding_card_1790643683096.jpg';

interface EnvelopeModalProps {
  isOpen: boolean;
  onOpened: () => void;
  onClose?: () => void;
}

export const EnvelopeModal: React.FC<EnvelopeModalProps> = ({
  isOpen,
  onOpened,
  onClose,
}) => {
  const [isOpening, setIsOpening] = useState(false);
  const [guestName, setGuestName] = useState('');

  const handleOpenEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);

    setTimeout(() => {
      onOpened();
      setIsOpening(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm transition-all duration-300">
      <div className="relative max-w-xl w-full">
        {/* Envelope Container Styled exactly like Page 4 of the card */}
        <div className="relative mx-auto w-full max-w-lg bg-[#FFFDF9] rounded-2xl gold-border-frame shadow-2xl p-6 sm:p-8 text-center overflow-hidden">
          
          {/* Close button if user wants to close without opening */}
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-amber-100/50 text-[#8C7D6D] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {/* Subtle gold watermark pattern */}
          <div className="absolute top-3 left-3 right-3 bottom-3 rounded-xl gold-inner-frame pointer-events-none" />

          {/* Divine Auspicious Invocation Header with Lord Shiva Medallion */}
          <div className="text-center pt-2">
            <div className="w-16 h-16 mx-auto mb-2 rounded-full p-[2px] bg-gradient-to-tr from-[#9E731B] via-[#E2BE64] to-[#FFF4C2] shadow-md royal-crest-glow overflow-hidden">
              <img
                src={LORD_SHIVA_IMAGE}
                alt="Lord Shiva - Sri Neelakanteswara Swamy"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-[11px] font-semibold text-[#8C6212] font-telugu">
              ॥ శ్రీ నీలకంఠేశ్వర స్వామి ప్రసన్నః ॥
            </p>
            <p className="text-[10px] uppercase tracking-widest text-[#B8860B] font-cinzel font-bold mt-1">
              ॥ Srirasthu · Shubhamasthu · Avignamasthu ॥
            </p>
          </div>

          {/* Auspicious Seal Medallion */}
          <motion.div
            initial={{ scaleY: 1 }}
            animate={isOpening ? { scaleY: -1, originY: 0, opacity: 0.3 } : { scaleY: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full my-4"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-[#9E731B] via-[#E2BE64] to-[#FFF4C2] p-[2px] shadow-lg">
              <div className="w-full h-full rounded-full bg-[#8A181A] flex items-center justify-center border border-[#E8DCB8]/40 shadow-inner">
                <span className="text-2xl font-telugu text-[#FDEAA7] select-none font-bold">
                  శ్రీ
                </span>
              </div>
            </div>
          </motion.div>

          {/* Heading from Page 4: Nallamekala's Wedding Invitation */}
          <div className="space-y-1 mb-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#8A181A] tracking-tight">
              {weddingData.familyTitleEn}
            </h2>
            <h3 className="text-base sm:text-lg font-bold font-telugu text-[#2C2723]">
              {weddingData.familyTitleTe}
            </h3>
          </div>

          {/* Personalized "To:" Field as shown on Page 4 */}
          <div className="my-5 p-4 rounded-xl bg-[#FAF6EC] border border-[#EADBBD] text-left">
            <label className="block text-xs uppercase tracking-wider text-[#8A7561] font-semibold mb-1 font-cinzel">
              To (ఆహ్వానితులు):
            </label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Enter your name / శ్రీయుతులు..."
              className="w-full pb-1 border-b-2 border-dashed border-[#D4AF37] bg-transparent text-sm sm:text-base font-medium text-[#2C2723] focus:outline-none focus:border-[#8A181A]"
            />
            <p className="text-[10px] text-[#8C7D6D] font-sans mt-1">
              With family and friends
            </p>
          </div>

          {/* Couple Announcement from Page 4: Teja Sai Weds Mansi */}
          <div className="py-2">
            <h4 className="text-2xl sm:text-3xl font-serif italic text-[#2C2723] font-cormorant font-semibold tracking-wide">
              Teja Sai <span className="text-lg font-normal text-[#8A181A] not-italic">&</span> Mansi
            </h4>
            <p className="text-xs text-[#7A6C5D] font-sans mt-0.5">
              Friday, 16th October 2026 · Sumuhurtham 07:58 AM
            </p>
          </div>

          {/* Sender Details (Page 4 From box) */}
          <div className="mt-4 pt-3 border-t border-[#F0E6D0] text-left text-xs text-[#5C5043] space-y-0.5">
            <p className="text-[10px] uppercase tracking-wider text-[#8C6212] font-semibold">
              From (ఆహ్వానించువారు):
            </p>
            <p className="font-semibold text-[#8A181A] font-telugu">
              {weddingData.hosts.namesTe}
            </p>
            <p className="text-[11px] text-[#554B41]">
              {weddingData.hosts.businessEn}
            </p>
            <p className="text-[11px] text-[#7A6C5D]">
              {weddingData.hosts.addressEn} · Cell: {weddingData.hosts.phones.join(', ')}
            </p>
          </div>

          {/* Interactive Wax Seal / Open Action */}
          <div className="mt-5 space-y-2">
            <button
              onClick={handleOpenEnvelope}
              disabled={isOpening}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#B58320] via-[#D4AF37] to-[#B58320] hover:from-[#A37418] hover:to-[#9E6F14] text-white font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl active:scale-98 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Mail className="w-4 h-4 text-white" />
              <span className="font-telugu font-bold text-base sm:text-lg">
                {isOpening ? 'శుభలేఖ తెరుచుకుంటోంది...' : 'ఆహ్వాన పత్రిక తెరవండి'}
              </span>
              <span className="text-xs text-white/90 font-sans tracking-wide">
                (Open Invitation)
              </span>
            </button>

            <p className="text-[11px] text-[#8C7D6D] font-sans">
              Tap to unveil the authentic Telugu & English invitation patrika
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
