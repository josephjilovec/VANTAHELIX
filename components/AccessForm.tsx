"use client";

import { FormEvent, useState } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/realjjemail@gmail.com";

export function AccessForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("_subject", "Vanta Helix — private access request");
    data.set("_captcha", "false");
    data.set("_template", "table");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="access-form" onSubmit={submit}>
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px" }}
      />
      <label>
        <span>Your name</span>
        <input name="name" required autoComplete="name" placeholder="Your name" />
      </label>
      <label>
        <span>Email address</span>
        <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
      </label>
      <label>
        <span>Primary discipline</span>
        <select name="discipline" required defaultValue="">
          <option value="" disabled>Select one</option>
          <option>Design / architecture</option>
          <option>Research / science</option>
          <option>Music / creative</option>
          <option>Aviation / operations</option>
          <option>Technology / engineering</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        <span>Where does your most meaningful work happen?</span>
        <textarea name="context" rows={4} placeholder="Studio, lab, flight deck, office, home workspace…" />
      </label>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request private access"}<span>↗</span>
      </button>
      <p className={`form-status ${status}`} aria-live="polite">
        {status === "sent"
          ? "Request received. We’ll review it for fit."
          : status === "error"
            ? "Could not send. Please try again."
            : "No deposit · concept access list"}
      </p>
    </form>
  );
}
