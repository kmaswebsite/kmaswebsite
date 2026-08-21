export type IndustryItem = {
  slug: string;
  icon: string;
  title: string;
  description: string;
};

// Sectors named verbatim in the KMAS Profile PDF ("Served in many sectors
// viz, manufacturing, processing, auto and auto ancillary, FMCG, Food,
// Retail, Electrical component, Micro finance, ITES & Chemicals.") — no
// descriptions are given in the source, so description is left empty.
export const industryItems: IndustryItem[] = [
  { slug: "manufacturing", icon: "bi bi-gear", title: "Manufacturing", description: "" },
  { slug: "processing", icon: "bi bi-diagram-2", title: "Processing", description: "" },
  { slug: "auto-and-auto-ancillary", icon: "bi bi-truck-front", title: "Auto and Auto Ancillary", description: "" },
  { slug: "fmcg", icon: "bi bi-basket", title: "FMCG", description: "" },
  { slug: "food", icon: "bi bi-cup-hot", title: "Food", description: "" },
  { slug: "retail", icon: "bi bi-shop", title: "Retail", description: "" },
  { slug: "electrical-component", icon: "bi bi-lightning-charge", title: "Electrical Component", description: "" },
  { slug: "micro-finance", icon: "bi bi-cash-coin", title: "Micro Finance", description: "" },
  { slug: "ites", icon: "bi bi-headset", title: "ITES", description: "" },
  { slug: "chemicals", icon: "bi bi-flask", title: "Chemicals", description: "" },
];
