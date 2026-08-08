"use client";

import { useState } from "react";
import { pillars } from "@/lib/data";

type PillarId = (typeof pillars)[number]["id"];

export function ExplodedProduct() {
  const [active, setActive] = useState<PillarId>(pillars[0].id);
  const item = pillars.find(p => p.id === active) ?? pillars[0];
  return (
    <div className="exploded-shell">
      <div className="exploded-visual">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <img key={item.image} src={item.image} alt={`${item.title} concept visualization`} />
        <span className="visual-label">{item.index} / {item.title.toUpperCase()}</span>
      </div>
      <div className="exploded-controls">
        {pillars.map(p => <button key={p.id} onClick={() => setActive(p.id)} className={p.id === active ? "active" : ""}><span>{p.index}</span><div><strong>{p.short}</strong><small>{p.copy}</small></div></button>)}
      </div>
    </div>
  );
}
