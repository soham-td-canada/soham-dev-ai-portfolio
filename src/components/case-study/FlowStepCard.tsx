interface FlowStepCardProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export function FlowStepCard({
  number,
  title,
  description,
  isLast,
}: FlowStepCardProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
          {number}
        </div>
        {!isLast && (
          <div className="w-1 h-12 bg-gradient-to-b from-blue-300 to-transparent mt-2" />
        )}
      </div>
      <div className="flex-1 pt-1">
        <h4 className="font-bold text-slate-900">{title}</h4>
        <p className="text-sm text-slate-600 mt-1">{description}</p>
      </div>
    </div>
  );
}
