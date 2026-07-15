'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, CheckCircle2, X, ArrowLeft } from 'lucide-react';
import { peopleData, Person } from '../peopleData';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactUs from '../../components/ContactUs';

// Custom component to reveal text word-by-word with a calming stagger
function RevealHeading({ children, className = "" }: { children: string; className?: string }) {
  const words = children.split(' ').filter(Boolean);
  return (
    <span className={`reveal-text flex flex-wrap gap-x-[0.35em] gap-y-[0.15em] ${className}`}>
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

export default function TeamPage() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (selectedPerson) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [selectedPerson]);

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

  const otherMembers = peopleData.filter(p => p.category !== 'Founding Partner');

  function getDomainPosition(person: Person) {
    return 'Advocate';
  }

  const renderCard = (person: Person) => (
    <div 
      key={person.id} 
      onClick={() => setSelectedPerson(person)}
      className="bg-white rounded-none cursor-pointer group flex flex-col w-full border border-black/5 hover:bg-[#02029c] hover:shadow-xl transition-all duration-300 pb-4"
    >
      <div className="relative w-full overflow-hidden bg-neutral-50 aspect-[4/5]">
        <Image
          src={person.imagePath}
          alt={person.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
        />
      </div>
      <div className="px-4 pt-6 flex flex-col items-center text-center w-full">
        <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#02029c] font-semibold group-hover:text-white transition-colors duration-300 w-full leading-tight">
          {person.cardName || person.name}
        </h3>
        <p className="text-xs sm:text-sm md:text-base font-sans text-black/95 mt-2 font-medium w-full group-hover:text-white/95 transition-colors duration-300">
          {getDomainPosition(person)}
        </p>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-white pb-0">
      <Navbar />
      {/* HERO VIDEO BANNER */}
      <section className="relative w-full min-h-[60vh] md:min-h-[75vh] flex flex-col justify-between pb-16 md:pb-24 px-6 md:px-16 border-b border-white/10 text-white overflow-hidden pt-28 bg-black">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://pub-e76f3c2b747241f99a84d7c073d76e11.r2.dev/team_subpage.mp4" type="video/mp4" />
        </video>
        
        {/* Overlays for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 z-10"></div>

        <div className="max-w-7xl mx-auto w-full relative z-20 mt-4 md:mt-8">
          <Link
            href="/our-people"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-[#02029c] text-white text-xs tracking-[0.2em] font-bold uppercase border border-white/20 hover:border-[#02029c] px-5 py-3 transition-all duration-300 hover-target backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO OUR PEOPLE</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20 mt-auto pt-16">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-normal text-white mb-6 drop-shadow-lg">
            <RevealHeading>OUR TEAM</RevealHeading>
          </h1>
          <p className="scroll-fade-up font-sans text-base sm:text-lg md:text-xl text-white/90 font-normal leading-relaxed max-w-3xl transition-delay-300 drop-shadow-md">
            A network of advocates and specialists across the country.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 max-w-6xl mx-auto hover:text-white">
          {otherMembers.map(renderCard)}
        </div>
      </section>

      {/* The Detail View (Modal) */}
      {selectedPerson && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-300"
          data-lenis-prevent="true"
          onClick={() => setSelectedPerson(null)}
        >
          <div className="min-h-full flex items-center justify-center p-4 md:p-6 lg:p-8">
            <div 
              className="bg-white w-full max-w-6xl rounded-none shadow-2xl relative animate-in slide-in-from-bottom-8 duration-500 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPerson(null)}
              className="absolute top-2 right-2 md:top-3 md:right-3 p-1.5 rounded-full bg-black/5 hover:bg-black/10 text-black transition-colors z-20 group"
            >
              <X className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>

            {/* Top Row */}
            <div className="flex flex-col md:flex-row w-full">
              {/* Top Left */}
              <div className="w-full md:w-[35%] lg:w-[30%] bg-neutral-50 p-5 md:p-6 lg:p-8 md:pb-4 lg:pb-6 border-r border-black/5 flex flex-col">
                <div className="relative w-full mb-4 overflow-hidden shadow-md aspect-[4/5]">
                  <Image
                    src={selectedPerson.imagePath}
                    alt={selectedPerson.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-auto pt-2">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-black mb-1 tracking-tight leading-snug">{selectedPerson.name}</h2>
                  <div className="space-y-1 mt-1">
                    <p className="text-black/95 font-bold text-[10px] md:text-xs uppercase tracking-wider">{selectedPerson.title}</p>
                    {selectedPerson.badge && <p className="text-[#02029c] font-bold text-[10px] md:text-xs uppercase tracking-wider">{selectedPerson.badge}</p>}
                  </div>
                </div>
              </div>  

              {/* Top Right */}
              <div className="w-full md:w-[65%] lg:w-[70%] p-5 md:p-6 lg:p-8 pr-6 md:pr-10 md:pb-4 lg:pb-6 flex flex-col justify-start bg-white">
                <div className="space-y-3 mb-4">
                  {selectedPerson.bio.map((paragraph, idx) => (
                    <p key={idx} className="text-sm md:text-[15px] text-black/95 leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))}
                </div>

                {selectedPerson.customSectionTitle && selectedPerson.customSectionContent && (
                  <div className="mt-auto">
                    <h4 className="text-[10px] md:text-xs font-bold text-black uppercase tracking-widest mb-2">
                      {selectedPerson.customSectionTitle}
                    </h4>
                    <div className="space-y-2 text-sm md:text-[15px] text-black/95 leading-relaxed">
                      {selectedPerson.customSectionContent.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row w-full">
              {/* Bottom Left */}
              <div className="w-full md:w-[35%] lg:w-[30%] bg-neutral-50 p-5 md:p-6 lg:p-8 md:pt-4 lg:pt-4 border-r border-black/5 flex flex-col h-full">
                {selectedPerson.geographies && selectedPerson.geographies.length > 0 && (
                  <div>
                    <h4 className="text-[10px] md:text-xs font-bold text-black uppercase tracking-widest mb-3">
                      Geographies
                    </h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                      {selectedPerson.geographies.map((geo, idx) => (
                        <div key={idx} className="flex items-center text-xs md:text-sm font-medium text-black/95">
                          <MapPin className="w-3.5 h-3.5 mr-1.5 text-black/40 shrink-0" />
                          <span>{geo}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Right */}
              <div className="w-full md:w-[65%] lg:w-[70%] p-5 md:p-6 lg:p-8 pr-6 md:pr-10 md:pt-4 lg:pt-4 flex flex-col h-full bg-white space-y-5">
                {selectedPerson.clientList && selectedPerson.clientList.length > 0 && (
                  <div>
                    <h4 className="text-[10px] md:text-xs font-bold text-black uppercase tracking-widest mb-3">
                      Representative Clients
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPerson.clientList.map((client, idx) => (
                        <span key={idx} className="bg-black/5 px-3 py-1 text-[10px] md:text-xs font-medium text-black/95 rounded-sm">
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedPerson.highlights && selectedPerson.highlights.length > 0 && (
                  <div>
                    <h4 className="text-[10px] md:text-xs font-bold text-black uppercase tracking-widest mb-3">
                      Practice Highlights
                    </h4>
                    <ul className="space-y-3 w-full">
                      {selectedPerson.highlights.map(highlight => (
                        <li key={highlight.id} className="flex items-start group w-full">
                          <CheckCircle2 className="w-4 h-4 mr-3 text-[#02029c] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                          <span className="text-sm md:text-[15px] text-black/95 leading-relaxed w-full">{highlight.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      <ContactUs />
      <Footer />
    </main>
  );
}
