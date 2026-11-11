export type OpenRole = {
  title: string;
  department: string;
  location: string;
  type: string;
};

// No current openings are published. Add roles here (or via the admin panel)
// only when KMAS confirms a real vacancy.
export const openRoles: OpenRole[] = [];

export type Benefit = {
  icon: string;
  title: string;
  description: string;
};

// "Why associate with KMAS" points, drawn from the KMAS profile.
export const benefits: Benefit[] = [
  {
    icon: "bi bi-person-badge",
    title: "Learn from Experience",
    description: "Work alongside HR leaders with close to four decades of experience across the entire gamut of HR.",
  },
  {
    icon: "bi bi-buildings",
    title: "Diverse Sectors",
    description: "Exposure to manufacturing, FMCG, retail, micro finance, ITES, chemicals and more.",
  },
  {
    icon: "bi bi-lightning",
    title: "Real Impact",
    description: "Contribute to people performance initiatives that drive real business results for clients.",
  },
  {
    icon: "bi bi-mortarboard",
    title: "Continuous Learning",
    description: "Grow your skills in a team that believes in continuous learning and building change agents.",
  },
];

export const associationAreas = [
  {
    icon: "bi bi-briefcase",
    title: "HR Consultants",
    description: "Experienced HR professionals in core HR, industrial relations, compliance or HR development.",
  },
  {
    icon: "bi bi-easel",
    title: "Trainers & Facilitators",
    description: "Facilitators for leadership, soft skills, competency and future-ready programs.",
  },
  {
    icon: "bi bi-clipboard-data",
    title: "Assessors",
    description: "Professionals experienced in assessing competencies up to senior management levels.",
  },
];
