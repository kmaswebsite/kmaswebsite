export type ServiceItem = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  detail: string;
};

export const serviceItems: ServiceItem[] = [
  {
    slug: "hr-management",
    icon: "bi bi-diagram-3",
    title: "Human Resources 'Management'",
    description: "Human Resources ‘Management’ which takes care of the employee’s entire Life Cycle Management.",
    detail: "Human Resources ‘Management’ which takes care of the employee’s entire Life Cycle Management.",
  },
  {
    slug: "hr-development",
    icon: "bi bi-graph-up-arrow",
    title: "Human Resources 'Development'",
    description: "Human Resources ‘Development’ which takes care of the employee’s performance enhancement for better business results.",
    detail: "Human Resources ‘Development’ which takes care of the employee’s performance enhancement for better business results.",
  },
  {
    slug: "core-hr-service-areas",
    icon: "bi bi-briefcase",
    title: "Core HR Service Areas",
    description: "Hiring, salary fixation, fitting Job Descriptions, appointment orders, induction training/orientation, Learning & Development, Performance Management, and more.",
    detail:
      "Hiring, salary fixation, fitting Job Descriptions, appointment orders, induction training/orientation, Learning & Development, Performance Management, coaching & mentoring for senior positions, blue-colour employees handling, compliances management, Union/Representation body management, Long term Settlements, Disputes handling, disciplining, rewards & recognitions based on goals (set objectives) achievement, attrition and redundancy management are broadly the areas that KMAS shall handle deftly.",
  },
  {
    slug: "hr-audit",
    icon: "bi bi-clipboard-check",
    title: "HR Audit",
    description: "HR audit is a speciality area where KMAS can do a diagnostic study before taking up assignments, conduct a periodical audit on the effective implementation of the initiatives introduced in the organizations.",
    detail:
      "HR audit is a speciality area where KMAS can do a diagnostic study before taking up assignments, conduct a periodical audit on the effective implementation of the initiatives introduced in the organizations. In other words, KMAS can be a third eye for any organization which would help organizations to effectively enforce best practices with ease.",
  },
  {
    slug: "soft-skills-competency-programs",
    icon: "bi bi-lightbulb",
    title: "Soft Skills & Competency Programs",
    description: "Customizing the desired soft skills/competencies enhancement programs, using the proven tools but with specialised interpretations for creating high-performance employees.",
    detail: "Customizing the desired soft skills/competencies enhancement programs, using the proven tools but with specialised interpretations for creating high-performance employees.",
  },
  {
    slug: "future-ready-programs",
    icon: "bi bi-mortarboard",
    title: "Future-Ready Programs",
    description: "As an obligation to the next generation, KMAS reaches out the young minds in schools and colleges thro customised intervention programs to make them future-ready.",
    detail: "As an obligation to the next generation, KMAS reaches out the young minds in schools and colleges thro customised intervention programs to make them future-ready.",
  },
];
