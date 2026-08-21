export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Whitfield",
    role: "VP People, Meridian Health Group",
    company: "Meridian Health Group",
    quote:
      "HRD rebuilt our performance management system in under four months. Manager adoption was immediate because the process finally felt fair and simple.",
    rating: 5,
  },
  {
    name: "David Okafor",
    role: "CHRO, Bramwell Logistics",
    company: "Bramwell Logistics",
    quote:
      "Their workforce planning model gave us the confidence to scale into two new regions without a single critical role going unfilled.",
    rating: 5,
  },
  {
    name: "Lianne Petrova",
    role: "Head of L&D, Solvex Financial",
    company: "Solvex Financial",
    quote:
      "The leadership accelerator program changed how our directors operate. Three cohorts in, and internal promotion rates are up sharply.",
    rating: 5,
  },
  {
    name: "Tomás Reyes",
    role: "COO, Anchorline Manufacturing",
    company: "Anchorline Manufacturing",
    quote:
      "Compliance training used to be a checkbox exercise. HRD made it genuinely engaging while keeping us fully audit-ready.",
    rating: 4,
  },
];
