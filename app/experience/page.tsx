import { ProductStudyImage } from "@/components/ProductStudyImage";
import type { Metadata } from "next";
import { SignalDemo } from "@/components/SignalDemo";
import { ContextGallery } from "@/components/ContextGallery";

export const metadata: Metadata = { title: "Experience", description: "Explore the Vanta adaptive-environment interaction concept." };

export default function ExperiencePage(){return <main>
  <section className="page-hero experience-hero"><div><span className="section-index">EXPERIENCE / 03</span><h1>An interface that moves to the edge of awareness.</h1><p>Vanta’s interaction model is ambient. Instead of another dashboard demanding attention, the environment itself becomes the interface.</p></div><div className="experience-image"><ProductStudyImage src="/media/vanta-testing-office.webp" alt="Professional testing a Vanta One concept wearable at a workstation"/><span className="image-concept-label">CONCEPT TESTING VISUAL</span></div></section>
  <section className="section"><div className="split-heading"><h2>See the adaptive thesis move.</h2><p>Change modes in the interface simulation. The values are illustrative interaction states—not live biometric measurements.</p></div><SignalDemo /></section>
  <section className="section"><div className="split-heading"><h2>Three cognitive contexts.<br/>Three different atmospheres.</h2><p>Explore a focused workspace, a creative studio, and a quieter setting for winding down. These illustrative scenes show possible uses of the concept; the pictured device is not shipping hardware.</p></div><ContextGallery /></section>
  <section className="experience-photo-grid"><figure><ProductStudyImage src="/media/vanta-deep-work.webp" alt="Deep-work concept scene with a Vanta One wearable"/><figcaption>DEEP WORK / SIGNAL FOCUS</figcaption></figure><figure><ProductStudyImage src="/media/vanta-create.webp" alt="Creative studio concept scene with a Vanta One wearable"/><figcaption>CREATE / ASSOCIATIVE RANGE</figcaption></figure><figure><ProductStudyImage src="/media/vanta-recover.webp" alt="Recovery concept scene with a Vanta One wearable"/><figcaption>RECOVER / DOWNSHIFT</figcaption></figure></section>
</main>}
