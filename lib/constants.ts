export type MegaMenuLink = {
  label: string;
  href: string;
  icon: string;
  description?: string;
};

export type MegaMenuColumn = {
  heading: string;
  links: MegaMenuLink[];
};

export type MegaMenuPromo = {
  icon: string;
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export type MegaMenu = {
  columns: MegaMenuColumn[];
  promo: MegaMenuPromo;
};

export type NavItem = {
  label: string;
  href?: string;
  mega?: MegaMenu;
};

export const MORE_MEGA_MENU: MegaMenu = {
  columns: [
    {
      heading: "Explore",
      links: [
        { label: "Industries", href: "/industries", icon: "bi bi-building" },
        { label: "Solutions", href: "/solutions", icon: "bi bi-gear" },
        { label: "Strategy", href: "/strategy", icon: "bi bi-diagram-3" },
        { label: "Success Stories", href: "/success-stories", icon: "bi bi-trophy" },
      ],
    },
    {
      heading: "Learning & Company",
      links: [
        { label: "Training Programs", href: "/training-programs", icon: "bi bi-mortarboard" },
        { label: "Corporate Learning", href: "/corporate-learning", icon: "bi bi-building" },
        { label: "Resources", href: "/resources", icon: "bi bi-file-earmark-text" },
        { label: "Blog", href: "/blog", icon: "bi bi-journal-text" },
        { label: "Careers", href: "/careers", icon: "bi bi-person-badge" },
      ],
    },
  ],
  promo: {
    icon: "bi bi-award",
    badge: "KMAS",
    title: "Krishna's Management Advisory & Services",
    description: "HR Management, HR Development, and Management Advisory Services.",
    ctaLabel: "About KMAS",
    ctaHref: "/about-hrd",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-hrd" },
  { label: "Leadership", href: "/leadership" },
  { label: "Services", href: "/services" },
  { label: "More", mega: MORE_MEGA_MENU },
];
