import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soham Chakraborty | Senior Full-Stack Engineer & AI Specialist",
  description:
    "Senior Software Engineer with 10+ years building production-grade web systems and 2+ years of tech leadership. Expert in React, Next.js, Node.js, AWS, and production LLM workflows.",
  keywords: [
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "AWS",
    "AI/LLM",
    "Software Architect",
  ],
  authors: [{ name: "Soham Chakraborty" }],
  openGraph: {
    title: "Soham Chakraborty | Senior Full-Stack Engineer",
    description:
      "Building production AI-powered products and enterprise systems.",
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
