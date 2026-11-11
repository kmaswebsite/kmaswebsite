// Verbatim text sourced from the KMAS Profile PDF. Do not paraphrase —
// only split into fields/array items along the PDF's own paragraph and
// punctuation breaks.

export const kmasAbout = {
  companyName: "Krishna's Management Advisory & Services (KMAS)",
  founded: "2015",
  // Client-supplied description of KMAS (content corrections, Nov 2026).
  description:
    "KMAS is a consultancy firm, offering strategic and operational advice & suggestions on result-oriented business development through people performance initiatives to its clients and hand-holding in successfully implementing the same.",
  aboutParagraph:
    "Krishna’s Management Advisory & Services (KMAS) was started in the year 2015 by Ramakrishnan Mohan, a Senior HR professional, advisor, and a leader with close to 4 decades of experience in all facets of Human Resources Development with many reputed organizations.",
};

export const kmasLeader = {
  name: "Ramakrishnan Mohan",
  title: "Director & Managing Partner",
  bioParagraph:
    "HR professional and advisor with 39 years of experience in the industry, handling the entire gamut of HR, with more than 20 years in leadership positions with reputed organizations. With good relationship management and negotiation skills made many bipartite and tripartite Settlements/Agreements on wages, bonus, benefits and service conditions. Besides, training, mentoring, and coaching the middle and senior management to become ‘Change Agents’, advising leadership on business enhancement through people performance initiatives. Helping organizations become statutorily compliant and guiding them as a third eye.",
  chairmanLine:
    "He is currently serving as the Chairman for the Indian Society for Training & Development, Coimbatore.",
};

export const kmasVision =
  "To empower organizations in visualizing and creating a productive and performing workforce equipping them with the knowledge and skills required to contribute to the growth and wellbeing of the company and society.";

export const kmasMission =
  "To help customers achieve their business objectives by providing innovative, best-in-class consulting, solutions, management advisory and services.";

export type KmasTeamMember = {
  id: string;
  name: string;
  title: string;
  photo: string;
  paragraphs: string[];
};

// Team profiles below the Director. Order as requested by the client:
// Senior Consultant first, Principal Consultant (Bala) last.
export const kmasTeam: KmasTeamMember[] = [
  {
    id: "karthik-viswanathan",
    name: "Karthik Viswanathan",
    title: "Senior Consultant",
    photo: "/images/karthik-viswanathan.jpg",
    paragraphs: [
      "Accomplished Business & Management Professional with 18+ years of cross-functional experience in Business Development, Strategic Sales Management, Business Intelligence, Market Expansion, Operational Excellence, and Training & Organizational Development.",
      "Proven expertise in driving business growth, identifying new market opportunities, developing strategic partnerships, strengthening sales ecosystems, and translating business intelligence into actionable strategies for revenue growth and profitability. Adept at leveraging performance analytics, sales forecasting, market intelligence, category management, and KPI-driven decision-making to improve business performance and operational effectiveness.",
      "Experienced in designing and implementing structured sales strategies, business development frameworks, SOPs, performance management systems, and capability-building initiatives. Strong track record in establishing sales academies, developing LMS-based learning ecosystems, coaching leadership teams, and building high-performance workforces aligned with organizational objectives.",
      "Recognized for connecting Business Strategy, Sales Performance, Data Intelligence, and People Development to deliver measurable business outcomes, sustainable growth, improved productivity, and enhanced customer experience.",
      "As a Senior Consultant, focused on partnering with organizations to identify business opportunities, address performance gaps, streamline processes, strengthen management capabilities, and drive sustainable business transformation through strategic thinking and execution excellence.",
    ],
  },
  {
    id: "balasundaram",
    name: "Mr. V. Balasundaram",
    title: "Principal Consultant – Operations & Compliance",
    photo: "/images/balasundaram.png",
    paragraphs: [
      "A Proven HR professional with over 25+ years of diverse experience in Human Resource Management. He has held Leadership roles in reputed organizations such as Cameron, Elgi Rubber, and Super Sales India Private Limited, with expertise in HR strategy, Employee Relations, Performance management, Talent Development, Succession planning, HR policies, and organizational development.",
      "He holds a Master of Social Work (MSW) from Sri Ramakrishna Mission Vidyalaya Arts & Science College, Coimbatore, affiliated with Bharathiar University.",
      "Mr. Balasundaram currently serves as the Secretary of the Indian Society for Training & Development (ISTD), Coimbatore Chapter, a premier national professional body dedicated to Learning and Development. He is also a Regional Committee Member of the Dattopant Thengadi National Board for Workers' Education & Development (DTNBWED). Through KMAS he partners with organizations to build effective HR systems, Develop Leaders and foster high-performing workplaces.",
      "As a Principal Consultant at KMAS, Mr. Balasundaram focuses on Operations, Statutory Compliance, and Industrial Relations, leveraging his extensive experience in HR leadership and organizational management. He partners with organizations to strengthen operational processes, ensure statutory and labour law compliance, streamline HR and administrative systems, manage employee relations and promote workplace discipline. He also advises organizations on policy implementation, compliance management and operational effectiveness, helping build sustainable, compliant and high performing workplaces.",
    ],
  },
];

