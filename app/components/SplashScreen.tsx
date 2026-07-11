'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start fading out after 2.6s (so it finishes around 3.2s)
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2600);

    // Completely remove from DOM after transition
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 3400);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[999999] bg-[#000c24] flex justify-center items-center transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-6 p-5">
        
        {/* Logo Graphic Box */}
        <div 
          className="bg-white w-[140px] h-[140px] flex justify-center items-center border-[3px] border-[#00043a] relative opacity-0 scale-75 animate-splash-logo-box"
        >
          <span className="text-[95px] font-semibold text-[#00043a] italic tracking-[-12px] relative -left-[6px] select-none font-serif">
            AP
          </span>
        </div>
        
        {/* Company Text Lines */}
        <div className="flex flex-col justify-center overflow-hidden">
          <div className="text-white text-[48px] font-normal tracking-[4px] leading-[1.1] uppercase whitespace-nowrap opacity-0 translate-y-5 animate-splash-text-line-1 font-serif">
            Arventis
          </div>
          <div className="text-white text-[46px] font-normal tracking-[5px] leading-[1.1] uppercase whitespace-nowrap opacity-0 translate-y-5 animate-splash-text-line-2 font-serif">
            Partners
          </div>
        </div>

      </div>
    </div>
  );
}
