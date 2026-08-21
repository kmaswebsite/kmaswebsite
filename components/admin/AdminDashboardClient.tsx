"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Badge from "@/components/ui/Badge";
import GeneralSettingsForm from "@/components/admin/GeneralSettingsForm";
import SocialMediaForm from "@/components/admin/SocialMediaForm";
import HeroSlidesForm from "@/components/admin/HeroSlidesForm";
import ImagesManager from "@/components/admin/ImagesManager";
import PageBannersForm from "@/components/admin/PageBannersForm";
import ArrayEditor from "@/components/admin/ArrayEditor";
import { adminStats, adminEnquiries, adminPages } from "@/lib/content/adminMock";
import { strategyItems } from "@/lib/content/strategy";
import { solutionItems } from "@/lib/content/solutions";
import { serviceItems } from "@/lib/content/services";
import { industryItems } from "@/lib/content/industries";
import { testimonials } from "@/lib/content/testimonials";
import { blogPosts } from "@/lib/content/blogPosts";
import { caseStudies } from "@/lib/content/caseStudies";
import { faqs } from "@/lib/content/faqs";
import { benefits, openRoles } from "@/lib/content/careers";

type TabKey =
  | "dashboard"
  | "general"
  | "social"
  | "hero"
  | "banners"
  | "images"
  | "strategy"
  | "solutions"
  | "services"
  | "industries"
  | "testimonials"
  | "blog"
  | "casestudies"
  | "faqs"
  | "careers"
  | "soon";

const sidebarGroups: { heading: string; links: { key: TabKey; icon: string; label: string }[] }[] = [
  {
    heading: "Overview",
    links: [{ key: "dashboard", icon: "bi bi-grid", label: "Dashboard" }],
  },
  {
    heading: "Site Settings",
    links: [
      { key: "general", icon: "bi bi-building", label: "General Settings" },
      { key: "social", icon: "bi bi-share", label: "Social Media" },
      { key: "hero", icon: "bi bi-easel", label: "Homepage Hero" },
      { key: "banners", icon: "bi bi-flag", label: "Page Banners" },
      { key: "images", icon: "bi bi-images", label: "Site Images" },
    ],
  },
  {
    heading: "Page Content",
    links: [
      { key: "strategy", icon: "bi bi-diagram-3", label: "Strategy" },
      { key: "solutions", icon: "bi bi-gear", label: "Solutions" },
      { key: "services", icon: "bi bi-briefcase", label: "Services" },
      { key: "industries", icon: "bi bi-globe", label: "Industries" },
      { key: "testimonials", icon: "bi bi-chat-quote", label: "Testimonials" },
      { key: "blog", icon: "bi bi-file-earmark-text", label: "Blog Posts" },
      { key: "casestudies", icon: "bi bi-trophy", label: "Success Stories" },
      { key: "faqs", icon: "bi bi-question-circle", label: "FAQs" },
      { key: "careers", icon: "bi bi-person-badge", label: "Careers" },
    ],
  },
  {
    heading: "Coming Soon",
    links: [
      { key: "soon", icon: "bi bi-envelope-paper", label: "Enquiries" },
      { key: "soon", icon: "bi bi-mortarboard", label: "Training Programs" },
    ],
  },
];

const statusBadgeClass: Record<string, string> = {
  New: "text-accent",
  "In Progress": "text-secondary-custom",
  Closed: "text-success-custom",
  Published: "text-success-custom",
  Draft: "text-light-custom",
};

