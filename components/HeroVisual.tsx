"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const move = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      setTilt({
        x: ((event.clientX - rect.left) / rect.width - 0.5) * 4,
        y: ((event.clientY - rect.top) / rect.height - 0.5) * -3
      });
    };
    const leave = () => setTilt({ x: 0, y: 0 });
    node.addEventListener("pointermove", move);
    node.addEventListener("pointerleave", leave);
    return () => {
      node.removeEventListener("pointermove", move);
      node.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div className="hero-visual cinematic" ref={ref}>
      <div className="hero-photo" style={{ transform: `scale(1.025) translate3d(${tilt.x}px, ${tilt.y}px, 0)` }}>
        <img src="/media/vanta-wear-close.png" alt="Photorealistic concept of Vanta One worn discreetly behind the ear" />
      </div>
      <div className="hero-photo-shade" />
      <div className="hero-scan" aria-hidden="true" />
      <div className="hero-orbit orbit-a" aria-hidden="true" />
      <div className="hero-orbit orbit-b" aria-hidden="true" />
      <div className="floating-tag tag-a"><span>01</span> NEURAL SENSE</div>
      <div className="floating-tag tag-b"><span>02</span> LOCAL CORE</div>
      <div className="floating-tag tag-c"><span>03</span> ADAPTIVE FIELD</div>
      <div className="concept-chip">PHOTOREAL CONCEPT STUDY</div>
    </div>
  );
}
