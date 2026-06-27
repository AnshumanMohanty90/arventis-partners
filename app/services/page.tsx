'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Scale, Globe, ShieldCheck, Mail, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import { gsap } from 'gsap';

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

const services = [
  {
    num: '01',
    title: 'Growth Strategy',
    description: 'Most growth plans are written around assumptions. We write them around evidence — market sizing, competitive positioning, revenue architecture, and a realistic read of where a business actually has the right to win. The output is a roadmap that a leadership team can act on, not a deck that sits in a shared drive.',
    bullets: [
      'Revenue growth planning and P&L structuring',
      'Market sizing and opportunity assessment',
      'Expansion roadmaps with phased milestones',
      'Pricing logic and margin architecture'
    ]
  },
  {
    num: '02',
    title: 'Go-to-Market Strategy',
    description: 'Entering a new market — whether a new geography, a new customer segment, or a new channel — is one of the highest-stakes decisions a business makes. We have led market entries across India, Saudi Arabia, the UAE, Kuwait, and South Korea, and the discipline we apply is the same: define the segment precisely, match the channel to the buyer, and price for the position you want to hold.',
    bullets: [
      'Market entry strategy for new geographies and segments',
      'Channel strategy design — direct, partner, institutional, D2C',
      'Segment targeting and customer acquisition frameworks',
      'Competitive positioning and differentiation planning',
      'Pricing strategy and commercial model design'
    ]
  },
  {
    num: '03',
    title: 'Sales Transformation',
    description: "A company's sales performance is ultimately a systems problem. The right pipeline architecture, the right cadence, the right visibility into what is and is not working — these things compound. We have built sales operating models for consulting practices, EdTech startups, and mid-market businesses, and in each case the priority is the same: reduce founder or management dependency, build repeatability, and create the governance to sustain growth without constant intervention.",
    bullets: [
      'Sales governance design — roles, KPIs, accountability structures',
      'Pipeline architecture and CRM-readiness frameworks',
      'Performance management cadences and reporting cockpits',
      'Sales team structuring and onboarding playbooks',
      'Revenue forecasting and funnel visibility'
    ]
  },
  {
    num: '04',
    title: 'Organisational & Operating Model Design',
    description: 'Strategy only lands when the organisation behind it is built to execute it. We work with leadership teams to design the structures, governance models, and role definitions that allow a business to scale without fragmenting. This is especially relevant at two moments: when a founder-led business is professionalising, and when a scaling company is expanding into a new geography or operating model.',
    bullets: [
      'Organisational design and restructuring',
      'Operating model architecture for growth-stage businesses',
      'Governance frameworks and decision rights mapping',
      'Role design and team structuring',
      'Reducing founder or management dependency in key processes'
    ]
  },
  {
    num: '05',
    title: 'Operational Excellence',
    description: 'Process inefficiency is rarely the obvious problem — it is the thing underneath the obvious problem. We have led operational improvement programmes for a USD 3 billion QSR chain across three countries, for government digital transformation mandates, and for professional services firms. The method is consistent: map the process as it exists, identify the real friction points, and redesign for efficiency without sacrificing quality or compliance.',
    bullets: [
      'End-to-end process mapping and redesign',
      'Service efficiency and customer journey improvement',
      'Multi-geography operational standardisation',
      'Performance tracking and operational KPI frameworks'
    ]
  },
  {
    num: '06',
    title: 'Market Entry & Expansion',
    description: 'New geography entry requires a different kind of discipline than domestic growth — the regulatory environment is unfamiliar, the channels behave differently, and the competitive dynamics are not what the business plan assumed. We bring direct experience of entering India, Saudi Arabia, the UAE, Kuwait, and South Korea on behalf of clients, and we approach each entry with the same rigour: define the target segment with precision, map the regulatory landscape early, and build the channel before the product arrives.',
    bullets: [
      'New geography entry strategy — India, GCC, and international markets',
      'Regulatory-aware market strategy and compliance mapping',
      'Target segment definition and customer development',
      'Channel partner identification and commercial terms design',
      'Localisation strategy for product, pricing, and positioning'
    ]
  },
  {
    num: '07',
    title: 'Key Account & Channel Strategy',
    description: 'Acquiring a significant client or channel partner is the beginning of the work, not the end of it. The businesses that extract full value from enterprise relationships are the ones with deliberate account plans, structured review cadences, and a clear view of where the relationship has room to grow. We have driven 4x revenue expansion within a single government account, and the method — sharper value propositions, structured account farming, and early identification of adjacent opportunities — transfers directly to commercial enterprise relationships.',
    bullets: [
      'Enterprise account planning and relationship structuring',
      'Revenue expansion within existing accounts',
      'Channel partner design and management frameworks',
      'Retention programmes and value proposition sharpening'
    ]
  },
  {
    num: '08',
    title: 'Digital Transformation',
    description: 'Digital transformation that produces real change is not an IT project. It is a business redesign that uses technology as the means, not the end. We have led digital transformation programmes for state government clients recognised at the World Economic Forum, and we approach commercial digital transformation with the same discipline: start with the business outcome, work backward to the technology, and deliver in-house through our development capability rather than outsourcing the execution.',
    bullets: [
      'Technology-led business process modernisation',
      'Website, application, and digital infrastructure delivery',
      'In-house development team — strategy to build in one engagement',
      'Digital governance and change management'
    ]
  },
  {
    num: '09',
    title: 'Marketing & Brand Execution',
    description: 'A strategy without a market-facing expression stays internal. We work with clients to translate commercial positioning into brand strategy, content, and campaign execution — delivered through a curated network of specialist partners. This is not a bolt-on service; it is the last mile of a GTM engagement, ensuring the market positioning we design actually reaches the buyers it was built for.',
    bullets: [
      'Brand strategy and positioning',
      'Content development and editorial direction',
      'Performance marketing and campaign execution',
      'Delivered through a curated specialist partner network'
    ]
  }
];

