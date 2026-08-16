"use client";

import { FormEvent, useState } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/realjjemail@gmail.com";
const PDF_PATH = "/research/brief";

export function ResearchGateway() {
  const [status, setStatus] = useState<"idle" | "sending" | "unlocked" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("_subject", "Vanta Helix — research brief access");
    data.set("_captcha", "false");
    data.set("_template", "table");

    try {
      const response = await fetch(FORM_ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: data });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("unlocked");
    } catch {
      setStatus("error");
    }
  }

  if (status === "unlocked") {
    return (
      <div className="research-unlocked">
        <span className="research-kicker">ACCESS GRANTED / COLLABORATOR BRIEF</span>
        <h2>Privacy Architecture Brief</h2>
        <p>Your request was recorded. The six-page concept brief covers the local processing boundary, selective-proof research layer, memory sandboxing, data minimization, and the validation agenda.</p>
        <a className="primary-button" href={PDF_PATH} download>Download PDF <span>↓</span></a>
        <small>This gate qualifies research interest; it is not DRM. The document is a concept brief, not a security audit or clinical specification.</small>
      </div>
    );
  }

  return (
    <form className="research-gate-form" onSubmit={submit}>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px" }} />
      <div className="research-form-head"><span>COLLABORATOR GATEWAY</span><small>BRIEF / 06 PAGES / PDF</small></div>
      <div className="research-form-grid">
        <label><span>Name</span><input name="name" required autoComplete="name" placeholder="Your name" /></label>
        <label><span>Email</span><input name="email" type="email" required autoComplete="email" placeholder="you@lab.org" /></label>
        <label><span>Affiliation</span><input name="affiliation" placeholder="Lab, company, university, independent" /></label>
        <label><span>Discipline</span><select name="discipline" required defaultValue=""><option value="" disabled>Select one</option><option>Neural interfaces</option><option>Privacy / cryptography</option><option>Human-computer interaction</option><option>Hardware / embedded systems</option><option>Design research</option><option>Other technical research</option></select></label>
      </div>
      <label className="research-interest"><span>What would you like to challenge or explore?</span><textarea name="interest" rows={4} placeholder="Threat model, edge inference, ZK attestation, memory controls, adaptive UI…" /></label>
      <label className="research-consent"><input type="checkbox" name="research_context" required /><span>I understand this material describes a research concept and does not claim a deployed, audited, or clinically validated system.</span></label>
      <button className="research-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? "Opening gateway…" : "Request technical brief"}<span>↗</span></button>
      <p className={`form-status ${status}`} aria-live="polite">{status === "error" ? "Could not submit the request. Please try again." : "For technical collaborators, interface researchers, and privacy/security reviewers."}</p>
    </form>
  );
}
