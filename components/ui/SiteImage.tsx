"use client";

import { useSiteImage } from "@/lib/useSiteImage";

type SiteImageProps = {
  path: string;
  alt: string;
  className?: string;
};

export default function SiteImage({ path, alt, className = "" }: SiteImageProps) {
  const src = useSiteImage(path);
  // Admin-overridable images use a plain <img> so any external URL works
  // without needing next/image remote-domain configuration.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={`site-image-fill ${className}`} loading="lazy" />;
}
