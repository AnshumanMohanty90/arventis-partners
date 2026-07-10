'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

interface ServiceDrawerItemProps {
  num: string;
  title: string;
  description: string | string[];
  bullets?: string[];
  isOpen: boolean;
  onToggle: () => void;
  theme?: 'consulting' | 'legal';
}

export default function ServiceDrawerItem({
  num,
  title,
  description,
  isOpen,
  onToggle,
  theme = 'consulting',
}: ServiceDrawerItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const accentBarRef = useRef<HTMLDivElement>(null);

  // GSAP Mouse Enter / Leave Animation (Applied on Hover)
  const handleMouseEnter = () => {
    if (!containerRef.current) return;
    gsap.to(accentBarRef.current, { scaleX: 1, duration: 0.35, ease: 'power2.out' });
    if (titleRef.current) {
      gsap.to(titleRef.current, { x: 4, duration: 0.3, ease: 'power2.out' });
    }
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    gsap.to(accentBarRef.current, { scaleX: 0, duration: 0.35, ease: 'power2.in' });
    if (titleRef.current) {
      gsap.to(titleRef.current, { x: 0, duration: 0.3, ease: 'power2.out' });
    }
  };

  const descriptions = Array.isArray(description) ? description : [description];

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden bg-white border border-black/10 rounded-[1px] shadow-sm hover:shadow-md transition-all duration-300 scroll-fade-up"
    >
      {/* GSAP Hover Accent Bar */}
      <div
        ref={accentBarRef}
        className="absolute left-0 top-0 bottom-0 w-1 origin-left pointer-events-none z-20 bg-[#16284C]"
        style={{ transform: 'scaleX(0)' }}
      />

      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="relative z-10 w-full p-6 sm:p-8 flex items-center justify-between text-left focus:outline-none cursor-pointer select-none hover:bg-slate-50/50 transition-colors duration-300"
      >
        <div className="space-y-1 pr-4">
         
          <h3
            ref={titleRef}
            className="font-serif text-xl sm:text-2xl md:text-3xl font-medium tracking-wide text-black transition-colors duration-300"
          >
            {title}
          </h3>
        </div>

        <div
          className={`w-8 h-8 rounded-full border border-black/15 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen ? 'rotate-180 bg-[#16284C] text-white border-[#16284C]' : 'text-black group-hover:border-black/40'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {/* Drawer Content matching FAQ page layout */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: isOpen ? '1200px' : '0px' }}
      >
        <div className="px-6 sm:px-8 pb-8 pt-4 font-sans text-[13px] sm:text-[15px] text-black/80 leading-relaxed font-light">
          {/* Description Paragraphs */}
          <div className="space-y-3 mb-6">
            {descriptions.map((desc, dIdx) => (
              <p key={dIdx} className="text-black/85 text-[15px] sm:text-[17px] leading-relaxed max-w-5xl">
                {desc}
              </p>
            ))}
          </div>

         
          
        </div>
      </div>
    </div>
  );
}