const tabTitles: Record<TabKey, { title: string; subtitle: string }> = {
  dashboard: { title: "Dashboard Overview", subtitle: "A snapshot of enquiries and content status." },
  general: { title: "General Settings", subtitle: "Company info shown across the header, footer, and contact page." },
  social: { title: "Social Media", subtitle: "Links used by the footer's social icons." },
  hero: { title: "Homepage Hero", subtitle: "Copy for the 3-slide hero carousel on the homepage." },
  banners: { title: "Page Banners", subtitle: "Eyebrow, title, and subtitle text for every page's top banner." },
  images: { title: "Site Images", subtitle: "Every photo used across the site, in one place." },
  strategy: { title: "Strategy", subtitle: "The 8 strategy cards shown on the homepage and /strategy." },
  solutions: { title: "Solutions", subtitle: "The 10 solution cards shown on the homepage and /solutions." },
  services: { title: "Services", subtitle: "The 12 service cards shown on the homepage and /services." },
  industries: { title: "Industries", subtitle: "The 12 industry cards shown on /industries." },
  testimonials: { title: "Testimonials", subtitle: "Client quotes shown on the homepage." },
  blog: { title: "Blog Posts", subtitle: "Articles shown on the homepage teaser and /blog." },
  casestudies: { title: "Success Stories", subtitle: "Case studies shown on /success-stories." },
  faqs: { title: "FAQs", subtitle: "Questions shown in the homepage FAQ accordion." },
  careers: { title: "Careers", subtitle: "Benefits and open roles shown on /careers." },
  soon: { title: "Coming Soon", subtitle: "This area isn't wired up yet." },
};

