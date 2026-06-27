'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Scale, Globe, ShieldCheck, Mail, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';

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

export default function Home() {
  const slides = [
    {
      tagline: "Dual Expertise",
      title: "Two Disciplines. One Standard of Rigour.",
      description: "ARVENTIS PARTNERS brings together Supreme Court-level legal advocacy and senior strategy consulting under one roof — so your legal counsel and commercial strategy never work in isolation again.",
      image: "/strategic_foresight.png",
      primaryBtnText: "Explore Services",
      primaryBtnHref: "/services",
      secondaryBtnText: "Legal Mandate",
      secondaryBtnHref: "/contact"
    },
    {
      tagline: "Strategy Consulting",
      title: "Strategy Built for Execution, Not Just Slide Decks.",
      description: "From growth strategy and sales transformation to market entry and digital infrastructure — led by an IIM Lucknow MBA with 11 years of P&L ownership across consulting, BFSI, government, and technology businesses.",
      image: "/Buisness-bg.jpg",
      primaryBtnText: "Explore Consulting",
      primaryBtnHref: "/services#consulting",
      secondaryBtnText: "Discuss Growth",
      secondaryBtnHref: "/contact"
    },
    {
      tagline: "Legal Services",
      title: "Courtroom Credibility Across Every Practice Area.",
      description: "A bench of six advocates led by Suman Thakur, Advocate, Supreme Court of India — covering civil litigation, corporate advisory, real estate, family & succession, constitutional matters, and cross-border arbitration.",
      image: "/legal-bg.jpg",
      primaryBtnText: "Explore Practice Areas",
      primaryBtnHref: "/services#legal",
      secondaryBtnText: "Initiate Mandate",
      secondaryBtnHref: "/contact"
    },
    {
      tagline: "Industries & Sectors",
      title: "Built for the Sectors Where the Stakes Are Highest.",
      description: "Deep experience across BFSI, government and public sector, EdTech, manufacturing and specialty chemicals, consumer and D2C, and professional services — in India and internationally.",
      image: "/prof_services_bg.png",
      primaryBtnText: "View Industries",
      primaryBtnHref: "/services#industries",
      secondaryBtnText: "Contact Us",
      secondaryBtnHref: "/contact"
    },
    {
      tagline: "Global Reach",
      title: "Local Depth. International Fluency.",
      description: "Litigation and advisory across Indian courts and regulatory bodies. Consulting engagements delivered in India, Saudi Arabia, the UAE, Kuwait, the UK, the US, and South Korea — with the same preparation and the same standard of delivery, every time.",
      image: "/global_reach_bg.png",
      primaryBtnText: "Our Story",
      primaryBtnHref: "#about",
      secondaryBtnText: "Get in Touch",
      secondaryBtnHref: "/contact"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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
            // Unobserve to make the animation permanent on this scroll
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

  return (
    <div className="relative w-full overflow-hidden bg-primary-navy">
      
      {/* 1. STICKY HEADER */}
      <Navbar />

      {/* 2. HERO BANNER WITH BACKGROUND IMAGE SLIDER */}
      <section className="relative w-full min-h-screen flex flex-col justify-between pt-32 pb-8 px-6 md:px-16 overflow-hidden">
        
        {/* Background Image Slider Stacks */}
        <div className="absolute inset-0 z-0 bg-[#081226]">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
                currentSlide === idx ? 'opacity-70 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                className="object-cover"
              />
            </div>
          ))}
          
          {/* Calming gradient overlays: left-to-right dark fade for text legibility, bottom fade for section transition */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081226]/90 via-[#081226]/50 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081226] via-transparent to-transparent z-10" />
          
          {/* Subtle corporate grid texture for premium feel */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-10" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-4xl my-auto pt-10 pb-16">
          <div key={currentSlide} className="animate-slide-fade-in-up space-y-4">
            <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-white font-semibold block">
              {slides[currentSlide].tagline}
            </span>

            <h1 className="text-white font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-snug max-w-3xl">
              {slides[currentSlide].title}
            </h1>

            <p className="font-sans text-xs md:text-sm text-white/60 font-light leading-relaxed max-w-xl">
              {slides[currentSlide].description}
            </p>

          </div>
        </div>

        {/* Slider Controls (Pagination & Chevrons) */}
        <div className="relative z-10 w-full flex items-center justify-between pb-4 border-t border-white/15 pt-8 mt-auto">
          {/* Pagination numbers */}
          <div className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar py-2">
            {slides.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="group flex flex-col items-start text-left focus:outline-none flex-shrink-0"
              >
                <span className={`font-serif text-sm md:text-base tracking-widest ${
                  currentSlide === idx ? 'text-primary-gold font-bold scale-105' : 'text-white/60 group-hover:text-white/90'
                } transition-all duration-300`}>
                  0{idx + 1}
                </span>
                <span className={`font-sans text-[9px] md:text-[10px] tracking-[0.18em] uppercase ${
                  currentSlide === idx ? 'text-primary-gold/85 font-semibold' : 'text-white/45 group-hover:text-white/70'
                } transition-all duration-300 mt-1.5 hidden sm:block`}>
                  {slide.tagline}
                </span>
                {/* Thin progress bar line */}
                <div className="w-12 md:w-20 h-[3px] bg-white/10 mt-3.5 relative overflow-hidden">
                  {currentSlide === idx && (
                    <div className="absolute left-0 top-0 h-full bg-primary-gold animate-slide-progress" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Prev/Next chevrons */}
          <div className="flex items-center gap-3 md:gap-4 pl-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-primary-gold bg-white/[0.02] flex items-center justify-center text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 hover-target shadow-md"
            >
              <span className="font-sans text-sm md:text-base">&larr;</span>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-primary-gold bg-white/[0.02] flex items-center justify-center text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 hover-target shadow-md"
            >
              <span className="font-sans text-sm md:text-base">&rarr;</span>
            </button>
          </div>
        </div>

      </section>

      

      {/* 3.5. ABOUT SECTION (Light Theme Warm Ivory & Navy Accents) */}
      <section id="about" className="relative w-full bg-bg-warm py-24 md:py-32 px-6 md:px-16 text-primary-navy border-b border-primary-navy/5">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(8,18,38,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(8,18,38,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Main Story & Partnership */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 md:mb-28">
            
            {/* Left 5 Columns: Bold Manifesto */}
            <div className="lg:col-span-5 space-y-6 scroll-fade-up">
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary-gold-dark font-bold block">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-primary-navy">
                One firm. <br />
                Two disciplines. <br />
                <span className="text-primary-gold-dark italic">No translation required.</span>
              </h2>
              <div className="h-[1px] w-20 bg-primary-gold my-6" />
              <p className="font-sans text-xs md:text-sm text-primary-navy/50 leading-relaxed font-light uppercase tracking-wider">
                Elite legal authority & strategic business consulting united under a single engagement framework.
              </p>
            </div>
            
            {/* Right 7 Columns: Story Paragraphs */}
            <div className="lg:col-span-7 space-y-8 scroll-fade-up transition-delay-200">
              <div>
                <span className="font-sans text-[10px] tracking-[0.25em] text-primary-navy/40 uppercase font-bold block mb-3">
                  OUR STORY
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-primary-navy leading-snug">
                  Built so clients never have to choose.
                </h3>
              </div>
              
              <div className="space-y-6 font-sans text-xs sm:text-sm md:text-base text-primary-navy/70 leading-relaxed font-light">
                <p>
                  The businesses that grow fastest, and most sustainably, share one quality: their legal judgment and commercial strategy speak the same language from day one. Not after a deal closes. Not once a dispute has surfaced. From the first conversation.
                </p>
                <p>
                  ARVENTIS PARTNERS is a partnership between <strong className="text-primary-navy font-semibold">Suman Thakur</strong>, an advocate practicing before the Supreme Court of India, and <strong className="text-primary-navy font-semibold">Anshuman Mohanty</strong>, a strategy and growth leader with over a decade scaling businesses across India, the GCC, and international markets. We built a firm that refuses to separate legal precision from commercial ambition — or to treat individual and family matters as a lesser category of work than corporate mandates.
                </p>
                <p>
                  Most firms ask clients to maintain two separate relationships: one with their lawyers, one with their strategists. Clients spend real time and money translating between the two, and real opportunities slip through the gap. At Arventis, those two relationships are one. The same standard of rigor that goes into a courtroom filing goes into a market-entry plan. The same accountability that shapes a growth strategy shapes the legal guardrails around it.
                </p>
                <p>
                  We work with founders and CXOs navigating regulatory complexity, mid-market companies entering new geographies, government-linked entities, family businesses professionalizing for the next generation, and individuals who need the same seniority of counsel for a will, a property dispute, or a succession plan.
                </p>
              </div>
            </div>

          </div>

          {/* 3-Column Grid: Why Us, Global Reach, Target Clients */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            
            {/* Column 1: Why Two Disciplines */}
            <div className="scroll-fade-up bg-white/40 border border-primary-navy/10 hover:border-primary-gold/40 p-8 rounded-[1px] space-y-6 transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg">
              <div>
                <h4 className="font-serif text-xl md:text-2xl font-light text-primary-navy">
                  Why Two Disciplines — One Firm
                </h4>
                <p className="font-sans text-[10px] text-primary-gold-dark tracking-[0.1em] uppercase font-semibold mt-1">
                  What happens when advice works in isolation
                </p>
              </div>
              <div className="space-y-4 font-sans text-xs md:text-sm text-primary-navy/75 leading-relaxed font-light">
                <p>
                  Legal counsel without commercial context produces advice that is technically correct and strategically blind. Strategy without legal grounding produces plans that collapse the moment they meet a regulator, a contract clause, or a dispute that was entirely foreseeable.
                </p>
                <p>
                  At Arventis, every legal mandate carries an awareness of what it means for the client's broader commercial position. Every strategy engagement is shaped by someone who knows exactly where ambition needs a legal guardrail. This is not a referral between two firms. It is one team, one engagement model, and one point of accountability.
                </p>
              </div>
            </div>

            {/* Column 2: Global Reach */}
            <div className="scroll-fade-up bg-white/40 border border-primary-navy/10 hover:border-primary-gold/40 p-8 rounded-[1px] space-y-6 transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg">
              <div>
                <h4 className="font-serif text-xl md:text-2xl font-light text-primary-navy">
                  Global Reach
                </h4>
                <p className="font-sans text-[10px] text-primary-gold-dark tracking-[0.1em] uppercase font-semibold mt-1">
                  Local depth. International fluency.
                </p>
              </div>
              <div className="space-y-4 font-sans text-xs md:text-sm text-primary-navy/75 leading-relaxed font-light">
                <p>
                  Our advocates appear before courts and regulatory bodies across India, representing businesses, institutions, and individuals. Our consulting practice has delivered engagements in India, Saudi Arabia, the UAE, Kuwait, the UK, the US, and South Korea — spanning government, BFSI, EdTech, manufacturing, and consumer businesses.
                </p>
                <p>
                  Whether you are a domestic business, a family managing an estate, or an international company entering India or the GCC, Arventis brings the same depth of preparation and the same standard of delivery.
                </p>
              </div>
            </div>

            {/* Column 3: Who We Work With */}
            <div className="scroll-fade-up bg-white/40 border border-primary-navy/10 hover:border-primary-gold/40 p-8 rounded-[1px] space-y-6 transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg">
              <div>
                <h4 className="font-serif text-xl md:text-2xl font-light text-primary-navy">
                  Who We Work With
                </h4>
                <p className="font-sans text-[10px] text-primary-gold-dark tracking-[0.1em] uppercase font-semibold mt-1">
                  Built for decision-makers under pressure
                </p>
              </div>
              <ul className="space-y-4 font-sans text-xs md:text-sm text-primary-navy/75 leading-relaxed font-light">
                {[
                  'Founders and CXOs navigating regulatory complexity in India and internationally',
                  'Mid-market companies entering new geographies or professionalising operations',
                  'Government-linked entities requiring both legal and strategic advisory',
                  'Family businesses planning succession or entering institutional capital markets',
                  'Individuals and families who need senior-level legal counsel — not a volume practice',
                  'International clients entering India or the GCC who need local expertise with cross-border fluency'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-gold mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

 
      
      {/* 5. CONTACT & ENGAGEMENT SECTION */}
      <section id="contact-us" className="relative w-full bg-primary-navy py-24 md:py-32 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="scroll-fade-up">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-primary-gold font-bold mb-4 block">
              ENGAGE ADVISORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight text-white mb-6">
              Establish a secure channel for high-stakes decisions.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 font-light leading-relaxed mb-8 max-w-md">
              We process engagements under strict non-disclosure structures. Please select your sector of enquiry or request a direct legal counsel callback.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-primary-gold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">Secure Email Channel</h4>
                  <p className="font-serif text-base text-white">advisory@arventis.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-primary-gold">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">Operational Headquarters</h4>
                  <p className="font-serif text-base text-white">London HQ // Hyderabad Office</p>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-fade-up bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[1px] transition-delay-200 shadow-2xl">
            <h3 className="font-serif text-2xl text-white font-light tracking-tight mb-8">
              Submit Mandate Inquiry
            </h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">
                  Full Name / Entity
                </label>
                <input
                  type="text"
                  className="w-full bg-primary-navy/40 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-gold transition-colors duration-300 font-sans"
                  placeholder="e.g. Arventis Corp"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">
                    Enquiry Sector
                  </label>
                  <select className="w-full bg-primary-navy/40 border border-white/10 px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-primary-gold transition-colors duration-300 font-sans appearance-none">
                    <option className="bg-primary-navy text-white">Strategic Consulting</option>
                    <option className="bg-primary-navy text-white">Legal Protection</option>
                    <option className="bg-primary-navy text-white">Sovereign Asset Mandate</option>
                  </select>
                </div>
                
                <div>
                  <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">
                    Classification
                  </label>
                  <select className="w-full bg-primary-navy/40 border border-white/10 px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-primary-gold transition-colors duration-300 font-sans appearance-none">
                    <option className="bg-primary-navy text-white">Confidential</option>
                    <option className="bg-primary-navy text-white">Strictly Confidential</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">
                  Scope of Interest
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-primary-navy/40 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-gold transition-colors duration-300 font-sans resize-none"
                  placeholder="Outline the parameters of counsel requested..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-gold hover:bg-primary-gold-dark text-primary-navy text-xs font-semibold tracking-[0.2em] uppercase py-4 transition-all duration-300 hover-target"
              >
                INITIATE PROTOCOL
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 6. FORMAL FOOTER */}
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
                  <a href="#terms" className="text-primary-navy/80 hover:text-primary-gold transition-colors duration-300 hover-target">
                    TERMS OF ENGAGEMENT
                  </a>
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
                  <a href="#privacy" className="text-primary-navy/80 hover:text-primary-gold transition-colors duration-300 hover-target">
                    PRIVACY POLICY
                  </a>
                </li>
                <li>
                  <a href="#ethics" className="text-primary-navy/80 hover:text-primary-gold transition-colors duration-300 hover-target">
                    ETHICS CODE
                  </a>
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
