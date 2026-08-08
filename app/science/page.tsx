import type { Metadata } from "next";
import { ExplodedProduct } from "@/components/ExplodedProduct";

export const metadata: Metadata = { title: "Science Model", description: "The sensing, local interpretation, and adaptive-response model behind the Vanta concept." };

export default function SciencePage(){return <main>
  <section className="page-hero science-page-hero"><div><span className="section-index">SCIENCE / 02</span><h1>From weak signals to useful context.</h1><p>The Vanta thesis is not mind reading. It is a future-facing model for combining non-invasive sensing, personal baselines, local inference, and environmental response.</p></div><div className="science-photo-stack"><img src="/media/vanta-sensor-macro.png" alt="Photorealistic Vanta One sensor interface concept"/><div className="science-visual"><img src="/product/signal-map.svg" alt="Concept signal map diagram"/></div></div></section>
  <section className="section science-steps"><article><span>01</span><h2>Observe</h2><p>Collect weak, non-invasive physiological and electrical signals with emphasis on repeated patterns rather than one-off readings.</p></article><article><span>02</span><h2>Personalize</h2><p>Compare change against the wearer’s own baseline instead of a universal score that assumes every nervous system looks the same.</p></article><article><span>03</span><h2>Respond</h2><p>Translate useful state estimates into subtle environmental adjustments with clear human override.</p></article></section>
  <section className="section"><div className="split-heading"><h2>Product form and system logic should reinforce one another.</h2><p>The new visual system pairs realistic on-body product studies with technical diagrams. Photography communicates wearability; diagrams communicate the model and its uncertainty.</p></div><ExplodedProduct /></section>
  <section className="section"><img className="wide-diagram" src="/product/architecture.svg" alt="Vanta sensing to local inference to environmental response architecture diagram"/></section>
</main>}