export const kmasCultureParagraph =
  "Evolve at vision & mission statements from the leadership, cascading the same to the last level employee thro various engagement initiatives, elicit the greatness and challenges perceived by employees thro surveys, rewarding and recognizing the fast trackers and change agents, bridging the gap for those who struggle, make transparent learning and performance evaluation using objective tools, build culture with ethos and continuous learning, bring about pride in working for the growth of the organization and feeling good to be part of it.";

// Verbatim phrase fragments lifted directly from kmasCultureParagraph above,
// split only along the PDF's own comma breaks — used as "Why Choose KMAS" points.
export const kmasWhyChoose = [
  {
    icon: "bi bi-flag",
    title: "Vision & Mission Cascade",
    description: "Evolve at vision & mission statements from the leadership, cascading the same to the last level employee thro various engagement initiatives.",
  },
  {
    icon: "bi bi-clipboard-data",
    title: "Employee Surveys",
    description: "Elicit the greatness and challenges perceived by employees thro surveys.",
  },
  {
    icon: "bi bi-trophy",
    title: "Rewards & Recognition",
    description: "Rewarding and recognizing the fast trackers and change agents, bridging the gap for those who struggle.",
  },
  {
    icon: "bi bi-clipboard-check",
    title: "Transparent Evaluation",
    description: "Make transparent learning and performance evaluation using objective tools.",
  },
  {
    icon: "bi bi-people",
    title: "Culture & Ethos",
    description: "Build culture with ethos and continuous learning.",
  },
  {
    icon: "bi bi-heart",
    title: "Pride in Growth",
    description: "Bring about pride in working for the growth of the organization and feeling good to be part of it.",
  },
];

export const kmasIndustrySectors = [
  "Manufacturing",
  "Processing",
  "Auto and Auto Ancillary",
  "FMCG",
  "Food",
  "Retail",
  "Electrical Component",
  "Micro Finance",
  "ITES",
  "Chemicals",
];

export const kmasServicesIntro =
  "At KMAS, we offer a wide range of HR solutions, in line with our mission model that are designed to help businesses manage their human resources more efficiently. Our services broadly include…";

export const kmasHrExcellence = {
  paragraph1:
    "Most importantly, KMAS shall identify and nurture internal talents to carry forward the initiatives introduced and implemented by KMAS.",
  paragraph2:
    "As an obligation to the next generation, KMAS reaches out the young minds in schools and colleges thro customised intervention programs to make them future-ready.",
  paragraph3:
    "The resource persons in the team have handled challenges and created opportunities in the above areas of work in various sectors experiencing 3 generations. Collective experience crosses 200 years.",
};
