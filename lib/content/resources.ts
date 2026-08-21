export type Resource = {
  icon: string;
  type: string;
  title: string;
  description: string;
};

export const resources: Resource[] = [
  {
    icon: "bi bi-file-earmark-text",
    type: "Whitepaper",
    title: "The 2026 State of HR Strategy Report",
    description: "Benchmarking data on HR strategy priorities across 400+ organizations.",
  },
  {
    icon: "bi bi-journal-check",
    type: "Guide",
    title: "A Practical Guide to Workforce Planning",
    description: "Step-by-step framework for building a 24-month headcount and skills forecast.",
  },
  {
    icon: "bi bi-clipboard-data",
    type: "Toolkit",
    title: "Performance Review Calibration Toolkit",
    description: "Templates and facilitation guides for running fair, consistent calibration sessions.",
  },
  {
    icon: "bi bi-diagram-3",
    type: "Framework",
    title: "Competency Mapping Starter Framework",
    description: "A ready-to-adapt competency library across five common role families.",
  },
  {
    icon: "bi bi-shield-check",
    type: "Checklist",
    title: "HR Compliance Audit Checklist",
    description: "A jurisdiction-agnostic checklist for auditing policy and documentation gaps.",
  },
  {
    icon: "bi bi-graph-up",
    type: "Template",
    title: "People Analytics Dashboard Template",
    description: "A starter dashboard layout covering attrition, engagement, and cost-per-hire metrics.",
  },
];
