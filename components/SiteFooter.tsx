import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
<div className="jj-venture-nav" style={{margin:'0 auto 1.5rem',padding:'1rem 0',textAlign:'center',fontSize:'.78rem',letterSpacing:'.04em',opacity:.78}}><a href="https://www.josephjilovec.com/ventures" style={{color:'inherit',textDecoration:'none'}}>A Joseph Jilovec Venture</a><span aria-hidden="true" style={{margin:'0 .6rem'}}>·</span><a href="https://www.josephjilovec.com/ventures" style={{color:'inherit',textDecoration:'none',fontWeight:600}}>Explore the Venture Studio →</a></div>

      <div className="footer-grid">
        <div>
          <div className="brand footer-brand"><span className="brand-symbol">V/H</span><span>VANTA HELIX</span></div>
          <p>Intelligence, made instinctive.</p>
        </div>
        <div><small>Explore</small><Link href="/vanta-one">Vanta One</Link><Link href="/science">Science</Link><Link href="/experience">Experience</Link></div>
        <div><small>Principles</small><Link href="/privacy">Privacy</Link><Link href="/access">Founders access</Link></div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 VANTA HELIX SYSTEMS</span>
        <span>Concept platform · Product specifications shown are design targets, not verified shipping specifications.</span>
      </div>
    </footer>
  );
}
