'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface DisclaimerModalProps {
  onAccept?: () => void;
}

export default function DisclaimerModal({ onAccept }: DisclaimerModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsOpen(true);
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleProceed = () => {
    if (!isChecked) {
      setShowError(true);
      return;
    }
    
    if (typeof window !== 'undefined') {
      document.body.style.overflow = '';
    }
    setIsOpen(false);
    if (onAccept) {
      onAccept();
    }
  };

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99990] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none transition-all duration-500 animate-fade-in">
      {/* Main Premium Card */}
      <div className="relative z-10 max-w-2xl w-full bg-white border border-black/10 shadow-2xl p-6 sm:p-8 md:p-10 text-black">
        
        {/* Header */}
        <div className="mb-6">
          
          <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-tight text-black">
            Disclaimer 
          </h2>
        </div>

        <div className="h-[1px] w-full bg-black/10 my-4" />

        {/* Disclaimer Body Text */}
        <div className="space-y-4 font-sans text-xs sm:text-sm text-black/95 font-normal leading-relaxed max-h-[45vh] overflow-y-auto pr-2 custom-scrollbar">
          <p>
            The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, <strong className="text-black font-semibold">www.arventispartners.com</strong>, you acknowledge and confirm that you are seeking information relating to <br/> <strong className="text-black font-semibold">Arventis Partners</strong> of your own accord and that there has been no form of solicitation, advertisement or inducement by Arventis Partners or its members.
          </p>
          <p>
            The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice.
          </p>
          <p>
            <strong className="text-black font-semibold">Arventis Partners</strong> shall not be liable for consequences of any action taken by relying on the material/information provided on this website. The contents of this website are the intellectual property of <strong className="text-black font-semibold">Arventis Partners</strong>.
          </p>
        </div>

        <div className="h-[1px] w-full bg-black/10 my-6" />

        {/* Action Toggles */}
        <div className="flex flex-col gap-3 mt-4">
          <label className="flex items-center gap-3 cursor-pointer group w-fit">
            <div className={`w-5 h-5 flex items-center justify-center border transition-colors duration-200 ${isChecked ? 'border-[#02029c]' : 'border-black/30 group-hover:border-[#02029c]'}`}>
              {isChecked && (
                <svg className="w-3.5 h-3.5 text-[#02029c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="font-sans text-sm sm:text-base text-black group-hover:text-black/80 transition-colors duration-200">
              I accept the above.
            </span>
            <input 
              type="checkbox" 
              className="hidden" 
              checked={isChecked}
              onChange={(e) => {
                setIsChecked(e.target.checked);
                if (e.target.checked) setShowError(false);
              }}
            />
          </label>
          
          {showError && (
            <span className="text-red-600 font-sans text-sm font-semibold tracking-wide">
              Please accept the above
            </span>
          )}

          <button
            onClick={handleProceed}
            className="w-full sm:w-[320px] py-3.5 mt-2 bg-white border border-[#02029c] hover:bg-[#02029c]/5 text-[#02029c] font-sans text-[15px] tracking-wide uppercase transition-all duration-300 rounded-[1px]"
          >
            PROCEED TO WEBSITE
          </button>
        </div>

      </div>
    </div>
  );
}
