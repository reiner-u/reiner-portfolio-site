import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/NavMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Software engineering student at McMaster University, currently on a QA co-op with the Ontario Public Service. Projects in Python, FastAPI, React, and Next.js.";

export const metadata: Metadata = {
  metadataBase: new URL("https://reinerumila.dev"),
  title: {
    default: "Reiner Umila",
    template: "%s | Reiner Umila",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Reiner Umila",
    title: "Reiner Umila",
    description: siteDescription,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reiner Umila",
    description: siteDescription,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
