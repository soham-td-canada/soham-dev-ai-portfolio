"use client";

import { useEffect, useState } from "react";
import { ArchitectureNode } from "./ArchitectureNode";

export function RagSearchArchitecture() {
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
      label: "HR Selects JD",
      description: "Recruiter picks JD to match against CVs.",
      color: "green" as const,
      x: 5,
      y: 50,
      size: "small" as const,
    },
    {
      label: "API Gateway",
      description: "Cognito/JWT auth + RBAC + tenant check.",
      color: "blue" as const,
      x: 15,
      y: 50,
      size: "small" as const,
    },
    {
      label: "Vector Search",
      description: "Permission-filtered search per JD chunk. Fast recall.",
      color: "blue" as const,
      x: 30,
      y: 50,
      size: "small" as const,
    },
    {
      label: "Dedup & Aggregate",
      description: "Group by candidate. Normalize scores across sections.",
      color: "blue" as const,
      x: 45,
      y: 50,
      size: "small" as const,
    },
    {
      label: "Threshold & Top-50",
      description: "Apply score threshold. Select top-50 candidates for re-ranking.",
      color: "blue" as const,
      x: 60,
      y: 50,
      size: "small" as const,
    },
    {
      label: "Claude Bedrock",
      description: "Re-rank top-50. Generate explanations. Return top-10.",
      color: "purple" as const,
      x: 75,
      y: 50,
      size: "small" as const,
    },
    {
      label: "Validation",
      description: "Pydantic/JSON schema check. Cite verification.",
      color: "amber" as const,
      x: 85,
      y: 50,
      size: "small" as const,
    },
    {
      label: "Redis Cache",
      description: "Cache ranking result with TTL.",
      color: "amber" as const,
      x: 93,
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
                  animation: flowPulse 6s linear infinite;
                  stroke-dasharray: 10, 5;
                }
              `}</style>
            )}
          </defs>

          {/* Main flow line */}
          <line x1="50" y1="150" x2="930" y2="150" stroke="#cbd5e1" strokeWidth="2" />

          {/* Animated flow pulse */}
          {!prefersReducedMotion && (
            <line
              x1="50"
              y1="150"
              x2="930"
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
        Two-stage search: fast vector retrieval (thousands → 50 candidates) → Claude re-ranking (50 → 10 results). Cached for fast repeat queries.
      </p>

      {prefersReducedMotion && (
        <p className="text-xs text-slate-500">Animations disabled per your preferences.</p>
      )}
    </div>
  );
}
