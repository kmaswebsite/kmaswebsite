export type Resource = {
  icon: string;
  type: string;
  title: string;
  description: string;
  points?: string[];
};

// Practical HR guides from KMAS, shown on the page itself (no downloads).
export const resources: Resource[] = [
  {
    icon: "bi bi-arrow-repeat",
    type: "Guide",
    title: "Stages of the Employee Life Cycle",
    description: "The stages every organisation should manage with clear processes and documentation.",
    points: [
      "Manpower planning and hiring",
      "Salary fixation and appointment orders",
      "Induction and orientation",
      "Performance management and development",
      "Rewards, recognition and growth",
      "Separation and exit",
    ],
  },
  {
    icon: "bi bi-door-open",
    type: "Checklist",
    title: "Effective Induction Checklist",
    description: "What a good induction should cover so new employees settle in quickly.",
    points: [
      "Introduction to the organisation, vision and mission",
      "Role, job description and expectations",
      "HR policies, code of conduct and discipline",
      "Safety and workplace rules",
      "Meeting the team and key contacts",
      "Follow-up review after the first weeks",
    ],
  },
  {
    icon: "bi bi-shield-check",
    type: "Checklist",
    title: "HR Compliance Essentials",
    description: "Areas to review regularly to stay statutorily compliant.",
    points: [
      "Statutory registers and records",
      "Timely returns and filings",
      "Wage and benefit payments as per law",
      "Standing orders / service rules",
      "Policies aligned to labour laws",
      "Periodical internal compliance audit",
    ],
  },
  {
    icon: "bi bi-clipboard-check",
    type: "Guide",
    title: "Preparing for an HR Audit",
    description: "How to get the most out of a diagnostic or periodical HR audit.",
    points: [
      "Agree the scope and objectives with the auditor",
      "Keep policies, records and documents ready",
      "Involve line managers and employees",
      "Review findings with an open mind",
      "Assign owners and timelines for actions",
      "Schedule the next periodical review",
    ],
  },
  {
    icon: "bi bi-bar-chart-line",
    type: "Guide",
    title: "Building a Fair Performance System",
    description: "Principles for performance evaluation employees can trust.",
    points: [
      "Set clear objectives at the start of the cycle",
      "Use objective measures wherever possible",
      "Hold regular review conversations",
      "Recognise fast trackers and change agents",
      "Support those who struggle",
      "Link rewards to goal achievement",
    ],
  },
  {
    icon: "bi bi-heart",
    type: "Guide",
    title: "Building Employee Engagement",
    description: "Steps to build a workforce that is proud to be part of the organisation.",
    points: [
      "Cascade the vision and mission to every level",
      "Listen through employee surveys",
      "Act visibly on what employees say",
      "Reward and recognise contribution",
      "Make learning continuous",
      "Celebrate the organisation’s growth together",
    ],
  },
];
