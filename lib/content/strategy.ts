export type StrategyItem = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  detail: string;
  highlights?: string[];
  approach?: string[];
  outcomes?: string[];
};

// KMAS strategic advisory — strategic and operational advice on
// result-oriented business development through people performance.
export const strategyItems: StrategyItem[] = [
  {
    slug: "people-performance-strategy",
    icon: "bi bi-graph-up-arrow",
    title: "People Performance Strategy",
    description: "Result-oriented business development through people performance initiatives.",
    detail:
      "KMAS offers strategic and operational advice on result-oriented business development through people performance initiatives, and hand-holds clients in successfully implementing the same — so that HR becomes a driver of business results.",
    highlights: [
      "Linking people initiatives to business goals",
      "Prioritising HR interventions for impact",
      "Performance-driven culture",
      "Implementation road map with clear ownership",
    ],
    approach: [
      "Understand the business strategy and challenges",
      "Identify the people levers that matter most",
      "Agree a phased road map with leadership",
      "Hand-hold implementation and review results",
    ],
    outcomes: [
      "HR aligned with business objectives",
      "Measurable improvement in people performance",
      "Sustained business enhancement",
    ],
  },
  {
    slug: "leadership-advisory",
    icon: "bi bi-compass",
    title: "Leadership Advisory",
    description: "Advising leadership on business enhancement through people performance initiatives.",
    detail:
      "With close to four decades of experience in HR leadership, KMAS acts as a trusted advisor to promoters, CEOs and senior leaders — offering a seasoned perspective on people decisions, organisation building and business enhancement.",
    highlights: [
      "Advice on critical people decisions",
      "Organisation structure and roles",
      "Leadership team effectiveness",
      "A sounding board for the leadership",
    ],
    approach: [
      "Engage closely with the leadership team",
      "Bring an independent, experienced perspective",
      "Recommend practical options",
      "Support decisions through implementation",
    ],
    outcomes: [
      "Better-informed people decisions",
      "Stronger leadership alignment",
      "An experienced advisor on call",
    ],
  },
  {
    slug: "change-management",
    icon: "bi bi-arrow-left-right",
    title: "Change Management & Change Agents",
    description: "Training, mentoring and coaching middle and senior management to become ‘Change Agents’.",
    detail:
      "Lasting change needs champions inside the organisation. KMAS trains, mentors and coaches the middle and senior management to become ‘Change Agents’ who lead and sustain the initiatives introduced.",
    highlights: [
      "Identifying potential change agents",
      "Training, mentoring and coaching",
      "Communicating and cascading change",
      "Sustaining initiatives after implementation",
    ],
    approach: [
      "Identify managers to lead change",
      "Build their capability through training and coaching",
      "Support them while they lead initiatives",
      "Review progress and reinforce",
    ],
    outcomes: [
      "Internal champions for change",
      "Initiatives that sustain",
      "Stronger middle and senior management",
    ],
  },
  {
    slug: "talent-succession-planning",
    icon: "bi bi-diagram-3",
    title: "Talent & Succession Planning",
    description: "Identifying and nurturing internal talent to carry forward the initiatives.",
    detail:
      "Most importantly, KMAS identifies and nurtures internal talents to carry forward the initiatives introduced and implemented — building a pipeline of capable people ready to take up larger roles.",
    highlights: [
      "Identifying high-potential employees",
      "Development plans for future roles",
      "Coaching & mentoring for senior positions",
      "Succession for critical roles",
    ],
    approach: [
      "Identify critical roles and potential successors",
      "Assess readiness and development needs",
      "Implement development plans",
      "Review the talent pipeline periodically",
    ],
    outcomes: [
      "A ready pipeline of internal talent",
      "Continuity in critical roles",
      "Motivated, growing employees",
    ],
  },
  {
    slug: "organisation-culture-building",
    icon: "bi bi-building",
    title: "Organisation Culture Building",
    description: "Building a culture with ethos and continuous learning across the organisation.",
    detail:
      "KMAS works with leadership to build culture with ethos and continuous learning — rewarding and recognising the fast trackers and change agents, bridging the gap for those who struggle, and bringing about pride in working for the growth of the organisation.",
    highlights: [
      "Vision, mission and values",
      "Recognition of fast trackers and change agents",
      "Transparent learning and performance evaluation",
      "Pride and belonging",
    ],
    approach: [
      "Define the desired culture with leadership",
      "Cascade it through engagement initiatives",
      "Align recognition and evaluation",
      "Measure and reinforce",
    ],
    outcomes: [
      "A shared sense of purpose",
      "A culture of continuous learning",
      "Employees proud to be part of the organisation",
    ],
  },
  {
    slug: "hr-transformation-roadmap",
    icon: "bi bi-signpost-split",
    title: "HR Transformation Road Map",
    description: "Diagnosing current HR practices and building a phased plan to transform them.",
    detail:
      "Starting with a diagnostic study, KMAS builds a phased road map to transform HR practices — from compliance and core HR operations to development and culture — and hand-holds the organisation through each phase.",
    highlights: [
      "Diagnostic study of current HR",
      "Phased transformation plan",
      "Quick wins and long-term priorities",
      "Periodical audits on implementation",
    ],
    approach: [
      "Diagnose current practices",
      "Agree priorities and phases",
      "Implement with hand-holding",
      "Audit progress periodically",
    ],
    outcomes: [
      "A clear path for HR improvement",
      "Steady, measurable progress",
      "HR that supports growth",
    ],
  },
];
