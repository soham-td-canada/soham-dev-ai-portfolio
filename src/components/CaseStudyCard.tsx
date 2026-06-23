import Link from "next/link";

interface CaseStudyCardProps {
  id: string;
  title: string;
  summary: string;
  businessProblem: string;
  status: string;
  tags: string[];
}

export function CaseStudyCard({
  id,
  title,
  summary,
  businessProblem,
  status,
  tags,
}: CaseStudyCardProps) {
  const statusColor =
    status === "Live / In progress"
      ? "bg-green-100 text-green-800"
      : "bg-amber-100 text-amber-800";

  return (
    <Link href={`/case-studies/${id}`}>
      <div className="h-full group cursor-pointer">
        <article className="h-full flex flex-col space-y-4 p-6 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-lg transition-all duration-300">
          {/* Status Badge */}
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex-1">
              {title}
            </h3>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ml-2 ${statusColor}`}>
              {status}
            </span>
          </div>

          {/* Summary */}
          <p className="text-base text-slate-600">{summary}</p>

          {/* Business Problem */}
          <p className="text-sm text-slate-500 italic">{businessProblem}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2 flex items-center space-x-2 text-blue-600 font-medium text-sm group-hover:space-x-3 transition-all">
            <span>View case study</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </article>
      </div>
    </Link>
  );
}
