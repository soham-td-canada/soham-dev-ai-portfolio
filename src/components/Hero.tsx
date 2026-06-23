import Link from "next/link";

interface HeroProps {
  headline: string;
  subheadline: string;
  techBadges: string[];
}

export function Hero({ headline, subheadline, techBadges }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              {headline}
            </h1>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600">
              {subheadline}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#case-studies"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              View AI Case Studies
            </Link>
            <a
              href="https://github.com/soham-td-canada"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
            >
              View GitHub
            </a>
            <a
              href="mailto:soham.software.canada@gmail.com"
              className="px-8 py-3 border-2 border-slate-300 text-slate-900 font-medium rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              Download Resume
            </a>
          </div>

          {/* Tech Badges */}
          <div className="pt-8">
            <p className="text-sm font-medium text-slate-500 mb-4">
              Core Stack
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
