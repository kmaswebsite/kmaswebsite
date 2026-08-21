export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "meridian-health-performance-overhaul",
    client: "Meridian Health Group",
    industry: "Healthcare",
    problem:
      "Annual reviews took six weeks to complete and were widely seen as demotivating rather than developmental.",
    solution:
      "Redesigned the performance cycle around continuous check-ins, simplified rating scales, and manager coaching workshops.",
    result: "Review cycle time cut by 65% and manager satisfaction scores rose from 58% to 91%.",
  },
  {
    slug: "bramwell-logistics-workforce-planning",
    client: "Bramwell Logistics",
    industry: "Logistics",
    problem:
      "Rapid regional expansion outpaced hiring capacity, risking service-level failures in two new markets.",
    solution:
      "Built a 24-month workforce forecasting model with scenario planning and a regional recruitment playbook.",
    result: "100% of critical roles filled ahead of go-live across both new regions.",
  },
  {
    slug: "solvex-financial-leadership-accelerator",
    client: "Solvex Financial",
    industry: "Finance",
    problem:
      "A thin leadership bench meant promotions repeatedly required external hires, damaging internal morale.",
    solution:
      "Deployed a 12-week leadership accelerator combining coaching, 360 feedback, and live business projects.",
    result: "Internal promotion rate for director-level roles increased by 40% within one year.",
  },
  {
    slug: "anchorline-manufacturing-compliance",
    client: "Anchorline Manufacturing",
    industry: "Manufacturing",
    problem:
      "Inconsistent safety training across 6 plants created audit findings and rising incident rates.",
    solution:
      "Standardized a compliance training curriculum with certification tracking across all plant locations.",
    result: "Safety incidents down 38% year-over-year with zero audit findings at renewal.",
  },
];
