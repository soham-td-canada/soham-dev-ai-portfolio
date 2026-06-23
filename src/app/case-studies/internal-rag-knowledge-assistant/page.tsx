import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { CTASection } from "@/components/CTASection";
import { ExecutiveSummaryCard } from "@/components/case-study/ExecutiveSummaryCard";
import { RetrievalStageCard } from "@/components/case-study/RetrievalStageCard";
import { FailureModeCard } from "@/components/case-study/FailureModeCard";
import { GovernanceCard } from "@/components/case-study/GovernanceCard";
import { TechStackGroup } from "@/components/case-study/TechStackGroup";
import { RagIngestionArchitecture } from "@/components/case-study/RagIngestionArchitecture";
import { RagStorageArchitecture } from "@/components/case-study/RagStorageArchitecture";
import { RagSearchArchitecture } from "@/components/case-study/RagSearchArchitecture";

export const metadata: Metadata = {
  title: "Semantic CV↔JD Matching Platform | Soham Chakraborty Case Study",
  description:
    "Production-ready AI-assisted recruiting using semantic search, embeddings, pgvector, and Claude re-ranking. Combines deterministic vector retrieval with LLM explanations to find strong candidate matches faster.",
  openGraph: {
    title: "Semantic CV↔JD Matching Platform",
    description:
      "Building semantic recruiting with embeddings, vector search, and Claude re-ranking.",
    type: "article",
  },
};

