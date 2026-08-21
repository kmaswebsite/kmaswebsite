export type SolutionItem = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  detail: string;
};

export const solutionItems: SolutionItem[] = [
  {
    slug: "talent-acquisition",
    icon: "bi bi-person-plus",
    title: "Talent Acquisition",
    description: "End-to-end recruitment systems, from sourcing pipelines to structured interviewing.",
    detail:
      "We implement sourcing strategies, structured interview scorecards, and applicant workflows that shorten time-to-hire while improving quality of hire and candidate experience.",
  },
  {
    slug: "learning-management",
    icon: "bi bi-mortarboard",
    title: "Learning Management",
    description: "LMS selection, content architecture, and learning pathways that employees actually use.",
    detail:
      "From platform selection to course architecture, we help you deploy a learning management system with clear pathways, completion tracking, and content that maps to real skill gaps.",
  },
  {
    slug: "employee-engagement",
    icon: "bi bi-emoji-smile",
    title: "Employee Engagement",
    description: "Pulse surveys, listening programs, and action planning that move engagement scores.",
    detail:
      "We design engagement measurement systems and, more importantly, the manager-led action planning process that turns survey data into visible workplace improvements.",
  },
  {
    slug: "performance-management",
    icon: "bi bi-clipboard-check",
    title: "Performance Management",
    description: "Goal-setting, feedback, and review cycles built for clarity, not compliance.",
    detail:
      "We replace once-a-year review rituals with continuous goal tracking, structured feedback tools, and calibration processes that make performance conversations useful for managers and employees alike.",
  },
  {
    slug: "hr-analytics",
    icon: "bi bi-graph-up",
    title: "HR Analytics",
    description: "Dashboards and predictive models that turn workforce data into decisions.",
    detail:
      "We build people-analytics dashboards covering attrition risk, DEI metrics, span-of-control, and cost-per-hire — giving leadership real-time visibility instead of quarterly spreadsheets.",
  },
  {
    slug: "digital-hr",
    icon: "bi bi-laptop",
    title: "Digital HR",
    description: "Self-service portals, workflow automation, and HRIS integrations that cut admin load.",
    detail:
      "We automate routine HR transactions — onboarding, leave, document requests — through self-service portals and HRIS integrations, freeing HR teams to focus on strategic work.",
  },
  {
    slug: "competency-mapping",
    icon: "bi bi-diagram-3-fill",
    title: "Competency Mapping",
    description: "Role-specific competency frameworks that anchor hiring, development, and reviews.",
    detail:
      "We build competency frameworks per role family, tying them directly into hiring rubrics, individual development plans, and performance criteria for organization-wide consistency.",
  },
  {
    slug: "assessment-centers",
    icon: "bi bi-clipboard-data",
    title: "Assessment Centers",
    description: "Simulation-based assessment programs for hiring, promotion, and development decisions.",
    detail:
      "We design and run assessment centers — case simulations, role-plays, and psychometric tools — to support high-stakes hiring, promotion, and leadership development decisions.",
  },
  {
    slug: "payroll-support",
    icon: "bi bi-cash-coin",
    title: "Payroll Support",
    description: "Accurate, compliant payroll operations backed by process audits and support desks.",
    detail:
      "We audit and streamline payroll processes, ensure statutory compliance across jurisdictions, and provide ongoing support to keep pay cycles accurate and on time.",
  },
  {
    slug: "compliance-support",
    icon: "bi bi-shield-check",
    title: "Compliance Support",
    description: "Policy audits and regulatory tracking that keep your HR practices audit-ready.",
    detail:
      "We audit HR policies against current labor law, build compliance calendars, and keep documentation audit-ready across the jurisdictions where you operate.",
  },
];
