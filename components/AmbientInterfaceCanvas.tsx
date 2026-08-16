"use client";

import { useEffect, useRef, useState } from "react";

const nodes = [
  [18, 22, "ATTN"], [37, 17, "EDGE"], [63, 24, "MEM"], [79, 39, "CTX"],
  [24, 52, "SIG"], [48, 46, "LOCAL"], [68, 58, "ZK"], [84, 69, "ACT"],
  [17, 76, "CAL"], [39, 72, "BASE"], [57, 81, "POL"], [73, 84, "OUT"]
] as const;

export function AmbientInterfaceCanvas() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const lastRef = useRef({ x: 0, y: 0, t: 0 });
  const idleAtRef = useRef(0);
  const frameRef = useRef<number | null>(null);
  const [velocity, setVelocity] = useState(0);
  const [signal, setSignal] = useState("CALM");
  const [context, setContext] = useState<"obsidian" | "light">("obsidian");

  useEffect(() => {
    const node = fieldRef.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    idleAtRef.current = performance.now();

    const setPosition = (x: number, y: number) => {
      node.style.setProperty("--gaze-x", `${x}%`);
      node.style.setProperty("--gaze-y", `${y}%`);
    };

    const move = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const now = performance.now();
      const x = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));
      const last = lastRef.current;
      const dt = Math.max(16, now - last.t);
      const distance = Math.hypot(event.clientX - last.x, event.clientY - last.y);
      const speed = last.t ? distance / dt : 0;
      const normalized = Math.min(1, speed / 1.7);
      setPosition(x, y);
      node.style.setProperty("--speed", normalized.toFixed(3));
      node.style.setProperty("--speed-alpha", (0.10 + normalized * 0.16).toFixed(3));
      node.style.setProperty("--speed-alpha-strong", (0.08 + normalized * 0.18).toFixed(3));
      node.style.setProperty("--speed-blur", `${(4 + normalized * 9).toFixed(1)}px`);
      node.style.setProperty("--speed-scale", (0.72 + normalized * 0.5).toFixed(3));
      node.style.setProperty("--speed-node-scale", (0.92 + normalized * 0.15).toFixed(3));
      node.style.setProperty("--speed-shadow", `${(4 + normalized * 14).toFixed(1)}px`);
      setVelocity(Math.round(normalized * 100));
      setSignal(normalized > 0.62 ? "RESPOND" : normalized > 0.2 ? "TRACK" : "FOCUS");
      lastRef.current = { x: event.clientX, y: event.clientY, t: now };
      idleAtRef.current = now;
    };

    const leave = () => {
      setVelocity(0);
      setSignal("CALM");
      node.style.setProperty("--speed", "0");
      node.style.setProperty("--speed-alpha", "0.10");
      node.style.setProperty("--speed-alpha-strong", "0.08");
      node.style.setProperty("--speed-blur", "4px");
      node.style.setProperty("--speed-scale", "0.72");
      node.style.setProperty("--speed-node-scale", "0.92");
      node.style.setProperty("--speed-shadow", "4px");
      idleAtRef.current = performance.now() - 1800;
    };

    node.addEventListener("pointermove", move);
    node.addEventListener("pointerleave", leave);

    const animate = (time: number) => {
      if (!reduced && time - idleAtRef.current > 1400) {
        const x = 50 + Math.cos(time / 1700) * 24;
        const y = 50 + Math.sin(time / 2100) * 18;
        setPosition(x, y);
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      node.removeEventListener("pointermove", move);
      node.removeEventListener("pointerleave", leave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className={`ambient-interface ${context === "light" ? "is-light-context" : ""}`} ref={fieldRef}>
      <div className="ambient-topbar">
        <div><span className="status-dot" /> AMBIENT INTERFACE / LIVE SIMULATION</div>
        <span>LOCAL / NO SENSOR DATA</span>
      </div>

      <div className="ambient-field" aria-label="Interactive concept simulation responding to pointer position and speed">
        <div className="ambient-grid" aria-hidden="true" />
        <div className="ambient-noise" aria-hidden="true" />
        <div className="ambient-glow" aria-hidden="true" />
        <div className="ambient-reticle" aria-hidden="true"><i /><i /><i /></div>
        <div className="ambient-axis axis-x" aria-hidden="true" />
        <div className="ambient-axis axis-y" aria-hidden="true" />
        {nodes.map(([left, top, label], index) => (
          <div className={`ambient-node node-${index + 1}`} key={label} style={{ left: `${left}%`, top: `${top}%` }}>
            <i /><span>{label}</span>
          </div>
        ))}
        <div className="ambient-readout readout-a"><small>ATTENTION VECTOR</small><strong>{signal}</strong></div>
        <div className="ambient-readout readout-b"><small>CONTEXT</small><strong>{context === "obsidian" ? "LOW-LIGHT" : "LIGHT CUE"}</strong></div>
        <div className="ambient-caption">Pointer motion stands in for an attention signal. The field changes locally; no camera, gaze tracker, or biometric input is used.</div>
      </div>

      <div className="ambient-controls">
        <div className="ambient-meter"><span>CURSOR VELOCITY</span><b><i style={{ width: `${Math.max(4, velocity)}%` }} /></b><strong>{String(velocity).padStart(2, "0")}</strong></div>
        <div className="ambient-mode"><span>CONTEXT CUE</span><button className={context === "obsidian" ? "active" : ""} onClick={() => setContext("obsidian")}>Obsidian</button><button className={context === "light" ? "active" : ""} onClick={() => setContext("light")}>Light</button></div>
      </div>
    </div>
  );
}
