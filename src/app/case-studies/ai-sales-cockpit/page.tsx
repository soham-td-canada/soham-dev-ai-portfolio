import { Metadata } from "next";
import { CaseStudyPage } from "@/components/CaseStudyPage";

export const metadata: Metadata = {
  title: "AI Sales Cockpit | Soham Chakraborty Case Study",
  description:
    "AI-powered account cockpit for surfacing vitals, risk, recommendations, serviceability, and next-best actions.",
};

export default function AISalesCockpitCaseStudy() {
  return (
    <CaseStudyPage
      title="AI Sales Cockpit"
      status="Live / In progress"
      company="Tech Lead / Full-Stack"
      businessProblem="Sales teams lacked a single source of truth for account health, risk signals, and recommended actions. Decision-making was slow and reactive. Account managers spent hours aggregating data from multiple systems."
      techApproach="Designed a React + Next.js UI backed by a BFF that aggregates account data, runs AI-powered analysis, and surfaces recommendations. Focuses on actionable insights over raw data. Combines real-time data with ML-powered predictions."
      whatBuilt={[
        "Account health dashboard with AI-powered scoring",
        "Real-time risk signal aggregation and prioritization",
        "AI-powered next-best-action recommendations engine",
        "Serviceability and renewal intelligence scoring",
        "Mobile-responsive account detail views",
        "BFF layer aggregating data from multiple upstream APIs",
        "Interactive charts and account timeline",
        "Notification and alert system for high-risk accounts",
      ]}
      techStack={[
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "BFF Pattern",
        "Express",
        "AI/ML Scoring",
        "PostgreSQL",
      ]}
    />
  );
}
