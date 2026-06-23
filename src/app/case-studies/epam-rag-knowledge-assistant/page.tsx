import { Metadata } from "next";
import { CaseStudyPage } from "@/components/CaseStudyPage";

export const metadata: Metadata = {
  title:
    "Internal EPAM RAG Knowledge Assistant | Soham Chakraborty Case Study",
  description:
    "Retrieval-augmented knowledge assistant using embeddings, semantic retrieval, prompt engineering, and trusted internal data.",
};

export default function EPAMRAGCaseStudy() {
  return (
    <CaseStudyPage
      title="Internal EPAM RAG Knowledge Assistant"
      status="Coming soon"
      company="EPAM Systems"
      businessProblem="Engineers struggled to find internal knowledge across scattered wikis, design docs, and runbooks. Onboarding was slow, and institutional knowledge was fragmented. Valuable context was buried in PDFs and markdown."
      techApproach="Built a Next.js + Node.js RAG system using OpenAI embeddings to index internal documentation. Implemented semantic search with prompt engineering to surface relevant knowledge, guardrails to prevent hallucination, and confidence scoring."
      whatBuilt={[
        "OpenAI embedding-based document indexing and chunking pipeline",
        "Semantic vector search with retrieval ranking",
        "Chat-like interface for conversational knowledge discovery",
        "Prompt engineering for accuracy, citations, and context preservation",
        "Guardrails to prevent out-of-bounds answers and hallucination",
        "Confidence scoring and source attribution",
        "Integration with internal wiki, Confluence, and runbooks",
      ]}
      techStack={[
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "OpenAI Embeddings",
        "Vector Database",
        "PostgreSQL",
        "Vercel",
      ]}
    />
  );
}
