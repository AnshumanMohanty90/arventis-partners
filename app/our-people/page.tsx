'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, CheckCircle2, X } from 'lucide-react';
import { peopleData, Person } from './peopleData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (selectedPerson) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
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

  const foundingPartners = [
    peopleData.find(p => p.id === 'kumar-suman'),
    peopleData.find(p => p.id === 'anshuman')
  ].filter(Boolean) as Person[];

  const otherMembers = [
    peopleData.find(p => p.id === 'yash-thakur'),
    peopleData.find(p => p.id === 'sweta'),
    peopleData.find(p => p.id === 'adarsh')
  ].filter(Boolean) as Person[];

  function getDomainPosition(person: Person) {
    if (person.id === 'anshuman') {
      return 'Strategy Consulting | Founding Partner';
    }
    if (person.id === 'kumar-suman') {
      return 'Legal | Founding Partner';
    }
    if (person.id === 'yash-thakur') {
      return 'Legal | Associate Counsel';
    }
    if (person.id === 'sweta') {
      return 'Legal | Advocate';
    }
    if (person.id === 'adarsh') {
      return 'Legal | Advocate';
    }
    return `${person.discipline} | ${person.badge || 'Member'}`;
  }

  const renderCard = (person: Person) => (
    <div 
      key={person.id} 
      onClick={() => setSelectedPerson(person)}
      className="bg-white rounded-none cursor-pointer group flex flex-col w-full border border-black/5 hover:shadow-xl transition-all duration-300 pb-4"
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-50">
        <Image
          src={person.imagePath}
          alt={person.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
        />
      </div>
      <div className="px-4 pt-4 flex flex-col">
        <h3 className="text-lg sm:text-2xl font-serif text-black font-semibold group-hover:text-[#fa0249] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
          {person.name}
        </h3>
        <p className="text-xs sm:text-sm font-sans text-black/60 mt-1 font-medium">
          {getDomainPosition(person)}
        </p>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-white pb-0">
      <Navbar />
      {/* 1. Hero Section */}
      <section className="bg-[#000000] text-white pt-28 md:pt-36 pb-14 px-6 md:px-12 lg:px-24 border-b border-white/10">
        <div className="max-w-3xl mx-auto text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-6 text-white uppercase tracking-tight">
            <RevealHeading>OUR PEOPLE</RevealHeading>
          </h1>
          <p className="scroll-fade-up font-sans text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl transition-delay-300">
            Arventis is led by founding partners across strategy and law, supported by senior advocates and experienced consultants with decades of experience. Every engagement is handled by someone who has done the work before, not handed off to whoever is available.
          </p>
        </div>
      </section>

      {/* 2. Team Sections */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 space-y-16">
        {/* Founding Partners */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-black border-b border-black/10 pb-4">
            Founding Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {foundingPartners.map(renderCard)}
          </div>
        </div>

        {/* Other Team Members */}
        <div className="space-y-8 pt-8">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-black border-b border-black/10 pb-4">
            Other Team Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            {otherMembers.map(renderCard)}
          </div>
        </div>
      </section>

      {/* 3. The Detail View (Modal) */}
      {selectedPerson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 lg:p-12 bg-black/75 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="bg-white w-full max-w-6xl max-h-[95vh] overflow-y-auto rounded-none shadow-2xl relative animate-in slide-in-from-bottom-8 duration-500"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPerson(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 text-black transition-colors z-20 group"
            >
              <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Left Column (30%) */}
              <div className="w-full md:w-1/3 bg-neutral-50 p-8 md:p-12 border-r border-black/5 flex flex-col">
                <div className="relative w-full aspect-square md:aspect-[4/5] mb-8 overflow-hidden shadow-md">
                  <Image
                    src={selectedPerson.imagePath}
                    alt={selectedPerson.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-4xl font-serif text-black mb-2">{selectedPerson.name}</h2>
                <p className="text-black/70 font-medium text-lg mb-8">{selectedPerson.title}</p>
                
                <div className="space-y-6 mt-auto">
                  <div>
                    <span className="text-xs font-bold text-black/55 uppercase tracking-widest block mb-2">Experience</span>
                    <p className="text-base font-medium text-black">{selectedPerson.experience}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-black/55 uppercase tracking-widest block mb-3">Geographies</span>
                    <ul className="space-y-3">
                      {selectedPerson.geographies.map((geo, idx) => (
                        <li key={idx} className="flex items-start text-sm font-medium text-black">
                          <MapPin className="w-4 h-4 mr-3 text-black/40 shrink-0 mt-0.5" />
                          <span>{geo}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>  

              {/* Right Column (70%) */}
              <div className="w-full md:w-2/3 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white">
                <p className="text-2xl md:text-3xl font-serif text-black leading-tight mb-8 font-medium">
                  "{selectedPerson.shortBio}"
                </p>
                <div className="text-lg text-black/75 leading-relaxed mb-12 whitespace-pre-line">
                  {selectedPerson.fullBio}
                </div>

                <div className="mt-auto">
                  <h4 className="text-xs font-bold text-black uppercase tracking-widest mb-6 border-b border-black/10 pb-3">
                    Practice Highlights
                  </h4>
                  <ul className="space-y-5">
                    {selectedPerson.highlights.map(highlight => (
                      <li key={highlight.id} className="flex items-start group">
                        <CheckCircle2 className="w-6 h-6 mr-4 text-[#fa0249] shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <span className="text-base text-black/80 leading-relaxed font-medium group-hover:text-black transition-colors">
                          {highlight.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT CTA SECTION */}
      <section className="relative w-full bg-white py-20 px-6 md:px-16 border-t border-black/10 text-center text-black z-20">
        <div className="max-w-4xl mx-auto space-y-6 scroll-fade-up">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-black">
            Let's Start the Conversation
          </h2>
          <p className="font-sans text-sm md:text-base text-black/70 font-light max-w-2xl mx-auto leading-relaxed">
            Establish a direct partner relationship or initiate a mandate. Our strategy and legal practices operate under strict NDA protocols.
          </p>
          <div className="pt-4">
            <Link
              href="/contact-us"
              className="inline-block bg-[#fa0249] hover:bg-black text-white font-bold text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300 hover-target shadow-xl rounded-[1px]"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
