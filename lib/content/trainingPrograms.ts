export type CourseCategory = {
  icon: string;
  title: string;
  description: string;
};

export const courseCategories: CourseCategory[] = [
  {
    icon: "bi bi-award",
    title: "Leadership & Management",
    description: "Training, mentoring and coaching middle and senior management to become ‘Change Agents’.",
  },
  {
    icon: "bi bi-lightbulb",
    title: "Soft Skills & Competency",
    description: "Customised soft-skills and competency enhancement for high-performance employees.",
  },
  {
    icon: "bi bi-person-gear",
    title: "Supervisory Development",
    description: "Equipping supervisors and first-line managers to lead shop-floor and frontline teams.",
  },
  {
    icon: "bi bi-shield-check",
    title: "Compliance & Discipline",
    description: "Awareness of labour laws, discipline management and fair HR practices for managers.",
  },
  {
    icon: "bi bi-door-open",
    title: "Induction & Orientation",
    description: "Structured onboarding that connects new employees to the organisation from day one.",
  },
  {
    icon: "bi bi-mortarboard",
    title: "Future-Ready Programs",
    description: "Customised intervention programs for young minds in schools and colleges.",
  },
];

export type FeaturedProgram = {
  title: string;
  category: string;
  level: string;
  format: string;
  duration: string;
  description: string;
};

export const featuredPrograms: FeaturedProgram[] = [
  {
    title: "Developing Change Agents",
    category: "Leadership & Management",
    level: "Middle & Senior Management",
    format: "Workshop + Coaching",
    duration: "Customised",
    description:
      "Builds the mindset and skills managers need to lead change, engage their teams and sustain new initiatives.",
  },
  {
    title: "Effective People Management",
    category: "Leadership & Management",
    level: "First-line & Middle Managers",
    format: "Workshop",
    duration: "Customised",
    description:
      "Goal setting, feedback, performance conversations and motivating teams for better business results.",
  },
  {
    title: "Supervisory Excellence",
    category: "Supervisory Development",
    level: "Supervisors",
    format: "Workshop",
    duration: "Customised",
    description:
      "Handling blue-collar teams, shop-floor discipline, communication and building a high-performance culture.",
  },
  {
    title: "Discipline & Labour Law Awareness",
    category: "Compliance & Discipline",
    level: "Managers & HR Teams",
    format: "Workshop",
    duration: "Customised",
    description:
      "Practical understanding of discipline management, domestic enquiries and statutory responsibilities.",
  },
  {
    title: "Communication & Interpersonal Effectiveness",
    category: "Soft Skills & Competency",
    level: "All Employees",
    format: "Workshop",
    duration: "Customised",
    description:
      "Clear communication, teamwork and collaboration, delivered using proven tools with specialised interpretations.",
  },
  {
    title: "Campus to Corporate",
    category: "Future-Ready Programs",
    level: "Students",
    format: "Interactive Sessions",
    duration: "Customised",
    description:
      "Prepares students for the world of work — attitude, communication, workplace etiquette and interview readiness.",
  },
];

export type TrainerHighlight = {
  name: string;
  title: string;
  expertise: string;
};

// The KMAS team who lead programs (see lib/content/kmas.ts profiles).
export const trainerHighlights: TrainerHighlight[] = [
  {
    name: "Ramakrishnan Mohan",
    title: "Director & Managing Partner",
    expertise: "Training, mentoring and coaching middle and senior management; assessor and trainer up to leadership levels.",
  },
  {
    name: "Mr. V. Balasundaram",
    title: "Principal Consultant – Operations & Compliance",
    expertise: "Statutory compliance, industrial relations, discipline and HR policy implementation.",
  },
  {
    name: "Karthik Viswanathan",
    title: "Senior Consultant",
    expertise: "Sales academies, LMS-based learning ecosystems, coaching leadership teams and capability building.",
  },
];
