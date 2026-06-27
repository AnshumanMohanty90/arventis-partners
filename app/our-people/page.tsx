'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Scale, Mail, MapPin, Award, BookOpen, Briefcase, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';

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

export default function OurPeoplePage() {
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

  const achievements = [
    'Built and scaled a consulting practice (FinThrust) from zero to Rs. 1.5 Cr ARR with P&L ownership',
    'Delivered 4x account revenue expansion for the Telangana Government account (Rs. 6L to Rs. 25L monthly billing)',
    'Represented Telangana at WEF Davos in 2022 and 2023; won the Innovation in Digital Governance Award',
    'Achieved 138% of revenue target in one month for a South Korean D2C brand entering India',
    'Reduced founder dependency by 60% and delivered 20% month-on-month sales growth for an EdTech startup from month one',
    'Secured USD 500K in investor funding for a premium furniture manufacturer through market entry strategy and investor pitch',
    'Built sales governance and a performance cockpit improving forecasting accuracy by 25%',
    'Cleared 80% of slow-moving SKUs while maintaining 32%+ gross margins through inventory and pricing intervention'
  ];

  const benchmarks = [
    { label: 'GROWTH', value: '4X', desc: 'Account Expansion' },
    { label: 'GLOBAL', value: 'WEF', desc: 'Davos Representative' },
    { label: 'CAPITAL', value: '$500K', desc: 'Investor Funding' },
    { label: 'EXP', value: '11+ YRS', desc: 'Cross-Border Strategy' }
  ];

  const careerHistory = [
    {
      years: '2025 — Present',
      title: 'Anshuman Mohanty Consulting | Hyderabad',
      role: 'Independent Business Consultant — Sales & Growth Advisor',
      desc: 'Advising multiple organizations on sales governance, EdTech scaling (reducing founder dependency by 60%), Kuwait-to-KSA expansion GTM, and South Korean retail modern trade GTM.'
    },
    {
      years: '2023 — 2025',
      title: 'FinThrust | Cayman Islands',
      role: 'Business Head & Co-Founder',
      desc: 'Built the consulting practice from zero to Rs. 1.5 Cr ARR. Led B2B sales motions, multi-sector client acquisition, and SQL/Power BI performance cockpits.'
    },
    {
      years: '2021 — 2023',
      title: 'YCP India (YCP Auctus) | Hyderabad',
      role: 'Project Lead — Growth & Strategic Accounts',
      desc: 'Business Head for Telangana Govt account. Achieved 4x revenue expansion. Led Davos-recognized e-governance initiatives (WEF 2022/2023).'
    },
    {
      years: '2019 — 2021',
      title: 'Acuvon Consulting | Riyadh',
      role: 'Consultant — Strategy & Growth',
      desc: 'Executed KSA Government roadmaps, secured USD 500K for high-end furniture manufacturer GTM, and designed operational excellence for a USD 3B/year QSR chain.'
    },
    {
      years: '2016 — 2017',
      title: 'Canara Bank | Pune',
      role: 'Officer — Retail & NRI Banking',
      desc: 'Managed High-Net-Worth NRI portfolios, adding Rs. 4 Cr value. Led regional campaigns achieving 300% YoY segment growth.'
    },
    {
      years: '2013 — 2016',
      title: 'Tata Consultancy Services | Bhubaneswar',
      role: 'IT Analyst',
      desc: 'Managed large-scale IT transformation, improving performance by 24%. Built analytics frameworks using SQL, Python, and BI tools.'
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-primary-navy text-white">
      
      {/* Shared Navigation Bar */}
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative w-full bg-primary-navy pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-16 border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
        
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-white mb-6">
            <RevealHeading>THE ARCHITECTS OF</RevealHeading>
            <RevealHeading>PRECISION</RevealHeading>
          </h1>
          <p className="scroll-fade-up font-sans text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl transition-delay-300">
            Interdisciplinary expertise bridging the gap between strategic foresight and legal compliance. Our partners combine global business acumen with deep-rooted legal authority.
          </p>
        </div>
      </section>

      {/* 2. ANSHUMAN MOHANTY (Strategy Consulting) */}
      <section className="relative w-full bg-bg-warm py-24 md:py-32 px-6 md:px-16 text-primary-navy border-b border-primary-navy/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left 5 Columns: Large Headshot & Basic Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="scroll-fade-up relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-[1px] overflow-hidden shadow-xl border border-primary-navy/10 group">
                <Image
                  src="/anshuman.png"
                  alt="Anshuman Mohanty Headshot"
                  fill
                  className="object-cover scale-100 group-hover:scale-103 transition-transform duration-700 ease-out grayscale"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 via-primary-navy/20 to-transparent z-10" />
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <span className="font-sans text-[10px] tracking-[0.25em] text-primary-gold uppercase font-bold block mb-1">
                    STRATEGY PARTNER
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-wide">
                    ANSHUMAN MOHANTY
                  </h2>
                </div>
              </div>

              {/* Academic Credentials Box */}
              <div className="scroll-fade-up bg-primary-navy text-white p-8 rounded-[1px] shadow-lg border border-white/5 space-y-4">
                <span className="font-sans text-[10px] tracking-[0.25em] text-primary-gold uppercase font-bold block">
                  ACADEMIC CREDENTIALS
                </span>
                <ul className="space-y-4 font-sans font-light">
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 mt-[3px] text-primary-gold flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">MBA — IIM Lucknow</h4>
                      <p className="text-xs text-white/60">Major in Marketing & Strategy. One of   India's premier management institutions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 mt-[3px] text-primary-gold flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">B.Tech — Computer Science</h4>
                      <p className="text-xs text-white/60">Undergraduate engineering degree providing the technical foundations for digital transformations.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right 7 Columns: Detailed Profile */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Profile Intro */}
              <div className="scroll-fade-up space-y-6">
                
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary-navy leading-snug">
                  ANSHUMAN MOHANTY | MBA, IIM Lucknow
                </h3>
                <p className="font-sans text-xs md:text-sm text-primary-navy/70 leading-relaxed font-light space-y-4">
                  Anshuman Mohanty leads Arventis Consulting with over eleven years of experience building and scaling businesses across India, the GCC, the UK, the US, and South Korea. He has held P&L ownership across consulting, BFSI, government, and technology-led businesses — as a Co-Founder, Business Head, and Strategic Sales Leader — and he brings to each engagement the discipline of someone who has operated at the sharp end of growth decisions, not merely advised on them.
                </p>
                <p className="font-sans text-xs md:text-sm text-primary-navy/70 leading-relaxed font-light">
                  His advisory work spans the full range of what it takes to move a business forward: from redesigning a sales operating model to executing a government digital transformation programme recognised at the World Economic Forum, to building a market entry for a South Korean consumer brand in India in under thirty days. The common thread is a preference for work that is measurable, accountable, and built to survive contact with execution.
                </p>
              </div>

              {/* Benchmarks Grid */}
              <div className="scroll-fade-up space-y-6">
                <span className="font-sans text-[10px] tracking-[0.25em] text-primary-navy/60 uppercase font-bold block">
                  KEY BENCHMARKS
                </span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {benchmarks.map((bench, idx) => (
                    <div key={idx} className="bg-primary-navy text-white p-5 rounded-[1px] border border-white/5 flex flex-col justify-between h-28 shadow-md hover:translate-y-[-2px] transition-all duration-300">
                      <span className="font-sans text-[9px] tracking-[0.2em] text-primary-gold font-bold">{bench.label}</span>
                      <span className="font-serif text-2xl font-light text-white">{bench.value}</span>
                      <span className="font-sans text-[10px] text-white/55">{bench.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Archive Timeline */}
              <div className="scroll-fade-up space-y-6">
                <span className="font-sans text-[10px] tracking-[0.25em] text-primary-navy/60 uppercase font-bold block">
                  CAREER ARCHIVE
                </span>
                
                <div className="relative border-l border-primary-navy/10 pl-6 ml-2 space-y-8">
                  {careerHistory.map((step, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline dot */}
                      <span className="absolute -left-[30px] top-[4px] w-2.5 h-2.5 rounded-full bg-primary-gold border border-bg-warm group-hover:scale-125 transition-transform duration-300 z-10" />
                      
                      <div className="space-y-2">
                        <span className="font-sans text-[10px] tracking-[0.2em] text-primary-gold uppercase font-bold block">
                          {step.years}
                        </span>
                        <h4 className="font-serif text-lg font-semibold text-primary-navy leading-snug">
                          {step.title}
                        </h4>
                        <p className="font-sans text-xs font-semibold text-primary-navy/80">
                          {step.role}
                        </p>
                        <p className="font-sans text-xs text-primary-navy/65 leading-relaxed font-light">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Achievements */}
              <div className="scroll-fade-up space-y-6">
                <span className="font-sans text-[10px] tracking-[0.25em] text-primary-navy/60 uppercase font-bold block">
                  SELECTED ACHIEVEMENTS
                </span>
                <ul className="space-y-4">
                  {achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-4 pb-4 border-b border-primary-navy/5 last:border-b-0">
                      <Award className="w-5 h-5 mt-[2px] text-primary-gold flex-shrink-0" />
                      <p className="font-sans text-xs md:text-sm text-primary-navy/70 leading-relaxed font-light">
                        {achievement}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. SUMAN THAKUR (Legal Partner) */}
      <section className="relative w-full bg-primary-navy py-24 md:py-32 px-6 md:px-16 text-white border-b border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left 7 Columns: Legal Info & Placeholders */}
            <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
              <div className="scroll-fade-up space-y-6">
                <span className="font-sans text-xs tracking-[0.25em] text-primary-gold uppercase font-bold block">
                  LEGAL STANDING
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-white mb-2">
                  SUMAN THAKUR
                </h2>
                <h3 className="font-serif text-lg md:text-xl font-light text-primary-gold/80 italic">
                  Founding Partner | Advocate, Supreme Court of India
                </h3>
              </div>

              {/* Professional Placeholder Box */}
              <div className="scroll-fade-up space-y-4">
                <span className="font-sans text-[10px] tracking-[0.25em] text-white/50 uppercase font-bold block">
                  BIOGRAPHICAL RECORD
                </span>
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[1px] shadow-lg">
                  <p className="font-sans text-xs md:text-sm text-white/70 leading-relaxed font-light italic border-l border-primary-gold/40 pl-4 py-2">
                    "Profile, practice biography, court appearances, and specialisation details — to be provided by Suman Thakur and added by the development team before publication."
                  </p>
                </div>
              </div>

              {/* Bench statistics */}
              <div className="scroll-fade-up grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[1px] flex flex-col justify-between h-28 shadow-lg">
                  <span className="font-sans text-[10px] tracking-[0.2em] text-primary-gold uppercase font-bold">BENCH STATISTICS</span>
                  <span className="font-serif text-3xl font-light text-white">06</span>
                  <span className="font-sans text-[10px] text-white/55">Active Advocates</span>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[1px] flex flex-col justify-between h-28 shadow-lg">
                  <span className="font-sans text-[10px] tracking-[0.2em] text-primary-gold uppercase font-bold">TOTAL EXPERIENCE</span>
                  <span className="font-serif text-3xl font-light text-white">60+ YRS</span>
                  <span className="font-sans text-[10px] text-white/55">Combined Bar Experience</span>
                </div>
              </div>

              {/* General Bench Info */}
              <div className="scroll-fade-up text-white/70 space-y-4">
                <p className="font-sans text-xs md:text-sm leading-relaxed font-light">
                  The bench comprises five further advocates in addition to Suman Thakur, bringing the total combined legal experience of the practice to over 60 years. Individual advocate cards — name, designation, specialisation, bar enrolment, and headshot — to be confirmed and added accordingly.
                </p>
              </div>
            </div>

            {/* Right 5 Columns: Large Headshot */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="scroll-fade-up relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-[1px] overflow-hidden shadow-2xl border border-white/5 group">
                <Image
                  src="/suman.png"
                  alt="Suman Thakur Headshot"
                  fill
                  className="object-cover scale-100 group-hover:scale-103 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-primary-navy/10 to-transparent z-10" />
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <span className="font-sans text-[10px] tracking-[0.25em] text-primary-gold uppercase font-bold block mb-1">
                    FOUNDING PARTNER — LEGAL
                  </span>
                  <h3 className="font-serif text-xl tracking-wider">
                    SUMAN THAKUR & BENCH
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. READY TO PROCEED? CTA BANNER */}
      <section className="relative w-full bg-bg-warm py-20 px-6 md:px-16 text-primary-navy border-t border-primary-navy/5 text-center">
        <div className="max-w-4xl mx-auto scroll-fade-up space-y-6">
          <span className="font-sans text-[10px] tracking-[0.25em] text-primary-gold uppercase font-bold block">
            READY TO PROCEED?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight text-primary-navy mb-8">
            ENGAGE OUR EXPERTISE
          </h2>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex justify-center bg-primary-navy hover:bg-primary-gold hover:text-primary-navy text-white text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover-target"
            >
              CONTACT OUR PARTNERS
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FORMAL FOOTER */}
      <footer className="relative w-full bg-bg-warm text-primary-navy/60 py-16 px-6 md:px-16 border-t border-primary-navy/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Brand */}
            <div>
              <h3 className="font-serif text-lg md:text-xl tracking-[0.2em] uppercase text-primary-navy mb-6">
                ARVENTIS & PARTNERS
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
              © 2026 ARVENTIS & PARTNERS. ALL RIGHTS RESERVED. SEC1 COMPLIANCE.
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
