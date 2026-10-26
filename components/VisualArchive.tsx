"use client";

import { ProductStudyImage } from "@/components/ProductStudyImage";


import { useState } from "react";

const visuals = [
  {
    id: "wear",
    label: "On-body study",
    title: "Designed to disappear behind the ear.",
    copy: "A low-profile wearable study focused on fit, discretion, and a quiet visual footprint rather than headset-like bulk.",
    image: "/media/vanta-wear-close.webp"
  },
  {
    id: "product",
    label: "Industrial design",
    title: "A discreet form for everyday wear.",
    copy: "The concept combines a graphite finish, a dark titanium spine, and restrained status lights in a compact behind-the-ear form.",
    image: "/media/vanta-product-studio.webp"
  },
  {
    id: "testing",
    label: "Workday concept",
    title: "Built around the moments where attention matters.",
    copy: "An illustrative workspace explores how the proposed wearable could fit into a working day with minimal on-screen interaction. This is a concept scene, not a record of completed testing.",
    image: "/media/vanta-testing-office.webp"
  },
  {
    id: "sensor",
    label: "Sensor interface",
    title: "Contact without spectacle.",
    copy: "Macro studies explore how non-invasive sensor contact could sit against the ear while preserving a refined, wearable form factor.",
    image: "/media/vanta-sensor-macro.webp"
  },
  {
    id: "core",
    label: "Local intelligence",
    title: "Personal processing, close to the wearer.",
    copy: "A cutaway concept visualizes the privacy thesis: signal interpretation and personal calibration should happen locally whenever possible.",
    image: "/media/vanta-core-cutaway.webp"
  }
] as const;

type VisualId = (typeof visuals)[number]["id"];

export function VisualArchive() {
  const [activeId, setActiveId] = useState<VisualId>(visuals[0].id);
  const active = visuals.find((visual) => visual.id === activeId) ?? visuals[0];

  return (
    <div className="visual-archive">
      <div className="visual-archive-stage">
        <ProductStudyImage key={active.image} src={active.image} alt={`${active.title} Vanta One concept render`} />
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
            <ProductStudyImage thumbnail src={visual.image} alt="" aria-hidden="true" />
            <div><small>0{index + 1}</small><strong>{visual.label}</strong></div>
          </button>
        ))}
      </div>
    </div>
  );
}
