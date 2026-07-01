'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, CheckCircle2, X } from 'lucide-react';
import { peopleData, Person } from './peopleData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function OurPeoplePage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const filters = ['All', 'Strategy Consulting', 'Legal', 'Advocates'];

  const filteredPeople = activeFilter === 'All' 
    ? peopleData 
    : peopleData.filter(person => person.discipline === activeFilter);

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

  return (
    <main className="min-h-screen bg-white pb-0">
      <Navbar />
      {/* 1. Hero Section */}
      <section className="bg-white text-black pt-28 md:pt-36 pb-14 px-6 md:px-12 lg:px-24 border-b border-black/10">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6">One Team, Two Disciplines</h1>
          <p className="text-lg md:text-xl text-black/70 leading-relaxed">
            Arventis is led by founding partners across strategy and law, supported by senior advocates and experienced consultants with decades of experience. Every engagement is handled by someone who has done the work before, not handed off to whoever is available.
          </p>
        </div>
      </section>

      {/* 2. Filter Bar */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md py-4 px-6 md:px-12 border-b border-black/10">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center md:justify-start">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-[#fa0249] text-white shadow-md' 
                  : 'bg-white text-black hover:bg-black/5 border border-black/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* 3. The Grid & Cards */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pt-10 pb-16">
        <div className="flex flex-wrap justify-center gap-12">
          {filteredPeople.map(person => (
            <div 
              key={person.id} 
              onClick={() => setSelectedPerson(person)}
              className="bg-white rounded-none cursor-pointer group hover:shadow-2xl transition-all duration-500 flex flex-col h-full w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] border border-black/5"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-50">
                <Image
                  src={person.imagePath}
                  alt={person.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-xs font-bold text-[#fa0249] uppercase tracking-widest mb-3">
                  {person.discipline}
                </span>
                <h3 className="text-3xl font-serif text-black mb-2 group-hover:text-black/70 transition-colors">
                  {person.name}
                </h3>
                <p className="text-sm font-medium text-black/60 mb-6">
                  {person.title}
                </p>
                <p className="text-sm text-black/70 line-clamp-3 mt-auto leading-relaxed">
                  {person.shortBio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. The Detail View (Modal) */}
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
