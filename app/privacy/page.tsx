import type { Metadata } from "next";
import Link from "next/link";
import { principles } from "@/lib/data";

export const metadata: Metadata = { title: "Privacy", description: "Vanta Helix local-first privacy principles and concept architecture." };

export default function PrivacyPage(){return <main>
  <section className="page-hero privacy-page-hero"><div><span className="section-index">PRIVACY / 04</span><h1>Your mind is not a data source.</h1><p>Vanta’s privacy thesis starts with a boundary: raw neural data should not become advertising inventory, behavioral resale, or a hidden cloud dependency.</p><div className="hero-actions"><Link className="primary-button" href="/access">Request concept access ↗</Link></div></div><div className="privacy-orb photo-render"><img src="/media/vanta-core-cutaway.png" alt="Photorealistic concept cutaway of the Vanta One local processing core"/><span className="image-concept-label">LOCAL CORE / CONCEPT STUDY</span></div></section>
  <section className="section privacy-grid">{principles.map(([title,copy],i)=><article key={title}><span>0{i+1}</span><h2>{title}</h2><p>{copy}</p></article>)}</section>
  <section className="section privacy-diagram-section"><div className="split-heading"><h2>Privacy by architecture, not by policy language alone.</h2><p>The conceptual data path prioritizes on-device processing, user-controlled calibration, explicit erase controls, and minimal transmission of derived context.</p></div><img className="wide-diagram" src="/product/privacy-core.svg" alt="Local-first privacy architecture diagram"/></section>
  <section className="section privacy-manifesto"><small>THE PRINCIPLE</small><blockquote>Private by default.<br/>Useful by permission.</blockquote><p>These are design principles for a future product concept, not claims about deployed hardware or audited security controls.</p></section>
</main>}
