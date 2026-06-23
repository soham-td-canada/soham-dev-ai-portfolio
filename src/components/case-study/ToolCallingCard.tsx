interface ToolCallingCardProps {
  toolName: string;
  description: string;
  purpose: string;
}

export function ToolCallingCard({
  toolName,
  description,
  purpose,
}: ToolCallingCardProps) {
  return (
    <div className="space-y-3 p-5 bg-white border border-slate-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all">
      <div className="space-y-1">
        <h4 className="font-mono text-sm font-bold text-purple-700">
          {toolName}
        </h4>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
      <div className="pt-2 border-t border-slate-100">
        <p className="text-xs text-slate-500 italic">
          <span className="font-semibold">Purpose:</span> {purpose}
        </p>
      </div>
    </div>
  );
}
