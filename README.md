# Vanta Helix — Definitive Next.js / Vercel Build

A multi-page Next.js rebuild of **Vanta Helix** that combines the original site's strongest visual ideas with a new photorealistic product-concept library.

## Brand direction

**Tagline:** Intelligence, made instinctive.

The visual system combines:

- obsidian / near-black foundations
- ultraviolet as the primary signal color
- ice-cyan as the secondary signal color
- warm editorial stone sections for contrast
- photorealistic product and on-body concept studies
- technical SVG diagrams for architecture/science explanations
- restrained grids, scan lines, orbits, and signal motion

Photorealistic imagery is explicitly treated as **concept visualization**, not documentation of shipping hardware.

## Routes

- `/` — product headquarters
- `/vanta-one` — Vanta One industrial-design concept
- `/science` — sensing / baseline / local-inference model
- `/experience` — interactive cognitive-context simulation
- `/privacy` — local-first privacy thesis
- `/access` — private concept-access request

## Form delivery

The access form uses **FormSubmit AJAX** and sends to `realjjemail@gmail.com`.

No Resend account, API key, or Vercel environment variable is required for email delivery.

## Local development

```bash
npm install
npm run dev
```

## Vercel deployment

Import `josephjilovec/VANTAHELIX` into Vercel and use:

- Framework Preset: **Next.js**
- Root Directory: `./`
- Build Command: **Default**
- Output Directory: **Default**
- Install Command: **Default**

Do not set `dist`, `public`, or a custom Next.js output folder.

## Production positioning

Vanta Helix is a product/interface concept. Sensor count, local-response latency, battery figures, launch timing, hardware form, and similar specifications are presented as concept/design targets unless independently validated on functioning hardware.

## Legacy visual integration

The archived one-file Vanta site embedded its photographic images directly inside `index.html`. This definitive build preserves that site's photographic hierarchy and interaction language while replacing the embedded one-off image payloads with a reusable local photorealistic concept library under `public/media/`. The GitHub backup branch `backup-static-site-2026-08-07` remains the untouched archival source.
