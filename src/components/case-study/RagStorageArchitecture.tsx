"use client";

import { useEffect, useState } from "react";
import { ArchitectureNode } from "./ArchitectureNode";

export function RagStorageArchitecture() {
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
      label: "Recruiter Uploads JD",
      description: "Recruiter uploads or selects job description.",
      color: "green" as const,
      x: 5,
      y: 50,
      size: "small" as const,
    },
    {
      label: "Validate JD Text",
      description: "Validate JD content, format, and structure.",
      color: "blue" as const,
      x: 20,
      y: 50,
      size: "small" as const,
    },
    {
      label: "Extract Sections",
      description: "Parse role summary, responsibilities, requirements.",
      color: "blue" as const,
      x: 35,
      y: 50,
      size: "small" as const,
    },
    {
      label: "Semantic Chunking",
      description: "Chunk by role, must-haves, nice-to-haves, domain context.",
      color: "blue" as const,
      x: 50,
      y: 50,
      size: "small" as const,
    },
    {
      label: "Bedrock Embeddings",
      description: "Generate vectors for all JD chunks using same model as CVs.",
      color: "purple" as const,
      x: 65,
      y: 50,
      size: "small" as const,
    },
    {
      label: "Store JD Chunks",
      description: "Store chunks + metadata + vectors in Aurora + pgvector.",
      color: "green" as const,
      x: 80,
      y: 50,
      size: "small" as const,
    },
    {
      label: "Version & Timestamp",
      description: "Version JD embeddings by JD ID and update timestamp.",
      color: "amber" as const,
      x: 95,
      y: 50,
      size: "small" as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="relative w-full bg-gradient-to-br from-purple-50 to-white border border-slate-200 rounded-lg overflow-hidden">
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

          {/* Animated flow pulse */}
          {!prefersReducedMotion && (
            <line
              x1="50"
              y1="150"
              x2="950"
              y2="150"
              stroke="#a855f7"
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
        JDs go through the same embedding process as CVs so they live in the same vector space. This keeps the comparison symmetric and makes cosine similarity meaningful.
      </p>

      {prefersReducedMotion && (
        <p className="text-xs text-slate-500">Animations disabled per your preferences.</p>
      )}
    </div>
  );
}
