export type OpenRole = {
  title: string;
  department: string;
  location: string;
  type: string;
};

export const openRoles: OpenRole[] = [
  { title: "Senior HR Strategy Consultant", department: "Strategy", location: "New York, NY / Remote", type: "Full-time" },
  { title: "Leadership Development Facilitator", department: "Training", location: "Remote", type: "Full-time" },
  { title: "People Analytics Consultant", department: "Solutions", location: "Chicago, IL / Hybrid", type: "Full-time" },
  { title: "Corporate Trainer — Compliance", department: "Training", location: "Remote", type: "Contract" },
  { title: "Talent Acquisition Partner", department: "Recruitment", location: "New York, NY", type: "Full-time" },
  { title: "Instructional Designer", department: "Learning & Development", location: "Remote", type: "Full-time" },
];

export type Benefit = {
  icon: string;
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  { icon: "bi bi-heart-pulse", title: "Health & Wellness", description: "Comprehensive medical, dental, and mental health coverage from day one." },
  { icon: "bi bi-house", title: "Flexible Work", description: "Remote-first culture with quarterly in-person team gatherings." },
  { icon: "bi bi-mortarboard", title: "Learning Budget", description: "Annual professional development budget for courses, conferences, and certifications." },
  { icon: "bi bi-graph-up", title: "Growth Paths", description: "Transparent career ladders and internal mobility across every practice area." },
];
