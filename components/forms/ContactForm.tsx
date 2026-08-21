"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Something went wrong. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card-custom text-center">
        <i className="bi bi-check-circle text-success-custom" style={{ fontSize: "2.5rem" }} />
        <h3 className="h5 mt-3 mb-2">Thank you for reaching out</h3>
        <p className="text-light-custom mb-0">
          A member of our team will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="card-custom" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-sm-6">
          <label className="form-label" htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" className="form-control" required />
        </div>
        <div className="col-sm-6">
          <label className="form-label" htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" className="form-control" required />
        </div>
        <div className="col-sm-6">
          <label className="form-label" htmlFor="contact-phone">Phone</label>
          <input id="contact-phone" name="phone" type="tel" className="form-control" />
        </div>
        <div className="col-sm-6">
          <label className="form-label" htmlFor="contact-company">Company</label>
          <input id="contact-company" name="company" type="text" className="form-control" />
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="contact-subject">Subject</label>
          <input id="contact-subject" name="subject" type="text" className="form-control" required />
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" className="form-control" rows={5} required />
        </div>

        {status === "error" && (
          <div className="col-12">
            <div className="small text-rose-custom">
              <i className="bi bi-exclamation-circle me-1" /> {errorMessage}
            </div>
          </div>
        )}

        <div className="col-12">
          <button type="submit" className="btn-primary-custom" disabled={status === "loading"}>
            {status === "loading" ? "Sending…" : "Send Message"} <i className="bi bi-send ms-1" />
          </button>
        </div>
      </div>
    </form>
  );
}
