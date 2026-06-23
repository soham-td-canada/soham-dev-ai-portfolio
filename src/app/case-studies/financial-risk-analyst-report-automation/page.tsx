import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { CTASection } from "@/components/CTASection";
import { ExecutiveSummaryCard } from "@/components/case-study/ExecutiveSummaryCard";
import { FlowStepCard } from "@/components/case-study/FlowStepCard";
import { ToolCallingCard } from "@/components/case-study/ToolCallingCard";
import { GuardrailCard } from "@/components/case-study/GuardrailCard";
import { TechStackGroup } from "@/components/case-study/TechStackGroup";
import { ArchitectureDiagram } from "@/components/case-study/ArchitectureDiagram";

export const metadata: Metadata = {
  title:
    "Financial Risk Analyst Report Automation | Soham Chakraborty Case Study",
  description:
    "An anonymized case study on AI-assisted financial risk report automation using deterministic calculations, GPT-4o tool-calling, validation guardrails, and secure delivery.",
  openGraph: {
    title: "Financial Risk Analyst Report Automation",
    description:
      "Building safe, auditable AI workflows for financial risk reporting.",
    type: "article",
  },
};

export default function FinancialRiskCaseStudy() {
  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Case Study
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
                Financial Risk Analyst Report Automation
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl">
                AI-assisted reporting workflow for market-close risk summaries, using deterministic calculations, GPT-4o tool-calling, validation guardrails, and secure report delivery.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["AI/LLM", "Financial Risk", "Tool Calling", "Serverless", "Human Review"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="inline-block px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-full"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#architecture"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
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
              icon="📊"
              title="The Problem"
              description="Analysts manually compiled end-of-day portfolio risk summaries under time pressure. Process was repetitive, error-prone, and couldn't scale with deal velocity."
            />
            <ExecutiveSummaryCard
              icon="⚙️"
              title="The Solution"
              description="A serverless workflow computed deltas in code, invoked constrained GPT-4o tool-calling, validated structured output, and delivered report-ready summaries."
            />
            <ExecutiveSummaryCard
              icon="👤"
              title="My Role"
              description="Full-stack / AI workflow engineering: orchestration, API design, frontend UX, validation guardrails, secure delivery, and human review integration."
            />
            <ExecutiveSummaryCard
              icon="✅"
              title="Outcome"
              description="Faster report preparation, more consistent analyst-ready summaries, and safer AI-assisted reporting through guardrails and mandatory review."
            />
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Problem</h2>
            <div className="space-y-4 text-slate-600">
              <p className="text-lg leading-relaxed">
                End-of-day portfolio reporting was a bottleneck. Every day at market close, financial risk analysts had to manually compile:
              </p>
              <ul className="space-y-3 ml-4">
                {[
                  "Exposure changes from prior snapshot",
                  "Value-at-Risk (VaR) movement and attributed drivers",
                  "Profit & loss attribution across positions",
                  "Threshold breaches (concentration, sector, counterparty)",
                  "Risk narrative and summary for leadership review",
                  "Recommendations for position adjustments or hedges",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed pt-4">
                The risk was not just speed—it was <strong>trust</strong>. Hallucinated figures or unconstrained narrative summaries would be unacceptable in a financial risk context. The system needed:
              </p>
              <ul className="space-y-3 ml-4">
                {[
                  "Deterministic calculations that could be audited",
                  "Auditability and traceability for compliance",
                  "RBAC to ensure analysts only saw authorized portfolios",
                  "Human-in-the-loop review before anything reached leadership",
                  "No invented numbers or unsupported claims",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">System Architecture</h2>
            <p className="text-lg text-slate-600">
              A modular, safety-first architecture separating deterministic calculation, AI reasoning, validation, and secure delivery.
            </p>
          </div>

          <ArchitectureDiagram />

          <div className="space-y-4 text-slate-600">
            <h3 className="text-xl font-bold text-slate-900">Architecture Principles</h3>
            <ul className="space-y-3">
              {[
                "<strong>Deterministic first:</strong> All financial calculations (deltas, VaR, P&L attribution, threshold breaches) are computed in code, never invented by the LLM.",
                "<strong>Sanitized inputs:</strong> Only structured, validated deltas are sent to the AI layer. No raw data, no secrets, no leakage.",
                "<strong>Constrained AI:</strong> GPT-4o uses tool-calling to invoke specific, narrow-responsibility tools. Output is always structured JSON.",
                "<strong>Validation gates:</strong> Schema validation, number-range checks, and evidence verification before storage.",
                "<strong>Secure delivery:</strong> Encrypted storage, JWT-based retrieval, RBAC, and audit logging at every step.",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                  <span
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Generation Flow */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Generation Flow</h2>
            <p className="text-lg text-slate-600 mb-8">
              Each step ensures deterministic computation happens before AI reasoning, and validation gates the output.
            </p>
          </div>

          <div className="space-y-4">
            <FlowStepCard
              number={1}
              title="Market Close Trigger"
              description="EventBridge cron fires post-market-close. Orchestrator verifies market window is open and trading has settled."
            />
            <FlowStepCard
              number={2}
              title="Data Retrieval"
              description="Query RDS for active portfolios, current positions, prior snapshot, and thresholds for the authorized user."
            />
            <FlowStepCard
              number={3}
              title="Deterministic Delta Computation"
              description="Compute exposure changes, VaR movement, P&L attribution, and threshold breaches in code. All calculations auditable."
            />
            <FlowStepCard
              number={4}
              title="Sanitize Context for LLM"
              description="Build a clean JSON payload with only deltas, no raw data. Encrypt sensitive context. Remove any secrets or PII."
            />
            <FlowStepCard
              number={5}
              title="Tool-Calling Loop"
              description="Invoke GPT-4o with constrained tools. Model calls tools to summarize exposures, flag breaches, and generate narrative."
            />
            <FlowStepCard
              number={6}
              title="Validate Structured Output"
              description="Schema validation, number-range checks, missing-field detection. Reject or retry if malformed."
            />
            <FlowStepCard
              number={7}
              title="Store Encrypted Report"
              description="Save validated report JSON and HTML rendition to S3 with encryption at rest. Log metadata to audit trail."
            />
            <FlowStepCard
              number={8}
              title="Notify Analyst"
              description="Fanout event via SNS to WebSocket, email, and Slack. Analyst receives report-ready notification."
              isLast
            />
          </div>

          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Key insight:</strong> Calculations happen before the LLM. The LLM does not invent financial numbers; it converts validated deltas into analyst-readable narrative sections.
            </p>
          </div>
        </div>
      </section>

      {/* Tool-Calling Design */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Tool Calling?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Instead of one giant prompt asking the model to write a report, we constrain the workflow with narrow, testable tools. This gives:
            </p>
            <ul className="space-y-3 text-slate-600 mb-12">
              {[
                "<strong>Testability:</strong> Each tool has clear inputs and outputs. Easy to unit-test tool responses.",
                "<strong>Observability:</strong> We see exactly which tools were called, in what order, and what the model returned.",
                "<strong>Safety:</strong> Narrow tool responsibilities = lower risk of unconstrained output.",
                "<strong>Retry logic:</strong> If a tool call fails, we can retry or fall back cleanly.",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                  <span
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ToolCallingCard
              toolName="get_exposure_summary"
              description="Summarize net exposure by asset class, sector, and counterparty. Model aggregates position-level deltas into analyst-friendly summaries."
              purpose="Convert position-level data into executive-level exposure view"
            />
            <ToolCallingCard
              toolName="flag_threshold_breaches"
              description="For each breach (concentration, sector VaR, counterparty), output breach name, threshold value, current value, and recommended action."
              purpose="Surface high-priority risk events in structured format"
            />
            <ToolCallingCard
              toolName="generate_narrative_section"
              description="Given a topic (e.g., 'sector concentration', 'counterparty risk'), generate 2–3 sentences of narrative summary grounded in the deltas."
              purpose="Convert numbers into human-readable narrative"
            />
          </div>

          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-sm text-purple-900">
              <strong>How it works:</strong> Model receives deltas → calls tools in sequence → appends tool results to conversation → generates final structured JSON output → output is validated → stored and retrieved.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">Trust, Safety, and Guardrails</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <GuardrailCard
              title="Deterministic Layer"
              description="Financial calculations are never left to the LLM."
              items={[
                "Exposure changes computed in code",
                "VaR deltas from risk engine",
                "P&L attribution via internal algorithms",
                "Threshold breach detection in database",
              ]}
            />
            <GuardrailCard
              title="Input Sanitization"
              description="Only safe, structured data reaches the LLM."
              items={[
                "Sanitized delta JSON, no raw positions",
                "Encrypted sensitive context",
                "No secrets or credentials in prompts",
                "No internal system details exposed",
              ]}
            />
            <GuardrailCard
              title="Output Validation"
              description="Structured output is validated before storage."
              items={[
                "JSON schema validation",
                "Number-range checks (no $1T deltas)",
                "Missing-field detection",
                "Evidence requirement: narrative tied to data",
              ]}
            />
            <GuardrailCard
              title="Secure Delivery"
              description="Reports are stored and retrieved safely."
              items={[
                "S3 encryption at rest",
                "JWT-based API authentication",
                "RBAC: analysts see only authorized portfolios",
                "Audit logging of all access",
              ]}
            />
            <GuardrailCard
              title="Human Review"
              description="Mandatory approval before report reaches leadership."
              items={[
                "Report-ready state requires analyst sign-off",
                "Edit capability for corrections",
                "Review history and audit trail",
                "Escalation path for anomalies",
              ]}
            />
            <GuardrailCard
              title="Operational Safety"
              description="Hardening against common AI risks."
              items={[
                "Prompt-injection hardening (parameterized tools)",
                "Token budget limits per report",
                "Cost tracking and anomaly alerts",
                "Fallback: cached prior report if AI unavailable",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Frontend UX */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Analyst-Facing UI</h2>

          <div className="space-y-6">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Report-Ready Notification</h3>
              <p className="text-slate-600 text-sm mb-4">
                Analyst receives toast/notification that a report is ready. Links to viewer.
              </p>
              <div className="p-4 bg-white border border-slate-200 rounded font-mono text-xs text-slate-600">
                <div className="flex gap-2 items-center">
                  <span className="text-green-600">✓</span>
                  <div>
                    <div className="font-bold text-slate-900">Report Ready</div>
                    <div>Your Tech Portfolio end-of-day summary is ready for review.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Report Viewer</h3>
              <p className="text-slate-600 text-sm mb-4">
                Clean, premium UI showing risk summary, exposure changes, breaches, narrative, and review controls.
              </p>
              <div className="space-y-4 p-4 bg-white border border-slate-200 rounded">
                <div>
                  <div className="text-sm font-bold text-slate-600 mb-2">Exposure Summary</div>
                  <div className="h-24 bg-gradient-to-r from-blue-50 to-slate-50 rounded flex items-center justify-center text-sm text-slate-500">
                    [Chart placeholder: Exposure by asset class]
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="text-sm font-bold text-slate-600 mb-2">Threshold Breaches</div>
                  <table className="w-full text-xs">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="text-left px-2 py-2 text-slate-600">Threshold</th>
                        <th className="text-left px-2 py-2 text-slate-600">Limit</th>
                        <th className="text-left px-2 py-2 text-slate-600">Current</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-slate-200">
                        <td className="px-2 py-2 text-slate-900">Tech Sector</td>
                        <td className="px-2 py-2 text-slate-600">25%</td>
                        <td className="px-2 py-2 font-bold text-red-600">28%</td>
                      </tr>
                      <tr className="border-t border-slate-200">
                        <td className="px-2 py-2 text-slate-900">Single Counterparty</td>
                        <td className="px-2 py-2 text-slate-600">$50M</td>
                        <td className="px-2 py-2 font-bold text-red-600">$52M</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="text-sm font-bold text-slate-600 mb-2">Risk Narrative</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Portfolio tech exposure increased 2.3% due to position additions in cloud infrastructure. Sector concentration now at 28%, above 25% threshold. Recommend reducing overweight or hedging via sector puts.
                  </p>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="text-sm font-bold text-slate-600 mb-2">Review State</div>
                  <div className="flex gap-2">
                    <button className="text-xs px-3 py-1.5 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                      Edit
                    </button>
                    <button className="text-xs px-3 py-1.5 bg-green-100 text-green-700 rounded hover:bg-green-200">
                      Approve
                    </button>
                    <button className="text-xs px-3 py-1.5 bg-slate-100 text-slate-700 rounded hover:bg-slate-200">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* V2 Improvements */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What I Would Improve in V2</h2>
          <p className="text-lg text-slate-600 mb-8">
            Staff-level case studies show trade-off thinking. Here's what I'd refactor:
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Replace Lambda Orchestration with Step Functions",
                description: "Long-running orchestration is better managed by Step Functions. Better retry logic, timeout control, and execution history.",
              },
              {
                title: "Parallelize Independent Calculations",
                description: "Exposure summary, breach detection, and P&L attribution can run in parallel, not sequentially. Reduces latency.",
              },
              {
                title: "Add Retry Budget and DLQ",
                description: "Failed report jobs should go to a dead-letter queue for manual review. Retry budget prevents infinite loops.",
              },
              {
                title: "Token Budget Guardrails",
                description: "Add hard limits on token consumption per report. Prevents runaway costs if model generates verbose output.",
              },
              {
                title: "Cached Prior Report Fallback",
                description: "If OpenAI is unavailable, fall back to prior report plus a 'updated with today's deltas' note. Better UX than total failure.",
              },
              {
                title: "Evaluation Harness for Narratives",
                description: "Build a scoring system to evaluate narrative quality: accuracy, clarity, relevance. Feed scores back to prompt tuning.",
              },
              {
                title: "Cost Dashboards and Quality Telemetry",
                description: "Track cost per report, narrative quality, validation failure rates, and analyst edits. Data-driven improvements.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-white border border-slate-200 rounded-lg">
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="text-slate-600 text-sm mt-2">{item.description}</p>
              </div>
            ))}
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
              technologies={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
            />
            <TechStackGroup
              category="Backend"
              technologies={["Node.js", "Express", "API Gateway", "Lambda"]}
            />
            <TechStackGroup
              category="Data & Storage"
              technologies={["RDS / PostgreSQL", "S3", "Encryption at rest"]}
            />
            <TechStackGroup
              category="AI"
              technologies={["OpenAI GPT-4o", "Tool Calling API", "Prompt Engineering"]}
            />
            <TechStackGroup
              category="Delivery & Events"
              technologies={["SNS", "WebSocket", "Email", "Slack Integration"]}
            />
            <TechStackGroup
              category="Security & Observability"
              technologies={["JWT", "RBAC", "CloudWatch", "Audit Logs"]}
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
                icon: "💡",
                title: "AI Should Not Own Deterministic Calculations",
                description:
                  "Financial numbers must come from auditable code. LLMs are great at narrative and reasoning, not numerical precision. Separate your computation layers.",
              },
              {
                icon: "🔧",
                title: "Tool Calling Gives Safer Boundaries Than One Giant Prompt",
                description:
                  "Narrow tools = testable, observable, safe. You see exactly what the model called, in what order. Easier to retry, validate, and debug.",
              },
              {
                icon: "✅",
                title: "Validation Is a Product Feature, Not Just Engineering",
                description:
                  "Output validation isn't a chore; it's how you build trust. Schema checks, number-range constraints, and evidence requirements are part of the product promise.",
              },
              {
                icon: "🏗️",
                title: "Separate Code Execution, AI Reasoning, Storage, Delivery, and Review",
                description:
                  "Monolithic pipelines are hard to test and hard to improve. Modular architecture lets you upgrade each layer independently and add observability.",
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
              href="/#case-studies"
              className="p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
            >
              <p className="text-sm text-slate-500 mb-2">← Back</p>
              <h3 className="font-bold text-slate-900">All Case Studies</h3>
            </Link>
            <Link
              href="/case-studies/internal-rag-knowledge-assistant"
              className="p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
            >
              <p className="text-sm text-slate-500 mb-2">Next →</p>
              <h3 className="font-bold text-slate-900">RAG Knowledge Assistant</h3>
            </Link>
            <Link
              href="/case-studies/ai-sales-cockpit"
              className="p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
            >
              <p className="text-sm text-slate-500 mb-2">Also →</p>
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
