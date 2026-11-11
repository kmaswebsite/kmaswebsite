"use client";

import Link from "next/link";
import { useSiteContent } from "@/lib/siteContent";

const quickLinks = [
  { label: "About Us", href: "/about-hrd" },
  { label: "Ramakrishnan Mohan", href: "/leadership" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const exploreLinks = [
  { label: "Industries", href: "/industries" },
  { label: "Solutions", href: "/solutions" },
  { label: "Strategy", href: "/strategy" },
  { label: "Training Programs", href: "/training-programs" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Careers", href: "/careers" },
];

export default function Footer() {
  const { company, social } = useSiteContent();

  return (
    <footer className="site-footer pt-5">
      <div className="container-custom">
        <div className="row gy-4 pb-4">
          <div className="col-lg-4 pe-lg-5">
            <h6 className="footer-brand d-flex align-items-center gap-2 mb-3">
              <i className="bi bi-diagram-3-fill" style={{ color: "#b9d98f" }} /> {company.shortName}
            </h6>
            <p className="mb-4">{company.tagline}</p>
            <div className="d-flex gap-2 footer-social">
              <a href={social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin" /></a>
              <a href={social.twitter} aria-label="Twitter / X" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x" /></a>
              <a href={social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook" /></a>
              <a href={social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram" /></a>
              <a href={social.youtube} aria-label="YouTube" target="_blank" rel="noopener noreferrer"><i className="bi bi-youtube" /></a>
            </div>
          </div>

          <div className="col-lg-2 col-6">
            <h6>Company</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-6">
            <h6>Explore</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4">
            <h6>Get In Touch</h6>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0 footer-contact">
              <li><i className="bi bi-geo-alt" /><span>{company.address}</span></li>
              <li><i className="bi bi-telephone" /><span>{company.phone}</span></li>
              <li><i className="bi bi-envelope" /><span>{company.email}</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom py-3">
        <div className="container-custom d-flex flex-wrap justify-content-between gap-2 small">
          <span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <div className="d-flex gap-3">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
