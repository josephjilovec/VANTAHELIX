# Architecture

Vanta Helix uses the Next.js App Router with server-rendered pages by default and client components only where local interaction is needed.

## Client components

- `HeroVisual` — subtle pointer parallax over the hero concept image
- `VisualArchive` — interactive photorealistic product study selector
- `ExplodedProduct` — selectable system layers
- `SignalDemo` — Focus / Create / Recover interaction simulation
- `ContextGallery` — selectable environment profiles
- `SiteHeader` — mobile navigation state
- `AccessForm` — FormSubmit AJAX state

## Visual assets

`public/media/` contains photorealistic Vanta One concept imagery.

`public/product/` retains the technical SVG diagram library for science/privacy/system explanations.

This intentionally separates **product storytelling** from **technical explanation**.

## Form delivery

The access form posts directly to FormSubmit AJAX. No API route or secret is required.
