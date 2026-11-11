export type IndustryItem = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  focus?: string[];
};

// Sectors named in the KMAS profile. Descriptions explain the people
// priorities KMAS supports in each sector.
export const industryItems: IndustryItem[] = [
  {
    slug: "manufacturing",
    icon: "bi bi-gear",
    title: "Manufacturing",
    description: "Large shop-floor workforces need sound industrial relations, discipline and statutory compliance.",
    focus: ["Union & long-term settlements", "Blue-collar workforce handling", "Shop-floor discipline", "Statutory compliance"],
  },
  {
    slug: "processing",
    icon: "bi bi-diagram-2",
    title: "Processing",
    description: "Continuous operations depend on a stable, skilled and well-managed workforce across shifts.",
    focus: ["Shift workforce management", "Supervisory development", "Safety & discipline", "Compliance"],
  },
  {
    slug: "auto-and-auto-ancillary",
    icon: "bi bi-truck-front",
    title: "Auto and Auto Ancillary",
    description: "Demanding quality and delivery standards call for performance-driven, well-trained teams.",
    focus: ["Performance management", "Skill & competency building", "Wage settlements", "Productivity culture"],
  },
  {
    slug: "fmcg",
    icon: "bi bi-basket",
    title: "FMCG",
    description: "Fast-moving businesses need agile hiring, sales capability and strong frontline engagement.",
    focus: ["Hiring at scale", "Sales & frontline capability", "Engagement & retention", "Performance management"],
  },
  {
    slug: "food",
    icon: "bi bi-cup-hot",
    title: "Food",
    description: "Hygiene, discipline and compliance-driven operations rely on well-oriented, committed employees.",
    focus: ["Induction & orientation", "Discipline management", "Compliance", "Workforce stability"],
  },
  {
    slug: "retail",
    icon: "bi bi-shop",
    title: "Retail",
    description: "Customer-facing teams need the right attitude, service skills and engagement to reduce attrition.",
    focus: ["Customer orientation training", "Attrition management", "Store team engagement", "Rewards & recognition"],
  },
  {
    slug: "electrical-component",
    icon: "bi bi-lightning-charge",
    title: "Electrical Component",
    description: "Precision manufacturing calls for skilled people, structured processes and harmonious relations.",
    focus: ["Skill development", "Industrial relations", "Performance systems", "Compliance"],
  },
  {
    slug: "micro-finance",
    icon: "bi bi-cash-coin",
    title: "Micro Finance",
    description: "Widely spread field teams need clear processes, strong values and continuous capability building.",
    focus: ["Field team hiring & induction", "Code of conduct & discipline", "Capability building", "Retention"],
  },
  {
    slug: "ites",
    icon: "bi bi-headset",
    title: "ITES",
    description: "Young, mobile workforces need engagement, career paths and soft-skills development.",
    focus: ["Soft skills & communication", "Engagement & surveys", "Attrition management", "Career growth"],
  },
  {
    slug: "chemicals",
    icon: "bi bi-flask",
    title: "Chemicals",
    description: "Safety-critical, regulated environments depend on disciplined teams and rigorous compliance.",
    focus: ["Statutory compliance", "Safety & discipline", "Industrial relations", "Technical workforce development"],
  },
];
