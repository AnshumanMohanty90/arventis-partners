'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

interface ServiceDrawerItemProps {
  num: string;
  title: string;
  description: string | string[];
  bullets: string[];
  isOpen: boolean;
  onToggle: () => void;
  theme?: 'consulting' | 'legal';
}

export default function ServiceDrawerItem({
  num,
  title,
  description,
  bullets,
  isOpen,
  onToggle,
  theme = 'consulting',
}: ServiceDrawerItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const accentBarRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);

  // GSAP Mouse Enter / Leave Animation (Applied on Hover)
  const handleMouseEnter = () => {
    if (!containerRef.current) return;
    gsap.to(accentBarRef.current, { scaleX: 1, duration: 0.35, ease: 'power2.out' });
    gsap.to([numberRef.current, titleRef.current], { x: 8, duration: 0.3, ease: 'power2.out' });
    gsap.to(chevronRef.current, { scale: 1.2, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    gsap.to(accentBarRef.current, { scaleX: 0, duration: 0.35, ease: 'power2.in' });
    gsap.to([numberRef.current, titleRef.current], { x: 0, duration: 0.3, ease: 'power2.out' });
    gsap.to(chevronRef.current, { scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  const isConsulting = theme === 'consulting';
  const descriptions = Array.isArray(description) ? description : [description];

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden border rounded-[1px] transition-all duration-500 scroll-fade-up ${
        isOpen
          ? isConsulting
            ? 'bg-[#c5a880] border-[#c5a880] text-primary-navy shadow-xl'
            : 'bg-[#081226] border-[#081226] text-white shadow-xl'
          : isConsulting
          ? 'border-primary-navy/10 bg-white hover:border-[#c5a880] text-primary-navy shadow-sm'
          : 'border-primary-navy/15 bg-white hover:border-primary-navy text-primary-navy shadow-sm'
      }`}
    >
      {/* GSAP Hover Accent Bar */}
      <div
        ref={accentBarRef}
        className={`absolute left-0 top-0 bottom-0 w-1.5 origin-left pointer-events-none z-20 ${
          isConsulting ? 'bg-primary-navy' : 'bg-primary-gold'
        }`}
        style={{ transform: 'scaleX(0)' }}
      />

      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="relative z-10 w-full p-6 sm:p-8 flex items-center justify-between text-left focus:outline-none cursor-pointer select-none"
      >
        <div className="flex items-center gap-6 sm:gap-10">
          <span
            ref={numberRef}
            className={`font-serif text-lg sm:text-xl font-medium tracking-widest transition-colors duration-300 ${
              isOpen
                ? isConsulting
                  ? 'text-primary-navy font-bold'
                  : 'text-primary-gold font-bold'
                : 'text-primary-gold-dark group-hover:text-primary-navy'
            }`}
          >
            {num}
          </span>
          <h3
            ref={titleRef}
            className={`font-serif text-xl sm:text-2xl md:text-3xl tracking-wide transition-colors duration-300 ${
              isOpen
                ? isConsulting
                  ? 'text-primary-navy font-normal'
                  : 'text-white font-normal'
                : 'text-primary-navy font-light group-hover:text-primary-navy'
            }`}
          >
            {title}
          </h3>
        </div>

        <div
          ref={chevronRef}
          className={`transition-all duration-300 pl-4 flex-shrink-0 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          } ${
            isOpen
              ? isConsulting
                ? 'text-primary-navy'
                : 'text-primary-gold'
              : 'text-primary-navy/60 group-hover:text-primary-navy'
          }`}
        >
          <ChevronDown className="w-6 h-6" />
        </div>
      </button>

      {/* Drawer Content with Smooth Max-Height Animation */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: isOpen ? '1000px' : '0px' }}
      >
        <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-current/15">
          {/* Description Paragraphs */}
          <div className="space-y-4 mb-8">
            {descriptions.map((desc, dIdx) => (
              <p
                key={dIdx}
                className={`font-sans text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-5xl ${
                  isOpen
                    ? isConsulting
                      ? 'text-primary-navy/95'
                      : 'text-white/90'
                    : 'text-primary-navy/90'
                }`}
              >
                {desc}
              </p>
            ))}
          </div>

          {/* Scope of Practice Bullets */}
          <div className="space-y-4">
            <span
              className={`font-sans text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold block mb-4 ${
                isOpen
                  ? isConsulting
                    ? 'text-primary-navy/90'
                    : 'text-primary-gold'
                  : 'text-primary-gold-dark'
              }`}
            >
              SCOPE OF PRACTICE
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {bullets.map((bullet, bIdx) => (
                <div key={bIdx} className="flex items-start gap-3">
                  <span
                    className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                      isOpen
                        ? isConsulting
                          ? 'bg-primary-navy'
                          : 'bg-primary-gold'
                        : 'bg-primary-navy'
                    }`}
                  />
                  <span
                    className={`font-sans text-xs sm:text-sm font-medium leading-normal ${
                      isOpen
                        ? isConsulting
                          ? 'text-primary-navy/95'
                          : 'text-white/95'
                        : 'text-primary-navy/90'
                    }`}
                  >
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
