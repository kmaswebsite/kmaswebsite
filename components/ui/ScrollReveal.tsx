"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll(".fade-up:not(.is-visible), .fade-in:not(.is-visible), .stagger-fade:not(.is-visible)");
    if (!targets.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // threshold: 0 fires as soon as any part of the target enters the
    // viewport. A percentage threshold (e.g. 0.15) looks fine for a short
    // card but never crosses for a tall single-column stack — on mobile a
    // 12-item grid can be 3000px+ tall, and 15% of that is more than a
    // full screen of scrolling, so the reveal would never fire.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
