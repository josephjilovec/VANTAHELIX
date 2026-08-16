import Link from "next/link";
import { AmbientInterfaceCanvas } from "@/components/AmbientInterfaceCanvas";
import { SignalDemo } from "@/components/SignalDemo";
import { ExplodedProduct } from "@/components/ExplodedProduct";
import { ContextGallery } from "@/components/ContextGallery";
import { VisualArchive } from "@/components/VisualArchive";
import { PrivacyProtocolDiagram } from "@/components/PrivacyProtocolDiagram";
import { designTargets, principles } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <section className="hero-section cinematic-hero helix-hero">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span>VANTA HELIX / ADAPTIVE INTERFACE RESEARCH</span><b>LOCAL-FIRST SYSTEMS</b></div>
          <h1>Interfaces that adapt.<br/><em>Privacy that stays local.</em></h1>
          <p>Vanta Helix explores adaptive interfaces, non-invasive neural-adjacent sensing, and edge intelligence designed to respond to attention without turning private human signals into a standing cloud asset.</p>
          <div className="hero-actions">
            <Link className="primary-button" href="/research">Enter the research gateway <span>↗</span></Link>
            <Link className="text-button" href="/vanta-one">Explore Vanta One <span>↓</span></Link>
          </div>
          <div className="hero-signals">
            <div><small>01</small><strong>Adaptive<br/>interface field</strong></div>
            <div><small>02</small><strong>Local edge<br/>intelligence</strong></div>
            <div><small>03</small><strong>Selective<br/>disclosure</strong></div>
          </div>
        </div>
        <AmbientInterfaceCanvas />
      </section>

      <section className="editorial-manifesto helix-manifesto">
        <div className="section-index">01 — THE PREMISE</div>
        <p className="manifesto-statement">The next interface should understand context without demanding more attention. <span>And it should not need to own you to know you.</span></p>
        <div className="manifesto-foot">
          <p>Vanta Helix is a research platform for a quieter class of computing: adaptive interfaces that interpret local context, work from a personal baseline, and expose explicit boundaries around memory, transmission, and control.</p>
          <div className="signal-line"><span>PRIVATE INPUT</span><i/><span>BOUNDED RESPONSE</span></div>
        </div>
      </section>

      <section className="product-object-section" id="vanta-one">
        <div className="product-object-media">
          <img src="/media/vanta-product-studio.png" alt="Photorealistic Vanta One wearable concept shown as a premium studio product study" />
          <div className="object-hotspot hotspot-one"><b>01</b><span>Dry sensor interface</span></div>
          <div className="object-hotspot hotspot-two"><b>02</b><span>Dark titanium spine</span></div>
          <div className="object-hotspot hotspot-three"><b>03</b><span>Local compute core</span></div>
          <small>PHOTOREAL CONCEPT STUDY / VANTA ONE</small>
        </div>
        <div className="product-object-copy">
          <div className="section-index">02 — VANTA ONE</div>
          <h2>Quiet hardware.<br/><em>Private intelligence.</em></h2>
          <p>Vanta One is the wearable expression of the research thesis: discreet sensing, local interpretation, and an interface that moves toward the edge of awareness instead of asking for another screen.</p>
          <div className="spec-list-home">
            {designTargets.slice(0,3).map((item)=><div key={item.label}><strong>{item.value}</strong><span>{item.label}</span><small>{item.note}</small></div>)}
          </div>
          <Link className="text-button" href="/vanta-one">Explore the product study ↗</Link>
        </div>
      </section>

      <section className="section visual-library-section">
        <div className="section-index">03 — PRODUCT STUDIES</div>
        <div className="split-heading"><h2>Hardware that looks like it belongs in the world.</h2><p>Move through the product archive: on-body fit, industrial form, human testing, sensor contact, and the local-compute concept. These renders are visual design studies, not photographs of shipping hardware.</p></div>
        <VisualArchive />
      </section>

      <section className="section product-system-section">
        <div className="section-index">04 — SYSTEM ARCHITECTURE</div>
        <div className="split-heading"><h2>Sense locally.<br/>Interpret privately.<br/>Adapt quietly.</h2><p>The stack separates sensing at the body, interpretation on the device, and contextual response around the user. The separation is intentional: each layer should know less than the layer before it.</p></div>
        <ExplodedProduct />
        <div className="spec-strip">{designTargets.map(item => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span><small>{item.note}</small></div>)}</div>
      </section>

      <section className="human-loop">
        <img src="/media/vanta-testing-office.png" alt="Professional testing a Vanta One concept wearable at a signal-analysis workstation" />
        <div className="human-loop-shade" />
        <div className="human-loop-copy">
          <div className="section-index">05 — HUMAN IN THE LOOP</div>
          <h2>Technology that moves to the edge of awareness.</h2>
          <p>The product is imagined to stay quiet until context matters—calibrating to the individual rather than asking the individual to constantly operate another interface.</p>
          <Link className="text-button" href="/experience">Explore the experience ↗</Link>
        </div>
      </section>

      <section className="section demo-section">
        <div className="section-index">06 — LIVE ADAPTATION</div>
        <div className="split-heading"><h2>Context changes.<br/><em>The interface follows.</em></h2><p>Switch modes to see how a Vanta environment could respond to different cognitive contexts. This is an interaction demo—not a live neural measurement.</p></div>
        <SignalDemo />
      </section>

      <section className="section contexts-section">
        <div className="section-index">07 — THE ENVIRONMENT</div>
        <div className="split-heading"><h2>One wearable. Different cognitive environments.</h2><p>Deep work, creative exploration, and recovery are shown as separate visual worlds so the adaptive thesis feels human rather than purely technical.</p></div>
        <ContextGallery />
      </section>

      <section className="section home-protocol-section">
        <div className="section-index">08 — PRIVACY PROTOCOL</div>
        <div className="split-heading"><h2>Make the boundary visible.</h2><p>Click through the proposed privacy model: edge processing, local memory sandboxing, selective proof, policy gating, and a bounded context output.</p></div>
        <PrivacyProtocolDiagram compact />
      </section>

      <section className="privacy-section-home helix-privacy-home">
        <div className="privacy-visual hybrid-privacy-visual">
          <img className="privacy-photo" src="/media/vanta-core-cutaway.png" alt="Photorealistic cutaway concept showing local electronics inside the Vanta One wearable" />
          <img className="privacy-diagram" src="/product/privacy-core.svg" alt="Diagram of local-first encrypted processing architecture" />
        </div>
        <div className="privacy-copy"><div className="section-index">09 — SOVEREIGN INTELLIGENCE</div><h2>Your mind is not a data source.</h2><p>The concept is local-first by design: raw neural-adjacent signals should not become advertising inventory. Calibration, inference, memory, and erase controls belong as close to the user as the hardware allows.</p><div className="principle-list">{principles.map(([title,copy],i)=><div key={title}><span>0{i+1}</span><div><strong>{title}</strong><p>{copy}</p></div></div>)}</div><Link className="text-button" href="/privacy">Inspect the privacy architecture ↗</Link></div>
      </section>

      <section className="research-home-band">
        <div className="research-home-copy"><small>RESEARCH PAPER / COLLABORATOR GATEWAY</small><h2>Read the privacy architecture brief.</h2><p>A six-page technical concept note covering local processing, selective-proof research, memory sandboxing, data minimization, and the validation work required before production claims.</p></div>
        <div className="research-home-meta"><span>PDF / 06 PAGES</span><span>CONCEPT / 2026</span><Link className="primary-button" href="/research">Open research gateway <b>↗</b></Link></div>
      </section>

      <section className="access-band"><div><small>PRIVATE CONCEPT RELEASE</small><h2>Help shape what comes next.</h2><p>Join the private concept-access list for prototype updates, design studies, and future calibration opportunities.</p></div><Link className="primary-button light" href="/access">Request private access <span>↗</span></Link></section>
    </main>
  );
}
