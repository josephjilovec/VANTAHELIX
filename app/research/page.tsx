import type { Metadata } from "next";
import { PrivacyProtocolDiagram } from "@/components/PrivacyProtocolDiagram";
import { ResearchGateway } from "@/components/ResearchGateway";

export const metadata: Metadata = {
  title: "Research",
  description: "Vanta Helix research gateway for adaptive-interface, edge intelligence, and privacy architecture collaborators."
};

export default function ResearchPage() {
  return (
    <main className="research-page">
      <section className="research-hero">
        <div className="research-hero-copy">
          <span className="section-index">RESEARCH / 05</span>
          <p className="research-overline">ADAPTIVE INTERFACES · EDGE INTELLIGENCE · PRIVACY ARCHITECTURE</p>
          <h1>Build the interface.<br/><em>Challenge the boundary.</em></h1>
          <p>Vanta Helix is a research concept for interfaces that adapt without turning private human signals into a standing cloud asset. This gateway is for collaborators who want to inspect the assumptions, threat model, and architecture behind that idea.</p>
          <div className="research-meta"><div><strong>06</strong><span>brief pages</span></div><div><strong>05</strong><span>protocol layers</span></div><div><strong>01</strong><span>local-first posture</span></div></div>
        </div>
        <div className="research-hero-visual" aria-hidden="true"><div className="research-orbit o1"/><div className="research-orbit o2"/><div className="research-orbit o3"/><div className="research-core">V/H</div><span>PRIVATE COMPUTE<br/>RESEARCH FIELD</span></div>
      </section>

      <section className="research-principles-strip">
        <div><span>01</span><strong>Process locally</strong><small>Keep sensitive input close to the person.</small></div>
        <div><span>02</span><strong>Minimize disclosure</strong><small>Transmit an abstraction, not a reusable profile.</small></div>
        <div><span>03</span><strong>Make memory visible</strong><small>Scope, expiry, inspection, and erase are interface features.</small></div>
        <div><span>04</span><strong>Prove before claiming</strong><small>Security language should follow independent validation.</small></div>
      </section>

      <section className="section research-protocol-section">
        <div className="section-index">ARCHITECTURE / INTERACTIVE</div>
        <div className="split-heading"><h2>Inspect the proposed privacy path.</h2><p>Click through the model. Each layer reduces what the next layer is allowed to know, from ephemeral input at the edge to the smallest approved context output.</p></div>
        <PrivacyProtocolDiagram />
      </section>

      <section className="research-gateway-section">
        <div className="research-gateway-copy"><span className="section-index">WHITEPAPER GATEWAY</span><h2>Read the architecture brief.</h2><p>The downloadable concept note lays out the local processing boundary, a selective-proof research layer, memory sandboxing, data minimization, and the work required before any production privacy claim could be credible.</p><ul><li>Edge processing & feature reduction</li><li>Zero-knowledge attestation concept</li><li>Local memory sandbox & erase semantics</li><li>Threat-model and validation agenda</li></ul></div>
        <ResearchGateway />
      </section>
    </main>
  );
}
