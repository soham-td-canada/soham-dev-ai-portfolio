import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { CTASection } from "@/components/CTASection";
import { ExecutiveSummaryCard } from "@/components/case-study/ExecutiveSummaryCard";
import { FlowStepCard } from "@/components/case-study/FlowStepCard";
import { TechStackGroup } from "@/components/case-study/TechStackGroup";

export const metadata: Metadata = {
  title: "AI Sales Cockpit | Soham Chakraborty Case Study",
  description:
    "A production-grade B2B sales cockpit using hybrid rules + LLM architecture, React Server Components, streaming AI enrichment, and measured performance.",
  openGraph: {
    title: "AI Sales Cockpit — Business 360",
    description:
      "Building a fast, resilient, production-minded sales decision interface.",
    type: "article",
  },
};

export default function AISalesCockpitCaseStudy() {
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
                Business 360 — AI Sales Cockpit
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl">
                A fast, resilient B2B sales cockpit using React Server Components, hybrid rules + LLM architecture, and streaming AI enrichment. Measured performance: LCP 0.5s, CLS 0.001, Lighthouse 100.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["React Server Components", "Hybrid Rules + LLM", "Production Performance", "Streaming UI", "Resilience"].map(
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
                href="https://ai-sales-cockpit.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Live Demo →
              </a>
              <a
                href="#architecture"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-300 text-slate-900 font-medium rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors"
              >
                View Architecture
              </a>
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
              icon="⏱️"
              title="Core Constraint"
              description="Time-to-First-Insight under 500ms. Reps see useful data before they finish reading the account name."
            />
            <ExecutiveSummaryCard
              icon="🔀"
              title="Architecture"
              description="Hybrid: rules engine for fast, auditable recommendations + LLM for rich enrichment that streams asynchronously."
            />
            <ExecutiveSummaryCard
              icon="📊"
              title="Performance"
              description="Live, measured results: LCP 0.5s, FCP 0.3s, CLS 0.001, Lighthouse 100. Virtualized 10k account list, smooth scrolling."
            />
            <ExecutiveSummaryCard
              icon="✅"
              title="Outcome"
              description="Resilient, production-ready cockpit. Graceful degradation when dependencies fail. Persistent user feedback. Real Anthropic API integration."
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
                A sales rep manages 40+ accounts a day. Their core question is simple but urgent: <strong>does this account need my attention right now?</strong>
              </p>
              <p className="text-lg leading-relaxed">
                The challenge: answering that question requires stitching together data from six different systems — Salesforce, billing, tickets, marketing, analytics, and peer signals. Today, a rep might spend:
              </p>
              <ul className="space-y-3 ml-4">
                {[
                  "30 seconds waiting for Salesforce to load account vitals",
                  "Another 20 seconds fetching billing data and renewal dates",
                  "15 seconds reviewing support tickets and churn signals",
                  "Manual judgment to synthesize: is this account at risk?",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg leading-relaxed pt-4">
                <strong>Total time: 60+ seconds. Total decision signal: usually incomplete.</strong>
              </p>
              <p className="text-lg leading-relaxed pt-4">
                The opportunity: what if a rep could open an account and see a prioritized, AI-enriched summary in under 500 milliseconds? Not just raw data, but <strong>decision-ready insights</strong>: account health, risk signals, next-best actions, and evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Business Value: Per Rep, Per Year</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                metric: "50 mins/day saved",
                explanation: "If reps can triage accounts 5x faster, that's 50 minutes per day of recovered capacity.",
              },
              {
                metric: "250 more opportunity touches",
                explanation: "At 12 minutes per account (vs. current average), 250 additional accounts can be reviewed.",
              },
              {
                metric: "3–5% higher close rate",
                explanation: "Earlier risk detection + better NBA (Next-Best-Action) acceptance = more deals closed.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-200 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">{item.metric}</div>
                <p className="text-slate-600 text-sm">{item.explanation}</p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-900">
              <strong>Note:</strong> These numbers are directional, not guarantees. In production, I would validate them via cohort analysis: early adopters vs. control group, measuring time-to-decision, NBA acceptance rate, and win rate.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Zone Cockpit */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">UX: 3-Zone Cockpit</h2>
          <p className="text-lg text-slate-600 mb-8">
            The layout is intentionally split into three zones so a rep never loses context while making a decision.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Left Rail (Sticky)",
                icon: "📌",
                items: [
                  "Account name & ID",
                  "Health status (green/amber/red)",
                  "MRR and contract renewal",
                  "Services subscribed",
                  "Billing status",
                ],
              },
              {
                title: "Center (Action Zone)",
                icon: "🎯",
                items: [
                  "AI-powered summary",
                  "Next-best-action cards",
                  "Evidence & drill-ins",
                  "Recommended next steps",
                  "Interactive approvals",
                ],
              },
              {
                title: "Right Rail (Proof)",
                icon: "📋",
                items: [
                  "Recent interactions",
                  "Approvals & dismissals",
                  "Account timeline",
                  "Interaction history",
                  "Audit trail",
                ],
              },
            ].map((zone, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-200 rounded-lg">
                <div className="text-3xl mb-2">{zone.icon}</div>
                <h3 className="font-bold text-slate-900 mb-4">{zone.title}</h3>
                <ul className="space-y-2">
                  {zone.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-blue-600">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rendering Strategy */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Frontend: Facts First, AI Second</h2>
          <p className="text-lg text-slate-600 mb-8">
            React Server Components eliminate the JavaScript waterfall. The shell and account facts render on the server and ship to the browser as HTML, not JSON. That's fast. Then progressive enhancement layers in AI asynchronously.
          </p>

          <div className="space-y-4">
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Stage 1: Server-Rendered Shell (50ms)</h3>
              <p className="text-slate-600">
                React Server Component fetches account vitals on the server and sends rendered UI. No JavaScript waterfall. Left rail is immediately interactive.
              </p>
            </div>

            <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Stage 2: Skeleton Loaders (100ms)</h3>
              <p className="text-slate-600">
                Center and right zones show animated skeletons with zero layout shift. The eye knows something is coming, no jank.
              </p>
            </div>

            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Stage 3: Rules-Based NBA Cards (300ms)</h3>
              <p className="text-slate-600">
                The deterministic path completes. Rules engine returns structured next-best-action recommendations. Center zone populates with actionable cards. Rep can now decide.
              </p>
            </div>

            <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Stage 4: AI Enrichment (streaming, 500ms+)</h3>
              <p className="text-slate-600">
                Claude generates a rich, contextual summary. Text streams in token-by-token. Rep can already act while the system continues enriching the page. No blocking.
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg mt-8">
            <p className="text-sm text-slate-700">
              <strong>Key principle:</strong> The rep is always reading something useful. Facts first, then decisions, then richness. This inverts the typical LLM-first approach where you wait for a chat response before deciding anything.
            </p>
          </div>
        </div>
      </section>

      {/* Hybrid Architecture */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Hybrid: Rules for Speed, LLM for Richness</h2>
          <p className="text-lg text-slate-600 mb-8">
            This is the most important architectural decision. I deliberately avoided an LLM-only approach because it violates the 500ms constraint and creates unnecessary cost and latency.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Fast Path: Rules Engine</h3>
              <ul className="space-y-3">
                {[
                  "Deterministic, auditable, low-cost",
                  "Completes in < 300ms",
                  "Returns structured NBA cards",
                  "No hallucination risk",
                  "Can run offline or cached",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-green-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Async Path: LLM Enrichment</h3>
              <ul className="space-y-3">
                {[
                  "Rich, contextual narrative",
                  "Talking points for the rep",
                  "Account-specific insights",
                  "Streams non-blocking",
                  "Grounds all claims in provided data",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-purple-600">✨</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-lg mt-8">
            <h3 className="font-bold text-slate-900 mb-3">Decision Flow Example</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div>
                <span className="font-bold text-slate-900">Rules engine sees:</span> MRR down 15% month-over-month, health status degraded, last support ticket 45 days old.
              </div>
              <div>
                <span className="font-bold text-slate-900">Rules engine recommends:</span> "At-Risk Account" NBA card with confidence 0.92.
              </div>
              <div>
                <span className="font-bold text-slate-900">Meanwhile, Claude enriches:</span> "This account's MRR decline aligns with their peak season ending. However, the support ticket gap suggests disengagement. Recommend outreach to re-establish cadence."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hallucination & Safety */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">AI Safety: Hallucination & Guardrails</h2>
          <p className="text-lg text-slate-600 mb-8">
            A sales rep trusting bad AI advice can damage customer relationships. I use defense-in-depth to prevent hallucination.
          </p>

          <div className="space-y-4">
            <div className="p-4 border-l-4 border-blue-600 bg-blue-50 rounded-r">
              <h3 className="font-bold text-blue-900 mb-2">1. Ground in Data</h3>
              <p className="text-blue-800 text-sm">
                Provide Claude only with facts: current MRR, health status, renewal date, support ticket count. No speculation, no parametric memory.
              </p>
            </div>

            <div className="p-4 border-l-4 border-green-600 bg-green-50 rounded-r">
              <h3 className="font-bold text-green-900 mb-2">2. Constrain Generation</h3>
              <p className="text-green-800 text-sm">
                System prompt explicitly says: "If you don't have enough information, say so. Don't invent metrics. Ground all claims in provided data."
              </p>
            </div>

            <div className="p-4 border-l-4 border-purple-600 bg-purple-50 rounded-r">
              <h3 className="font-bold text-purple-900 mb-2">3. Validate Output</h3>
              <p className="text-purple-800 text-sm">
                Schema validation, numeric reconciliation (don't accept $100M MRR for a company that only did $5M), citation verification (claim must reference provided data).
              </p>
            </div>

            <div className="p-4 border-l-4 border-amber-600 bg-amber-50 rounded-r">
              <h3 className="font-bold text-amber-900 mb-2">4. Fallback Gracefully</h3>
              <p className="text-amber-800 text-sm">
                If Claude times out or validation fails, show the rules-based NBA cards. Don't show a hallucinated summary instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Core Web Vitals: Live & Measured</h2>
          <p className="text-lg text-slate-600 mb-8">
            This is measured proof, not marketing. The app is deployed live on Vercel.
          </p>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { label: "LCP", value: "0.5s", color: "bg-green-100" },
              { label: "FCP", value: "0.3s", color: "bg-green-100" },
              { label: "CLS", value: "0.001", color: "bg-green-100" },
              { label: "TBT", value: "0ms", color: "bg-green-100" },
              { label: "Lighthouse", value: "100", color: "bg-green-100" },
            ].map((metric) => (
              <div key={metric.label} className={`p-4 rounded-lg text-center ${metric.color}`}>
                <div className="text-xs text-slate-600 font-semibold mb-1">{metric.label}</div>
                <div className="text-2xl font-bold text-green-700">{metric.value}</div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-lg mt-8">
            <h3 className="font-bold text-slate-900 mb-4">How We Achieved This</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              {[
                "RSC for small initial shell (no JavaScript bloat)",
                "Virtualized 10k account list (only DOM nodes for visible rows)",
                "Skeleton loaders instead of spinners (perceived performance)",
                "CSS-only animations (GPU accelerated, no JavaScript)",
                "Streaming AI content (non-blocking enrichment)",
                "Strategic code-splitting (imports only when needed)",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Backend Architecture */}
      <section id="architecture" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Backend Architecture (Production)</h2>
          <p className="text-lg text-slate-600 mb-8">
            The frontend can only be fast if the backend is shaped for the screen. Here's the production architecture:
          </p>

          <div className="space-y-4">
            <FlowStepCard
              number={1}
              title="Rep Opens Account"
              description="Requests /api/account/:id/cockpit"
            />
            <FlowStepCard
              number={2}
              title="BFF / API Gateway"
              description="Single endpoint that orchestrates multiple upstream systems. No browser waterfalls."
            />
            <FlowStepCard
              number={3}
              title="Redis Cache Check"
              description="Account summary, risk score, NBA list, and timeline usually hit cache. Sub-100ms response."
            />
            <FlowStepCard
              number={4}
              title="Cache Miss → Aggregation Service"
              description="Backend stitches Salesforce, billing, tickets, marketing, and analytics. Done server-side, not in browser."
            />
            <FlowStepCard
              number={5}
              title="Precomputation Workers"
              description="Background jobs compute risk scores, churn signals, NBA candidates before rep opens account."
            />
            <FlowStepCard
              number={6}
              title="Store & Update Cache"
              description="Results go to Redis (fast reads) and Postgres (durable history). Event queue keeps data fresh."
            />
            <FlowStepCard
              number={7}
              title="Shape for UI Zones"
              description="BFF response is already structured: left rail vitals, center NBAs, right timeline. FE renders immediately."
              isLast
            />
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg mt-6">
            <p className="text-sm text-slate-700">
              <strong>Key principle:</strong> Do expensive joins, scoring, and enrichment before the rep waits for them. The frontend is a fast view layer, not a compute engine.
            </p>
          </div>
        </div>
      </section>

      {/* Resilience */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Resilience: Graceful Degradation</h2>
          <p className="text-lg text-slate-600 mb-8">
            Dependencies fail. Salesforce can be down. Claude can timeout. The rules engine might fail. The point is: one failure should not cascade into a white screen.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                failure: "Salesforce Down",
                behavior: "Show cached vitals + stale-data warning. Rules-based NBAs still work.",
              },
              {
                failure: "Claude Timeout",
                behavior: "Don't show a hallucinated summary. Show rules-based cards + 'AI enrichment unavailable' message.",
              },
              {
                failure: "Rules Engine Fails",
                behavior: "Show account vitals + cached prior recommendations. Right-rail timeline still renders.",
              },
              {
                failure: "All Services Down",
                behavior: "Show error boundary with retry option. Link to help desk. Don't leave rep hanging.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 border border-amber-300 bg-amber-50 rounded-lg">
                <div className="font-bold text-amber-900 mb-2">{item.failure}</div>
                <p className="text-sm text-amber-800">{item.behavior}</p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-lg mt-8">
            <h3 className="font-bold text-slate-900 mb-3">Demo Accounts 9001–9005</h3>
            <p className="text-slate-600 text-sm mb-4">
              I built controlled failure scenarios into the demo to show resilience:
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "9001 → Salesforce fails gracefully",
                "9002 → Claude times out, rules cards still render",
                "9003 → Interaction service down, timeline shows cached data",
                "9004 → All services degraded, error boundary shown with clear next steps",
                "9005 → Successful path showing all three zones fully populated",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-slate-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Engagement: Feedback & Interactions</h2>
          <p className="text-lg text-slate-600 mb-8">
            The cockpit is not read-only. Reps can approve, dismiss, undo, and interact with recommendations. All actions are timestamped and persisted.
          </p>

          <div className="space-y-4">
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-bold text-green-900 mb-3">Approve a Recommendation</h3>
              <p className="text-green-800 text-sm">
                Rep clicks "Approve" on an NBA card. Card collapses into a clean summary badge showing "Approved at [timestamp]". Right-rail timeline updates in real-time.
              </p>
            </div>

            <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg">
              <h3 className="font-bold text-amber-900 mb-3">Dismiss a Recommendation</h3>
              <p className="text-amber-800 text-sm">
                Rep clicks "Dismiss". Card fades out. Toast shows "Recommendation dismissed — undo?" for 5 seconds. If dismissed, timeline records the action.
              </p>
            </div>

            <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-3">Persistent State</h3>
              <p className="text-blue-800 text-sm">
                State is saved to localStorage (in demo) and would move to a backend API in production. Page reload? Your approvals and dismissals persist.
              </p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg mt-8">
            <p className="text-sm text-slate-700">
              <strong>Production note:</strong> The state shape is deterministic and serializable. Migrating from localStorage to Postgres doesn't require changing the interaction model.
            </p>
          </div>
        </div>
      </section>

      {/* Scale */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Scale: 10k Accounts, Cost Optimization</h2>
          <p className="text-lg text-slate-600 mb-8">
            The account list view supports 10,000 accounts using virtualization. Only visible rows are in the DOM. Scrolling is smooth at 60fps.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-slate-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-4">Virtualization</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "10,000 account rows loaded lazily",
                  "Only ~30 rows rendered at a time",
                  "60fps scrolling (GPU accelerated)",
                  "Instant search (debounced filter in JS memory)",
                  "Sorting without re-fetching data",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-4">Cost Economics</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "Hybrid architecture reduces LLM calls",
                  "Rules engine: low-cost, reusable",
                  "LLM only for enrichment (optional)",
                  "Prompt caching saves tokens",
                  "Batch API for offline summaries",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-green-600">💰</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-lg mt-8">
            <h3 className="font-bold text-slate-900 mb-3">Projected Cost at 10k Accounts (Quarterly)</h3>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-2 text-slate-600">Rules-based NBAs</td>
                  <td className="py-2 text-right text-slate-900 font-bold">~$50/month</td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-600">AI enrichment (50% opt-in)</td>
                  <td className="py-2 text-right text-slate-900 font-bold">~$300/month</td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-600">Infrastructure & cache</td>
                  <td className="py-2 text-right text-slate-900 font-bold">~$150/month</td>
                </tr>
                <tr className="bg-blue-100">
                  <td className="py-2 font-bold text-slate-900">Total</td>
                  <td className="py-2 text-right text-blue-700 font-bold">~$500/month</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-slate-600 mt-4">At ~$100 cost per rep annually, ROI is positive at first account opened.</p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Metrics: How I'd Measure Success</h2>
          <p className="text-lg text-slate-600 mb-8">
            The important distinction is measured vs. targeted. I'm not claiming user adoption before launch; I'm showing how I would instrument and prove it.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                category: "Performance (Technical)",
                metrics: [
                  "Time-to-First-Insight (target: <500ms)",
                  "Lighthouse score (target: >95)",
                  "Cache hit rate (target: >80%)",
                  "API latency p95 (target: <200ms)",
                ],
              },
              {
                category: "Engagement (User Behavior)",
                metrics: [
                  "NBA approval rate (% reps who approve)",
                  "Enrichment read rate (% who scroll to AI section)",
                  "Evidence drill-in rate (% who click 'show sources')",
                  "Time spent per account (vs. baseline)",
                ],
              },
              {
                category: "Business (Revenue)",
                metrics: [
                  "Win rate (deals closed / opportunities touched)",
                  "Churn rate (customers lost due to risk not detected)",
                  "NBA acceptance → deal closure correlation",
                  "Rep productivity (accounts reviewed per day)",
                ],
              },
              {
                category: "Reliability (Ops)",
                metrics: [
                  "Uptime (target: >99.5%)",
                  "Error rate (target: <0.1%)",
                  "Mean time to recovery (MTTR)",
                  "False positive rate (irrelevant NBAs)",
                ],
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-4">{item.category}</h3>
                <ul className="space-y-2">
                  {item.metrics.map((metric) => (
                    <li key={metric} className="text-sm text-slate-600 flex gap-2">
                      <span className="text-blue-600">→</span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built Today vs Production */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Built Today vs. Production Next</h2>
          <p className="text-lg text-slate-600 mb-8">
            This is honest scope. I deliberately did not bolt every production pattern onto a mock system.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-bold text-green-900 mb-4">✓ Built in Demo</h3>
              <ul className="space-y-2 text-sm text-green-800">
                {[
                  "Graceful degradation by dependency",
                  "Persistent feedback (localStorage)",
                  "Virtualized 10k account list",
                  "Hybrid rules + LLM flow",
                  "Top-level error boundary",
                  "Measured Lighthouse performance",
                  "Real Anthropic API streaming",
                  "Responsive 3-zone layout",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg">
              <h3 className="font-bold text-amber-900 mb-4">→ Production Next</h3>
              <ul className="space-y-2 text-sm text-amber-800">
                {[
                  "Retry + exponential backoff",
                  "Circuit breaker pattern",
                  "Postgres-backed feedback store",
                  "Observability (Sentry, Datadog)",
                  "Real rate limiting",
                  "Feature flags & gradual rollout",
                  "Sfdc integration tests",
                  "Multi-region deployment",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-amber-600">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 bg-slate-100 border border-slate-300 rounded-lg mt-8">
            <p className="text-sm text-slate-700">
              <strong>Production principle:</strong> Build patterns that earn their place. Retry logic and circuit breakers matter when wired into real Salesforce. These patterns don't add value to a demo with mocked data.
            </p>
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
              technologies={["React 19", "Next.js 14+", "React Server Components", "TypeScript", "Tailwind CSS", "Shadcn UI"]}
            />
            <TechStackGroup
              category="Backend (Demo)"
              technologies={["Next.js API Routes", "Node.js", "TypeScript"]}
            />
            <TechStackGroup
              category="AI & Inference"
              technologies={["Anthropic API", "Claude 3.5 Sonnet", "Streaming", "Prompt Engineering"]}
            />
            <TechStackGroup
              category="Performance & Delivery"
              technologies={["Vercel", "React Query", "Virtualization", "HTTP Caching"]}
            />
            <TechStackGroup
              category="Observability"
              technologies={["Lighthouse", "Core Web Vitals", "Console Profiling"]}
            />
            <TechStackGroup
              category="Storage (Production)"
              technologies={["PostgreSQL", "Redis", "S3", "Encryption"]}
            />
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Staff-Level Lessons</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "⏱️",
                title: "Performance is a Product Constraint, Not a Nice-to-Have",
                description:
                  "The 500ms constraint shaped everything: rendering strategy, architecture, caching, and what we precompute. Good constraints drive good design.",
              },
              {
                icon: "🔀",
                title: "Hybrid > LLM-Only for High-Velocity Decisions",
                description:
                  "Rules for speed and auditability, LLM for richness and context. Best of both worlds. Pure LLM-first architectures don't scale to sub-second latencies.",
              },
              {
                icon: "🏗️",
                title: "Render Critical Content First",
                description:
                  "RSC + progressive enhancement. Ship the HTML shell, not JavaScript. Make JavaScript optional for interactivity. That's the future of web performance.",
              },
              {
                icon: "🛡️",
                title: "Resilience by Dependency Boundary",
                description:
                  "Each external service can fail independently. One failure doesn't cascade. Graceful degradation is cheaper than high availability.",
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

      {/* Demo CTA */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to See It In Action?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            The demo is live on Vercel. Try searching for accounts, opening the cockpit, and watching the three-stage loading pattern unfold. Click on accounts 9001–9005 to see graceful failure handling.
          </p>
          <a
            href="https://ai-sales-cockpit.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Live Demo →
          </a>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/#case-studies"
              className="p-6 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
            >
              <p className="text-sm text-slate-500 mb-2">← Back</p>
              <h3 className="font-bold text-slate-900">All Case Studies</h3>
            </Link>
            <Link
              href="/case-studies/financial-risk-analyst-report-automation"
              className="p-6 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
            >
              <p className="text-sm text-slate-500 mb-2">← Previous</p>
              <h3 className="font-bold text-slate-900">Financial Risk Automation</h3>
            </Link>
            <Link
              href="/case-studies/internal-rag-knowledge-assistant"
              className="p-6 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all"
            >
              <p className="text-sm text-slate-500 mb-2">Next →</p>
              <h3 className="font-bold text-slate-900">RAG Knowledge Assistant</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection heading="Questions about the architecture, performance strategy, or production patterns? Let's talk." />
    </div>
  );
}
