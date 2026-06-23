interface ExperienceCardProps {
  company: string;
  title: string;
  period: string;
  highlights: string[];
}

export function ExperienceCard({
  company,
  title,
  period,
  highlights,
}: ExperienceCardProps) {
  return (
    <div className="space-y-4 p-6 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all">
      <div>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <p className="text-sm font-medium text-blue-600">{company}</p>
        <p className="text-xs text-slate-500">{period}</p>
      </div>
      <ul className="space-y-2">
        {highlights.map((highlight, idx) => (
          <li key={idx} className="text-sm text-slate-600 flex gap-3">
            <span className="text-blue-600 font-bold flex-shrink-0">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
