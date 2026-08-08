"use client";

import { useMemo, useState } from "react";

type Mode = "Focus" | "Create" | "Recover";
const modes: Record<Mode, { clarity: number; calm: number; energy: number; note: string; label: string }> = {
  Focus: { clarity: 94, calm: 71, energy: 63, note: "A strong focus window is forming. Ambient interruption control rises while visual noise falls.", label: "Deep work calibration" },
  Create: { clarity: 77, calm: 62, energy: 91, note: "Divergent energy is elevated. The environment opens into a brighter, less constrained creative profile.", label: "Divergent thinking profile" },
  Recover: { clarity: 58, calm: 93, energy: 42, note: "Cognitive load is tapering. Stimulation is reduced and recovery cues take priority.", label: "Nervous system downshift" }
};

export function SignalDemo() {
  const [mode, setMode] = useState<Mode>("Focus");
  const data = modes[mode];
  const bars = useMemo(() => Array.from({ length: 34 }, (_, i) => {
    const base = mode === "Focus" ? 42 : mode === "Create" ? 52 : 30;
    return Math.max(14, Math.min(92, base + Math.sin(i * .78) * (mode === "Create" ? 30 : 19) + Math.cos(i * .31) * 12));
  }), [mode]);

  return (
    <div className={`signal-console mode-${mode.toLowerCase()}`}>
      <div className="console-top"><span>V / COGNITIVE FIELD</span><span className="live-dot">SIMULATION READY</span></div>
      <div className="mode-tabs" role="tablist" aria-label="Simulation mode">
        {(Object.keys(modes) as Mode[]).map(item => <button key={item} onClick={() => setMode(item)} className={mode === item ? "active" : ""} aria-selected={mode === item}><strong>{item}</strong><small>{modes[item].label}</small></button>)}
      </div>
      <div className="wave-field" aria-hidden="true">{bars.map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div>
      <div className="metric-row">
        {[['Cognitive clarity', data.clarity], ['Autonomic calm', data.calm], ['Creative energy', data.energy]].map(([label, value]) => <div key={String(label)}><span>{label}</span><strong>{value}%</strong><b><i style={{ width: `${value}%` }} /></b></div>)}
      </div>
      <div className="insight-panel"><small>VANTA INSIGHT</small><p>{data.note}</p></div>
    </div>
  );
}
