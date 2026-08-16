import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";
import "./globals.css";
import "./vanta-helix.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: "/media/vanta-wear-close.png", width: 1448, height: 1086, alt: "Vanta Helix — adaptive interface concept study" }]
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/media/vanta-wear-close.png"] },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <style>{`
      @media (min-width: 901px) {
        .site-header { grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); }
        .site-header .desktop-nav { grid-column: 1; grid-row: 1; justify-self: start; }
        .site-header .brand { grid-column: 2; grid-row: 1; justify-self: center; }
        .site-header .nav-actions { grid-column: 3; grid-row: 1; justify-self: end; }
      }
    `}</style>
    <SiteHeader />{children}<SiteFooter /><Analytics /><SpeedInsights />
  </body></html>;
}
