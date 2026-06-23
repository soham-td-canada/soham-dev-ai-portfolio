"use client";

import { useEffect, useState } from "react";
import { ArchitectureNode } from "./ArchitectureNode";

export function RagIngestionArchitecture() {
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

  const nodes = [
    {
      label: "HR Uploads CV",
      description: "Recruiter/HR uploads CV file.",
      color: "green" as const,
      x: 5,
      y: 50,
      size: "small" as const,
    },
    {
      label: "API Gateway",
      description: "Auth + validate file type/size.",
      color: "blue" as const,
      x: 15,
      y: 50,
      size: "small" as const,
    },
    {
      label: "FastAPI / Lambda",
      description: "Orchestrate ingestion pipeline.",
      color: "blue" as const,
      x: 25,
      y: 50,
      size: "small" as const,
    },
    {
      label: "S3 Raw Store",
      description: "Store original PDF/doc encrypted.",
      color: "green" as const,
      x: 35,
      y: 30,
      size: "small" as const,
    },
    {
      label: "Parser / OCR",
      description: "pdfplumber + Textract for scans.",
      color: "blue" as const,
      x: 45,
      y: 50,
      size: "small" as const,
    },
    {
      label: "Semantic Chunking",
      description: "Extract sections: roles, projects, skills.",
      color: "blue" as const,
      x: 55,
      y: 50,
      size: "small" as const,
    },
    {
      label: "Aurora PostgreSQL",
      description: "Store metadata, chunks, permissions.",
      color: "green" as const,
      x: 65,
      y: 30,
      size: "small" as const,
    },
    {
      label: "Bedrock Embeddings",
      description: "Generate vectors for all chunks.",
      color: "purple" as const,
      x: 75,
      y: 50,
      size: "small" as const,
    },
    {
      label: "pgvector Index",
      description: "Store + HNSW index vectors.",
      color: "green" as const,
      x: 85,
      y: 50,
      size: "small" as const,
    },
    {
      label: "Cache Status",
      description: "Mark embedding complete, skip re-embed.",
      color: "amber" as const,
      x: 95,
      y: 50,
      size: "small" as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="relative w-full bg-gradient-to-br from-blue-50 to-white border border-slate-200 rounded-lg overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 300"
          preserveAspectRatio="xMidYMid meet"
          role="presentation"
        >
          <defs>
            {!prefersReducedMotion && (
              <style>{`
                @keyframes flowPulse {
                  0% { stroke-dashoffset: 10; }
                  100% { stroke-dashoffset: 0; }
                }
                .flow-line {
                  animation: flowPulse 5s linear infinite;
                  stroke-dasharray: 10, 5;
                }
              `}</style>
            )}
          </defs>

          {/* Main flow line */}
          <line x1="50" y1="150" x2="950" y2="150" stroke="#cbd5e1" strokeWidth="2" />

          {/* Branch to S3 */}
          <line x1="350" y1="150" x2="350" y2="90" stroke="#cbd5e1" strokeWidth="2" />

          {/* Branch to PostgreSQL */}
          <line x1="650" y1="150" x2="650" y2="90" stroke="#cbd5e1" strokeWidth="2" />

          {/* Animated flow pulse */}
          {!prefersReducedMotion && (
            <line
              x1="50"
              y1="150"
              x2="950"
              y2="150"
              stroke="#3b82f6"
              strokeWidth="2"
              className="flow-line"
              opacity="0.6"
            />
          )}
        </svg>

        <div className="relative w-full" style={{ aspectRatio: "16 / 5", minHeight: "250px" }}>
          {nodes.map((node, idx) => (
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

      <p className="text-sm text-slate-600 italic">
        One-time expensive operations: parsing, OCR, chunking, and embedding happen once per CV upload. Re-embed only on document update.
      </p>

      {prefersReducedMotion && (
        <p className="text-xs text-slate-500">Animations disabled per your preferences.</p>
      )}
    </div>
  );
}
