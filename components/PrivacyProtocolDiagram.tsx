"use client";

import { useState } from "react";

const protocol = [
  { id: "edge", index: "01", title: "Edge processing", short: "Raw input stays local", copy: "Transient signal input is conceptually reduced to task-specific features on the device before any external action is considered.", status: "LOCAL BOUNDARY" },
  { id: "sandbox", index: "02", title: "Memory sandbox", short: "Scoped, inspectable retention", copy: "Calibration, preferences, and event memory are separated into local stores with explicit scope, expiry, inspection, and erase controls.", status: "USER CONTROL" },
  { id: "proof", index: "03", title: "Selective proof", short: "Prove a condition, not a profile", copy: "A proposed zero-knowledge layer could attest to a narrow condition or authorization without disclosing the underlying private state.", status: "RESEARCH LAYER" },
  { id: "policy", index: "04", title: "Policy gate", short: "Purpose before transmission", copy: "A local policy boundary decides whether an output may leave the device, at what resolution, for which named purpose, and for how long.", status: "MINIMIZATION" },
  { id: "act", index: "05", title: "Context output", short: "Only the useful abstraction leaves", copy: "An environment should receive only the smallest approved context signal needed to adapt, not a reusable raw signal history or behavioral profile.", status: "BOUNDED OUTPUT" }
] as const;

export function PrivacyProtocolDiagram({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  const item = protocol[active];

  return (
    <div className={`protocol-shell ${compact ? "compact" : ""}`}>
      <div className="protocol-stage">
        <div className="protocol-stage-head"><span>V/H PRIVACY PROTOCOL</span><span>CONCEPT MODEL / CLICK TO INSPECT</span></div>
        <div className="protocol-track" aria-label="Interactive privacy architecture">
          {protocol.map((node, index) => (
            <button key={node.id} className={`protocol-node ${active === index ? "active" : ""}`} onClick={() => setActive(index)} aria-pressed={active === index}>
              <span>{node.index}</span><i aria-hidden="true" /><strong>{node.title}</strong><small>{node.short}</small>
            </button>
          ))}
        </div>
        <div className="protocol-data-ladder"><span>RAW / EPHEMERAL</span><i /><span>FEATURE / SCOPED</span><i /><span>STATE / AUTHORIZED</span><i /><span>PROOF / MINIMAL</span></div>
      </div>
      <aside className="protocol-inspector" aria-live="polite">
        <div><span>{item.index}</span><small>{item.status}</small></div>
        <h3>{item.title}</h3><p>{item.copy}</p>
        <dl><div><dt>Design posture</dt><dd>Local-first</dd></div><div><dt>Disclosure</dt><dd>Minimum necessary</dd></div><div><dt>Validation</dt><dd>Required before claim</dd></div></dl>
        <p className="protocol-caveat">Architecture proposal only. No claim of audited production controls is made here.</p>
      </aside>
    </div>
  );
}
