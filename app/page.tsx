import Link from "next/link";
import { HeroVisual } from "@/components/HeroVisual";
import { SignalDemo } from "@/components/SignalDemo";
import { ExplodedProduct } from "@/components/ExplodedProduct";
import { ContextGallery } from "@/components/ContextGallery";
import { VisualArchive } from "@/components/VisualArchive";
import { designTargets, principles } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <section className="hero-section cinematic-hero">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span>INTRODUCING VANTA ONE</span><b>CONCEPT SYSTEM</b></div>
          <h1>Intelligence,<br/><em>made instinctive.</em></h1>
          <p>A premium adaptive-interface concept exploring how discreet, non-invasive sensing and local intelligence could help spaces respond to the rhythm of attention.</p>
          <div className="hero-actions">
            <Link className="primary-button" href="/access">Enter the first circle <span>↗</span></Link>
            <Link className="text-button" href="/vanta-one">Discover Vanta One <span>↓</span></Link>
          </div>
          <div className="hero-signals">
            <div><small>01</small><strong>Non-invasive<br/>neural sensing</strong></div>
            <div><small>02</small><strong>Adaptive<br/>signal engine</strong></div>
            <div><small>03</small><strong>Private by<br/>architecture</strong></div>
          </div>
        </div>
        <HeroVisual />
      </section>

      <section className="editorial-manifesto">
        <div className="section-index">01 — THE PREMISE</div>
        <p className="manifesto-statement">Your best thinking doesn’t arrive on command. <span>Vanta learns the conditions that bring it closer.</span></p>
        <div className="manifesto-foot">
          <p>Vanta One is imagined as a quiet wearable layer that reads subtle physiological and neural patterns, learns an individual baseline, and gives the surrounding environment a chance to respond without demanding another screen.</p>
          <div className="signal-line"><span>NEURAL INPUT</span><i/><span>ADAPTIVE RESPONSE</span></div>
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
          <h2>Quiet hardware.<br/><em>Extraordinary awareness.</em></h2>
          <p>The refreshed visual system brings back the original site’s product-first feel: Vanta One should read like believable, premium wearable hardware rather than an abstract technology diagram.</p>
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
        <div className="split-heading"><h2>Three layers.<br/>One quiet system.</h2><p>The technical diagrams remain where they are strongest: explaining the concept stack behind the photorealistic product story—sensing at the body, interpretation on the device, and contextual response around the user.</p></div>
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
        <div className="split-heading"><h2>Your state,<br/><em>in living color.</em></h2><p>Switch modes to see how a Vanta environment could respond to different cognitive contexts. This is an interaction demo—not a live neural measurement.</p></div>
        <SignalDemo />
      </section>

      <section className="section contexts-section">
        <div className="section-index">07 — THE ENVIRONMENT</div>
        <div className="split-heading"><h2>One wearable. Different cognitive environments.</h2><p>Deep work, creative exploration, and recovery are shown as separate visual worlds so the adaptive thesis feels human rather than purely technical.</p></div>
        <ContextGallery />
      </section>

      <section className="privacy-section-home">
        <div className="privacy-visual hybrid-privacy-visual">
          <img className="privacy-photo" src="/media/vanta-core-cutaway.png" alt="Photorealistic cutaway concept showing local electronics inside the Vanta One wearable" />
          <img className="privacy-diagram" src="/product/privacy-core.svg" alt="Diagram of local-first encrypted processing architecture" />
        </div>
        <div className="privacy-copy"><div className="section-index">08 — SOVEREIGN INTELLIGENCE</div><h2>Your mind is not a data source.</h2><p>The concept is local-first by design: raw neural signals should not become advertising inventory. Vanta’s privacy thesis is that calibration, inference, and erase controls belong with the user.</p><div className="principle-list">{principles.map(([title,copy],i)=><div key={title}><span>0{i+1}</span><div><strong>{title}</strong><p>{copy}</p></div></div>)}</div><Link className="text-button" href="/privacy">Read the privacy architecture ↗</Link></div>
      </section>

      <section className="access-band"><div><small>PRIVATE CONCEPT RELEASE</small><h2>Be among the first<br/>to think with Vanta.</h2><p>Join the private concept-access list for prototype updates, design studies, and future calibration opportunities.</p></div><Link className="primary-button light" href="/access">Request private access <span>↗</span></Link></section>
    </main>
  );
}
