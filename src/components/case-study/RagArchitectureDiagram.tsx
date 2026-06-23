"use client";

import { useEffect, useState } from "react";
import { ArchitectureNode } from "./ArchitectureNode";

export function RagArchitectureDiagram() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const architectureNodes = [
    // Inputs
    {
      label: "Documents + CVs + JDs",
      description:
        "Source content enters via uploads, synced repositories, or structured records.",
      color: "green" as const,
      x: 8,
      y: 10,
      size: "small" as const,
    },
    {
      label: "User Query",
      description: "Search query or job description from analyst/recruiter.",
      color: "blue" as const,
      x: 92,
      y: 10,
      size: "small" as const,
    },

    // Shared API Layer
    {
      label: "API Gateway",
      description:
        "Authenticated boundary for document upload, search queries, and result retrieval.",
      color: "blue" as const,
      x: 50,
      y: 25,
      size: "small" as const,
    },

    // Ingestion pipeline (left side)
    {
      label: "Parser / OCR",
      description: "Extract text from PDFs. OCR fallback for scanned documents.",
      color: "blue" as const,
      x: 15,
      y: 40,
      size: "small" as const,
    },
    {
      label: "Semantic Chunking",
      description:
        "Split by resume sections, project summaries, skill groups—preserve context.",
      color: "blue" as const,
      x: 15,
      y: 60,
      size: "small" as const,
    },
    {
      label: "Embedding Model",
      description:
        "Convert chunks to vectors. Run once per document version, cache results.",
      color: "purple" as const,
      x: 35,
      y: 75,
      size: "small" as const,
    },

    // Storage (middle/bottom)
    {
      label: "S3 Encrypted Store",
      description: "Raw documents stored separately from embeddings and metadata.",
      color: "green" as const,
      x: 8,
      y: 85,
      size: "small" as const,
    },
    {
      label: "PostgreSQL Metadata",
      description: "Document IDs, chunk references, permissions, versions, audit trail.",
      color: "green" as const,
      x: 35,
      y: 90,
      size: "small" as const,
    },
    {
      label: "pgvector Store",
      description: "Vector storage. Supports similarity search with permission filters.",
      color: "green" as const,
      x: 62,
      y: 90,
      size: "small" as const,
    },

    // Search/Query pipeline (right side)
    {
      label: "Embed Query",
      description: "Convert user query to vector using same embedding model.",
      color: "purple" as const,
      x: 85,
      y: 40,
      size: "small" as const,
    },
    {
      label: "Top-K Retrieval",
      description:
        "Permission-filtered vector search. Retrieve candidate chunks with scores.",
      color: "blue" as const,
      x: 85,
      y: 60,
      size: "small" as const,
    },
    {
      label: "LLM Re-ranker",
      description:
        "Claude re-ranks shortlist. Generates summary with evidence citations.",
      color: "purple" as const,
      x: 92,
      y: 40,
      size: "small" as const,
    },
    {
      label: "Validation + Output",
      description: "JSON schema validation. Verify citations. Safe rendering.",
      color: "amber" as const,
      x: 92,
      y: 25,
      size: "small" as const,
    },

    // Output
    {
      label: "React Dashboard",
      description:
        "Ranked results, match scores, evidence snippets, risks, filter options.",
      color: "blue" as const,
      x: 92,
      y: 75,
      size: "small" as const,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="relative w-full bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-lg overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid meet"
          role="presentation"
        >
          <defs>
            {!prefersReducedMotion && (
              <>
                <style>{`
                  @keyframes flowPulse {
                    0% { stroke-dashoffset: 10; }
                    100% { stroke-dashoffset: 0; }
                  }
                  .flow-line {
                    animation: flowPulse 3s linear infinite;
                    stroke-dasharray: 10, 5;
                  }
                `}</style>
              </>
            )}
          </defs>

          {/* INGESTION PIPELINE (left) */}
          {/* Documents → API */}
          <line x1="80" y1="60" x2="500" y2="150" stroke="#cbd5e1" strokeWidth="2" />
          {/* API → Parser */}
          <line x1="500" y1="150" x2="150" y2="240" stroke="#cbd5e1" strokeWidth="2" />
          {/* Parser → Chunking */}
          <line x1="150" y1="360" x2="150" y2="360" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="150" y1="240" x2="150" y2="360" stroke="#cbd5e1" strokeWidth="2" />
          {/* Chunking → Embedding */}
          <line x1="150" y1="360" x2="350" y2="450" stroke="#cbd5e1" strokeWidth="2" />

          {/* QUERY PIPELINE (right) */}
          {/* Query → API */}
          <line x1="920" y1="60" x2="500" y2="150" stroke="#cbd5e1" strokeWidth="2" />
          {/* API → Embed Query */}
          <line x1="500" y1="150" x2="850" y2="240" stroke="#cbd5e1" strokeWidth="2" />
          {/* Embed Query → Retrieval */}
          <line x1="850" y1="240" x2="850" y2="360" stroke="#cbd5e1" strokeWidth="2" />
          {/* Retrieval → LLM */}
          <line x1="850" y1="360" x2="920" y2="240" stroke="#cbd5e1" strokeWidth="2" />
          {/* LLM → Validation */}
          <line x1="920" y1="240" x2="920" y2="150" stroke="#cbd5e1" strokeWidth="2" />
          {/* Validation → Dashboard */}
          <line x1="920" y1="150" x2="920" y2="450" stroke="#cbd5e1" strokeWidth="2" />

          {/* STORAGE cross-connections */}
          {/* Chunking → Metadata/Vector storage */}
          <line x1="150" y1="360" x2="500" y2="540" stroke="#cbd5e1" strokeWidth="2" />
          {/* Embedding → Vector store */}
          <line x1="350" y1="450" x2="620" y2="540" stroke="#cbd5e1" strokeWidth="2" />
          {/* Retrieval queries Metadata/Vector stores */}
          <line x1="850" y1="360" x2="620" y2="540" stroke="#cbd5e1" strokeWidth="2" />

          {/* Animated flow pulses */}
          {!prefersReducedMotion && (
            <>
              <line
                x1="80"
                y1="60"
                x2="500"
                y2="150"
                stroke="#3b82f6"
                strokeWidth="2"
                className="flow-line"
                opacity="0.6"
              />
              <line
                x1="500"
                y1="150"
                x2="150"
                y2="240"
                stroke="#3b82f6"
                strokeWidth="2"
                className="flow-line"
                opacity="0.6"
                style={{ animationDelay: "0.5s" }}
              />
              <line
                x1="500"
                y1="150"
                x2="850"
                y2="240"
                stroke="#a855f7"
                strokeWidth="2"
                className="flow-line"
                opacity="0.6"
                style={{ animationDelay: "0.3s" }}
              />
              <line
                x1="850"
                y1="360"
                x2="920"
                y2="240"
                stroke="#a855f7"
                strokeWidth="2"
                className="flow-line"
                opacity="0.6"
                style={{ animationDelay: "1s" }}
              />
              <line
                x1="920"
                y1="240"
                x2="920"
                y2="150"
                stroke="#fbbf24"
                strokeWidth="2"
                className="flow-line"
                opacity="0.6"
                style={{ animationDelay: "1.5s" }}
              />
            </>
          )}
        </svg>

        <div className="relative w-full" style={{ aspectRatio: "16 / 10", minHeight: "400px" }}>
          {architectureNodes.map((node, idx) => (
            <ArchitectureNode
              key={idx}
              label={node.label}
              description={node.description}
              color={node.color}
              x={node.x}
              y={node.y}
              size={node.size}
            />
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-200 border border-blue-400 rounded" />
          <span className="text-sm text-slate-600">Deterministic Pipeline</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-200 border border-purple-400 rounded" />
          <span className="text-sm text-slate-600">AI/LLM Layer</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-200 border border-green-400 rounded" />
          <span className="text-sm text-slate-600">Secure Storage</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-amber-200 border border-amber-400 rounded" />
          <span className="text-sm text-slate-600">Validation</span>
        </div>
      </div>

      {prefersReducedMotion && (
        <p className="text-xs text-slate-500 italic">
          Animations are disabled based on your motion preferences.
        </p>
      )}
    </div>
  );
}
