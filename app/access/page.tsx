import type { Metadata } from "next";
import { AccessForm } from "@/components/AccessForm";

export const metadata: Metadata = { title: "Request Access", description: "Join the Vanta Helix private concept-access list." };

export default function AccessPage(){return <main><section className="access-page"><div className="access-intro"><span className="section-index">FOUNDERS CIRCLE</span><h1>Enter the<br/><em>first circle.</em></h1><p>Tell us where your most meaningful work happens. Join the concept-access list for design updates, prototype studies, and future calibration opportunities.</p><div className="access-points"><span>01 · No deposit</span><span>02 · Private review</span><span>03 · Concept-stage product</span></div></div><div className="access-panel"><AccessForm /></div></section></main>}
