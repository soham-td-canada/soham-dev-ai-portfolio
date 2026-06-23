"use client";

import { useEffect, useState } from "react";
import { ArchitectureNode } from "./ArchitectureNode";

export function ArchitectureDiagram() {
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
    {
      label: "EventBridge",
      description: "Scheduled workflow begins after market close and verifies the report window.",
      color: "blue" as const,
      x: 10,
      y: 15,
      size: "medium" as const,
    },
    {
      label: "Lambda Orchestrator",
      description: "Coordinates report generation, queries source data, computes deltas, and controls the tool-calling loop.",
      color: "blue" as const,
      x: 10,
      y: 50,
      size: "medium" as const,
    },
    {
      label: "RDS / PostgreSQL",
      description: "Active portfolios, trades, positions, prior snapshots, thresholds, and user access metadata.",
      color: "green" as const,
      x: 35,
      y: 35,
      size: "small" as const,
    },
    {
      label: "Delta Engine",
      description: "Exposure changes, VaR movement, P&L attribution, and threshold breaches computed in code.",
      color: "blue" as const,
      x: 35,
      y: 65,
      size: "medium" as const,
    },
    {
      label: "Sanitized Delta JSON",
      description: "Only structured, sanitized deltas are sent to the LLM workflow.",
      color: "blue" as const,
      x: 60,
      y: 50,
      size: "small" as const,
    },
    {
      label: "GPT-4o Tool Calling",
      description: "The model calls constrained tools for exposure summary, breach detection, and narrative generation.",
      color: "purple" as const,
      x: 85,
      y: 35,
      size: "medium" as const,
    },
    {
      label: "JSON Schema + Guardrails",
      description: "Output is validated for schema, numbers, missing fields, and evidence before being stored.",
      color: "amber" as const,
      x: 85,
      y: 65,
      size: "medium" as const,
    },
    {
      label: "S3 Encrypted Report Store",
      description: "Validated reports are stored as encrypted JSON/HTML artifacts.",
      color: "green" as const,
      x: 60,
      y: 85,
      size: "small" as const,
    },
    {
      label: "SNS Fanout",
      description: "Report-ready events are fanned out to analyst-facing channels.",
      color: "green" as const,
      x: 35,
      y: 85,
      size: "small" as const,
    },
    {
      label: "API Gateway + RBAC",
      description: "Analysts can only retrieve reports for portfolios they are authorized to view.",
      color: "green" as const,
      x: 10,
      y: 85,
      size: "small" as const,
    },
    {
      label: "React Report Viewer",
      description: "Exposure charts, breach tables, narrative summary, recommendations, and review state.",
      color: "blue" as const,
      x: 50,
      y: 15,
      size: "medium" as const,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Diagram Container */}
      <div className="relative w-full bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-lg overflow-hidden">
        {/* SVG for flow lines */}
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

          {/* Flow lines connecting nodes */}
          {/* Trigger to Orchestrator */}
          <line x1="100" y1="90" x2="100" y2="300" stroke="#cbd5e1" strokeWidth="2" />

          {/* Orchestrator to Data & Calculations */}
          <line x1="100" y1="300" x2="350" y2="210" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="100" y1="300" x2="350" y2="390" stroke="#cbd5e1" strokeWidth="2" />

          {/* Calculations to Sanitized Delta */}
          <line x1="350" y1="390" x2="600" y2="300" stroke="#cbd5e1" strokeWidth="2" />

          {/* Sanitized Delta to GPT-4o */}
          <line x1="600" y1="300" x2="850" y2="210" stroke="#cbd5e1" strokeWidth="2" />

          {/* GPT-4o to Validation */}
          <line x1="850" y1="210" x2="850" y2="390" stroke="#cbd5e1" strokeWidth="2" />

          {/* Validation to Storage */}
          <line x1="850" y1="390" x2="600" y2="510" stroke="#cbd5e1" strokeWidth="2" />

          {/* Storage to Notification */}
          <line x1="600" y1="510" x2="350" y2="510" stroke="#cbd5e1" strokeWidth="2" />

          {/* Notification to Retrieval */}
          <line x1="350" y1="510" x2="100" y2="510" stroke="#cbd5e1" strokeWidth="2" />

          {/* Retrieval to UI */}
          <line x1="100" y1="510" x2="500" y2="90" stroke="#cbd5e1" strokeWidth="2" />

          {/* Animated flow pulses */}
          {!prefersReducedMotion && (
            <>
              <line
                x1="100"
                y1="90"
                x2="100"
                y2="300"
                stroke="#3b82f6"
                strokeWidth="2"
                className="flow-line"
                opacity="0.6"
              />
              <line
                x1="350"
                y1="390"
                x2="600"
                y2="300"
                stroke="#3b82f6"
                strokeWidth="2"
                className="flow-line"
                opacity="0.6"
                style={{ animationDelay: "0.5s" }}
              />
              <line
                x1="600"
                y1="300"
                x2="850"
                y2="210"
                stroke="#a855f7"
                strokeWidth="2"
                className="flow-line"
                opacity="0.6"
                style={{ animationDelay: "1s" }}
              />
              <line
                x1="850"
                y1="390"
                x2="600"
                y2="510"
                stroke="#22c55e"
                strokeWidth="2"
                className="flow-line"
                opacity="0.6"
                style={{ animationDelay: "1.5s" }}
              />
            </>
          )}
        </svg>

        {/* Nodes */}
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
          <span className="text-sm text-slate-600">Deterministic System</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-200 border border-purple-400 rounded" />
          <span className="text-sm text-slate-600">AI-Assisted Layer</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-200 border border-green-400 rounded" />
          <span className="text-sm text-slate-600">Secure Delivery</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-amber-200 border border-amber-400 rounded" />
          <span className="text-sm text-slate-600">Validation/Review</span>
        </div>
      </div>

      {/* Note for reduced motion */}
      {prefersReducedMotion && (
        <p className="text-xs text-slate-500 italic">
          Animations are disabled based on your motion preferences.
        </p>
      )}
    </div>
  );
}
