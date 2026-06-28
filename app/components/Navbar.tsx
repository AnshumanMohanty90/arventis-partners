'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items mapping
  const navItems = [
    { label: 'about', href: '/about' },
    { label: 'our services', href: '/services' },
    { label: 'our people', href: '/our-people' },
    { label: 'contact us', href: '/contact' },
  ];

  // Lock body scroll when full page menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-16 flex items-center justify-between transition-all duration-700 ${
        isMenuOpen ? 'bg-transparent border-b border-primary-navy/10' : 'bg-[#081226]/80 backdrop-blur-md border-b border-white/5'
      }`}>
        {/* Left column spacer */}
        <div className="flex-1 flex justify-start" />

        {/* Center column: Branding (dead-centered via absolute positioning) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <Link 
            href="/" 
            onClick={() => setIsMenuOpen(false)}
            className="hover-target group inline-block whitespace-nowrap"
          >
            <span className={`font-serif text-base sm:text-xl md:text-2xl tracking-[0.2em] uppercase transition-colors duration-700 font-medium ${
              isMenuOpen ? 'text-primary-navy group-hover:text-primary-gold-dark' : 'text-white group-hover:text-primary-gold'
            }`}>
              ARVENTIS PARTNERS
            </span>
          </Link>
        </div>

        {/* Right column: Hamburger icon */}
        <div className="flex-1 flex justify-end items-center z-20">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`relative z-50 p-2 transition-colors duration-700 focus:outline-none hover-target ${
              isMenuOpen ? 'text-primary-navy hover:text-primary-gold-dark' : 'text-white hover:text-primary-gold'
            }`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Full-page menu drawer translating from right */}
      <div
        className={`fixed inset-0 z-40 bg-white text-primary-navy flex flex-col justify-between px-6 py-12 md:p-20 transition-transform duration-1000 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header spacer */}
        <div className="relative z-10 pt-12 md:pt-16" />

        {/* Navigation links */}
        <nav className="relative z-10 flex flex-col items-center justify-center space-y-6 md:space-y-10 my-auto text-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-widest uppercase transition-all duration-300 hover:scale-105 hover-target ${
                  isActive ? 'text-primary-gold-dark font-bold' : 'text-primary-navy/80 hover:text-primary-gold-dark'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer */}
        <div className="relative z-10 border-t border-primary-navy/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-widest text-primary-navy/50 uppercase font-sans">
          <div>Judgment, Applied</div>
          <div>ARVENTIS PARTNERS &copy; {new Date().getFullYear()}</div>
        </div>
      </div>
    </>
  );
}

