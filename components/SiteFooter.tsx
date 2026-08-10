import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
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
    <div className="jj-venture-nav" style={{borderTop:'1px solid rgba(255,255,255,.10)',padding:'1rem 1.25rem 1.15rem',textAlign:'center',fontSize:'.78rem',letterSpacing:'.045em'}}><a href="https://www.josephjilovec.com/ventures" style={{color:'#E7C45A',textDecoration:'none',fontWeight:700}}>A Joseph Jilovec Venture</a><span aria-hidden="true" style={{color:'#E7C45A',margin:'0 .65rem',opacity:.7}}>•</span><a href="https://www.josephjilovec.com/ventures" style={{color:'#E7C45A',textDecoration:'none',fontWeight:800}}>Explore the Venture Studio →</a></div>
</footer>
  );
}
