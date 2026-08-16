"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Vanta One", "/vanta-one"],
  ["Science", "/science"],
  ["Experience", "/experience"],
  ["Privacy", "/privacy"],
  ["Research", "/research"]
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Vanta Helix home">
        <span className="brand-symbol" aria-hidden="true">V/H</span>
        <span>VANTA HELIX</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="nav-actions">
        <Link className="access-link" href="/access">Request access <span>↗</span></Link>
        <button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="Toggle navigation"><span /><span /></button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link href="/access" onClick={() => setOpen(false)}>Request access ↗</Link>
      </nav>}
    </header>
  );
}
