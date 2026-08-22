"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS, type MegaMenu } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [openMega, setOpenMega] = useState<string | null>(null);
  const navRef = useRef<HTMLUListElement>(null);

  const closeMobileMenu = () => {
    const collapseEl = document.getElementById("mainNav");
    if (!collapseEl?.classList.contains("show")) return;

    import("bootstrap/dist/js/bootstrap.bundle.min.js").then((mod) => {
      mod.Collapse.getOrCreateInstance(collapseEl).hide();
    });
  };

  useEffect(() => {
    setOpenMega(null);
    // Navigating to a page (clicking a nav link) should close the mobile
    // floating menu too, not just the mega dropdown within it.
    closeMobileMenu();
  }, [pathname]);

  useEffect(() => {
    // On mobile/tablet the nav collapses into the floating panel; scrolling
    // the page while it's open should close it rather than leaving it
    // floating over content the user is trying to read.
    window.addEventListener("scroll", closeMobileMenu, { passive: true });
    return () => window.removeEventListener("scroll", closeMobileMenu);
  }, []);

  useEffect(() => {
    if (!openMega) return;

    const closeIfOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMega(null);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMega(null);
    };

    document.addEventListener("mousedown", closeIfOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeIfOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [openMega]);

  const isActive = (href?: string) => {
    if (!href) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  const isMegaActive = (mega?: MegaMenu) =>
    !!mega?.columns.some((col) => col.links.some((link) => isActive(link.href)));

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg py-3 position-relative">
        <div className="container-custom d-flex align-items-center justify-content-between">
          <Link href="/" className="navbar-brand d-flex align-items-center me-4">
            <Image src="/images/logo-kmas.png" alt="KMAS" width={132} height={66} className="brand-logo" priority />
          </Link>

          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto align-items-lg-center" ref={navRef}>
              {NAV_ITEMS.map((item) => {
                if (item.mega) {
                  const active = isMegaActive(item.mega);
                  const isOpen = openMega === item.label;
                  return (
                    <li className={`nav-item dropdown dropdown-${item.label.toLowerCase()} ${isOpen ? "show" : ""}`} key={item.label}>
                      <button
                        className={`nav-link dropdown-toggle d-flex align-items-center gap-1 ${active ? "active" : ""}`}
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenMega((prev) => (prev === item.label ? null : item.label))}
                      >
                        {item.label}
                      </button>

                      <div className={`dropdown-menu dropdown-menu-mega ${isOpen ? "show" : ""}`}>
                        <div className="mega-inner">
                          <div className="mega-columns">
                            {item.mega.columns.map((column) => (
                              <div className="mega-col" key={column.heading}>
                                <span className="mega-col-heading">{column.heading}</span>
                                <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
                                  {column.links.map((link) => (
                                    <li key={link.href + link.label}>
                                      <Link href={link.href} className="dropdown-item-custom">
                                        <span className="dropdown-item-icon">
                                          <i className={link.icon} aria-hidden="true" />
                                        </span>
                                        <span>
                                          <span className="d-block fw-semibold">{link.label}</span>
                                          {link.description && (
                                            <span className="d-block small text-light-custom">{link.description}</span>
                                          )}
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          <div className="mega-promo">
                            <span className="mega-promo-badge">{item.mega.promo.badge}</span>
                            <div className="mega-promo-icon">
                              <i className={item.mega.promo.icon} aria-hidden="true" />
                            </div>
                            <h3 className="h6 mb-2">{item.mega.promo.title}</h3>
                            <p className="small mb-3">{item.mega.promo.description}</p>
                            <Link href={item.mega.promo.ctaHref} className="mega-promo-cta">
                              {item.mega.promo.ctaLabel} <i className="bi bi-arrow-right ms-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li className="nav-item" key={item.href}>
                    <Link href={item.href!} className={`nav-link ${isActive(item.href) ? "active" : ""}`}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
              <Link href="/contact" className="btn-primary-custom btn-sm-custom">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
