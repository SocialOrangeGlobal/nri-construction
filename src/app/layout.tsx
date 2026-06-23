import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nriconstruction.com.au"),
  title: {
    default: "NRI Construction & Fabrication | Australian Property Services",
    template: "%s | NRI Construction",
  },
  description: "100% Australian Owned, fully integrated development, construction, and property maintenance contractor. We handle everything from planning and building to repairs and maintenance.",
  keywords: [
    "Construction", "Fabrication", "Property Maintenance", "Australian Builder", 
    "Commercial Construction", "Residential Construction", "Trade Services", 
    "Carpentry", "Plumbing", "Electrical", "Roofing", "Integrated Construction Managers"
  ],
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/icon-light.png",
      href: "/icon-light.png",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/icon-dark.png",
      href: "/icon-dark.png",
    },
  ],
  authors: [{ name: "NRI Construction" }],
  creator: "NRI Construction & Fabrication",
  openGraph: {
    title: "NRI Construction & Fabrication",
    description: "One Team. Every Property Solution.",
    url: "https://nriconstruction.com.au",
    siteName: "NRI Construction",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/logos/logo-app.png",
        width: 1200,
        height: 630,
        alt: "NRI Construction & Fabrication Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NRI Construction & Fabrication",
    description: "One Team. Every Property Solution.",
    images: ["/logos/logo-app.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${inter.variable} ${manrope.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col font-body bg-background text-foreground transition-colors duration-300">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
