export type ServiceItem = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  detail: string;
  underConstruction?: boolean;
  // Expanded detail-page content (optional so the admin editor keeps working).
  highlights?: string[];
  approach?: string[];
  outcomes?: string[];
};

// `description` and `detail` are the client's own wording from the KMAS
// profile — keep verbatim. `highlights`, `approach` and `outcomes` expand on
// that wording for the detail pages.
export const serviceItems: ServiceItem[] = [
  {
    slug: "hr-management",
    icon: "bi bi-diagram-3",
    title: "Human Resources 'Management'",
    description: "Human Resources ‘Management’ which takes care of the employee’s entire Life Cycle Management.",
    detail: "Human Resources ‘Management’ which takes care of the employee’s entire Life Cycle Management.",
    highlights: [
      "Manpower planning, hiring and salary fixation",
      "Job descriptions, appointment orders and induction",
      "Employee records, HR policies and standard operating procedures",
      "Performance management and rewards & recognition",
      "Employee relations, discipline and grievance handling",
      "Statutory compliance across the employee life cycle",
      "Attrition, redundancy and separation management",
    ],
    approach: [
      "Understand the organisation’s business, structure and current HR practices",
      "Map every stage of the employee life cycle and identify gaps",
      "Design practical HR processes, policies and documentation",
      "Implement them hand-in-hand with the management and line managers",
      "Review periodically and fine-tune for sustained results",
    ],
    outcomes: [
      "Structured, consistent people processes from hiring to exit",
      "Clarity of roles and expectations for every employee",
      "Statutorily compliant HR operations",
      "A stable workforce and reduced people-related disputes",
    ],
  },
  {
    slug: "hr-development",
    icon: "bi bi-graph-up-arrow",
    title: "Human Resources 'Development'",
    description: "Human Resources ‘Development’ which takes care of the employee’s performance enhancement for better business results.",
    detail: "Human Resources ‘Development’ which takes care of the employee’s performance enhancement for better business results.",
    highlights: [
      "Training needs identification linked to business goals",
      "Learning & Development programs for every level",
      "Coaching and mentoring for middle and senior management",
      "Developing ‘Change Agents’ within the organisation",
      "Competency and soft-skills enhancement",
      "Identifying and nurturing internal talent",
    ],
    approach: [
      "Assess current capabilities and performance gaps",
      "Prioritise development needs with the leadership",
      "Design customised interventions using proven tools",
      "Deliver through workshops, coaching and on-the-job support",
      "Evaluate learning and performance with objective tools",
    ],
    outcomes: [
      "Measurable improvement in employee performance",
      "A pipeline of capable internal talent",
      "A culture of continuous learning",
      "People performance translating into business results",
    ],
  },
  {
    slug: "core-hr-service-areas",
    icon: "bi bi-briefcase",
    title: "Core HR Service Areas",
    description: "Hiring, salary fixation, fitting Job Descriptions, appointment orders, induction training/orientation, Learning & Development, Performance Management, and more.",
    detail:
      "Hiring, salary fixation, fitting Job Descriptions, appointment orders, induction training/orientation, Learning & Development, Performance Management, coaching & mentoring for senior positions, blue-colour employees handling, compliances management, Union/Representation body management, Long term Settlements, Disputes handling, disciplining, rewards & recognitions based on goals (set objectives) achievement, attrition and redundancy management are broadly the areas that KMAS shall handle deftly.",
    highlights: [
      "Hiring and salary fixation",
      "Fitting job descriptions and appointment orders",
      "Induction training / orientation",
      "Learning & Development and Performance Management",
      "Coaching & mentoring for senior positions",
      "Blue-collar employee handling",
      "Compliance management",
      "Union / representation body management",
      "Long-term settlements and disputes handling",
      "Disciplinary management",
      "Rewards & recognition based on goal achievement",
      "Attrition and redundancy management",
    ],
    approach: [
      "Study the organisation’s existing practices in each area",
      "Agree priorities and the scope of support with the management",
      "Put clear processes, formats and responsibilities in place",
      "Hand-hold the team through implementation",
      "Audit periodically to make sure practices are followed",
    ],
    outcomes: [
      "Every core HR area handled professionally",
      "Harmonious employee and industrial relations",
      "Reduced indiscipline, disputes and litigation",
      "HR that supports business growth",
    ],
  },
  {
    slug: "hr-audit",
    icon: "bi bi-clipboard-check",
    title: "HR Audit",
    description: "HR audit is a speciality area where KMAS can do a diagnostic study before taking up assignments, conduct a periodical audit on the effective implementation of the initiatives introduced in the organizations.",
    detail:
      "HR audit is a speciality area where KMAS can do a diagnostic study before taking up assignments, conduct a periodical audit on the effective implementation of the initiatives introduced in the organizations. In other words, KMAS can be a third eye for any organization which would help organizations to effectively enforce best practices with ease.",
    highlights: [
      "Diagnostic study of existing HR policies and practices",
      "Statutory and labour law compliance review",
      "Review of HR documentation and records",
      "Assessment of employee relations and engagement",
      "Periodical audit of initiatives already implemented",
      "Clear findings with prioritised recommendations",
    ],
    approach: [
      "Agree the scope and areas of audit with the management",
      "Study documents, processes and records on site",
      "Interact with management and employees",
      "Present findings, risks and recommendations",
      "Support the action plan and re-audit at agreed intervals",
    ],
    outcomes: [
      "An independent ‘third eye’ on people practices",
      "Early identification of compliance gaps and risks",
      "Best practices enforced with ease",
      "Confidence that HR initiatives are actually working",
    ],
  },
  {
    slug: "soft-skills-competency-programs",
    icon: "bi bi-lightbulb",
    title: "Soft Skills & Competency Programs",
    description: "Customizing the desired soft skills/competencies enhancement programs, using the proven tools but with specialised interpretations for creating high-performance employees.",
    detail: "Customizing the desired soft skills/competencies enhancement programs, using the proven tools but with specialised interpretations for creating high-performance employees.",
    highlights: [
      "Communication and interpersonal effectiveness",
      "Teamwork and collaboration",
      "Leadership and people management",
      "Problem solving and decision making",
      "Attitude, ownership and accountability",
      "Customer orientation",
    ],
    approach: [
      "Identify the competencies the role and organisation need",
      "Assess participants using proven tools",
      "Customise program content with specialised interpretations",
      "Deliver through interactive, practical sessions",
      "Follow up to reinforce learning on the job",
    ],
    outcomes: [
      "High-performance employees",
      "Visible change in workplace behaviour",
      "Better collaboration across teams",
      "Competencies aligned with business needs",
    ],
  },
  {
    slug: "future-ready-programs",
    icon: "bi bi-mortarboard",
    title: "Future-Ready Programs",
    description: "As an obligation to the next generation, KMAS reaches out the young minds in schools and colleges thro customised intervention programs to make them future-ready.",
    detail: "As an obligation to the next generation, KMAS reaches out the young minds in schools and colleges thro customised intervention programs to make them future-ready.",
    highlights: [
      "Career awareness and goal setting",
      "Communication and presentation skills",
      "Workplace readiness and professional etiquette",
      "Interview preparation",
      "Values, discipline and positive attitude",
      "Bridging the gap between campus and industry",
    ],
    approach: [
      "Understand the institution’s goals and student profile",
      "Customise intervention programs for the age group",
      "Deliver interactive sessions drawing on industry experience",
      "Engage faculty to sustain the learning",
    ],
    outcomes: [
      "Confident, future-ready young minds",
      "Students better prepared for the world of work",
      "Stronger connect between institutions and industry",
    ],
  },
];
