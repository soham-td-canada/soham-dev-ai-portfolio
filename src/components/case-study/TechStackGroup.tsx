interface TechStackGroupProps {
  category: string;
  technologies: string[];
}

export function TechStackGroup({
  category,
  technologies,
}: TechStackGroupProps) {
  return (
    <div className="space-y-3">
      <h4 className="font-bold text-slate-900">{category}</h4>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="inline-block px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
