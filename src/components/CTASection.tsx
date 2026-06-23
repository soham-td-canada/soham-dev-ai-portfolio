interface CTASectionProps {
  heading: string;
}

export function CTASection({ heading }: CTASectionProps) {
  return (
    <section id="contact" className="bg-slate-900 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:soham.software.canada@gmail.com"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/soham-td-canada"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/soham-chakraborty"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-slate-400 text-sm">
            © 2024 Soham Chakraborty. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
