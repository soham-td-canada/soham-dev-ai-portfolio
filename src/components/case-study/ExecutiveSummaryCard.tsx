interface ExecutiveSummaryCardProps {
  icon: string;
  title: string;
  description: string;
}

export function ExecutiveSummaryCard({
  icon,
  title,
  description,
}: ExecutiveSummaryCardProps) {
  return (
    <div className="space-y-4 p-6 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all">
      <div className="text-3xl">{icon}</div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
