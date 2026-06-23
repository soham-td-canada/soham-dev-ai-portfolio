import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SkillGroup } from "@/components/SkillGroup";
import { CTASection } from "@/components/CTASection";
import { profileData } from "@/lib/profile-data";

export const metadata: Metadata = {
  title: "Soham Chakraborty | Senior Full-Stack Engineer & AI Specialist",
  description:
    "Senior Software Engineer with 10+ years building production-grade web systems and 2+ years of tech leadership. Expert in React, Next.js, Node.js, AWS, and production LLM workflows.",
  openGraph: {
    title: "Soham Chakraborty | Senior Full-Stack Engineer",
    description:
      "Building production AI-powered products and enterprise systems.",
    url: "https://sohamdev.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <Hero
        headline={profileData.headline}
        subheadline={profileData.subheadline}
        techBadges={profileData.techBadges}
      />

      {/* Metrics Strip */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {profileData.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-slate-900">
                  {metric.label}
                </p>
                <p className="text-sm text-slate-600 mt-2">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="About"
            title="Senior Full-Stack Engineer + Tech Lead"
            description="Combining system design, product instincts, and production AI/LLM expertise"
          />
          <div className="mt-12">
            <p className="text-lg text-slate-600 leading-relaxed">
              {profileData.aboutSummary}
            </p>
          </div>
        </div>
      </section>

      {/* AI Case Studies Section */}
      <section id="case-studies" className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="AI Case Studies"
            title="Production LLM & RAG Workflows"
            description="Real-world AI integration across financial analysis, knowledge retrieval, and sales intelligence"
          />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {profileData.caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                id={caseStudy.id}
                title={caseStudy.title}
                summary={caseStudy.summary}
                businessProblem={caseStudy.businessProblem}
                status={caseStudy.status}
                tags={caseStudy.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Experience"
            title="10+ Years Shipping Production Systems"
            description="Leading teams and delivering enterprise solutions at scale"
          />
          <div className="mt-16 space-y-6">
            {profileData.experience.map((job) => (
              <ExperienceCard
                key={job.company}
                company={job.company}
                title={job.title}
                period={job.period}
                highlights={job.highlights}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Skills"
            title="Full-Stack Expertise"
            description="Production-grade technologies across frontend, backend, cloud, and AI"
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {profileData.skillGroups.map((group) => (
              <SkillGroup
                key={group.category}
                category={group.category}
                skills={group.skills}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Selected Work"
            title="Beyond Case Studies"
            description="Enterprise systems and optimization work across e-commerce, fintech, and healthcare"
          />
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {profileData.selectedWork.map((work) => (
              <div key={work.title} className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-lg font-bold text-slate-900">
                  {work.title}
                </h3>
                <p className="mt-2 text-slate-600">{work.description}</p>
                <p className="mt-3 text-sm font-semibold text-blue-600">
                  {work.highlight}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <CTASection heading={profileData.contactCTA} />
    </div>
  );
}
