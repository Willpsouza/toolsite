import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "../components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toolnest.com"),

  title: {
    default: "ToolNest - Free Online Tools",
    template: "%s | ToolNest",
  },

  description:
    "Free online calculators, converters, generators and productivity tools. Fast, reliable, secure and easy to use.",

  keywords: [
    "free online tools",
    "online calculator",
    "compound interest calculator",
    "percentage calculator",
    "unit converter",
    "password generator",
    "qr code generator",
    "financial calculator",
    "calculator tools",
    "online converter",
    "toolnest",
  ],

  authors: [
    {
      name: "ToolNest",
    },
  ],

  creator: "ToolNest",

  publisher: "ToolNest",

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

  alternates: {
    canonical: "https://toolnest.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toolnest.com",
    siteName: "ToolNest",

    title: "ToolNest - Free Online Tools",

    description:
      "Free online calculators, converters and generators. Fast, reliable and easy to use.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ToolNest",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "ToolNest - Free Online Tools",

    description:
      "Free online calculators, converters and generators.",

    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50">

        <StructuredData />

        {children}

      </body>
    </html>
  );
}