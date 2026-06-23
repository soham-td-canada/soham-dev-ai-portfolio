interface SkillGroupProps {
  category: string;
  skills: string[];
}

export function SkillGroup({ category, skills }: SkillGroupProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-bold text-slate-900">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-block px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
