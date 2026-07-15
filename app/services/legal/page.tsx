'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../components/Navbar';
import ServiceDrawerItem from '../../components/ServiceDrawerItem';
import Footer from '../../components/Footer';
import ContactUs from '@/app/components/ContactUs';

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

const legalPractices = [
  {
    num: '01',
    title: 'Dispute Resolution and Commercial Litigation',
    description: [
      "Our dispute resolution practice offers services spanning litigation, arbitration, regulatory proceedings, and pre-dispute advisory. We represent clients before the Supreme Court of India, High Courts, District Courts, Tribunals, Appellate bodies, and Regulatory authorities across the country.",
      "<strong>Execution.</strong> Our expertise covers complex commercial and civil disputes, constitutional writs, service matters, property and real estate litigation, and high-value contractual claims. We advise clients on litigation strategy from consultation through trial, appellate proceedings, and enforcement of judgments. Our team has particular strength in multi-jurisdictional disputes that require coordination between private parties, government agencies, and regulatory bodies.",
      "<strong>Key Team:</strong> Kumar Suman, Uday Seth, Adarsh Prabhat Asthana, Jitesh Tomar"
    ]
  },
  {
    num: '02',
    title: 'Arbitration and Alternative Dispute Resolution',
    description: [
      "We advise clients on complex domestic and international commercial arbitration matters, from pre-arbitration strategy and settlement discussions to representation during arbitral proceedings and recognition and enforcement of awards.",
      "<strong>Execution.</strong> Our practice covers institutional and ad-hoc arbitration, with specific expertise in MSME disputes, infrastructure arbitration, construction contracts, and commercial disagreements arising from joint ventures, supply chains, and public-private partnerships. We represent corporate clients, developers, government bodies, and individuals before domestic arbitral tribunals and have deep experience in arbitration-related litigation before High Courts and the Supreme Court.",
      "<strong>Key Team:</strong> Kumar Suman, Uday Seth, Yash Thakur, Vipin Kumar"
    ]
  },
  {
    num: '03',
    title: 'Infrastructure, Land Acquisition and Regulatory Litigation',
    description: [
      "We are trusted counsel for public sector undertakings, infrastructure developers, and impacted communities in some of India's most capital intensive sectors.",
      "<strong>Execution.</strong> Our practice handles the full lifecycle of infrastructure projects, including land acquisition and compensation claims, rehabilitation and resettlement matters, right of way disputes, environmental clearances, public procurement regulations, and project related litigation. We represent landowners in compensation enhancement proceedings, advise government bodies on acquisition frameworks, and act for corporate clients in disputes arising from EPC contracts, concession agreements, and public-private partnerships. Our practice also extends to public interest litigation concerning displacement and rehabilitation, where we have represented petitioners before the relevant courts.",
      "<strong>Key Team:</strong> Kumar Suman, Sweta Sharma, Yash Thakur"
    ]
  },
  {
    num: '04',
    title: 'Banking, Financial Litigation and Insolvency Resolution',
    description: [
      "We act as counsel for leading public and private sector banks, non-banking financial companies, and financial institutions across a broad spectrum of transactional, regulatory, and contentious matters.",
      "<strong>Execution.</strong> Our dedicated financial litigation team handles debt recovery proceedings before the Debt Recovery Tribunal and Debt Recovery Appellate Tribunal, SARFAESI actions, and counter-claims. We represent financial creditors and operational creditors before the National Company Law Tribunal and National Company Law Appellate Tribunal in insolvency and resolution proceedings. Our practice also covers commercial disputes arising from banking transactions, recovery proceedings, and regulatory compliance advisory for financial institutions. We also appear before the Armed Forces Tribunal and consumer forums to defend financial institutions against service related complaints.",
      "<strong>Key Team:</strong> Puja Dewan Seth (Advocate-on-Record), Uday Seth (Partner), Adarsh Prabhat Asthana"
    ]
  },
  {
    num: '05',
    title: 'White Collar Crime, Fraud and Investigations',
    description: [
      "Our practice covers anti-bribery, money laundering, asset tracing, banking frauds, cyber frauds including phishing, identity theft, and digital fraud matters, and sanctions related proceedings. We have seen a significant increase in whistleblower actions, internal investigations involving siphoning of funds, compliance programmes, and dawn raid preparedness, and we provide clients with an end to end solution.",
      "<strong>Execution.</strong> We regularly advise on matters pertaining to investigations by the Enforcement Directorate, Central Bureau of Investigation, Serious Fraud Investigations Office, Economic Offence Wing, cyber cells, and other law enforcement agencies. Our practice covers representation in Prevention of Corruption Act trials, banking fraud cases, insider trading investigations, and securities market fraud matters. We handle high stakes anticipatory and regular bail applications, trials, and appeals across Sessions Courts, High Courts, and the Supreme Court. Our in-house trial advocacy capabilities allow us to manage trials, appeals, witness summons, and internal inquiries with the highest level of competence.",
      "<strong>Key Team:</strong> Sweta Sharma, Uday Seth (Partner), Yash Thakur, Jitesh Tomar"
    ]
  },
  {
    num: '06',
    title: 'Real Estate and RERA Litigation',
    description: [
      "We represent developers, homebuyer associations, contractors, and corporate entities before the Real Estate Regulatory Authority, Appellate Tribunals, High Courts, and civil courts.",
      "<strong>Execution.</strong> Our practice covers the full spectrum of real estate disputes, including RERA compliance and regulatory matters, title investigations, acquisition and leasing of commercial and residential land, property litigation, and disputes arising from construction contracts and development agreements. We advise clients through each stage of litigation, from consultation and dispute resolution to trial, appellate proceedings, and enforcement of judgments.",
      "<strong>Key Team:</strong> Puja Dewan Seth (Advocate-on-Record), Yash Thakur, Vipin Kumar"
    ]
  },
  {
    num: '07',
    title: 'Consumer Protection and Insurance Litigation',
    description: [
      "We represent large insurers, banks, manufacturers, and individual claimants before consumer forums, the National Consumer Disputes Redressal Commission, and civil courts.",
      "<strong>Execution.</strong> Our practice covers consumer disputes across sectors, including insurance claims, product liability, deficiency in services, and class action complaints. We have particular experience in Motor Accident Claims Tribunal matters on behalf of claimants and institutional clients, handling high value third party claims and insurance recovery proceedings. Our team advises clients on litigation strategy, evidence preparation, and appellate strategy through to final resolution.",
      "<strong>Key Team:</strong> Uday Seth, Yash Thakur, Vipin Kumar, Jitesh Tomar"
    ]
  },
  {
    num: '08',
    title: 'Criminal Litigation and Trial Advocacy',
    description: [
      "We represent individuals, corporate entities, and institutions across the full spectrum of criminal litigation, from investigation and trial through appeal and revision.",
      "<strong>Execution.</strong> Our practice covers criminal trials, bail applications, quashing petitions, and revision petitions before Sessions Courts, High Courts, and the Supreme Court. We handle matters ranging from white collar crime and financial fraud to cyber crime and regulatory offences. Our team has deep experience in trial advocacy, cross examination, and final arguments, with particular focus on complex, multi party criminal proceedings that require strategic coordination across multiple jurisdictions.",
      "<strong>Key Team:</strong> Sweta Sharma, Uday Seth (Partner), Yash Thakur, Jitesh Tomar"
    ]
  },
  {
    num: '09',
    title: 'Constitutional Law and Public Interest Litigation',
    description: [
      "We are frequent counsel in constitutional writ petitions and public interest litigations concerning service law, displacement, rehabilitation, and arbitrary state action.",
      "<strong>Execution.</strong> Our practice covers representation of government employees and PSU staff in disciplinary actions, promotions, and termination disputes, writs challenging tax assessments, demand notices, and revenue recovery before Revenue Courts and High Courts, and public interest litigation concerning displacement and rehabilitation policies. We have represented petitioners before the relevant courts in matters involving social justice, land rights, and constitutional remedies.",
      "<strong>Key Team:</strong> Kumar Suman (Founding Partner), Adarsh Prabhat Asthana, Jitesh Tomar"
    ]
  },
  {
    num: '10',
    title: 'Corporate Advisory and Commercial Documentation',
    description: [
      "We advise leading companies and financial institutions on a wide spectrum of complex corporate and commercial issues.",
      "<strong>Execution.</strong> Our expertise is built on experience advising on all commercial contracts, including joint ventures and strategic alliances, complex contractual collaborations, licensing arrangements, product development, manufacturing and supply alliances, and commercial agreements. We draft pleadings, commercial agreements, legal opinions, appeals, and written submissions. Our practice also covers regulatory compliance, corporate governance advisory, and legal risk management for corporate clients across sectors.",
      "<strong>Key Team:</strong> Puja Dewan Seth (Advocate-on-Record), Uday Seth (Partner), Vipin Kumar"
    ]
  },
  {
    num: '11',
    title: 'Labour, Employment and Service Law',
    description: [
      "We advise corporate clients, government bodies, and individuals on the full spectrum of labour and employment law matters.",
      "<strong>Execution.</strong> Our practice covers employment contracts, disciplinary proceedings, termination disputes, service law matters before courts and tribunals, and regulatory compliance under the labour codes. We represent employers in employment related litigation and advise on workforce management, policy formulation, and dispute prevention strategies.",
      "<strong>Key Team:</strong> Uday Seth (Partner), Vipin Kumar"
    ]
  },
  {
    num: '12',
    title: 'Revenue, Taxation and Regulatory Matters',
    description: [
      "We represent individuals, businesses, and government organisations before Revenue Courts, High Courts, and regulatory authorities in matters concerning taxation, revenue recovery, and regulatory compliance.",
      "<strong>Execution.</strong> Our practice covers writ petitions challenging tax assessments and demand notices, revenue recovery proceedings, bail matters arising from tax investigations, and advisory on regulatory compliance across sectors. We appear regularly before Revenue Courts, the High Court of Judicature at Allahabad, Lucknow Bench, District and Sessions Courts, and arbitral tribunals.",
      "<strong>Key Team:</strong> Puja Dewan Seth and Uday Seth"
    ]
  }
];

