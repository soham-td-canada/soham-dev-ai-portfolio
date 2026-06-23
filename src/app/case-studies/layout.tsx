import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Soham Chakraborty",
  description: "AI and production engineering case studies",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
