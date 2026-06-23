"use client";

import { useState } from "react";

interface ArchitectureNodeProps {
  label: string;
  description: string;
  color: "blue" | "purple" | "green" | "amber";
  x: number;
  y: number;
  size?: "small" | "medium" | "large";
}

export function ArchitectureNode({
  label,
  description,
  color,
  x,
  y,
  size = "medium",
}: ArchitectureNodeProps) {
  const [isHovered, setIsHovered] = useState(false);

  const colorMap = {
    blue: "bg-blue-100 border-blue-300 hover:bg-blue-200",
    purple: "bg-purple-100 border-purple-300 hover:bg-purple-200",
    green: "bg-green-100 border-green-300 hover:bg-green-200",
    amber: "bg-amber-100 border-amber-300 hover:bg-amber-200",
  };

  const sizeMap = {
    small: "w-20 h-20",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  };

  const textSizeMap = {
    small: "text-xs",
    medium: "text-sm",
    large: "text-base",
  };

  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Node */}
      <div
        className={`${sizeMap[size]} ${colorMap[color]} border-2 rounded-lg flex flex-col items-center justify-center p-3 text-center font-bold cursor-pointer transition-all duration-200 relative z-10`}
        role="button"
        tabIndex={0}
        aria-label={label}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsHovered(!isHovered);
          }
        }}
      >
        <div className={`${textSizeMap[size]} text-slate-900`}>{label}</div>
      </div>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 z-20 w-40 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-lg pointer-events-none animate-in fade-in duration-200">
          {description}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-slate-900" />
        </div>
      )}
    </div>
  );
}