export default function LegalPage() {
  const [activePractice, setActivePractice] = useState<number | null>(0);

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
    <div className="relative w-full overflow-hidden bg-white text-black min-h-screen">
      <Navbar />

      {/* Hero Section with Back Button */}
      <section className="relative w-full min-h-[60vh] md:min-h-[75vh] flex flex-col justify-between pb-16 md:pb-24 px-6 md:px-16 border-b border-white/10 text-white overflow-hidden pt-28 bg-black">
        {/* Background Video Layer */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://pub-e76f3c2b747241f99a84d7c073d76e11.r2.dev/legal_subpage.mp4" type="video/mp4" />
        </video>

        {/* Overlays for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 z-10"></div>

        <div className="max-w-7xl mx-auto w-full relative z-20 mt-4 md:mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-[#02029c] text-white text-xs tracking-[0.2em] font-bold uppercase border border-white/20 hover:border-[#02029c] px-5 py-3 transition-all duration-300 hover-target backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO OUR SERVICES</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20 mt-auto pt-16">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-white mb-6 max-w-4xl drop-shadow-lg">
            <RevealHeading>ARVENTIS LEGAL</RevealHeading>
          </h1>
          <p className="scroll-fade-up font-sans text-base sm:text-lg md:text-xl text-white/90 font-normal leading-relaxed max-w-3xl transition-delay-300 drop-shadow-md">
            Legal advisory and advocacy across Trial Courts, High Courts, <br className="hidden md:block" /> Arbitral Tribunals, and the Supreme Court of India.
          </p>
        </div>
      </section>


      {/* Practice Accordions Section */}
      <section className="relative w-full bg-white py-12 md:py-16 px-6 md:px-16 text-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 scroll-fade-up">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-black">
              Legal Practices
            </h2>
          </div>

          <div className="space-y-4">
            {legalPractices.map((practice, idx) => (
              <ServiceDrawerItem
                key={idx}
                num={practice.num}
                title={practice.title}
                description={practice.description}
                bullets={practice.bullets}
                isOpen={activePractice === idx}
                onToggle={() => setActivePractice(activePractice === idx ? null : idx)}
                theme="legal"
              />
            ))}
          </div>
        </div>
        
      </section>

      <ContactUs />

      <Footer />
    </div>
  );
}
