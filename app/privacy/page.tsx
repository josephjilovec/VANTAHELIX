import type { Metadata } from "next";
import Link from "next/link";
import { PrivacyProtocolDiagram } from "@/components/PrivacyProtocolDiagram";
import { principles } from "@/lib/data";

export const metadata: Metadata = { title: "Privacy", description: "Vanta Helix local-first privacy principles and concept architecture." };

export default function PrivacyPage(){return <main>
  <section className="page-hero privacy-page-hero"><div><span className="section-index">PRIVACY / 04</span><h1>Your mind is not a data source.</h1><p>Vanta’s privacy thesis starts with a boundary: raw neural-adjacent data should not become advertising inventory, behavioral resale, or a hidden cloud dependency.</p><div className="hero-actions"><Link className="primary-button" href="/research">Open research brief ↗</Link><Link className="text-button" href="/access">Request concept access</Link></div></div><div className="privacy-orb photo-render"><img src="/media/vanta-core-cutaway.png" alt="Photorealistic concept cutaway of the Vanta One local processing core"/><span className="image-concept-label">LOCAL CORE / CONCEPT STUDY</span></div></section>
  <section className="section privacy-grid">{principles.map(([title,copy],i)=><article key={title}><span>0{i+1}</span><h2>{title}</h2><p>{copy}</p></article>)}</section>
  <section className="section protocol-page-section"><div className="section-index">ARCHITECTURE / CLICK TO INSPECT</div><div className="split-heading"><h2>Privacy by architecture, not policy language alone.</h2><p>The conceptual path prioritizes edge processing, a local memory sandbox, selective disclosure, explicit policy gates, and minimal context output.</p></div><PrivacyProtocolDiagram /></section>
  <section className="section privacy-manifesto"><small>THE PRINCIPLE</small><blockquote>Private by default.<br/>Useful by permission.</blockquote><p>These are design principles for a future product concept, not claims about deployed hardware, audited controls, cryptographic review, or clinical validation.</p><Link className="text-button" href="/research">Enter the research gateway ↗</Link></section>
</main>}
