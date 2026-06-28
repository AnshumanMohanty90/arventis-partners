'use client';

import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Globe, Compass, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

// Custom component to reveal text word-by-word with a calming stagger
function RevealHeading({ children, className = "" }: { children: string; className?: string }) {
  const words = children.split(' ');
  return (
    <span className={`reveal-text flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
      {words.map((word, idx) => (
        <span key={idx} className="reveal-text-line inline-block overflow-hidden">
          <span
            className="reveal-text-word"
            style={{ transitionDelay: `${idx * 0.04}s` }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function ContactPage() {
  const [reachOutFor, setReachOutFor] = useState<'Legal' | 'Consulting' | 'Both'>('Both');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Intersection Observer for scroll-triggered entrance animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const revealElements = document.querySelectorAll('.scroll-fade-up, .reveal-text');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('scroll-fade-up')) {
              entry.target.classList.add('scroll-fade-up-active');
            } else if (entry.target.classList.contains('reveal-text')) {
              entry.target.classList.add('reveal-text-active');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="relative w-full overflow-hidden bg-primary-navy text-white">
      
      {/* Shared Navigation Bar */}
      <Navbar />

      {/* 1. HERO HEADER */}
      <section className="relative w-full  pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-16 border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
       
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-normal text-white mb-6">
            <RevealHeading>LET'S GET IN TOUCH!</RevealHeading>
          </h1>
          <p className="scroll-fade-up font-sans text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-3xl transition-delay-300">
            Whether you need legal counsel, strategic advisory, or both — tell us what you are working on and we will route it to the right partner.
          </p>
        </div>
      </section>

      {/* 2. SPLIT LAYOUT: FORM & DETAILS */}
      <section className="relative w-full bg-bg-warm py-20 md:py-28 px-6 md:px-16 text-primary-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left 7 Columns: Contact Form */}
            <div className="lg:col-span-7">
              <div className="scroll-fade-up space-y-8">
                
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-4 bg-white/20 border border-primary-navy/10 p-8 rounded-[1px]">
                    <div className="w-16 h-16 bg-primary-navy/5 border border-primary-navy rounded-full flex items-center justify-center mx-auto text-primary-navy mb-6 animate-pulse">
                      <Compass className="w-8 h-8 text-primary-gold" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-primary-navy font-light">Mandate Received</h3>
                    <p className="font-sans text-xs md:text-sm text-primary-navy/70 max-w-md mx-auto leading-relaxed">
                      Thank you. Your inquiry has been secured. It will be routed directly to Suman Thakur (Legal) or Anshuman Mohanty (Consulting) based on your classification parameters.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 inline-flex justify-center bg-transparent hover:bg-primary-navy hover:text-white text-primary-navy text-xs font-semibold tracking-widest uppercase border border-primary-navy/20 px-6 py-3 transition-all duration-300 hover-target"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-primary-navy font-light tracking-tight mb-2">
                        Submit Secure Enquiry
                      </h3>
                      <p className="font-sans text-[10px] md:text-xs text-primary-navy/50 leading-relaxed font-light mb-6">
                        All communications are processed under strict NDA protocols.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-primary-navy/50 mb-2">
                          Name
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-transparent border border-primary-navy/15 px-4 py-3 text-xs md:text-sm text-primary-navy placeholder:text-primary-navy/35 focus:outline-none focus:border-primary-gold transition-colors duration-300 font-sans"
                          placeholder="Your name or entity"
                        />
                      </div>

                      <div>
                        <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-primary-navy/50 mb-2">
                          Organisation <span className="text-primary-navy/30">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          className="w-full bg-transparent border border-primary-navy/15 px-4 py-3 text-xs md:text-sm text-primary-navy placeholder:text-primary-navy/35 focus:outline-none focus:border-primary-gold transition-colors duration-300 font-sans"
                          placeholder="Organisation name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-primary-navy/50 mb-2">
                          Email address
                        </label>
                        <input
                          required
                          type="email"
                          className="w-full bg-transparent border border-primary-navy/15 px-4 py-3 text-xs md:text-sm text-primary-navy placeholder:text-primary-navy/35 focus:outline-none focus:border-primary-gold transition-colors duration-300 font-sans"
                          placeholder="email@domain.com"
                        />
                      </div>

                      <div>
                        <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-primary-navy/50 mb-2">
                          Phone number
                        </label>
                        <input
                          required
                          type="tel"
                          className="w-full bg-transparent border border-primary-navy/15 px-4 py-3 text-xs md:text-sm text-primary-navy placeholder:text-primary-navy/35 focus:outline-none focus:border-primary-gold transition-colors duration-300 font-sans"
                          placeholder="+91 99000 00000"
                        />
                      </div>
                    </div>

                    {/* Radio Cards for Reach Out Objective */}
                    <div>
                      <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-primary-navy/50 mb-3">
                        I am reaching out for
                      </label>
                      <div className="flex gap-2 sm:gap-3">
                        {(['Legal', 'Consulting', 'Both'] as const).map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setReachOutFor(option)}
                            className={`flex-1 text-center py-3 text-[10px] md:text-xs font-semibold tracking-wider uppercase border transition-all duration-300 ${
                              reachOutFor === option
                                ? 'bg-primary-navy border-primary-navy text-white font-bold'
                                : 'bg-transparent border-primary-navy/15 text-primary-navy/60 hover:text-primary-navy hover:border-primary-navy/45'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-primary-navy/50 mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="w-full bg-transparent border border-primary-navy/15 px-4 py-3 text-xs md:text-sm text-primary-navy placeholder:text-primary-navy/35 focus:outline-none focus:border-primary-gold transition-colors duration-300 font-sans resize-none"
                        placeholder="Please describe the parameters of your enquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary-navy hover:bg-primary-gold hover:text-primary-navy text-white text-xs font-semibold tracking-[0.2em] uppercase py-4 transition-all duration-300 hover-target"
                    >
                      Start the Conversation
                    </button>
                  </form>
                )}

              </div>
            </div>

            {/* Right 5 Columns: Offices & Direct Contacts */}
            <div className="lg:col-span-5 space-y-12">
              
              {/* Office Details */}
              <div className="scroll-fade-up space-y-6">
                <span className="font-sans text-[10px] tracking-[0.25em] text-primary-navy/40 uppercase font-bold block">
                  OFFICE LOCATIONS
                </span>
                
                <div className="space-y-6">
                  {/* Hyderabad */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-primary-navy/10 rounded-[1px] flex items-center justify-center flex-shrink-0 text-primary-navy bg-white/5">
                      <MapPin className="w-4.5 h-4.5 text-primary-gold" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-primary-navy">India</h4>
                      <p className="font-sans text-xs md:text-sm text-primary-navy/70 leading-relaxed font-light">
                        Hyderabad, Telangana
                      </p>
                    </div>
                  </div>

                  {/* International Enquiries */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-primary-navy/10 rounded-[1px] flex items-center justify-center flex-shrink-0 text-primary-navy bg-white/5">
                      <Globe className="w-4.5 h-4.5 text-primary-gold" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-primary-navy">International Enquiries</h4>
                      <p className="font-sans text-xs md:text-sm text-primary-navy/70 leading-relaxed font-light">
                        GCC, UK, US, South Korea — remote and on-ground engagement available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="scroll-fade-up space-y-6">
                <span className="font-sans text-[10px] tracking-[0.25em] text-primary-navy/40 uppercase font-bold block">
                  DIRECT PARTNER CONTACT
                </span>
                
                <div className="space-y-6">
                  {/* Anshuman Mohanty */}
                  <div className="border border-primary-navy/10 p-6 rounded-[1px] space-y-4 bg-white/10 hover:border-primary-navy/20 transition-all duration-300">
                    <div>
                      <span className="font-sans text-[9px] tracking-[0.2em] text-primary-gold font-bold uppercase">
                        STRATEGY CONSULTING
                      </span>
                      <h4 className="font-serif text-lg font-medium text-primary-navy mt-1">
                        Anshuman Mohanty
                      </h4>
                    </div>
                    <div className="space-y-2 font-sans text-xs md:text-sm text-primary-navy/80 font-light">
                      <a href="tel:+919439503900" className="flex items-center gap-3 hover:text-primary-gold transition-colors duration-300">
                        <Phone className="w-4 h-4 text-primary-gold flex-shrink-0" />
                        <span>+91 94395 03900</span>
                      </a>
                      <a href="mailto:mohantyanshuman21@gmail.com" className="flex items-center gap-3 hover:text-primary-gold transition-colors duration-300">
                        <Mail className="w-4 h-4 text-primary-gold flex-shrink-0" />
                        <span>mohantyanshuman21@gmail.com</span>
                      </a>
                    </div>
                  </div>

                  {/* Suman Thakur */}
                  <div className="border border-primary-navy/10 p-6 rounded-[1px] space-y-4 bg-white/10 hover:border-primary-navy/20 transition-all duration-300">
                    <div>
                      <span className="font-sans text-[9px] tracking-[0.2em] text-primary-gold font-bold uppercase">
                        LEGAL PRACTICE
                      </span>
                      <h4 className="font-serif text-lg font-medium text-primary-navy mt-1">
                        Suman Thakur
                      </h4>
                    </div>
                    <div className="flex items-start gap-3 font-sans text-xs md:text-sm text-primary-navy/55 leading-relaxed font-light italic">
                      <Mail className="w-4 h-4 text-primary-gold flex-shrink-0 mt-[3px]" />
                      <span>Direct channel secure access to be confirmed.</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. FORMAL FOOTER */}
      <footer className="relative w-full bg-bg-warm text-primary-navy/60 py-16 px-6 md:px-16 border-t border-primary-navy/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Brand */}
            <div>
              <h3 className="font-serif text-lg md:text-xl tracking-[0.2em] uppercase text-primary-navy mb-6">
                ARVENTIS PARTNERS
              </h3>
              <p className="font-sans text-xs sm:text-sm text-primary-navy/70 leading-relaxed font-light">
                Elite advisory for the architecture of international commerce and the preservation of legal integrity.
              </p>
            </div>

            {/* Column 2: Offices */}
            <div>
              <h4 className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary-navy/40 font-bold mb-6">
                OFFICES
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 text-primary-gold flex-shrink-0" />
                  <span className="font-serif text-sm text-primary-navy hover:text-primary-gold transition-colors duration-300">
                    HYDERABAD OFFICE
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 text-primary-gold flex-shrink-0" />
                  <span className="font-serif text-sm text-primary-navy hover:text-primary-gold transition-colors duration-300">
                    LONDON HQ
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 3: Engage */}
            <div>
              <h4 className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary-navy/40 font-bold mb-6">
                ENGAGE
              </h4>
              <ul className="space-y-3 font-sans text-xs tracking-[0.15em] uppercase">
                <li>
                  <Link href="/contact" className="text-primary-navy/80 hover:text-primary-gold transition-colors duration-300 hover-target">
                    INTERNATIONAL ENQUIRIES
                  </Link>
                </li>
                <li>
                  <Link href="/#terms" className="text-primary-navy/80 hover:text-primary-gold transition-colors duration-300 hover-target">
                    TERMS OF ENGAGEMENT
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Links */}
            <div>
              <h4 className="font-sans text-[10px] tracking-[0.25em] uppercase text-primary-navy/40 font-bold mb-6">
                LEGAL COMPLIANCE
              </h4>
              <ul className="space-y-3 font-sans text-xs tracking-[0.15em] uppercase">
                <li>
                  <Link href="/#privacy" className="text-primary-navy/80 hover:text-primary-gold transition-colors duration-300 hover-target">
                    PRIVACY POLICY
                  </Link>
                </li>
                <li>
                  <Link href="/#ethics" className="text-primary-navy/80 hover:text-primary-gold transition-colors duration-300 hover-target">
                    ETHICS CODE
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="border-t border-primary-navy/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-primary-navy/40 font-semibold">
            <p>
              © 2026 ARVENTIS PARTNERS. ALL RIGHTS RESERVED. SEC1 COMPLIANCE.
            </p>
            <p className="max-w-md md:text-right leading-relaxed text-primary-navy/35">
              NOTE: THIS WEBSITE IS FOR INFORMATIONAL PURPOSES ONLY AND DOES NOT CONSTITUTE A FORMAL BINDING OFFER.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
