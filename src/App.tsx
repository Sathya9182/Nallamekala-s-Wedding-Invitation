/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { FloralBorders } from './components/FloralBorders';
import { AkshatuluCanvas, AkshatuluCanvasHandle } from './components/AkshatuluCanvas';
import { SplashScreen } from './components/SplashScreen';
import { EnvelopeModal } from './components/EnvelopeModal';
import { InvitationCard } from './components/InvitationCard';
import { CeremoniesTimeline } from './components/CeremoniesTimeline';
import { MandapamHighlights } from './components/MandapamHighlights';
import { TopBar } from './components/TopBar';
import { Footer } from './components/Footer';
import { Language } from './types/wedding';

export default function App() {
  const [language, setLanguage] = useState<Language>('te');
  const [isSplashOpen, setIsSplashOpen] = useState(true);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [blessingsCount, setBlessingsCount] = useState(108);

  const akshatuluRef = useRef<AkshatuluCanvasHandle | null>(null);

  const handleShowerBlessings = () => {
    if (akshatuluRef.current) {
      akshatuluRef.current.showerBlessings(75);
    }
    setBlessingsCount((prev) => prev + 1);
  };

  const handleEnterFromSplash = () => {
    setIsSplashOpen(false);
    if (akshatuluRef.current) {
      akshatuluRef.current.showerBlessings(60);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnvelopeModal = () => {
    setIsEnvelopeOpen(true);
  };

  const handleEnvelopeRevealed = () => {
    setIsEnvelopeOpen(false);
    // Smooth scroll gently to the unveiled wedding card
    setTimeout(() => {
      const cardEl = document.getElementById('invitation-card');
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200);
  };

  const handleNavigateToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF9F5] text-[#2C2723] overflow-x-hidden selection:bg-[#E5C158]/30 selection:text-[#3B2F04]">
      {/* Real Authentic Floral Garlands on Left & Right and Mango Leaf Toranam across Top */}
      <FloralBorders />

      {/* Akshatulu & Rose Petal Interactive Canvas Particle Engine */}
      <AkshatuluCanvas ref={akshatuluRef} />

      {/* Dedicated Full-Screen Opening Splash Screen with Luxury Card Opener */}
      <SplashScreen
        isOpen={isSplashOpen}
        language={language}
        onLanguageChange={setLanguage}
        onEnterInvitation={handleEnterFromSplash}
      />

      {/* Envelope Modal styled after Page 4 of the card */}
      <EnvelopeModal
        isOpen={isEnvelopeOpen}
        onOpened={handleEnvelopeRevealed}
        onClose={() => setIsEnvelopeOpen(false)}
      />

      {/* Top Bar with Navigation and Language Switcher */}
      <div className="pt-0 md:pt-14">
        <TopBar
          language={language}
          onLanguageToggle={() => setLanguage((l) => (l === 'te' ? 'en' : 'te'))}
          onShowerBlessings={handleShowerBlessings}
          onNavigateToSection={handleNavigateToSection}
          onOpenSplashScreen={() => setIsSplashOpen(true)}
        />
      </div>

      {/* Main Content Area - Starts directly with the Patrika Invitation Card */}
      <main className="relative z-10 px-2 sm:px-4 md:px-14 lg:px-20">
        
        {/* Main Bilingual Invitation Patrika Card */}
        <div className="my-6 sm:my-8">
          <InvitationCard
            language={language}
            onLanguageChange={setLanguage}
            onShowerBlessings={handleShowerBlessings}
            blessingsCount={blessingsCount}
          />
        </div>

        {/* Traditional Andhra Wedding Rituals Timeline */}
        <CeremoniesTimeline language={language} />

        {/* Cultural Mandapam Traditions & Highlights */}
        <MandapamHighlights language={language} />

        {/* Traditional Andhra Family Footer */}
        <Footer
          language={language}
          onReopenEnvelope={handleOpenEnvelopeModal}
          onReopenSplash={() => setIsSplashOpen(true)}
        />
      </main>
    </div>
  );
}
