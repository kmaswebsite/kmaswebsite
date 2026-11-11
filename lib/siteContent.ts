"use client";

import { useEffect, useState } from "react";

export type CompanyInfo = {
  name: string;
  shortName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
};

export type SocialLinks = {
  linkedin: string;
  twitter: string;
  facebook: string;
  youtube: string;
  instagram: string;
};

export type HeroSlideText = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type SiteContent = {
  company: CompanyInfo;
  social: SocialLinks;
  heroSlides: [HeroSlideText, HeroSlideText, HeroSlideText];
};

export const DEFAULT_SITE_CONTENT: SiteContent = {
  company: {
    name: "Krishna's Management Advisory & Services (KMAS)",
    shortName: "KMAS",
    tagline: "KMAS is a consultancy firm, offering strategic and operational advice & suggestions on result-oriented business development through people performance initiatives to its clients and hand-holding in successfully implementing the same.",
    phone: "+91 99401 99834",
    email: "admin@k-mas.com",
    address: "Sree Aishwaryam Apartments, 1A 3D, Ground Floor, Dr. Ambedkar Road, Bhuvaneshwari Nagar, Venkitapuram, Coimbatore - 641 025",
    hours: "Mon – Fri: 9:30 AM – 6:30 PM (IST)",
  },
  social: {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
    youtube: "#",
    instagram: "#",
  },
  heroSlides: [
    {
      eyebrow: "HRD Strategy, Solutions & Services",
      title: "Empowering People. Enabling Performance. Driving Organizational Growth.",
      subtitle:
        "We help organizations transform their workforce through innovative HR strategies, professional development, learning solutions, leadership programs, and digital transformation.",
    },
    {
      eyebrow: "Training Programs",
      title: "Build a Workforce Ready for What's Next",
      subtitle:
        "From leadership accelerators to compliance essentials, our flagship training catalog delivers certified programs online, in-person, or hybrid.",
    },
    {
      eyebrow: "Success Stories",
      title: "Real Results Across 12+ Industries",
      subtitle:
        "See how organizations in healthcare, logistics, finance, and manufacturing turned HR strategy into measurable, lasting outcomes.",
    },
  ],
};

const CONTENT_STORAGE_KEY = "hrd-site-content";
const CONTENT_EVENT = "hrd-site-content-changed";

function readSiteContent(): SiteContent {
  if (typeof window === "undefined") return DEFAULT_SITE_CONTENT;
  try {
    const raw = window.localStorage.getItem(CONTENT_STORAGE_KEY);
    if (!raw) return DEFAULT_SITE_CONTENT;
    const parsed = JSON.parse(raw);
    return {
      company: { ...DEFAULT_SITE_CONTENT.company, ...parsed.company },
      social: { ...DEFAULT_SITE_CONTENT.social, ...parsed.social },
      heroSlides: [
        { ...DEFAULT_SITE_CONTENT.heroSlides[0], ...parsed.heroSlides?.[0] },
        { ...DEFAULT_SITE_CONTENT.heroSlides[1], ...parsed.heroSlides?.[1] },
        { ...DEFAULT_SITE_CONTENT.heroSlides[2], ...parsed.heroSlides?.[2] },
      ],
    };
  } catch {
    return DEFAULT_SITE_CONTENT;
  }
}

export function getSiteContent(): SiteContent {
  return readSiteContent();
}

export function writeSiteContent(content: SiteContent) {
  window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(new Event(CONTENT_EVENT));
}

export function resetSiteContent() {
  window.localStorage.removeItem(CONTENT_STORAGE_KEY);
  window.dispatchEvent(new Event(CONTENT_EVENT));
}

export function useSiteContent(): SiteContent {
  const [content, setContent] = useState<SiteContent>(DEFAULT_SITE_CONTENT);

  useEffect(() => {
    const update = () => setContent(readSiteContent());
    update();
    window.addEventListener("storage", update);
    window.addEventListener(CONTENT_EVENT, update);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener(CONTENT_EVENT, update);
    };
  }, []);

  return content;
}
