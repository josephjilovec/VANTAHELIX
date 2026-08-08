import type { Metadata } from "next";
import { SignalDemo } from "@/components/SignalDemo";
import { ContextGallery } from "@/components/ContextGallery";

export const metadata: Metadata = { title: "Experience", description: "Explore the Vanta adaptive-environment interaction concept." };

export default function ExperiencePage(){return <main>
  <section className="page-hero experience-hero"><div><span className="section-index">EXPERIENCE / 03</span><h1>An interface that moves to the edge of awareness.</h1><p>Vanta’s interaction model is ambient. Instead of another dashboard demanding attention, the environment itself becomes the interface.</p></div><div className="experience-image"><img src="/media/vanta-testing-office.png" alt="Professional testing a Vanta One concept wearable at a workstation"/><span className="image-concept-label">CONCEPT TESTING VISUAL</span></div></section>
  <section className="section"><div className="split-heading"><h2>See the adaptive thesis move.</h2><p>Change modes in the interface simulation. The values are illustrative interaction states—not live biometric measurements.</p></div><SignalDemo /></section>
  <section className="section"><div className="split-heading"><h2>Three cognitive contexts.<br/>Three different atmospheres.</h2><p>The product story is strongest when the technology is shown in use. The environments below make the adaptive concept tangible without pretending the pictured hardware is a shipping product.</p></div><ContextGallery /></section>
  <section className="experience-photo-grid"><figure><img src="/media/vanta-deep-work.png" alt="Deep-work concept scene with a Vanta One wearable"/><figcaption>DEEP WORK / SIGNAL FOCUS</figcaption></figure><figure><img src="/media/vanta-create.png" alt="Creative studio concept scene with a Vanta One wearable"/><figcaption>CREATE / ASSOCIATIVE RANGE</figcaption></figure><figure><img src="/media/vanta-recover.png" alt="Recovery concept scene with a Vanta One wearable"/><figcaption>RECOVER / DOWNSHIFT</figcaption></figure></section>
</main>}
