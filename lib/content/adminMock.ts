export const adminStats = [
  { icon: "bi bi-envelope-paper", label: "New Enquiries", value: "24", trend: "+8% this week" },
  { icon: "bi bi-mortarboard", label: "Training Interest", value: "132", trend: "+12% this week" },
  { icon: "bi bi-people", label: "Active Clients", value: "57", trend: "steady" },
  { icon: "bi bi-file-earmark-text", label: "Published Articles", value: "6", trend: "1 in draft" },
];

export type AdminEnquiry = {
  name: string;
  company: string;
  subject: string;
  date: string;
  status: "New" | "In Progress" | "Closed";
};

export const adminEnquiries: AdminEnquiry[] = [
  { name: "Rachel Kim", company: "Bramwell Logistics", subject: "Workforce planning engagement", date: "2026-07-18", status: "New" },
  { name: "James Okoro", company: "Meridian Health Group", subject: "Leadership accelerator cohort 4", date: "2026-07-17", status: "In Progress" },
  { name: "Elena Vasquez", company: "Solvex Financial", subject: "HR analytics dashboard scope", date: "2026-07-15", status: "In Progress" },
  { name: "Tom Bradley", company: "Anchorline Manufacturing", subject: "Compliance training renewal", date: "2026-07-12", status: "Closed" },
  { name: "Nadia Hassan", company: "Coastal Retail Group", subject: "Assessment center request", date: "2026-07-10", status: "New" },
];

export type AdminPageStatus = {
  page: string;
  status: "Published" | "Draft";
  lastUpdated: string;
};

export const adminPages: AdminPageStatus[] = [
  { page: "Home", status: "Published", lastUpdated: "2026-07-19" },
  { page: "About HRD", status: "Published", lastUpdated: "2026-07-10" },
  { page: "Training Programs", status: "Published", lastUpdated: "2026-07-15" },
  { page: "Blog — AI in HR", status: "Draft", lastUpdated: "2026-07-20" },
  { page: "Careers", status: "Published", lastUpdated: "2026-06-28" },
];
