export const pillars = [
  {
    id: "sense",
    index: "01",
    title: "Sense",
    short: "Non-invasive sensing",
    copy: "A dry-contact concept designed to observe neural and physiological patterns without breaking skin.",
    image: "/media/vanta-sensor-macro.png"
  },
  {
    id: "interpret",
    index: "02",
    title: "Interpret",
    short: "Local signal intelligence",
    copy: "A private edge-compute concept that learns a personal baseline and looks for meaningful change rather than generic labels.",
    image: "/media/vanta-core-cutaway.png"
  },
  {
    id: "adapt",
    index: "03",
    title: "Adapt",
    short: "Environmental response",
    copy: "A connected-space layer designed to translate attention context into lighting, sound, interruption control, and other environmental changes.",
    image: "/media/vanta-deep-work.png"
  }
] as const;

export const designTargets = [
  { value: "48", label: "sensor channels", note: "concept target" },
  { value: "<12 ms", label: "local response", note: "design target" },
  { value: "18 hr", label: "adaptive battery", note: "design target" },
  { value: "0", label: "raw neural uploads", note: "privacy principle" }
] as const;

export const contexts = [
  { title: "Deep work", copy: "Reduce interruption and tune the environment around a sustained focus window.", image: "/media/vanta-deep-work.png" },
  { title: "Creative exploration", copy: "Favor novelty, associative thinking, and a looser ambient profile during ideation.", image: "/media/vanta-create.png" },
  { title: "Recovery", copy: "Downshift stimulation and make room for decompression after demanding cognitive work.", image: "/media/vanta-recover.png" }
] as const;

export const principles = [
  ["Local first", "Raw signal processing is envisioned to remain on-device by default."],
  ["User control", "The person—not an ad network—owns the model, calibration, and erase controls."],
  ["Quiet interface", "The product should disappear into the environment instead of demanding more screen attention."],
  ["Personal baseline", "Adaptation is based on change relative to the individual rather than a universal productivity score."]
] as const;
