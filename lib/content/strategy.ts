export type StrategyItem = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  detail: string;
};

export const strategyItems: StrategyItem[] = [
  {
    slug: "hr-strategy",
    icon: "bi bi-diagram-3",
    title: "HR Strategy",
    description:
      "Aligning your people function with business objectives through a clear, board-ready HR roadmap.",
    detail:
      "We work with executive teams to translate business strategy into a workforce agenda — operating model, capability priorities, and a phased roadmap that HR leadership can execute against with measurable milestones.",
  },
  {
    slug: "talent-strategy",
    icon: "bi bi-people",
    title: "Talent Strategy",
    description:
      "Building the sourcing, development, and retention architecture that keeps your critical roles filled.",
    detail:
      "From talent segmentation to build-vs-buy decisions, we design a talent strategy that identifies critical roles, closes capability gaps, and creates a sustainable pipeline across the organization.",
  },
  {
    slug: "leadership-strategy",
    icon: "bi bi-award",
    title: "Leadership Strategy",
    description:
      "Defining the leadership behaviors, bench strength, and development pathways your organization needs next.",
    detail:
      "We assess current leadership bench strength against future business needs and design targeted development pathways, competency frameworks, and succession-ready leadership pipelines.",
  },
  {
    slug: "performance-strategy",
    icon: "bi bi-graph-up-arrow",
    title: "Performance Strategy",
    description:
      "Designing performance frameworks that connect individual contribution to organizational outcomes.",
    detail:
      "We redesign performance management from goal-setting through calibration — building frameworks that are fair, motivating, and directly tied to strategic outcomes rather than administrative box-checking.",
  },
  {
    slug: "digital-hr-strategy",
    icon: "bi bi-cpu",
    title: "Digital HR Strategy",
    description:
      "Modernizing HR technology, data, and automation to scale your people operations.",
    detail:
      "We audit your current HR tech stack, identify automation and analytics opportunities, and build a digital transformation roadmap that reduces administrative load while improving the employee experience.",
  },
  {
    slug: "workforce-planning",
    icon: "bi bi-bar-chart-steps",
    title: "Workforce Planning",
    description:
      "Forecasting headcount, skills, and cost scenarios so growth never outpaces your people plan.",
    detail:
      "Using scenario modeling and skills-based forecasting, we help you plan headcount, budget, and capability needs 12–36 months ahead — so hiring and development decisions are proactive, not reactive.",
  },
  {
    slug: "succession-planning",
    icon: "bi bi-signpost-split",
    title: "Succession Planning",
    description:
      "Protecting continuity in your most critical roles with structured succession pipelines.",
    detail:
      "We identify critical and at-risk roles, assess readiness of internal successors, and build development plans and governance processes that reduce succession risk across the leadership team.",
  },
  {
    slug: "organization-development",
    icon: "bi bi-diagram-2",
    title: "Organization Development",
    description:
      "Redesigning structures, roles, and ways of working to support the strategy you're executing.",
    detail:
      "From org design and span-of-control analysis to culture and change management, we help you restructure the organization so structure, process, and people are aligned to strategic priorities.",
  },
];
