import { Metadata } from "next";
import { CaseStudyPage } from "@/components/CaseStudyPage";

export const metadata: Metadata = {
  title:
    "Financial Risk Analyst Report Automation | Soham Chakraborty Case Study",
  description:
    "GPT-4o + LLM tool-calling workflow for automating financial risk reporting with guardrails and human review.",
};

export default function FinancialRiskCaseStudy() {
  return (
    <CaseStudyPage
      title="Financial Risk Analyst Report Automation"
      status="Coming soon"
      company="Validus Risk Management"
      businessProblem="Risk analysts spent 4+ hours manually aggregating data and writing reports. Error-prone, non-scalable, and couldn't keep pace with deal velocity."
      techApproach="Built a Node.js + React workflow using GPT-4o with deterministic tool-calling for structured financial analysis. Integrated guardrails, confidence scoring, and human review checkpoints to ensure compliance."
      whatBuilt={[
        "LLM-powered data aggregation engine using GPT-4o with function calling",
        "Deterministic tool-calling interface for structured financial analysis",
        "Real-time report generation with streaming updates",
        "Human review and approval workflow with edit capabilities",
        "Compliance guardrails, confidence scoring, and audit trail",
        "Integration with internal risk data sources and APIs",
      ]}
      techStack={[
        "Node.js",
        "Express",
        "React",
        "TypeScript",
        "OpenAI GPT-4o",
        "Tool Calling API",
        "PostgreSQL",
        "AWS Lambda",
      ]}
    />
  );
}
