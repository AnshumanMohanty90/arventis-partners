'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Navigation items mapping
  const navItems = [
    { label: 'about', href: '/#about' },
    { label: 'our services', href: '/services' },
    { label: 'our people', href: '/our-people' },
    { label: 'contact us', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#081226]/80 backdrop-blur-md border-b border-white/5 py-5 px-6 md:px-16 flex items-center justify-between transition-all duration-300">
      <Link href="/" className="flex items-center gap-2 hover-target group">
        <span className="font-serif text-lg md:text-xl lg:text-2xl tracking-[0.2em] uppercase text-white group-hover:text-primary-gold transition-colors duration-300">
          ARVENTIS  PARTNERS
        </span>
      </Link>
      
      <nav className="hidden md:flex items-center gap-10">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href.startsWith('/#') && pathname === '/');
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`text-xs tracking-[0.25em] uppercase hover:text-primary-gold hover:translate-y-[-1px] transition-all duration-300 hover-target ${
                isActive ? 'text-primary-gold font-medium' : 'text-white/70'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div>
        <Link
          href="/contact"
          className="inline-block bg-[#050c18] hover:bg-primary-gold hover:text-primary-navy text-white text-xs tracking-[0.2em] font-medium uppercase border border-white/10 hover:border-primary-gold px-6 py-3 transition-all duration-300 hover-target"
        >
          REQUEST ADVISORY
        </Link>
      </div>
    </header>
  );
}
