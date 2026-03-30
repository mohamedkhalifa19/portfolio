import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Ahmed Khalifa — React Front-End Developer",
  description:
    "Portfolio of Mohamed Ahmed Khalifa, a React Front-End Developer specializing in high-performance, responsive web interfaces. Based in Egypt.",
  keywords: [
    "React Developer",
    "Front-End Developer",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Egypt",
    "Portfolio",
  ],
  authors: [{ name: "Mohamed Ahmed Khalifa" }],
  creator: "Mohamed Ahmed Khalifa",
  openGraph: {
    type: "website",
    title: "Mohamed Ahmed Khalifa — React Front-End Developer",
    description:
      "Crafting responsive, high-performance web interfaces with React, Next.js, and modern tooling.",
    siteName: "Mohamed Khalifa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ahmed Khalifa — React Front-End Developer",
    description:
      "Crafting responsive, high-performance web interfaces with React, Next.js, and modern tooling.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
