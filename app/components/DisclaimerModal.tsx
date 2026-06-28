'use client';

import React, { useEffect, useState } from 'react';
import { ShieldCheck, Scale, Check } from 'lucide-react';

interface DisclaimerModalProps {
  onAccept?: () => void;
}

export default function DisclaimerModal({ onAccept }: DisclaimerModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleProceed = () => {
    if (!isChecked) return;
    if (typeof window !== 'undefined') {
      localStorage.setItem('arventis_disclaimer_accepted', 'true');
    }
    setIsOpen(false);
    if (onAccept) {
      onAccept();
    }
  };

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99990] bg-[#081226]/90 text-white backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10 select-none animate-slide-fade-in-up">
      {/* Main Premium Card */}
      <div className="relative z-10 max-w-2xl w-full bg-[#081226] border border-[#c5a880]/30 shadow-2xl p-6 sm:p-8 md:p-12 text-white overflow-hidden">
        

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div>
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#c5a880] font-bold block mb-1">
              REGULATORY COMPLIANCE & DISCLAIMER
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-tight text-white">
              Important Notice
            </h2>
          </div>
        </div>

        <div className="h-[1px] w-full bg-white/10 my-6" />

        {/* Disclaimer Body Text */}
        <div className="space-y-4 font-sans text-xs sm:text-sm text-white/75 font-light leading-relaxed max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
          <p>
            The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, you acknowledge and confirm that you are seeking information relating to <strong className="text-white font-medium">Arventis Partners</strong> of your own accord and that there has been no form of solicitation, advertisement, or inducement by Arventis Partners or its members.
          </p>
          <p>
            The content of this website is strictly for informational purposes only and should not be interpreted as soliciting or advertisement. No material or information provided on this website should be construed as legal advice.
          </p>
          <p>
            Arventis Partners shall not be liable for the consequences of any action taken by relying on the material or information provided on this website. All contents of this website are the intellectual property of Arventis Partners.
          </p>
        </div>

        <div className="h-[1px] w-full bg-white/10 my-6" />

        {/* Checkbox and Proceed CTA */}
        <div className="space-y-6">
          <label className="flex items-center gap-3 cursor-pointer group select-none">
            <div
              onClick={() => setIsChecked(!isChecked)}
              className={`w-5 h-5 rounded-[2px] border transition-all duration-300 flex items-center justify-center flex-shrink-0 ${
                isChecked
                  ? 'bg-[#c5a880] border-[#c5a880] text-[#081226]'
                  : 'border-white/30 group-hover:border-[#c5a880] bg-white/5'
              }`}
            >
              {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </div>
            <span className="font-sans text-xs tracking-wider uppercase text-white/90 group-hover:text-white transition-colors">
              I accept the above terms and conditions.
            </span>
          </label>

          <button
            onClick={handleProceed}
            disabled={!isChecked}
            className={`w-full py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 ${
              isChecked
                ? 'bg-[#c5a880] hover:bg-[#b59870] text-[#081226] shadow-lg shadow-[#c5a880]/20 cursor-pointer'
                : 'bg-white/10 text-white/40 cursor-not-allowed border border-white/5'
            }`}
          >
            PROCEED TO WEBSITE
          </button>
        </div>
      </div>
    </div>
  );
}
