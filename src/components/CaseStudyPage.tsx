import Link from "next/link";
import { Header } from "./Header";
import { CTASection } from "./CTASection";

interface CaseStudyPageProps {
  title: string;
  status: string;
  company: string;
  businessProblem: string;
  techApproach: string;
  whatBuilt: string[];
  techStack: string[];
}

export function CaseStudyPage({
  title,
  status,
  company,
  businessProblem,
  techApproach,
  whatBuilt,
  techStack,
}: CaseStudyPageProps) {
  const statusColor =
    status === "Live / In progress"
      ? "bg-green-100 text-green-800"
      : "bg-amber-100 text-amber-800";

  return (
    <div className="bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-blue-600">{company}</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
                  {title}
                </h1>
              </div>
              <span
                className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0 ${statusColor}`}
              >
                {status}
              </span>
            </div>
            <div className="pt-4">
              <Link
                href="/#case-studies"
                className="inline-flex items-center space-x-2 text-blue-600 font-medium text-sm hover:space-x-3 transition-all"
              >
                <span>←</span>
                <span>Back to case studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Coming Soon Note */}
          <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-900 font-medium">
              📌 Full case study coming soon. Below is an outline of the project
              scope and architecture.
            </p>
          </div>

          {/* Business Problem */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Business Problem
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {businessProblem}
            </p>
          </div>

          {/* Technical Approach */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Technical Approach
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {techApproach}
            </p>
          </div>

          {/* What I Built */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">
              What I Built
            </h2>
            <ul className="space-y-3">
              {whatBuilt.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-600">
                  <span className="text-blue-600 font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200" />

          {/* Back Link */}
          <div className="text-center">
            <Link
              href="/#case-studies"
              className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:space-x-3 transition-all"
            >
              <span>←</span>
              <span>Back to all case studies</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection heading="Ready to discuss production AI workflows and full-stack engineering?" />
    </div>
  );
}
