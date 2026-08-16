const pages = [
  {
    title: "Privacy Architecture Brief",
    kicker: "VANTA HELIX / RESEARCH CONCEPT / 2026",
    paragraphs: [
      "Adaptive interfaces should be able to respond to context without converting sensitive human signals into a permanent cloud asset.",
      "This brief describes a proposed local-first privacy architecture for Vanta Helix: edge processing, scoped local memory, selective proof, explicit policy gates, and minimized context output.",
      "Status: research concept only. Nothing in this document is a claim of deployed hardware, audited cryptography, clinical validation, or certified security controls."
    ]
  },
  {
    title: "01 / System Model",
    kicker: "PRIVATE INPUT -> BOUNDED RESPONSE",
    paragraphs: [
      "The architecture separates five responsibilities so that each downstream layer receives less information than the one before it.",
      "1. Edge processing reduces transient input into task-specific local features. 2. A memory sandbox stores only scoped calibration and preferences. 3. A selective-proof layer may attest to narrow conditions without revealing private state. 4. A local policy gate decides what may leave. 5. The environment receives only the minimum approved context output.",
      "The design objective is not zero data. It is deliberate reduction, explicit purpose, user visibility, and bounded disclosure."
    ]
  },
  {
    title: "02 / Edge Processing",
    kicker: "RAW INPUT STAYS CLOSE TO THE PERSON",
    paragraphs: [
      "Raw neural-adjacent or physiological input is conceptually treated as ephemeral material. Signal conditioning, feature extraction, and baseline comparison occur on local compute before any external action is considered.",
      "A production implementation would need measurable guarantees around buffer lifetime, crash recovery, telemetry, debugging paths, model updates, and developer tooling. Privacy can fail through operational details even when the primary inference path is local.",
      "Research question: what is the smallest local feature set that still enables useful adaptation while limiting reconstruction and secondary use?"
    ]
  },
  {
    title: "03 / Selective Proof",
    kicker: "PROVE A CONDITION, NOT A PROFILE",
    paragraphs: [
      "Vanta Helix proposes investigating zero-knowledge or similarly privacy-preserving attestation for narrow authorization questions.",
      "Instead of transmitting a private model state, the device could prove that a locally evaluated condition satisfies an approved policy. Examples might include a user-authorized focus mode or an environment permission token without disclosure of the underlying signal history.",
      "This is a research layer, not a deployed cryptographic claim. Any production use would require protocol design, implementation review, side-channel analysis, independent audit, and careful handling of metadata leakage."
    ]
  },
  {
    title: "04 / Local Memory Sandbox",
    kicker: "MEMORY SHOULD BE AN INTERFACE FEATURE",
    paragraphs: [
      "Calibration, preferences, and event memory should be separated into visible local stores with explicit scope, expiry, inspection, export, and erase controls.",
      "A user should be able to understand what the system remembers, why it remembers it, what depends on it, and what changes when it is deleted. Retention should be intentional rather than an invisible byproduct of model optimization.",
      "Research question: how can adaptive systems remain useful after aggressive deletion and still avoid silently rebuilding the same sensitive history?"
    ]
  },
  {
    title: "05 / Validation Agenda",
    kicker: "PROVE BEFORE CLAIMING",
    paragraphs: [
      "A credible privacy architecture requires evidence beyond diagrams. The validation agenda includes threat modeling, data-flow tracing, device compromise scenarios, update-channel review, telemetry inspection, memory-forensics testing, cryptographic review, and usability testing of erase and consent controls.",
      "Security language should follow independent validation. Performance targets should be benchmarked on representative hardware. Neural or physiological claims should be separated from interface simulations and evaluated under the appropriate research and regulatory standards.",
      "Vanta Helix is seeking collaborators who want to challenge these assumptions early: privacy engineers, cryptographers, embedded-systems researchers, HCI specialists, and neural-interface researchers."
    ]
  }
] as const;

function esc(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrap(value: string, max = 82) {
  const words = value.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > max && line) {
      lines.push(line);
      line = word;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

function streamForPage(page: (typeof pages)[number], index: number) {
  const commands: string[] = [
    "0 0 0 rg 0 0 612 792 re f",
    "0.024 0.714 0.831 rg 48 724 3 22 re f",
    "BT /F2 9 Tf 0.024 0.714 0.831 rg 62 742 Td (VANTA HELIX) Tj ET",
    `BT /F1 7 Tf 0.58 0.64 0.72 rg 462 742 Td (BRIEF / ${String(index + 1).padStart(2, "0")}) Tj ET`,
    `BT /F1 8 Tf 0.40 0.47 0.55 rg 62 704 Td (${esc(page.kicker)}) Tj ET`,
    `BT /F2 29 Tf 0.95 0.98 0.99 rg 62 654 Td (${esc(page.title)}) Tj ET`,
    "0.024 0.714 0.831 RG 0.7 w 62 628 m 550 628 l S"
  ];

  let y = 590;
  page.paragraphs.forEach((paragraph, paragraphIndex) => {
    wrap(paragraph).forEach((line) => {
      commands.push(`BT /F1 10 Tf 0.72 0.77 0.82 rg 62 ${y} Td (${esc(line)}) Tj ET`);
      y -= 16;
    });
    y -= paragraphIndex === page.paragraphs.length - 1 ? 0 : 18;
  });

  commands.push("0.20 0.27 0.32 RG 0.5 w 62 68 m 550 68 l S");
  commands.push("BT /F1 7 Tf 0.40 0.47 0.55 rg 62 48 Td (Research concept only - not a claim of deployed, audited, or clinically validated controls.) Tj ET");
  commands.push("BT /F1 7 Tf 0.024 0.714 0.831 rg 497 48 Td (V/H 2026) Tj ET");
  return commands.join("\n");
}

function buildPdf() {
  const encoder = new TextEncoder();
  const pageIds = pages.map((_, i) => 5 + i * 2);
  const objects: string[] = [];
  objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
  objects[2] = `<< /Type /Pages /Count ${pages.length} /Kids [${pageIds.map(id => `${id} 0 R`).join(" ")}] >>`;
  objects[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";
  objects[4] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>";

  pages.forEach((page, i) => {
    const pageId = 5 + i * 2;
    const contentId = pageId + 1;
    const stream = streamForPage(page, i);
    objects[pageId] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>`;
    objects[contentId] = `<< /Length ${encoder.encode(stream).length} >>\nstream\n${stream}\nendstream`;
  });

  let pdf = "%PDF-1.4\n%VANTAHELIX\n";
  const offsets: number[] = [0];
  for (let i = 1; i < objects.length; i++) {
    offsets[i] = encoder.encode(pdf).length;
    pdf += `${i} 0 obj\n${objects[i]}\nendobj\n`;
  }
  const xref = encoder.encode(pdf).length;
  pdf += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for (let i = 1; i < objects.length; i++) pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return encoder.encode(pdf);
}

export async function GET() {
  return new Response(buildPdf(), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="vanta-helix-privacy-architecture-brief.pdf"',
      "Cache-Control": "public, max-age=3600"
    }
  });
}
