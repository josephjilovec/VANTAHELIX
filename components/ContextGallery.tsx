"use client";

import { useState } from "react";
import { contexts } from "@/lib/data";

export function ContextGallery() {
  const [active, setActive] = useState(0);
  const item = contexts[active];
  return <div className="context-gallery">
    <div className="context-image"><img src={item.image} alt={`${item.title} Vanta environment concept`} /><span>ENVIRONMENT PROFILE / 0{active + 1}</span></div>
    <div className="context-copy"><div className="context-tabs">{contexts.map((c,i)=><button key={c.title} className={i===active?'active':''} onClick={()=>setActive(i)}>0{i+1} {c.title}</button>)}</div><h3>{item.title}</h3><p>{item.copy}</p></div>
  </div>;
}