export default function AdminDashboardClient() {
  const [activeTab, setActiveTab] = useState<TabKey>("dashboard");
  const active = tabTitles[activeTab];
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/hrd-logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-section-bg)" }}>
      <div
        className="d-flex align-items-center justify-content-between px-4 py-3"
        style={{ background: "linear-gradient(160deg, #12100e, #3a2a1f)" }}
      >
        <div className="d-flex align-items-center gap-2">
          <span className="brand-mark">
            <i className="bi bi-diagram-3-fill" aria-hidden="true" />
          </span>
          <span className="fw-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
            HRD Admin Portal
          </span>
        </div>
        <button type="button" className="btn-secondary-custom btn-sm-custom" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }} onClick={handleLogout}>
          <i className="bi bi-box-arrow-right me-1" /> Log Out
        </button>
      </div>

      <div className="container-custom py-4">
        <div className="row g-4">
          <div className="col-lg-3">
            <div className="card-custom" style={{ maxHeight: "calc(100vh - 140px)", overflowY: "auto" }}>
              <h2 className="h6 mb-3 text-light-custom">Admin</h2>
              {sidebarGroups.map((group) => (
                <div className="mb-3" key={group.heading}>
                  <span className="text-light-custom small text-uppercase fw-semibold d-block mb-1" style={{ letterSpacing: "0.06em", fontSize: "0.7rem" }}>
                    {group.heading}
                  </span>
                  <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
                    {group.links.map((link, index) => {
                      const isActive = activeTab === link.key && link.key !== "soon";
                      return (
                        <li key={`${link.label}-${index}`}>
                          <button
                            type="button"
                            onClick={() => setActiveTab(link.key)}
                            className="btn w-100 text-start border-0 d-flex align-items-center gap-2 py-2 px-2"
                            style={{
                              borderRadius: "var(--radius-sm)",
                              backgroundColor: isActive ? "var(--color-accent-soft)" : "transparent",
                              color: isActive ? "var(--color-accent)" : "var(--color-text)",
                              fontWeight: isActive ? 600 : 500,
                            }}
                          >
                            <i className={link.icon} /> {link.label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h1 className="h4 mb-1">{active.title}</h1>
                <p className="text-light-custom mb-0 small">{active.subtitle}</p>
              </div>
              {activeTab === "dashboard" && <Badge>Preview Data</Badge>}
            </div>

            {activeTab === "dashboard" && (
              <>
                <div className="row g-4 mb-4">
                  {adminStats.map((stat) => (
                    <div className="col-sm-6 col-xl-3" key={stat.label}>
                      <div className="card-custom h-100">
                        <i className={`${stat.icon} text-accent fs-4`} />
                        <div className="h4 mt-2 mb-0">{stat.value}</div>
                        <p className="text-light-custom small mb-1">{stat.label}</p>
                        <span className="small text-success-custom">{stat.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-custom mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="h6 mb-0">Recent Enquiries</h2>
                    <Badge>Preview Data</Badge>
                  </div>
                  <div className="table-responsive">
                    <table className="table align-middle mb-0">
                      <thead>
                        <tr>
                          <th>Contact</th>
                          <th>Company</th>
                          <th>Subject</th>
                          <th>Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {adminEnquiries.map((enquiry) => (
                          <tr key={`${enquiry.name}-${enquiry.date}`}>
                            <td className="fw-semibold">{enquiry.name}</td>
                            <td className="text-light-custom">{enquiry.company}</td>
                            <td className="text-light-custom">{enquiry.subject}</td>
                            <td className="text-light-custom">{enquiry.date}</td>
                            <td className={`fw-semibold ${statusBadgeClass[enquiry.status]}`}>{enquiry.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card-custom">
                  <h2 className="h6 mb-3">Content Status</h2>
                  <div className="table-responsive">
                    <table className="table align-middle mb-0">
                      <thead>
                        <tr>
                          <th>Page</th>
                          <th>Status</th>
                          <th>Last Updated</th>
                        </tr>
                      </thead>
                      <tbody>
                        {adminPages.map((page) => (
                          <tr key={page.page}>
                            <td className="fw-semibold">{page.page}</td>
                            <td className={`fw-semibold ${statusBadgeClass[page.status]}`}>{page.status}</td>
                            <td className="text-light-custom">{page.lastUpdated}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {activeTab === "general" && <GeneralSettingsForm />}
            {activeTab === "social" && <SocialMediaForm />}
            {activeTab === "hero" && <HeroSlidesForm />}
            {activeTab === "banners" && <PageBannersForm />}
            {activeTab === "images" && <ImagesManager />}

            {activeTab === "strategy" && (
              <ArrayEditor
                contentKey="strategy-items"
                defaultItems={strategyItems}
                titleField="title"
                fields={[
                  { name: "title", label: "Title" },
                  { name: "icon", label: "Icon (Bootstrap Icons class)" },
                  { name: "description", label: "Short Description", type: "textarea" },
                  { name: "detail", label: "Full Detail Text", type: "textarea" },
                ]}
                emptyItem={{ slug: `new-${Date.now()}`, icon: "bi bi-diagram-3", title: "New Strategy Item", description: "", detail: "" }}
              />
            )}

            {activeTab === "solutions" && (
              <ArrayEditor
                contentKey="solution-items"
                defaultItems={solutionItems}
                titleField="title"
                fields={[
                  { name: "title", label: "Title" },
                  { name: "icon", label: "Icon (Bootstrap Icons class)" },
                  { name: "description", label: "Short Description", type: "textarea" },
                  { name: "detail", label: "Full Detail Text", type: "textarea" },
                ]}
                emptyItem={{ slug: `new-${Date.now()}`, icon: "bi bi-gear", title: "New Solution", description: "", detail: "" }}
              />
            )}

            {activeTab === "services" && (
              <ArrayEditor
                contentKey="service-items"
                defaultItems={serviceItems}
                titleField="title"
                fields={[
                  { name: "title", label: "Title" },
                  { name: "icon", label: "Icon (Bootstrap Icons class)" },
                  { name: "description", label: "Short Description", type: "textarea" },
                  { name: "detail", label: "Full Detail Text", type: "textarea" },
                ]}
                emptyItem={{ slug: `new-${Date.now()}`, icon: "bi bi-briefcase", title: "New Service", description: "", detail: "" }}
              />
            )}

            {activeTab === "industries" && (
              <ArrayEditor
                contentKey="industry-items"
                defaultItems={industryItems}
                titleField="title"
                fields={[
                  { name: "title", label: "Title" },
                  { name: "icon", label: "Icon (Bootstrap Icons class)" },
                  { name: "description", label: "Description", type: "textarea" },
                ]}
                emptyItem={{ slug: `new-${Date.now()}`, icon: "bi bi-globe", title: "New Industry", description: "" }}
              />
            )}

            {activeTab === "testimonials" && (
              <ArrayEditor
                contentKey="testimonials"
                defaultItems={testimonials}
                titleField="name"
                fields={[
                  { name: "name", label: "Name" },
                  { name: "role", label: "Role" },
                  { name: "company", label: "Company" },
                  { name: "quote", label: "Quote", type: "textarea" },
                ]}
                emptyItem={{ name: "New Client", role: "", company: "", quote: "", rating: 5 }}
              />
            )}

            {activeTab === "blog" && (
              <ArrayEditor
                contentKey="blog-posts"
                defaultItems={blogPosts}
                titleField="title"
                fields={[
                  { name: "title", label: "Title" },
                  { name: "category", label: "Category" },
                  { name: "author", label: "Author" },
                  { name: "date", label: "Date (YYYY-MM-DD)" },
                  { name: "excerpt", label: "Excerpt", type: "textarea" },
                  { name: "content", label: "Article Body (separate paragraphs with a blank line)", type: "paragraphs" },
                ]}
                emptyItem={{ slug: `new-post-${Date.now()}`, title: "New Blog Post", excerpt: "", category: "HR Trends", author: "", date: "", content: [] }}
              />
            )}

            {activeTab === "casestudies" && (
              <ArrayEditor
                contentKey="case-studies"
                defaultItems={caseStudies}
                titleField="client"
                fields={[
                  { name: "client", label: "Client Name" },
                  { name: "industry", label: "Industry" },
                  { name: "problem", label: "Problem", type: "textarea" },
                  { name: "solution", label: "Solution", type: "textarea" },
                  { name: "result", label: "Result", type: "textarea" },
                ]}
                emptyItem={{ slug: `new-case-${Date.now()}`, client: "New Client", industry: "", problem: "", solution: "", result: "" }}
              />
            )}

            {activeTab === "faqs" && (
              <ArrayEditor
                contentKey="faqs"
                defaultItems={faqs}
                titleField="question"
                fields={[
                  { name: "question", label: "Question" },
                  { name: "answer", label: "Answer", type: "textarea" },
                ]}
                emptyItem={{ question: "New question?", answer: "" }}
              />
            )}

            {activeTab === "careers" && (
              <div className="d-flex flex-column gap-4">
                <div>
                  <h2 className="h6 mb-3">Benefits</h2>
                  <ArrayEditor
                    contentKey="careers-benefits"
                    defaultItems={benefits}
                    titleField="title"
                    fields={[
                      { name: "title", label: "Title" },
                      { name: "icon", label: "Icon (Bootstrap Icons class)" },
                      { name: "description", label: "Description", type: "textarea" },
                    ]}
                    emptyItem={{ icon: "bi bi-star", title: "New Benefit", description: "" }}
                  />
                </div>
                <div>
                  <h2 className="h6 mb-3">Open Roles</h2>
                  <ArrayEditor
                    contentKey="careers-roles"
                    defaultItems={openRoles}
                    titleField="title"
                    fields={[
                      { name: "title", label: "Role Title" },
                      { name: "department", label: "Department" },
                      { name: "location", label: "Location" },
                      { name: "type", label: "Type" },
                    ]}
                    emptyItem={{ title: "New Role", department: "", location: "", type: "Full-time" }}
                  />
                </div>
              </div>
            )}

            {activeTab === "soon" && (
              <div className="card-custom text-center py-5">
                <i className="bi bi-cone-striped text-light-custom mb-2" style={{ fontSize: "2rem" }} />
                <p className="text-light-custom mb-0">This section isn't wired up in this preview yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
