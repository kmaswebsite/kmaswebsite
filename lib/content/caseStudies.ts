export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
};

// Typical KMAS engagement types. These describe the kind of situations KMAS
// handles — they are NOT named client case studies. `client` holds the
// engagement title; named client stories should only be added with the
// client's permission.
export const caseStudies: CaseStudy[] = [
  {
    slug: "long-term-wage-settlement",
    client: "Long-Term Wage Settlement",
    industry: "Manufacturing & Processing",
    problem:
      "A wage settlement with the employees’ union is due, and both sides need a fair, sustainable agreement on wages, bonus, benefits and service conditions without disrupting operations.",
    solution:
      "KMAS prepares the management for bipartite or tripartite negotiations, analyses the cost and comparative data, facilitates dialogue with the representation body and supports drafting and implementation of the agreement.",
    result:
      "A long-term settlement both sides can stand by, with industrial peace maintained through the process.",
  },
  {
    slug: "hr-audit-third-eye",
    client: "HR Audit as a Third Eye",
    industry: "Across Sectors",
    problem:
      "The management is unsure whether HR policies and statutory requirements are actually being followed on the ground, and wants an independent view before taking up improvements.",
    solution:
      "KMAS conducts a diagnostic study of HR practices, records and compliance, interacts with management and employees, and presents prioritised findings — followed by periodical audits of implementation.",
    result:
      "Clear visibility of gaps and risks, and best practices enforced with ease.",
  },
  {
    slug: "building-change-agents",
    client: "Building Change Agents",
    industry: "Growing Organisations",
    problem:
      "New initiatives are introduced from the top but lose momentum because middle and senior managers are not equipped to lead the change.",
    solution:
      "KMAS trains, mentors and coaches the middle and senior management to become ‘Change Agents’, and identifies and nurtures internal talent to carry the initiatives forward.",
    result:
      "Initiatives that sustain, led by capable internal champions.",
  },
  {
    slug: "structuring-core-hr",
    client: "Structuring Core HR",
    industry: "Growing SMEs",
    problem:
      "A fast-growing business has outgrown informal people practices — hiring, salary fixation, appointment orders and performance reviews are inconsistent.",
    solution:
      "KMAS sets up structured processes across the employee life cycle — job descriptions, appointment orders, induction, performance management and rewards — and hand-holds the team through implementation.",
    result:
      "Consistent, professional HR operations that support further growth.",
  },
];
