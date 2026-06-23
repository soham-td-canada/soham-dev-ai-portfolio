interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center space-y-4">
      {label && (
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-lg text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
