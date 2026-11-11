export type SolutionItem = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  detail: string;
  highlights?: string[];
  approach?: string[];
  outcomes?: string[];
};

// KMAS solutions — each one is a focused offering drawn from the KMAS
// service areas (Core HR Service Areas, HR Audit, culture building).
export const solutionItems: SolutionItem[] = [
  {
    slug: "employee-life-cycle-management",
    icon: "bi bi-arrow-repeat",
    title: "Employee Life Cycle Management",
    description: "Structured people processes from hiring and induction to performance, growth and exit.",
    detail:
      "KMAS designs and implements the processes that take care of an employee’s entire life cycle — hiring, salary fixation, job descriptions, appointment orders, induction, performance, development, rewards and separation — so that every stage is handled consistently and fairly.",
    highlights: [
      "Hiring and salary fixation frameworks",
      "Job descriptions and appointment orders",
      "Induction training and orientation",
      "Confirmation, transfers and promotions",
      "Separation and exit processes",
    ],
    approach: [
      "Map the organisation’s current life cycle practices",
      "Design simple, standard processes and formats",
      "Train managers to apply them consistently",
      "Review and refine periodically",
    ],
    outcomes: [
      "A consistent employee experience",
      "Clear documentation at every stage",
      "Reduced people-related disputes",
    ],
  },
  {
    slug: "performance-management-system",
    icon: "bi bi-bar-chart-line",
    title: "Performance Management System",
    description: "Goal setting, objective evaluation and rewards linked to achievement.",
    detail:
      "A transparent performance management system helps employees know what is expected and how they will be evaluated. KMAS helps organisations set objectives, evaluate performance using objective tools and link rewards & recognition to the achievement of goals.",
    highlights: [
      "Goal and objective setting aligned to business plans",
      "Key result areas and performance measures",
      "Objective evaluation tools and review formats",
      "Rewards & recognition based on goal achievement",
      "Performance improvement plans for those who struggle",
    ],
    approach: [
      "Align performance goals with the business plan",
      "Design KRAs, measures and review formats",
      "Train managers on fair evaluation and feedback",
      "Run the first cycle together and fine-tune",
    ],
    outcomes: [
      "Transparent, objective evaluation",
      "Fast trackers recognised and rewarded",
      "Support for employees who need it",
    ],
  },
  {
    slug: "industrial-relations-settlements",
    icon: "bi bi-people",
    title: "Industrial Relations & Settlements",
    description: "Union and representation body management, long-term settlements and disputes handling.",
    detail:
      "Drawing on extensive experience in bipartite and tripartite settlements on wages, bonus, benefits and service conditions, KMAS supports organisations in building harmonious relations with employees and their representation bodies, negotiating long-term settlements and resolving disputes.",
    highlights: [
      "Union / representation body management",
      "Long-term wage settlements",
      "Bipartite and tripartite negotiations",
      "Disputes handling and resolution",
      "Discipline management and domestic enquiries",
      "Blue-collar workforce engagement",
    ],
    approach: [
      "Understand the history and current state of relations",
      "Prepare the management for negotiations",
      "Facilitate dialogue and negotiate settlements",
      "Support implementation of agreements",
    ],
    outcomes: [
      "Enhanced industrial peace",
      "Reduced indiscipline and litigation",
      "Fair, sustainable settlements",
    ],
  },
  {
    slug: "statutory-compliance-management",
    icon: "bi bi-shield-check",
    title: "Statutory Compliance Management",
    description: "Helping organisations become statutorily compliant, with KMAS as a third eye.",
    detail:
      "Labour law and statutory compliance is an area where gaps can prove costly. KMAS helps organisations become statutorily compliant, sets up the processes and records needed to stay compliant, and acts as a third eye through periodical reviews.",
    highlights: [
      "Compliance gap assessment",
      "Registers, records and returns",
      "Policies aligned to labour laws",
      "Compliance calendars and responsibilities",
      "Periodical compliance audits",
    ],
    approach: [
      "Assess current compliance status",
      "Prioritise and close critical gaps",
      "Set up processes, records and calendars",
      "Review periodically as a third eye",
    ],
    outcomes: [
      "Statutorily compliant operations",
      "Reduced legal and financial risk",
      "Confidence for the management",
    ],
  },
  {
    slug: "employee-engagement-culture",
    icon: "bi bi-heart",
    title: "Employee Engagement & Culture",
    description: "Cascading vision and mission, employee surveys and building a culture with ethos.",
    detail:
      "KMAS helps leadership evolve vision & mission statements and cascade them to the last level employee through engagement initiatives, elicit the greatness and challenges perceived by employees through surveys, and build a culture with ethos and continuous learning where employees take pride in the organisation’s growth.",
    highlights: [
      "Vision & mission cascade",
      "Employee surveys",
      "Engagement initiatives across levels",
      "Rewards & recognition programs",
      "Building pride and belonging",
    ],
    approach: [
      "Listen to employees through surveys and interactions",
      "Share the findings with the leadership",
      "Design engagement initiatives",
      "Measure and sustain the change",
    ],
    outcomes: [
      "Employees connected to the vision",
      "Higher engagement and pride",
      "A culture of continuous learning",
    ],
  },
  {
    slug: "attrition-redundancy-management",
    icon: "bi bi-person-dash",
    title: "Attrition & Redundancy Management",
    description: "Understanding why people leave, retaining talent and handling redundancy fairly.",
    detail:
      "Unplanned attrition affects productivity and continuity, while redundancy needs to be handled with fairness and care. KMAS helps organisations understand the reasons behind attrition, build retention measures and manage redundancy in a structured, compliant way.",
    highlights: [
      "Attrition analysis and exit feedback",
      "Retention measures for key talent",
      "Bridging the gap for those who struggle",
      "Structured redundancy planning",
      "Compliant and humane separation",
    ],
    approach: [
      "Analyse attrition data and feedback",
      "Identify root causes with the management",
      "Implement retention and engagement measures",
      "Plan any redundancy fairly and compliantly",
    ],
    outcomes: [
      "Better retention of talent",
      "Workforce continuity",
      "Fair handling of difficult transitions",
    ],
  },
];
