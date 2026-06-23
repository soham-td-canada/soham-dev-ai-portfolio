interface FailureModeCardProps {
  failureMode: string;
  description: string;
  fallback: string;
}

export function FailureModeCard({
  failureMode,
  description,
  fallback,
}: FailureModeCardProps) {
  return (
    <div className="space-y-3 p-5 bg-white border border-red-200 rounded-lg">
      <div>
        <h4 className="font-bold text-slate-900">{failureMode}</h4>
        <p className="text-sm text-slate-600 mt-1">{description}</p>
      </div>
      <div className="pt-2 border-t border-red-100">
        <p className="text-xs text-slate-600">
          <span className="font-semibold text-green-700">Fallback:</span> {fallback}
        </p>
      </div>
    </div>
  );
}
