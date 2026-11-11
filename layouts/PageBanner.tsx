"use client";

import SiteImage from "@/components/ui/SiteImage";
import { useEditableContent } from "@/lib/editableContent";

type PageBannerProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  icon?: string;
  tone?: "primary" | "secondary" | "success";
  image?: string;
  bannerKey?: string;
};

export default function PageBanner({
  eyebrow,
  title,
  subtitle,
  icon = "bi bi-diagram-3",
  tone = "primary",
  image = "/images/banner-people.jpg",
  bannerKey,
}: PageBannerProps) {
  const text = useEditableContent(`banner-${bannerKey || title}`, {
    eyebrow: eyebrow ?? "",
    title,
    subtitle: subtitle ?? "",
  });

  return (
    <div className="page-banner-shell container-custom">
      <div className="page-banner-image">
        <SiteImage path={image} alt="" className="page-banner-image-photo" />
        <div className={`page-banner-overlay page-banner-tone-${tone}`} aria-hidden="true" />
        <i className={`page-banner-icon ${icon}`} aria-hidden="true" />
        <div className="container-custom position-relative">
          {text.eyebrow && <span className="eyebrow-inverted d-block">{text.eyebrow}</span>}
          <h1 className="page-banner-title">{text.title}</h1>
          {text.subtitle && <p className="page-banner-subtitle">{text.subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