export default function InternalRagCaseStudy() {
  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
                Case Study
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
                Semantic CV↔JD Matching Platform
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl">
                Built a production-ready AI-assisted recruiting workflow using AWS, Python, embeddings, pgvector, and Claude re-ranking to improve candidate discovery through semantic matching.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Semantic Search",
                "Embeddings",
                "pgvector",
                "Claude Re-ranking",
                "AWS Production",
                "Two-Stage Retrieval",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-block px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#architecture"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
              >
                View Architecture
              </a>
              <Link
                href="/#case-studies"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-300 text-slate-900 font-medium rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Executive Summary</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ExecutiveSummaryCard
              icon="🔍"
              title="The Problem"
              description="Keyword search misses strong candidates when CVs use different wording from job descriptions. Recruiters needed ranked candidates with explanations and evidence."
            />
            <ExecutiveSummaryCard
              icon="⚙️"
              title="The Solution"
              description="Two-stage retrieval: fast vector search for recall (thousands → 50 candidates), then Claude re-ranking for precision, explanations, and evidence citations."
            />
            <ExecutiveSummaryCard
              icon="👤"
              title="My Role"
              description="Full-stack AI engineering: CV ingestion, semantic chunking, embeddings, vector search, Claude integration, Pydantic validation, caching, security, and observability."
            />
            <ExecutiveSummaryCard
              icon="✅"
              title="Outcome"
              description="Faster candidate discovery, semantic matching beyond keywords, recruiter-ready explanations with evidence, reduced token cost through smart filtering, and RBAC-enforced tenant isolation."
            />
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Problem</h2>
            <div className="space-y-6 text-slate-600">
              <p className="text-lg leading-relaxed">
                Traditional keyword search misses strong candidates when CVs use different wording from the job description. Recruiters spent time manually screening, and good matches were often overlooked.
              </p>

              <div className="p-6 bg-white border border-slate-200 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-3">Example</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                    <span>
                      <strong>JD says:</strong> "distributed systems"
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                    <span>
                      <strong>CV says:</strong> "microservices, event-driven architecture, Kafka"
                    </span>
                  </li>
                </ul>
                <p className="text-xs text-slate-500 mt-3 italic">
                  Keyword search may miss the match. Semantic search identifies the connection.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                The goal was to help recruiters:
              </p>
              <ul className="space-y-3 ml-4">
                {[
                  "Find stronger matches faster",
                  "Explain why a candidate matched",
                  "Reduce manual screening time",
                  "Avoid sending every CV to the LLM",
                  "Control cost, latency, and privacy risk",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-purple-600 font-bold flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">System Architecture</h2>
            <p className="text-lg text-slate-600">
              Three-tier architecture: CV ingestion → persistent storage → semantic search with two-stage retrieval.
            </p>
          </div>

          {/* CV Ingestion Pipeline */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">1. CV Ingestion Pipeline</h3>
              <p className="text-slate-600">Parsing, OCR, chunking, and embedding are expensive one-time operations. Re-embed only when CVs change.</p>
            </div>
            <RagIngestionArchitecture />
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-sm text-purple-900">
                <strong>Why this design:</strong> Raw documents stay in S3, structured metadata stays in Aurora PostgreSQL, and semantic vectors are stored in pgvector or OpenSearch Serverless. Clean separation between original files, searchable metadata, and vector retrieval.
              </p>
            </div>
          </div>

          {/* JD Ingestion Pipeline */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">2. JD Ingestion Pipeline</h3>
              <p className="text-slate-600">Job descriptions go through the same embedding process as CVs so they live in the same vector space, making comparison symmetric.</p>
            </div>
            <RagStorageArchitecture />
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-sm text-purple-900">
                <strong>Why this matters:</strong> CV chunks and JD chunks both live in the same vector space. This keeps the comparison symmetric and makes cosine similarity meaningful.
              </p>
            </div>
          </div>

          {/* Candidate Search Pipeline */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">3. Candidate Search Pipeline</h3>
              <p className="text-slate-600">Two-stage retrieval: fast vector search for recall (thousands → 50 candidates), then Claude re-ranking for precision and explanations.</p>
            </div>
            <RagSearchArchitecture />
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <p className="text-sm text-purple-900">
                <strong>Why two-stage:</strong> Vector search quickly narrows thousands of CVs down to a smaller candidate set. Claude is invoked only on the short-listed candidates, which controls token cost and latency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Semantic Chunking & Scoring */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Semantic Chunking & Candidate Scoring</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-slate-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">CV Chunking Strategy</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "Candidate summary",
                  "Latest role experience",
                  "Previous roles",
                  "Technical skills (by category)",
                  "Cloud / DevOps skills",
                  "Education and certifications",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Scoring & Weighting</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "Must-have skills: high weight",
                  "Recent role experience: high weight",
                  "Nice-to-have skills: medium weight",
                  "Education/certifications: medium or low",
                  "Normalize scores across JD sections",
                  "Aggregate per candidate",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-sm text-purple-900">
              <strong>Why structure matters:</strong> Bad chunking creates bad retrieval. Structure-aware chunks preserve meaning and improve ranking quality.
            </p>
          </div>
        </div>
      </section>

      {/* Two-Stage Retrieval */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Two-Stage Retrieval</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <RetrievalStageCard
              stage={1}
              title="Vector Retrieval"
              description="Fast semantic search using embeddings and similarity scoring. Returns high-recall candidate set."
              benefits={[
                "Sub-second latency even on large corpora",
                "Permission-aware metadata filters",
                "Semantic matching (not keyword-based)",
                "Lower token/compute cost per query",
              ]}
              color="blue"
            />
            <RetrievalStageCard
              stage={2}
              title="Claude Re-ranking"
              description="Precision and explainability. Model re-ranks shortlist and produces evidence-backed explanations."
              benefits={[
                "Improves ranking accuracy on shortlist",
                "Generates recruiter-readable summaries",
                "Cites evidence from original chunks",
                "Flags risks and missing skills",
              ]}
              color="purple"
            />
          </div>

          <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-900 font-semibold">
              💡 Key insight: "The cheapest LLM call is the one we avoid through retrieval, caching, and deterministic scoring."
            </p>
            <p className="text-sm text-amber-800 mt-2">
              By narrowing the search space before LLM invocation, we reduce token spend, latency, and hallucination risk.
            </p>
          </div>
        </div>
      </section>

      {/* Validation & Caching */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Validation, Caching & Cost Control</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-slate-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Claude Output Validation</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "JSON schema validation",
                  "Candidate IDs verified",
                  "Ranks are unique",
                  "Scores in valid range",
                  "Explanations cite chunks",
                  "Pydantic validation",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-purple-600 font-bold flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Caching Strategy</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "CV embeddings: permanent",
                  "JD embeddings: until JD changes",
                  "Search results: by JD + filters",
                  "Claude rankings: by JD version",
                  "Dashboard results: Redis TTL",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Cost Controls</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "Don't send all CVs to Claude",
                  "Use vector search first",
                  "Limit top-N retrieval",
                  "Limit re-ranking input",
                  "Set token budgets",
                  "Track usage by tenant",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Security, Compliance & Bias Controls</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <GovernanceCard
              title="Data Protection"
              description="All data encrypted at rest and in transit."
              items={[
                "KMS encryption for S3, Aurora, vector DB",
                "HTTPS/TLS in transit",
                "No full CV text in logs",
                "PII redaction in audit logs",
              ]}
            />
            <GovernanceCard
              title="Access Control"
              description="RBAC and tenant isolation enforced at every layer."
              items={[
                "HR users see only assigned JDs",
                "Recruiters see only tenant candidates",
                "Every query filters by tenantId",
                "Permission scope enforced in vector search",
              ]}
            />
            <GovernanceCard
              title="Audit & Observability"
              description="Every action is tracked and auditable."
              items={[
                "Who searched, which JD, when",
                "Which candidates were viewed",
                "Recommendations generated",
                "Model version and evidence used",
              ]}
            />
            <GovernanceCard
              title="Bias & Fairness"
              description="AI supports decision-making; humans make final decisions."
              items={[
                "No protected attributes in ranking",
                "Mask name, photo, age, gender",
                "Monthly disparity audits",
                "Human decision-making required",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Failure Modes */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Reliability & Failure Modes</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <FailureModeCard
              failureMode="Embedding API Unavailable"
              description="Vector generation fails or times out during ingestion or query."
              fallback="Queue ingestion job for retry. At query time, fall back to BM25/keyword search."
            />
            <FailureModeCard
              failureMode="Malformed PDF"
              description="Document can't be parsed; OCR produces low-confidence output."
              fallback="Log extraction confidence. Show warning. Partially index available text."
            />
            <FailureModeCard
              failureMode="Vector DB Slow / Unavailable"
              description="pgvector or OpenSearch responds slowly or is offline."
              fallback="Serve cached results. Fall back to keyword search. Queue retrieval retry."
            />
            <FailureModeCard
              failureMode="Claude Timeout"
              description="LLM re-ranking times out or hits API rate limit."
              fallback="Return deterministic vector rankings. Queue Claude explanation for async generation."
            />
            <FailureModeCard
              failureMode="Malformed Claude JSON"
              description="LLM returns invalid JSON or missing evidence citations."
              fallback="Validation catches it. Retry with repair prompt. Fallback to deterministic ranking."
            />
            <FailureModeCard
              failureMode="Permission Filter Violation"
              description="User sees candidate they shouldn't access."
              fallback="Deny result rendering. Log security event. Alert administrators."
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Tech Stack</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <TechStackGroup
              category="Frontend"
              technologies={["React", "HR Dashboard", "TypeScript", "Tailwind"]}
            />
            <TechStackGroup
              category="API & Processing"
              technologies={["FastAPI", "Python", "pdfplumber / PyMuPDF", "Textract OCR"]}
            />
            <TechStackGroup
              category="Storage"
              technologies={["S3 (raw docs)", "Aurora PostgreSQL", "pgvector", "Redis Cache"]}
            />
            <TechStackGroup
              category="AI & Search"
              technologies={["Bedrock Embeddings", "Claude Bedrock", "HNSW Index", "Pydantic"]}
            />
            <TechStackGroup
              category="AWS Services"
              technologies={["API Gateway", "Lambda / ECS", "Cognito", "CloudWatch"]}
            />
            <TechStackGroup
              category="Infrastructure"
              technologies={["KMS Encryption", "Secrets Manager", "X-Ray Tracing", "EventBridge"]}
            />
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Staff-Level Lessons</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🎯",
                title: "Vector Search Finds Likely Matches Cheaply",
                description:
                  "Use vector retrieval for high-recall narrowing. Claude explains and ranks the short list, not the entire candidate database.",
              },
              {
                icon: "🔍",
                title: "Chunking & Weighting Drive Quality",
                description:
                  "Structure-aware chunks and semantic weighting matter far more than perfect prompt engineering. Good data beats fancy models.",
              },
              {
                icon: "🛡️",
                title: "Permission Filtering Happens First",
                description:
                  "Filter the search space by user access before vector queries. Never send unauthorized candidates to the LLM or UI.",
              },
              {
                icon: "✅",
                title: "Validation Is Not Optional",
                description:
                  "LLM output is not trusted until validated, cited, and safely rendered. Schema validation, evidence verification, and safe rendering are product features.",
              },
            ].map((lesson, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-200 rounded-lg">
                <div className="text-3xl mb-3">{lesson.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{lesson.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {lesson.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/case-studies/financial-risk-analyst-report-automation"
              className="p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all"
            >
              <p className="text-sm text-slate-500 mb-2">← Previous</p>
              <h3 className="font-bold text-slate-900">Financial Risk Automation</h3>
            </Link>
            <Link
              href="/#case-studies"
              className="p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all"
            >
              <p className="text-sm text-slate-500 mb-2">← Back</p>
              <h3 className="font-bold text-slate-900">All Case Studies</h3>
            </Link>
            <Link
              href="/case-studies/ai-sales-cockpit"
              className="p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all"
            >
              <p className="text-sm text-slate-500 mb-2">Next →</p>
              <h3 className="font-bold text-slate-900">AI Sales Cockpit</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection heading="Ready to discuss production AI workflows and full-stack engineering?" />
    </div>
  );
}
