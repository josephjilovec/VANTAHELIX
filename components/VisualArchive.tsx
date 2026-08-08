"use client";

import { useState } from "react";

const visuals = [
  {
    id: "wear",
    label: "On-body study",
    title: "Designed to disappear behind the ear.",
    copy: "A low-profile wearable study focused on fit, discretion, and a quiet visual footprint rather than headset-like bulk.",
    image: "/media/vanta-wear-close.png"
  },
  {
    id: "product",
    label: "Industrial design",
    title: "A believable object before it becomes an interface.",
    copy: "Graphite, dark titanium, restrained light cues, and a geometry that reads as premium consumer hardware rather than science-fiction costume design.",
    image: "/media/vanta-product-studio.png"
  },
  {
    id: "testing",
    label: "Concept testing",
    title: "Built around the moments where attention matters.",
    copy: "The product story is strongest when Vanta is shown in context: a person doing demanding work while the device stays visually secondary.",
    image: "/media/vanta-testing-office.png"
  },
  {
    id: "sensor",
    label: "Sensor interface",
    title: "Contact without spectacle.",
    copy: "Macro studies explore how non-invasive sensor contact could sit against the ear while preserving a refined, wearable form factor.",
    image: "/media/vanta-sensor-macro.png"
  },
  {
    id: "core",
    label: "Local intelligence",
    title: "The compute story stays close to the user.",
    copy: "A cutaway concept visualizes the privacy thesis: signal interpretation and personal calibration should happen locally whenever possible.",
    image: "/media/vanta-core-cutaway.png"
  }
] as const;

type VisualId = (typeof visuals)[number]["id"];

export function VisualArchive() {
  const [activeId, setActiveId] = useState<VisualId>(visuals[0].id);
  const active = visuals.find((visual) => visual.id === activeId) ?? visuals[0];

  return (
    <div className="visual-archive">
      <div className="visual-archive-stage">
        <img key={active.image} src={active.image} alt={`${active.title} Vanta One concept render`} />
        <div className="visual-archive-shade" />
        <div className="visual-archive-caption">
          <span>{active.label}</span>
          <strong>{active.title}</strong>
          <p>{active.copy}</p>
        </div>
      </div>
      <div className="visual-archive-rail" role="tablist" aria-label="Vanta One visual studies">
        {visuals.map((visual, index) => (
          <button
            key={visual.id}
            type="button"
            role="tab"
            aria-selected={visual.id === active.id}
            className={visual.id === active.id ? "active" : ""}
            onClick={() => setActiveId(visual.id)}
          >
            <img src={visual.image} alt="" aria-hidden="true" />
            <div><small>0{index + 1}</small><strong>{visual.label}</strong></div>
          </button>
        ))}
      </div>
    </div>
  );
}
