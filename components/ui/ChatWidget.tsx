"use client";

import { useState } from "react";
import Link from "next/link";
import { useSiteContent } from "@/lib/siteContent";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const { company } = useSiteContent();

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-widget-panel fade-in is-visible">
          <div className="chat-widget-header">
            <span>Chat with KMAS</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat">
              <i className="bi bi-x-lg" aria-hidden="true" />
            </button>
          </div>
          <div className="chat-widget-body">
            <p className="mb-3">
              Hi! Have a question about HR management, HR development, or management
              advisory services? Reach us directly:
            </p>
            <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="chat-widget-link">
              <i className="bi bi-telephone" aria-hidden="true" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="chat-widget-link">
              <i className="bi bi-envelope" aria-hidden="true" /> {company.email}
            </a>
            <Link href="/contact" className="btn-primary-custom w-100 justify-content-center mt-3" onClick={() => setOpen(false)}>
              Go to Contact Page
            </Link>
          </div>
        </div>
      )}

      <button
        type="button"
        className="chat-widget-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <i className={open ? "bi bi-x-lg" : "bi bi-chat-dots-fill"} aria-hidden="true" />
      </button>
    </div>
  );
}
