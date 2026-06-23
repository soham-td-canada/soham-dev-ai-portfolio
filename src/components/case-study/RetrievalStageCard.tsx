interface RetrievalStageCardProps {
  stage: number;
  title: string;
  description: string;
  benefits: string[];
  color: "blue" | "purple";
}

export function RetrievalStageCard({
  stage,
  title,
  description,
  benefits,
  color,
}: RetrievalStageCardProps) {
  const bgColor = color === "blue" ? "bg-blue-50 border-blue-200" : "bg-purple-50 border-purple-200";
  const badgeColor = color === "blue" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700";

  return (
    <div className={`space-y-4 p-6 ${bgColor} border rounded-lg`}>
      <div className="flex items-start gap-3">
        <span className={`px-3 py-1 text-sm font-bold rounded-full ${badgeColor}`}>
          Stage {stage}
        </span>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      </div>
      <p className="text-slate-600">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex gap-2 text-sm text-slate-600">
            <span className={`font-bold flex-shrink-0 ${color === "blue" ? "text-blue-600" : "text-purple-600"}`}>
              ✓
            </span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
