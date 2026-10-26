# Vanta Helix

Public website for the Vanta One wearable and adaptive-interface concept.

## Product status

The hardware images are concept renders. Numerical specifications are design targets, and interface demonstrations use illustrative states. They do not document shipping hardware, completed user testing, or validated biometric performance.

## Development

Use the Node version declared in package.json.

```bash
npm install
npm run dev
```

Validate with npm run check and npm run build. Deploy with the default Next.js settings on Vercel.

## Routes

- / — product introduction and demonstrations
- /vanta-one — proposed product form and system layers
- /science — sensing and interpretation model
- /experience — illustrative environment modes
- /privacy — privacy principles and user controls
- /access — concept-access request

## Assets and interactions

Product renders are in public/media; system diagrams are in public/product. Keep concept disclosures beside these assets. Client-side components provide the archive selector, environment modes, navigation, and access form. The access form uses FormSubmit AJAX.

Internal creative direction, editorial revision history, and planning documents are maintained separately from this public source repository.
