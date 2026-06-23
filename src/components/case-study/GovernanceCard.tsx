interface GovernanceCardProps {
  title: string;
  description: string;
  items: string[];
}

export function GovernanceCard({
  title,
  description,
  items,
}: GovernanceCardProps) {
  return (
    <div className="space-y-3 p-6 bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-lg">
      <h4 className="font-bold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-600">{description}</p>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-2 text-sm text-slate-600">
            <span className="text-green-600 font-bold flex-shrink-0">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