const legalPractices = [
  {
    num: '01',
    title: 'Civil & Commercial Litigation',
    lead: 'Suman Thakur',
    description: 'Contract disputes, recovery suits, and commercial arbitration for businesses and individuals alike. We represent clients before trial courts, high courts, and the Supreme Court of India — bringing the same preparation to a straightforward debt recovery as to a multi-party commercial dispute.',
    bullets: [
      'Contract disputes and breach of agreement matters',
      'Commercial recovery and enforcement actions',
      'Inter-party disputes — shareholder, partnership, joint venture',
      'Representation before trial courts, high courts, and the Supreme Court'
    ]
  },
  {
    num: '02',
    title: 'Family, Estate & Succession',
    lead: 'Rohan Sharma',
    description: 'Wills, succession planning, family settlements, and inheritance disputes handled with the discretion and seniority these matters deserve. Individual and family clients receive the same quality of preparation and advocacy as institutional clients — because the stakes, for them, are just as high.',
    bullets: [
      'Will drafting and estate planning',
      'Succession planning for family businesses and HNI estates',
      'Family settlement agreements and mediated resolutions',
      'Inheritance and succession disputes'
    ]
  },
  {
    num: '03',
    title: 'Corporate & Regulatory Advisory',
    lead: 'Meera Kapur',
    description: 'Compliance, governance, statutory filings, and regulatory representation for companies navigating an increasingly complex regulatory landscape. We advise businesses on the legal dimensions of growth decisions — entry into new sectors, structural changes, regulatory approvals — so that commercial ambition is built on sound legal foundations.',
    bullets: [
      'Corporate compliance and governance frameworks',
      'Statutory filings and regulatory representation',
      'Sector-specific regulatory advisory — BFSI, EdTech, manufacturing',
      'Legal due diligence for investments, acquisitions, and partnerships'
    ]
  },
  {
    num: '04',
    title: 'Real Estate & Property Law',
    lead: 'Aditya Rao',
    description: 'Title due diligence, property disputes, tenancy matters, and RERA representation — for individual homeowners, developers, and commercial occupiers. Real estate transactions and disputes carry significant financial exposure; the quality of legal preparation at the outset determines the quality of outcomes at every stage that follows.',
    bullets: [
      'Title due diligence and property verification',
      'Property and boundary disputes',
      'Tenancy, lease, and landlord-tenant matters',
      'RERA advisory and representation',
      'Residential and commercial transactions'
    ]
  },
  {
    num: '05',
    title: 'Constitutional & Writ Matters',
    lead: 'Suman Thakur',
    description: 'High Court and Supreme Court representation for individuals and institutions whose rights or interests require intervention at the constitutional level. This practice area reflects the bench\'s depth — writ matters require a particular quality of preparation and a strong track record before the courts where they are heard.',
    bullets: [
      'Writ petitions before High Courts and the Supreme Court',
      'Constitutional rights matters for individuals and institutions',
      'Public interest and regulatory challenge matters'
    ]
  },
  {
    num: '06',
    title: 'Dispute Resolution & Arbitration',
    lead: 'Kabir Mehta',
    description: 'As commercial relationships span more jurisdictions, parties need advocates who understand arbitration procedure as well as the underlying commercial and legal merits — and who can manage proceedings efficiently without losing sight of the client\'s broader objectives.',
    bullets: [
      'Domestic arbitration — institutional and ad hoc',
      'Cross-border arbitration proceedings',
      'Mediation and alternative dispute resolution',
      'Pre-dispute advisory and contract drafting for dispute risk reduction'
    ]
  }
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<number | null>(0); // Service I open by default
  const [activeLegalPractice, setActiveLegalPractice] = useState<number | null>(0); // Legal Practice I open by default

  const drawerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const legalDrawerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // GSAP Hover Fill Effect
  useEffect(() => {
    const activeConsultingDrawers = drawerRefs.current.filter(Boolean) as HTMLDivElement[];
    const activeLegalDrawers = legalDrawerRefs.current.filter(Boolean) as HTMLDivElement[];
    const allDrawers = [...activeConsultingDrawers, ...activeLegalDrawers];

    const cleanupFns = allDrawers.map((drawer) => {
      const fill = drawer.querySelector('.hover-fill');
      const textTitle = drawer.querySelector('.service-title');
      const textNum = drawer.querySelector('.service-num');
      const textChevron = drawer.querySelector('.service-chevron');
      const textDesc = drawer.querySelector('.service-desc');
      const textLead = drawer.querySelector('.service-lead');
      const textLeadLabel = drawer.querySelector('.service-lead-label');
      const bulletsText = drawer.querySelectorAll('.service-bullet-text');
      const bulletsSquare = drawer.querySelectorAll('.service-bullet-square');

      const onMouseEnter = (e: MouseEvent) => {
        const rect = drawer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Position the circle at the cursor position
        gsap.set(fill, {
          x: x,
          y: y,
          xPercent: -50,
          yPercent: -50,
          scale: 0,
          opacity: 1
        });

        // Animate background circle expand
        gsap.to(fill, {
          scale: 120, // large enough to cover the drawer bounds from any point
          duration: 0.7,
          ease: 'power2.out',
          overwrite: 'auto'
        });

        // Animate text colors to white/gold
        const textTargets = [
          textTitle,
          textNum,
          textChevron,
          textDesc,
          textLead,
          textLeadLabel,
          ...Array.from(bulletsText)
        ].filter(Boolean);

        gsap.to(textTargets, {
          color: '#ffffff',
          duration: 0.4,
          overwrite: 'auto'
        });
        gsap.to(bulletsSquare, {
          backgroundColor: '#c5a880', // make bullet square stand out (gold)
          duration: 0.4,
          overwrite: 'auto'
        });
      };

      const onMouseLeave = () => {
        // Animate background circle shrink
        gsap.to(fill, {
          scale: 0,
          duration: 0.6,
          ease: 'power2.out',
          overwrite: 'auto',
          onComplete: () => {
            gsap.set(fill, { opacity: 0 });
          }
        });

        // Clear inline text colors so they revert to CSS class values
        const textTargets = [
          textTitle,
          textNum,
          textChevron,
          textDesc,
          textLead,
          textLeadLabel,
          ...Array.from(bulletsText)
        ].filter(Boolean);

        gsap.to(textTargets, {
          color: '',
          duration: 0.5,
          overwrite: 'auto'
        });
        gsap.to(bulletsSquare, {
          backgroundColor: '',
          duration: 0.5,
          overwrite: 'auto'
        });
      };

      drawer.addEventListener('mouseenter', onMouseEnter);
      drawer.addEventListener('mouseleave', onMouseLeave);

      return () => {
        drawer.removeEventListener('mouseenter', onMouseEnter);
        drawer.removeEventListener('mouseleave', onMouseLeave);
      };
    });

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
    };
  }, []);

  // Scroll animations observer
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

  return (
    <div className="relative w-full overflow-hidden bg-primary-navy text-white">
      
      {/* Shared Navigation Bar */}
      <Navbar />

      {/* 1. TWIN HERO BANNER (Split Columns) */}
      <section className="relative w-full min-h-[55vh] md:min-h-[65vh] flex flex-col md:flex-row pt-20 border-b border-white/5">
        
        {/* Left Column: Arventis Consulting */}
        <div className="relative flex-1 bg-[#081226] py-20 px-8 md:px-16 flex flex-col justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
          {/* Background Image Layer */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-[0.12] pointer-events-none z-0" 
            style={{ backgroundImage: "url('/Buisness-bg.jpg')" }}
          />
          {/* Abstract architectural grid overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" stroke-width="1" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" stroke-width="1" />
          </svg>

          <div className="relative z-10 max-w-lg scroll-fade-up">
           
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wider leading-tight text-white mb-2">
              <RevealHeading>ARVENTIS</RevealHeading>
              <RevealHeading>CONSULTING</RevealHeading>
            </h1>
          </div>
        </div>

        {/* Right Column: Arventis Legal */}
        <div className="relative flex-1 bg-[#c5a880] py-20 px-8 md:px-16 flex flex-col justify-center overflow-hidden">
          {/* Background Image Layer */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-[0.12] pointer-events-none z-0" 
            style={{ backgroundImage: "url('/legal-bg.jpg')" }}
          />
          {/* Abstract library bookshelf/lines overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="shelves" width="60" height="80" patternUnits="userSpaceOnUse">
                <rect width="50" height="70" fill="none" stroke="#081226" stroke-width="1"/>
                <line x1="0" y1="70" x2="60" y2="70" stroke="#081226" stroke-width="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#shelves)" />
          </svg>

          <div className="relative z-10 max-w-lg scroll-fade-up">
          
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wider leading-tight text-primary-navy mb-2">
              <RevealHeading className="text-primary-navy">ARVENTIS</RevealHeading>
              <RevealHeading className="text-primary-navy">LEGAL</RevealHeading>
            </h1>
          </div>
        </div>

      </section>

      {/* 2. LEADERS & DETAILS SECTION (Warm Ivory Background) */}
      <section className="relative w-full bg-bg-warm py-24 md:py-32 px-6 md:px-16 text-primary-navy">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Consulting & Strategy details */}
            <div className="space-y-12">
              {/* Leader Headshot & Profile */}
              <div className="scroll-fade-up flex flex-col sm:flex-row items-start gap-6 pb-8 border-b border-primary-navy/10">
                <div className="w-16 h-16 rounded-full bg-primary-navy flex items-center justify-center text-primary-gold font-serif text-lg tracking-wider font-light flex-shrink-0">
                  AS
                </div>
                <div>
                  <span className="font-sans text-[10px] tracking-[0.25em] text-primary-gold uppercase font-bold block mb-1">
                   Consulting Lead
                  </span>
                  <h3 className="font-serif text-xl font-medium tracking-wide text-primary-navy mb-2">
                    ANSHUMAN MOHANTY
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-primary-navy/70 leading-relaxed font-light">
                   Our consulting practice is built on the principle of structural
transformation. We move beyond generic advice to engineer
sustainable growth and operational precision for complex
enterprises navigating modern market shifts.
                  </p>
                </div>
              </div>

              {/* Service disciplines */}
              <div className="space-y-4">
                <div className="scroll-fade-up">
                  <span className="font-sans text-[10px] tracking-[0.25em] text-primary-navy/55 uppercase font-bold block mb-6">
                   WHAT WE PROVIDE 
                  </span>
                </div>

                {services.map((service, idx) => {
                  const isOpen = activeService === idx;
                  return (
                    <div
                      key={idx}
                      ref={(el) => { drawerRefs.current[idx] = el; }}
                      className="drawer-item relative overflow-hidden scroll-fade-up border-b border-primary-navy/10 last:border-b-0"
                    >
                      {/* Hover Fill Element */}
                      <div className="hover-fill absolute w-6 h-6 rounded-full bg-primary-navy pointer-events-none opacity-0 z-0" />

                      <button
                        onClick={() => setActiveService(isOpen ? null : idx)}
                        className="relative z-10 w-full flex items-center justify-between px-6 md:px-8 py-7 md:py-8 text-left font-serif text-base md:text-lg font-medium text-primary-navy tracking-wide uppercase hover:text-primary-gold transition-colors duration-300 hover-target group"
                      >
                        <div className="flex items-center gap-6">
                          <span className="service-num font-serif text-xl text-primary-gold font-semibold w-8 block flex-shrink-0">
                            {service.num}
                          </span>
                          <span className="service-title leading-tight">
                            {service.title}
                          </span>
                        </div>
                        <div className="service-chevron flex-shrink-0 ml-4">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 transition-transform duration-300" />
                          ) : (
                            <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                          )}
                        </div>
                      </button>

                      <div
                        className={`relative z-10 overflow-hidden transition-all duration-500 ease-in-out ${
                          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 md:px-8 pb-8 space-y-4">
                          <div className="pl-14 pr-4 space-y-4">
                            <p className="service-desc font-sans text-xs md:text-sm text-primary-navy/70 leading-relaxed font-light">
                              {service.description}
                            </p>
                            <ul className="space-y-3 pl-1">
                              {service.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-3">
                                  <span className="service-bullet-square mt-[6px] w-[5px] h-[5px] bg-primary-gold flex-shrink-0" />
                                  <span className="service-bullet-text font-sans text-xs md:text-sm text-primary-navy/70 leading-normal font-light">
                                    {bullet}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

             
            </div>

            {/* Right Column: Legal & Protocols details */}
            <div className="space-y-12">
              {/* Leader Headshot & Profile */}
              <div className="scroll-fade-up flex flex-col sm:flex-row items-start gap-6 pb-8 border-b border-primary-navy/10">
                <div className="w-16 h-16 rounded-full bg-primary-navy flex items-center justify-center text-primary-gold font-serif text-lg tracking-wider font-light flex-shrink-0">
                  ST
                </div>
                <div>
                  <span className="font-sans text-[10px] tracking-[0.25em] text-primary-gold uppercase font-bold block mb-1">
                   LEGAL LEAD
                  </span>
                  <h3 className="font-serif text-xl font-medium tracking-wide text-primary-navy mb-2">
                    SUMAN THAKUR
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-primary-navy/70 leading-relaxed font-light">
                   Led by Suman Thakur, Advocate, Supreme Court of India, Arventis Legal is a bench of six advocates working across litigation, advisory, and regulatory practice. We represent businesses, institutions, families, and individuals with the same rigour — whether the matter is in a courtroom, a boardroom, or a conversation about a will.
Each matter goes to the advocate best suited to it. The bench covers six practice areas, and we do not rotate generalists across disciplines where specialist experience is what the client's situation demands.

                  </p>
                </div>
              </div>

              {/* Accordions */}
              <div className="space-y-4">
                <div className="scroll-fade-up">
                  <span className="font-sans text-[10px] tracking-[0.25em] text-primary-navy/55 uppercase font-bold block mb-6">
                    AREAS OF PRACTICE
                  </span>
                </div>

                {legalPractices.map((practice, idx) => {
                  const isOpen = activeLegalPractice === idx;
                  return (
                    <div
                      key={idx}
                      ref={(el) => { legalDrawerRefs.current[idx] = el; }}
                      className="drawer-item relative overflow-hidden scroll-fade-up border-b border-primary-navy/10 last:border-b-0"
                    >
                      {/* Hover Fill Element */}
                      <div className="hover-fill absolute w-6 h-6 rounded-full bg-primary-navy pointer-events-none opacity-0 z-0" />

                      <button
                        onClick={() => setActiveLegalPractice(isOpen ? null : idx)}
                        className="relative z-10 w-full flex items-center justify-between px-6 md:px-8 py-7 md:py-8 text-left font-serif text-base md:text-lg font-medium text-primary-navy tracking-wide uppercase hover:text-primary-gold transition-colors duration-300 hover-target group"
                      >
                        <div className="flex items-center gap-6">
                          <span className="service-num font-serif text-xl text-primary-gold font-semibold w-8 block flex-shrink-0">
                            {practice.num}
                          </span>
                          <span className="service-title leading-tight">
                            {practice.title}
                          </span>
                        </div>
                        <div className="service-chevron flex-shrink-0 ml-4">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 transition-transform duration-300" />
                          ) : (
                            <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                          )}
                        </div>
                      </button>

                      <div
                        className={`relative z-10 overflow-hidden transition-all duration-500 ease-in-out ${
                          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-6 md:px-8 pb-8 space-y-4">
                          <div className="pl-14 pr-4 space-y-4">
                            <div className="flex items-center gap-2">
                              <span className="service-lead-label font-sans text-[10px] tracking-[0.2em] text-primary-gold uppercase font-bold">
                                Practice Lead:
                              </span>
                              <span className="service-lead font-serif text-sm text-primary-navy font-semibold">
                                {practice.lead}
                              </span>
                            </div>
                            <p className="service-desc font-sans text-xs md:text-sm text-primary-navy/70 leading-relaxed font-light">
                              {practice.description}
                            </p>
                            <ul className="space-y-3 pl-1">
                              {practice.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-3">
                                  <span className="service-bullet-square mt-[6px] w-[5px] h-[5px] bg-primary-gold flex-shrink-0" />
                                  <span className="service-bullet-text font-sans text-xs md:text-sm text-primary-navy/70 leading-normal font-light">
                                    {bullet}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Burgundy Compliance Card */}
              <div className="scroll-fade-up bg-accent-red text-white p-8 rounded-[1px] shadow-lg">
                <span className="font-sans text-[10px] tracking-[0.25em] text-white/60 uppercase font-bold block mb-4">
                  COMPLIANCE PROTOCOL
                </span>
                
                <h4 className="font-serif text-lg font-normal mb-6 tracking-wide text-white">
                  Operational Guidelines
                </h4>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-[6px] w-[5px] h-[5px] bg-primary-gold flex-shrink-0" />
                    <p className="font-sans text-xs text-white/90 leading-normal font-light">
                      <strong>SECURE COMMUNICATIONS ONLY:</strong> All consultation correspondence is encrypted. We do not use unencrypted channels.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-[6px] w-[5px] h-[5px] bg-primary-gold flex-shrink-0" />
                    <p className="font-sans text-xs text-white/90 leading-normal font-light">
                      <strong>DIRECT PARTNER ACCESS:</strong> Every client has direct access to the lead partner on the mandate. No middle layers.
                    </p>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* INDUSTRIES WE ARE IN SECTION */}
          <div className="scroll-fade-up border-t border-primary-navy/10 pt-16 mt-20">
            <span className="font-sans text-[10px] tracking-[0.25em] text-primary-gold uppercase font-bold block mb-4">
              Our Footprint
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight text-primary-navy mb-12">
              INDUSTRIES WE ARE IN
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Card 1: BFSI */}
              <div className="group relative h-[320px] overflow-hidden rounded-[1px] border border-primary-navy/5 flex flex-col justify-between p-6 shadow-md hover:shadow-xl hover:border-primary-gold/30 transition-all duration-500">
                <div 
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700 ease-out z-0" 
                  style={{ backgroundImage: "url('/bfsi_bg.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/90 to-primary-navy/70 group-hover:from-black group-hover:via-black/90 group-hover:to-black/60 transition-colors duration-500 z-10" />
                
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <span className="font-serif text-sm text-primary-gold/60 font-semibold block">01</span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-medium text-white tracking-wide uppercase leading-tight">
                      BFSI
                    </h3>
                    <p className="font-sans text-[11px] text-white/70 leading-normal font-light">
                      banking, financial services, and insurance
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Government */}
              <div className="group relative h-[320px] overflow-hidden rounded-[1px] border border-primary-navy/5 flex flex-col justify-between p-6 shadow-md hover:shadow-xl hover:border-primary-gold/30 transition-all duration-500">
                <div 
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700 ease-out z-0" 
                  style={{ backgroundImage: "url('/gov_bg.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/90 to-primary-navy/70 group-hover:from-black group-hover:via-black/90 group-hover:to-black/60 transition-colors duration-500 z-10" />
                
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <span className="font-serif text-sm text-primary-gold/60 font-semibold block">02</span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-medium text-white tracking-wide uppercase leading-tight">
                      Government
                    </h3>
                    <p className="font-sans text-[11px] text-white/70 leading-normal font-light">
                      and public sector — India and GCC
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: EdTech */}
              <div className="group relative h-[320px] overflow-hidden rounded-[1px] border border-primary-navy/5 flex flex-col justify-between p-6 shadow-md hover:shadow-xl hover:border-primary-gold/30 transition-all duration-500">
                <div 
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700 ease-out z-0" 
                  style={{ backgroundImage: "url('/edtech_bg.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/90 to-primary-navy/70 group-hover:from-black group-hover:via-black/90 group-hover:to-black/60 transition-colors duration-500 z-10" />
                
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <span className="font-serif text-sm text-primary-gold/60 font-semibold block">03</span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-medium text-white tracking-wide uppercase leading-tight">
                      EdTech
                    </h3>
                    <p className="font-sans text-[11px] text-white/70 leading-normal font-light">
                      educational technology solutions
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: Manufacturing */}
              <div className="group relative h-[320px] overflow-hidden rounded-[1px] border border-primary-navy/5 flex flex-col justify-between p-6 shadow-md hover:shadow-xl hover:border-primary-gold/30 transition-all duration-500">
                <div 
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700 ease-out z-0" 
                  style={{ backgroundImage: "url('/manufacturing_bg.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/90 to-primary-navy/70 group-hover:from-black group-hover:via-black/90 group-hover:to-black/60 transition-colors duration-500 z-10" />
                
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <span className="font-serif text-sm text-primary-gold/60 font-semibold block">04</span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-medium text-white tracking-wide uppercase leading-tight">
                      Manufacturing
                    </h3>
                    <p className="font-sans text-[11px] text-white/70 leading-normal font-light">
                      and specialty chemicals
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 5: Consumer */}
              <div className="group relative h-[320px] overflow-hidden rounded-[1px] border border-primary-navy/5 flex flex-col justify-between p-6 shadow-md hover:shadow-xl hover:border-primary-gold/30 transition-all duration-500">
                <div 
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700 ease-out z-0" 
                  style={{ backgroundImage: "url('/consumer_bg.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/90 to-primary-navy/70 group-hover:from-black group-hover:via-black/90 group-hover:to-black/60 transition-colors duration-500 z-10" />
                
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <span className="font-serif text-sm text-primary-gold/60 font-semibold block">05</span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-medium text-white tracking-wide uppercase leading-tight">
                      Consumer & D2C
                    </h3>
                    <p className="font-sans text-[11px] text-white/70 leading-normal font-light">
                      direct-to-consumer and retail
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 6: Professional Services */}
              <div className="group relative h-[320px] overflow-hidden rounded-[1px] border border-primary-navy/5 flex flex-col justify-between p-6 shadow-md hover:shadow-xl hover:border-primary-gold/30 transition-all duration-500">
                <div 
                  className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700 ease-out z-0" 
                  style={{ backgroundImage: "url('/prof_services_bg.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/90 to-primary-navy/70 group-hover:from-black group-hover:via-black/90 group-hover:to-black/60 transition-colors duration-500 z-10" />
                
                <div className="relative z-20 flex flex-col h-full justify-between">
                  <span className="font-serif text-sm text-primary-gold/60 font-semibold block">06</span>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-medium text-white tracking-wide uppercase leading-tight">
                      Professional Services
                    </h3>
                    <p className="font-sans text-[11px] text-white/70 leading-normal font-light">
                      consulting and advisory practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OPERATIONAL FLOW SECTION */}
      <section className="relative w-full bg-white py-24 md:py-32 px-6 md:px-16 text-primary-navy border-t border-primary-navy/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="scroll-fade-up font-sans text-xs tracking-[0.25em] text-primary-gold uppercase font-bold mb-4 block">
              OPERATIONAL FLOW
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight leading-tight text-primary-navy">
              <RevealHeading>THREE STEPS. ONE ACCOUNTABLE TEAM.</RevealHeading>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            
            {/* Step 1 Card */}
            <div className="group relative overflow-hidden scroll-fade-up bg-bg-warm border border-primary-navy/5 p-8 md:p-10 shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 flex flex-col items-start">
              {/* Glass Shine Hover Overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-20" />
              
              <div className="relative z-10 w-8 h-8 bg-primary-navy text-white font-serif flex items-center justify-center text-sm font-semibold mb-6">
                01
              </div>
              <h3 className="relative z-10 font-serif text-xl font-semibold mb-3 tracking-wide text-primary-navy">
                Assessment
              </h3>
              <p className="relative z-10 font-sans text-xs md:text-sm text-primary-navy/70 leading-relaxed font-light">
                Surgical dissection of vulnerabilities, counter-party positions, and jurisdictional liabilities on the target field.
              </p>
            </div>

            {/* Step 2 Card */}
            <div className="group relative overflow-hidden scroll-fade-up bg-bg-warm border border-primary-navy/5 p-8 md:p-10 shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 flex flex-col items-start transition-delay-100">
              {/* Glass Shine Hover Overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-20" />
              
              <div className="relative z-10 w-8 h-8 bg-primary-gold text-primary-navy font-serif flex items-center justify-center text-sm font-semibold mb-6">
                02
              </div>
              <h3 className="relative z-10 font-serif text-xl font-semibold mb-3 tracking-wide text-primary-navy">
                Strategy
              </h3>
              <p className="relative z-10 font-sans text-xs md:text-sm text-primary-navy/70 leading-relaxed font-light">
                Architecting tactical blueprints designed to neutralize threats, resolve claims, and secure high-value legal advantages.
              </p>
            </div>

            {/* Step 3 Card */}
            <div className="group relative overflow-hidden scroll-fade-up bg-bg-warm border border-primary-navy/5 p-8 md:p-10 shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-500 flex flex-col items-start transition-delay-200">
              {/* Glass Shine Hover Overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-20" />
              
              <div className="relative z-10 w-8 h-8 bg-accent-red text-white font-serif flex items-center justify-center text-sm font-semibold mb-6">
                03
              </div>
              <h3 className="relative z-10 font-serif text-xl font-semibold mb-3 tracking-wide text-primary-navy">
                Execution
              </h3>
              <p className="relative z-10 font-sans text-xs md:text-sm text-primary-navy/70 leading-relaxed font-light">
                Unwavering advocacy and precise coordination of resources to deliver the defined mandate under secure frameworks.
              </p>
            </div>

          </div>

          {/* Secure Channel Divider Call-to-action */}
          <div className="scroll-fade-up border-t border-primary-navy/15 pt-12 max-w-4xl mx-auto text-center">
            <span className="font-sans text-[10px] tracking-[0.25em] text-primary-gold uppercase font-bold block mb-4">
              SECURE CHANNEL PREPARATION
            </span>
            <p className="font-serif text-lg md:text-xl font-light text-primary-navy/85 max-w-2xl mx-auto leading-relaxed mb-8">
              An initial consultation is offered under full NDA. Establish contact to receive our operational protocol documents.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex justify-center bg-primary-navy hover:bg-primary-gold hover:text-primary-navy text-white text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover-target"
              >
                INITIATE PROTOCOL
              </Link>
              <Link
                href="/our-people"
                className="w-full sm:w-auto inline-flex justify-center bg-transparent hover:bg-primary-navy/5 text-primary-navy text-xs font-medium tracking-[0.2em] uppercase border border-primary-navy/20 hover:border-primary-navy/50 px-8 py-4 transition-all duration-300 hover-target"
              >
                OUR PEOPLE
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FORMAL FOOTER */}
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
