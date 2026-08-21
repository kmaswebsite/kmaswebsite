export type CourseCategory = {
  icon: string;
  title: string;
  description: string;
};

export const courseCategories: CourseCategory[] = [
  {
    icon: "bi bi-building",
    title: "Corporate Learning",
    description: "Enterprise-wide learning journeys tied to business priorities and culture goals.",
  },
  {
    icon: "bi bi-cpu",
    title: "Technical Training",
    description: "Role-specific technical upskilling across tools, platforms, and systems.",
  },
  {
    icon: "bi bi-emoji-smile",
    title: "Soft Skills",
    description: "Communication, collaboration, and emotional intelligence programs for every level.",
  },
  {
    icon: "bi bi-award",
    title: "Leadership Programs",
    description: "Multi-month leadership tracks combining workshops, coaching, and action learning.",
  },
  {
    icon: "bi bi-shield-check",
    title: "Compliance Training",
    description: "Mandatory regulatory and policy training with completion tracking built in.",
  },
  {
    icon: "bi bi-patch-check",
    title: "Certification Programs",
    description: "Assessment-backed certification tracks recognized across partner industries.",
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
    title: "Strategic HR Business Partnering",
    category: "Corporate Learning",
    level: "Intermediate",
    format: "Hybrid",
    duration: "3 Days",
    description:
      "Equips HR professionals to operate as strategic partners to business leaders, covering workforce analytics, stakeholder influence, and change leadership.",
  },
  {
    title: "Data-Driven People Analytics",
    category: "Technical Training",
    level: "Intermediate",
    format: "Online",
    duration: "2 Days",
    description:
      "Hands-on training in building HR dashboards, interpreting attrition and engagement data, and presenting insights to leadership.",
  },
  {
    title: "High-Impact Communication",
    category: "Soft Skills",
    level: "Beginner",
    format: "In-Person",
    duration: "1 Day",
    description:
      "Practical techniques for clear, confident communication in meetings, presentations, and cross-functional collaboration.",
  },
  {
    title: "Future-Ready Leadership Accelerator",
    category: "Leadership Programs",
    level: "Advanced",
    format: "Hybrid",
    duration: "12 Weeks",
    description:
      "A cohort-based leadership program combining executive coaching, 360 feedback, and a live business action-learning project.",
  },
  {
    title: "Workplace Safety & Compliance Essentials",
    category: "Compliance Training",
    level: "Beginner",
    format: "Online",
    duration: "Half Day",
    description:
      "Core compliance training covering workplace safety, anti-harassment policy, and regulatory reporting obligations.",
  },
  {
    title: "Certified Talent Acquisition Professional",
    category: "Certification Programs",
    level: "Intermediate",
    format: "Hybrid",
    duration: "4 Weeks",
    description:
      "An assessment-backed certification covering full-cycle recruitment, structured interviewing, and employer branding.",
  },
];

export type TrainerHighlight = {
  name: string;
  title: string;
  expertise: string;
};

export const trainerHighlights: TrainerHighlight[] = [
  {
    name: "Dr. Alina Ferreira",
    title: "Lead Facilitator, Leadership Programs",
    expertise: "Executive coaching, organizational psychology, 20+ years in leadership development.",
  },
  {
    name: "Marcus Chen",
    title: "Senior Trainer, Technical & Analytics",
    expertise: "People analytics, HRIS systems, and data visualization for HR teams.",
  },
  {
    name: "Priya Nathan",
    title: "Principal Trainer, Compliance & Policy",
    expertise: "Labor law, workplace compliance frameworks, and regulatory training design.",
  },
];
