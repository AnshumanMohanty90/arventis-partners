export interface PracticeHighlight {
  id: string;
  text: string;
}

export interface Person {
  id: string;
  slug: string;
  name: string;
  cardName?: string;
  discipline: 'Strategy Consulting' | 'Legal' | 'Advocates';
  category: 'Founding Partner' | 'Consultancy' | 'Legal';
  title: string;
  experience: string; 
  geographies: string[]; 
  shortBio: string;
  shortDesc: string;
  fullBio: string;
  bio: string[];
  highlights: PracticeHighlight[];
  imagePath: string;
  image: string;
  badge?: string;
  credentials?: string;
  customSectionTitle?: string;
  customSectionContent?: string[];
  clientList?: string[];
  linkedin: string;
  instagram: string;
}

export type MemberProfile = Person;

export const peopleData: Person[] = [
  {
    id: 'anshuman',
    slug: 'anshuman-mohanty',
    name: 'Anshuman Mohanty',
    discipline: 'Strategy Consulting',
    category: 'Founding Partner',
    title: ' STRATEGY CONSULTING SERVICES',
    experience: '11+ Years',
    geographies: ['India', 'GCC', 'UK', 'US', 'South Korea'],
    shortBio: 'Eleven years at the sharp end of growth decisions, holding P and L ownership across consulting, BFSI, government, and technology-led businesses.',
    shortDesc: 'Strategy consulting leader with 11+ years of P and L ownership across consulting, BFSI, government, and tech.',
    fullBio: 'Anshuman Mohanty has eleven years of experience in growth strategy, holding P and L ownership across consulting, BFSI, government, and technology-led businesses as Co-Founder, Business Head, and Strategic Sales Leader. He has built markets, run sales organisations, led government digital transformation, and executed cross-border market entries across five geographies.\nThe approach applied to every engagement is consistent: a diagnostic phase precedes strategy design, the strategy is built for execution rather than presentation, and Anshuman remains directly involved through implementation. Clients working with him engage a partner with direct operating experience, across sectors and at scale.',
    bio: [
      'Anshuman Mohanty has eleven years of experience in growth strategy, holding P and L ownership across consulting, BFSI, government, and technology-led businesses as Co-Founder, Business Head, and <br/>Strategic Sales Leader. He has built markets, run sales organisations, led government digital transformation, and executed cross-border market entries across five geographies.',
      'The approach applied to every engagement is consistent: a diagnostic phase precedes strategy design, the strategy is built for execution rather than presentation, and Anshuman remains directly involved through implementation. Clients working with him engage a partner with direct operating experience, across sectors and at scale.'
    ],
    customSectionTitle: 'THE CONSULTING NETWORK',
    customSectionContent: [
      'Every engagement is led directly by Anshuman Mohanty and supported by a global network of academics, domain specialists, and sector experts, engaged by mandate rather than assigned by default. This structure gives clients a senior partner present throughout the engagement, supported by specialist expertise where the work requires it.',
      'The network spans strategy, operations, digital, finance, and sector verticals across India, the GCC, Europe, and the US, and includes senior academics, IIM faculty, central banking alumni, and industry principals with direct P and L experience. Clients receive senior-level expertise without the overhead structure of a large firm.'
    ],
    highlights: [
      { id: 'a1', text: 'P and L leadership across multi-geography corporate and state initiatives' },
      { id: 'a2', text: 'Architect of sales operating models and GTM strategies in 5 countries' },
      { id: 'a3', text: 'Digital transformation lead recognised at World Economic Forum' }
    ],
    imagePath: '/Anshuman.png',
    image: '/Anshuman.png',
    badge: '11+ Years Experience',
    credentials: 'MBA, IIM Lucknow  |  11+ Years  |  India – GCC – UK – US – South Korea',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'suman-thakur',
    slug: 'kumar-suman',
    name: 'Kumar Suman',
    discipline: 'Legal',
    category: 'Founding Partner',
    title: ' LEGAL  |  ADVOCATE',
    experience: '13+ Years',
    geographies: ['Delhi', 'Chandigarh', 'Himachal Pradesh'],
    shortBio: 'Thirteen years of advocacy, litigation, and public interest law, with a focus on arbitration, land acquisition, infrastructure, and public law.',
    shortDesc: 'Supreme Court advocate specialising in commercial litigation, arbitration, infrastructure, and public law.',
    fullBio: 'As the Founding Partner of Arventis Partners, Kumar Suman establishes the firm\'s strategic vision and leads its most critical legal matters. With over thirteen years of experience, Mr. Suman has cultivated a robust practice that bridges the legal landscapes of Delhi, Chandigarh, and Himachal Pradesh, making him a uniquely versatile advocate for clients navigating complex regulatory and infrastructural challenges.\nHis practice is defined by a deep expertise in arbitration, land acquisition, and infrastructure disputes. He is the firm’s principal authority on public law and constitutional writs, frequently representing individuals, landowners, and business entities before civil courts, tribunals, and regulatory authorities. Mr. Suman is particularly distinguished by his work in complex, multi-stakeholder litigation involving infrastructure projects, where he expertly coordinates between private parties, government agencies, and affected communities to achieve practical and favorable resolutions.\nBeyond his commercial practice, Mr. Suman demonstrates a profound commitment to public interest law, particularly concerning displacement, rehabilitation, and social justice. He has successfully represented petitioners before the High Courts in high-stakes public interest litigations, underscoring his dedication to advocating for equitable outcomes in matters of national significance.\nA graduate of the prestigious Faculty of Law, Delhi University, Mr. Suman’s leadership and legal acumen serve as the cornerstone of Arventis Partners, ensuring the firm delivers unparalleled representation and strategic counsel across the region.',
    bio: [
      'As the Founding Partner of Arventis Partners, Kumar Suman establishes the firm\'s strategic vision and leads its most critical legal matters. With over thirteen years of experience, Mr. Suman has cultivated a robust practice that bridges the legal landscapes of Delhi, Chandigarh, and Himachal Pradesh, making him a uniquely versatile advocate for clients navigating complex regulatory and infrastructural challenges.',
      'His practice is defined by a deep expertise in arbitration, land acquisition, and infrastructure disputes. He is the firm’s principal authority on public law and constitutional writs, frequently representing individuals, landowners, and business entities before civil courts, tribunals, and regulatory authorities. Mr. Suman is particularly distinguished by his work in complex, multi-stakeholder litigation involving infrastructure projects, where he expertly coordinates between private parties, government agencies, and affected communities to achieve practical and favorable resolutions.',
      'Beyond his commercial practice, Mr. Suman demonstrates a profound commitment to public interest law, particularly concerning displacement, rehabilitation, and social justice. He has successfully represented petitioners before the High Courts in high-stakes public interest litigations, underscoring his dedication to advocating for equitable outcomes in matters of national significance.',
      'A graduate of the prestigious Faculty of Law, Delhi University, Mr. Suman’s leadership and legal acumen serve as the cornerstone of Arventis Partners, ensuring the firm delivers unparalleled representation and strategic counsel across the region.'
    ],
    highlights: [
      { id: 's1', text: 'Arbitration and Alternative Dispute Resolution' },
      { id: 's2', text: 'Land Acquisition and Compensation' },
      { id: 's3', text: 'Infrastructure and Regulatory Litigation' },
      { id: 's4', text: 'Public Interest Litigation' },
      { id: 's5', text: 'Corporate Advisory and Commercial Disputes' },
      { id: 's6', text: 'Civil litigation' }
    ],
    imagePath: '/s-sir.png',
    image: '/s-sir.png',
    badge: '13+ Years Experience',
    credentials: 'Faculty of Law, Delhi University  |  13+ Years  |  Delhi – Himachal Pradesh',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'puja-dewan-seth',
    slug: 'puja-dewan-seth',
    name: 'Puja Dewan Seth',
    discipline: 'Advocates',
    category: 'Legal',
    title: 'ADVOCATE-ON-RECORD, <br/> SUPREME COURT OF INDIA',
    experience: '15+ Years',
    geographies: ['Supreme Court of India', 'Delhi High Court'],
    shortBio: 'Puja Dewan Seth is an Advocate-on-Record before the Supreme Court of India, with over fifteen years of litigation experience.',
    shortDesc: 'Advocate-on-Record, Supreme Court of India with 15+ years experience.',
    fullBio: 'Puja Dewan Seth is an Advocate-on-Record before the Supreme Court of India, with over fifteen years of litigation experience. She holds a Master of Business Laws from the National Law School of India University, Bengaluru, and appears regularly before the Supreme Court, the Delhi High Court, the Debt Recovery Tribunal, the Debt Recovery Appellate Tribunal, the National Company Law Tribunal, the Armed Forces Tribunal, and consumer forums.\nHer practice covers banking and financial disputes, commercial litigation, recovery proceedings, consumer law, corporate advisory, and civil litigation. Ms. Seth drafts pleadings, commercial agreements, legal opinions, appeals, and written submissions, and conducts trials, cross-examinations, and final arguments on behalf of financial institutions, corporate clients, and individuals.',
    bio: [
      'Puja Dewan Seth is an Advocate-on-Record before the Supreme Court of India, with over fifteen years of litigation experience. She holds a Master of Business Laws from the National Law School of India University, Bengaluru, and appears regularly before the Supreme Court, the Delhi High Court, the Debt Recovery Tribunal, the Debt Recovery Appellate Tribunal, the National Company Law Tribunal, the Armed Forces Tribunal, and consumer forums.',
      'Her practice covers banking and financial disputes, commercial litigation, recovery proceedings, consumer law, corporate advisory, and civil litigation. Ms. Seth drafts pleadings, commercial agreements, legal opinions, appeals, and written submissions, and conducts trials, cross-examinations, and final arguments on behalf of financial institutions, corporate clients, and individuals.'
    ],
    customSectionTitle: 'EDUCATION',
    customSectionContent: [
      'Master of Business Laws (M.B.L.), National Law School of India University, Bengaluru'
    ],
    highlights: [
      { id: 'p1', text: 'Supreme Court Litigation' },
      { id: 'p2', text: 'Banking and Financial Disputes' },
      { id: 'p3', text: 'Commercial and Corporate Litigation' },
      { id: 'p4', text: 'Civil and Property Litigation' },
      { id: 'p5', text: 'Commercial Documentation and Legal Advisory' },
      { id: 'p6', text: 'Contract Drafting & Negotiation' }
    ],
    imagePath: '/Puja_Dewan.jpeg',
    image: '/Puja_Dewan.jpeg',
    badge: '15+ Years Experience',
    credentials: '15+ Years Experience',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'sweta-sharma',
    slug: 'sweta-sharma',
    name: 'Sweta Sharma',
    discipline: 'Advocates',
    category: 'Legal',
    title: 'ADVOCATE, HIGH COURT OF HIMACHAL PRADESH, DISTRICT COURT BILASPUR',
    experience: '15+ Years',
    geographies: ['High Court of Himachal Pradesh', 'District Court Bilaspur'],
    shortBio: 'Over fifteen years of experience across criminal law, construction disputes, banking and financial litigation, arbitration, infrastructure projects, and regulatory compliance.',
    shortDesc: 'Advocate, High Court of Himachal Pradesh, District Court Bilaspur.',
    fullBio: 'Sweta has over fifteen years of experience across criminal law, construction disputes, banking and financial litigation, arbitration, infrastructure projects, and regulatory compliance. She has advised and represented government bodies, public sector undertakings, financial institutions, and corporate organizations, including the National Highways Authority of India, the National Highways and Infrastructure Development Corporation Limited, the National Thermal Power Corporation, Infrastructure Leasing and Financial Services, Punjab National Bank, SBI Life Insurance Company, and the Himachal Pradesh Building and Other Construction Workers Welfare Board.\nMs. Sweta appears regularly before the High Court of Himachal Pradesh and District Courts, and her practice covers commercial disputes, arbitration proceedings, contractual matters, infrastructure related litigation, banking recovery proceedings, and criminal prosecutions.',
    bio: [
      'Sweta has over fifteen years of experience across criminal law, construction disputes, banking and financial litigation, arbitration, infrastructure projects, and regulatory compliance. She has advised and represented government bodies, public sector undertakings, financial institutions, and corporate organizations, including the National Highways Authority of India, the National Highways and Infrastructure Development Corporation Limited, the National Thermal Power Corporation, Infrastructure Leasing and Financial Services, Punjab National Bank, SBI Life Insurance Company, and the Himachal Pradesh Building and Other Construction Workers Welfare Board.',
      'Ms. Sweta appears regularly before the High Court of Himachal Pradesh and District Courts, and her practice covers commercial disputes, arbitration proceedings, contractual matters, infrastructure related litigation, banking recovery proceedings, and criminal prosecutions.'
    ],
    highlights: [
      { id: 'ss1', text: 'Criminal Litigation' },
      { id: 'ss2', text: 'Land acquisition matters' },
      { id: 'ss3', text: 'Banking and Financial Litigation' },
      { id: 'ss4', text: 'Commercial and Civil Disputes' },
      { id: 'ss5', text: 'Regulatory and Legal Compliance' },
      { id: 'ss6', text: 'Government Litigation' }
    ],
    imagePath: '/Sweta_new.png',
    image: '/Sweta_new.png',
    badge: '15+ Years Experience',
    credentials: '15+ Years Experience',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'uday-seth',
    slug: 'uday-seth',
    name: 'Uday Seth',
    discipline: 'Advocates',
    category: 'Legal',
    title: 'ADVOCATE, DELHI HIGH COURT',
    experience: '14+ Years',
    geographies: ['Supreme Court of India', 'Delhi High Court', 'Civil and Criminal Courts'],
    shortBio: 'Partner at Arventis Partners with over fourteen years of experience in dispute resolution, representing clients before the Supreme Court, Delhi High Court, and various courts.',
    shortDesc: 'Advocate, Delhi High Court with 14+ years experience.',
    fullBio: 'Uday Seth is a Partner at Arventis Partners with over fourteen years of experience in dispute resolution. He represents clients before the Supreme Court of India, the Delhi High Court, the Debt Recovery Tribunal, the Debt Recovery Appellate Tribunal, the National Company Law Tribunal, the Armed Forces Tribunal, consumer forums, and civil and criminal courts across the country. He advises banks, financial institutions, corporate entities, and private clients on recovery proceedings, insolvency matters, regulatory litigation, and high value contractual disputes.\nPrior to independent practice, Mr. Seth served as a Law Researcher at the Delhi High Court, where he worked on legal research and judicial process. His practice combines litigation before multiple judicial and quasi-judicial forums with advisory work on commercial negotiations and financial documentation.',
    bio: [
      'Uday Seth is a Partner at Arventis Partners with over fourteen years of experience in dispute resolution. He represents clients before the Supreme Court of India, the Delhi High Court, the Debt Recovery Tribunal, the Debt Recovery Appellate Tribunal, the National Company Law Tribunal, the Armed Forces Tribunal, consumer forums, and civil and criminal courts across the country. He advises banks, financial institutions, corporate entities, and private clients on recovery proceedings, insolvency matters, regulatory litigation, and high value contractual disputes.',
      'Prior to independent practice, Mr. Seth served as a Law Researcher at the Delhi High Court, where he worked on legal research and judicial process. His practice combines litigation before multiple judicial and quasi-judicial forums with advisory work on commercial negotiations and financial documentation.'
    ],
    highlights: [
      { id: 'us1', text: 'Banking and Financial Litigation' },
      { id: 'us2', text: 'Insolvency and Recovery Proceedings' },
      { id: 'us3', text: 'Commercial and Civil Litigation' },
      { id: 'us4', text: 'Criminal Litigation, including White Collar Crime, Financial Fraud, and Cyber Crime' },
      { id: 'us5', text: 'Property and Real Estate Disputes' },
      { id: 'us6', text: 'Commercial Contracts and Financial Documentation' }
    ],
    imagePath: '/Uday_Seth.jpeg',
    image: '/Uday_Seth.jpeg',
    badge: '14+ Years Experience',
    credentials: '14+ Years Experience',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'yash-thakur',
    slug: 'yash-thakur',
    name: 'Yash Thakur',
    discipline: 'Advocates',
    category: 'Legal',
    title: 'ADVOCATE, DELHI HIGH COURT & HIGH COURT OF HIMACHAL PRADESH',
    experience: '20+ Years',
    geographies: ['Supreme Court of India', 'Delhi High Court', 'High Court of Himachal Pradesh', 'District Courts'],
    shortBio: 'Over 20 years of experience in litigation, dispute resolution, and legal advisory across judicial and quasi-judicial forums in India.',
    shortDesc: 'Advocate, Delhi High Court & High Court of Himachal Pradesh',
    fullBio: 'Yash Thakur has over twenty years of experience in litigation, dispute resolution, and legal advisory. He represents individuals, corporate entities, financial institutions, and government bodies before judicial and quasi-judicial forums across India, including the Supreme Court of India, the Delhi High Court, District Courts, the National Company Law Tribunal, the National Consumer Disputes Redressal Commission, and various arbitral tribunals.\nHis practice covers criminal litigation, civil disputes, land acquisition matters, property litigation, consumer disputes, arbitration, and commercial litigation, with particular experience in Motor Accident Claims Tribunal matters on behalf of claimants and institutional clients. Mr. Thakur also serves as panel advocate for corporate clients on litigation strategy, contractual disputes, regulatory compliance, recovery proceedings, and risk management.',
    bio: [
      'Yash Thakur has over twenty years of experience in litigation, dispute resolution, and legal advisory. He represents individuals, corporate entities, financial institutions, and government bodies before judicial and quasi-judicial forums across India, including the Supreme Court of India, the Delhi High Court, District Courts, the National Company Law Tribunal, the National Consumer Disputes Redressal Commission, and various arbitral tribunals.',
      'His practice covers criminal litigation, civil disputes, land acquisition matters, property litigation, consumer disputes, arbitration, and commercial litigation, with particular experience in Motor Accident Claims Tribunal matters on behalf of claimants and institutional clients. Mr. Thakur also serves as panel advocate for corporate clients on litigation strategy, contractual disputes, regulatory compliance, recovery proceedings, and risk management.'
    ],
    highlights: [
      { id: 'y1', text: 'Land Acquisition and Compensation Matters' },
      { id: 'y2', text: 'Motor Accident Claims (MACT)' },
      { id: 'y3', text: 'Criminal Litigation' },
      { id: 'y4', text: 'Civil Litigation' },
      { id: 'y5', text: 'Consumer Protection and Consumer Litigation' },
      { id: 'y6', text: 'Arbitration and Alternative Dispute Resolution' }
    ],
    imagePath: '/Yash_new.png',
    image: '/Yash_new.png',
    badge: '20+ Years Experience',
    credentials: '20+ Years Experience',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'vipin-kumar',
    slug: 'vipin-kumar',
    name: 'Vipin Kumar',
    discipline: 'Advocates',
    category: 'Legal',
    title: 'ADVOCATE, PUNJAB AND HARYANA HIGH COURT',
    experience: '12+ Years',
    geographies: ['Punjab and Haryana High Court', 'Civil Courts'],
    shortBio: 'Over twelve years of experience before the Punjab and Haryana High Court, Chandigarh, covering civil and commercial litigation.',
    shortDesc: 'Advocate, Punjab and Haryana High Court',
    fullBio: 'Vipin Kumar has over twelve years of experience before the Punjab and Haryana High Court, Chandigarh. His practice covers civil and commercial litigation, with a focus on real estate matters under RERA, consumer protection, and corporate law. He represents individuals, businesses, developers, and corporate entities before the High Court, RERA authorities, Consumer Commissions, and civil courts.\nMr. Kumar advises clients through each stage of litigation, from consultation and dispute resolution to trial, appellate proceedings, and enforcement of judgments.',
    bio: [
      'Vipin Kumar has over twelve years of experience before the Punjab and Haryana High Court, Chandigarh. His practice covers civil and commercial litigation, with a focus on real estate matters under RERA, consumer protection, and corporate law. He represents individuals, businesses, developers, and corporate entities before the High Court, RERA authorities, Consumer Commissions, and civil courts.',
      'Mr. Kumar advises clients through each stage of litigation, from consultation and dispute resolution to trial, appellate proceedings, and enforcement of judgments.'
    ],
    customSectionTitle: 'BAR ADMISSIONS',
    customSectionContent: [
      'Bar Council of Punjab and Haryana',
      'Practising before the Punjab and Haryana High Court, Chandigarh, and various courts, tribunals, and regulatory authorities'
    ],
    highlights: [
      { id: 'vk1', text: 'Real Estate Litigation and Regulatory Matters (RERA)' },
      { id: 'vk2', text: 'Civil and Commercial Litigation' },
      { id: 'vk3', text: 'Property and Land Laws' },
      { id: 'vk4', text: 'Consumer Disputes & Labour Disputes' },
      { id: 'vk5', text: 'Writ Jurisdiction before the High Court' },
      { id: 'vk6', text: 'Arbitration Related Proceedings & Family Law' }
    ],
    imagePath: '/Vipin_Kumar.jpg',
    image: '/Vipin_Kumar.jpg',
    badge: '12+ Years Experience',
    credentials: '12+ Years Experience',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'adarsh-prabhat-asthana',
    slug: 'adarsh-prabhat-asthana',
    name: 'Adarsh Prabhat Asthana',
    cardName: 'Adarsh Asthana',
    discipline: 'Advocates',
    category: 'Legal',
    title: 'ADVOCATE, HIGH COURT OF JUDICATURE AT ALLAHABAD, LUCKNOW BENCH',
    experience: '14+ Years',
    geographies: ['High Court of Judicature at Allahabad', 'Lucknow Bench', 'District and Sessions Courts', 'Revenue Courts'],
    shortBio: 'Over fourteen years of experience in litigation, dispute resolution, and legal advisory based in Lucknow, Uttar Pradesh.',
    shortDesc: 'Advocate, High Court of Judicature at Allahabad, Lucknow Bench',
    fullBio: 'Adarsh Prabhat Asthana has over fourteen years of experience in litigation, dispute resolution, and legal advisory. Based in Lucknow, Uttar Pradesh, his practice covers individuals, businesses, financial institutions, and government organizations across a range of civil and financial matters.\nHis practice is focused on civil litigation, revenue matters, debt recovery, banking and financial litigation, arbitration, and bail matters. Mr. Asthana appears regularly before the High Court of Judicature at Allahabad, Lucknow Bench, District and Sessions Courts, Revenue Courts, the Debt Recovery Tribunal, and arbitral tribunals, and provides legal consultancy alongside his litigation practice.',
    bio: [
      'Adarsh Prabhat Asthana has over fourteen years of experience in litigation, dispute resolution, and legal advisory. Based in Lucknow, Uttar Pradesh, his practice covers individuals, businesses, financial institutions, and government organizations across a range of civil and financial matters.',
      'His practice is focused on civil litigation, revenue matters, debt recovery, banking and financial litigation, arbitration, and bail matters. Mr. Asthana appears regularly before the High Court of Judicature at Allahabad, Lucknow Bench, District and Sessions Courts, Revenue Courts, the Debt Recovery Tribunal, and arbitral tribunals, and provides legal consultancy alongside his litigation practice.'
    ],
    highlights: [
      { id: 'ad1', text: 'Civil Litigation' },
      { id: 'ad2', text: 'Revenue Matters' },
      { id: 'ad3', text: 'Debt Recovery' },
      { id: 'ad4', text: 'Banking and Financial Litigation' },
      { id: 'ad5', text: 'Arbitration' },
      { id: 'ad6', text: 'Bail Matters & Recovery Proceedings' }
    ],
    imagePath: '/Adarsh_new.png',
    image: '/Adarsh_new.png',
    badge: '14+ Years Experience',
    credentials: '14+ Years Experience',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  },
  {
    id: 'jitesh-tomar',
    slug: 'jitesh-tomar',
    name: 'Jitesh Tomar',
    discipline: 'Advocates',
    category: 'Legal',
    title: 'ADVOCATE, DELHI DISTRICT COURTS AND HIGH COURT OF DELHI',
    experience: '13+ Years',
    geographies: ['Delhi District Courts', 'High Court of Delhi'],
    shortBio: 'Over thirteen years of experience representing individuals, corporations, and institutions before the Delhi District Courts and the High Court of Delhi.',
    shortDesc: 'Advocate, Delhi District Courts and High Court of Delhi',
    fullBio: 'Jitesh Tomar has over thirteen years of experience representing individuals, corporations, and institutions before the Delhi District Courts, the High Court of Delhi, and the National Company Law Tribunal. His practice covers corporate and commercial disputes, civil litigation, constitutional writs, criminal litigation, white collar crime, consumer disputes, and debt recovery matters.\nMr. Tomar advises clients across these forums on litigation strategy and case preparation, and has handled complex, high value, and multi-jurisdictional disputes on behalf of corporate and individual clients.',
    bio: [
      'Jitesh Tomar has over thirteen years of experience representing individuals, corporations, and institutions before the Delhi District Courts, the High Court of Delhi, and the National Company Law Tribunal. His practice covers corporate and commercial disputes, civil litigation, constitutional writs, criminal litigation, white collar crime, consumer disputes, and debt recovery matters.',
      'Mr. Tomar advises clients across these forums on litigation strategy and case preparation, and has handled complex, high value, and multi-jurisdictional disputes on behalf of corporate and individual clients.'
    ],
    highlights: [
      { id: 'jt1', text: 'Corporate and Commercial Disputes' },
      { id: 'jt2', text: 'Civil Litigation' },
      { id: 'jt3', text: 'Criminal Litigation and White Collar Crime' },
      { id: 'jt4', text: 'Consumer Disputes' },
      { id: 'jt5', text: 'Debt Recovery' }
    ],
    imagePath: '/Jitesh_Tomar.jpg',
    image: '/Jitesh_Tomar.jpg',
    badge: '13+ Years Experience',
    credentials: '13+ Years Experience',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com'
  }
];

export const ALL_PEOPLE = peopleData;

export function getPersonBySlug(slug: string): MemberProfile | undefined {
  return ALL_PEOPLE.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}
