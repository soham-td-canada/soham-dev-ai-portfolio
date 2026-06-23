interface GuardrailCardProps {
  title: string;
  description: string;
  items: string[];
}

export function GuardrailCard({
  title,
  description,
  items,
}: GuardrailCardProps) {
  return (
    <div className="space-y-3 p-6 bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-lg">
      <h4 className="font-bold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-600">{description}</p>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-2 text-sm text-slate-600">
            <span className="text-amber-600 font-bold flex-shrink-0">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
