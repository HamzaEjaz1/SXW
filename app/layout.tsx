import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBar } from "@/components/MobileBar";
import { Providers } from "@/components/Providers";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sxwcarpentry.co.uk"),
  title: {
    default: "SXW Carpentry Ltd | Carpentry & Joinery | Devizes, Wiltshire",
    template: "%s | SXW Carpentry Ltd",
  },
  description:
    "Award-winning carpentry and joinery company based in Devizes, Wiltshire. We work primarily within the development construction industry.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "SXW Carpentry Ltd",
    title: "SXW Carpentry Ltd | Carpentry & Joinery | Devizes, Wiltshire",
    description:
      "Award-winning carpentry and joinery company based in Devizes, Wiltshire. We work primarily within the development construction industry.",
    url: "/",
    images: [
      {
        url: "/images/carpentry-1.jpg",
        width: 1600,
        height: 1031,
        alt: "Carpentry contractors based in Devizes, Wiltshire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SXW Carpentry Ltd | Devizes, Wiltshire",
    description:
      "Award-winning carpentry and joinery company based in Devizes, Wiltshire.",
    images: ["/images/carpentry-1.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#3048A8",
  width: "device-width",
  initialScale: 1,
};

const schema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "SXW Carpentry Ltd",
  url: "https://www.sxwcarpentry.co.uk/",
  image: "https://www.sxwcarpentry.co.uk/images/carpentry-1.jpg",
  logo: "https://www.sxwcarpentry.co.uk/images/logo.png",
  description:
    "Award-winning carpentry and joinery company based in Devizes, Wiltshire, working primarily within the development construction industry.",
  telephone: "+447834454106",
  email: "sxwcarpentry@outlook.com",
  foundingDate: "2015",
  identifier: "09853140",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Devizes",
    addressRegion: "Wiltshire",
    addressCountry: "GB",
  },
  areaServed: "Southwest England",
  sameAs: [
    "https://www.instagram.com/sxw_carpentry_ltd_/",
    "https://www.linkedin.com/company/sxw-carpentry-ltd",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${outfit.variable} ${plex.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Providers>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <div className="utility">
            <div className="wrap utility-inner">
              <p>Devizes, Wiltshire</p>
              <p className="utility-links">
                <a href="tel:+447834454106">07834 454106</a>
                <a href="mailto:sxwcarpentry@outlook.com">sxwcarpentry@outlook.com</a>
              </p>
            </div>
          </div>
          <Header />
          {children}
          <Footer />
          <MobileBar />
          <WhatsAppChat />
        </Providers>
      </body>
    </html>
  );
}
