export function MockSearchResult() {
  return (
    <div className="space-y-6 p-6 bg-white border border-slate-200 rounded-lg">
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-slate-600 uppercase tracking-widest">
          Illustrative JSON Schema
        </h4>
        <div className="p-4 bg-slate-900 rounded font-mono text-xs text-slate-100 overflow-x-auto">
          <pre>{`{
  "rank": 1,
  "matchScore": 0.91,
  "summary": "Strong match based on React, Node.js, AWS,
    and workflow automation experience.",
  "evidence": [
    {
      "chunkId": "chunk_456",
      "documentId": "doc_cv_alice_2024",
      "reason": "Recent project includes React and Node.js
        architecture for workflow automation.",
      "snippet": "Built enterprise workflow platform using
        React frontend and Node.js microservices..."
    }
  ],
  "risks": [
    "Limited explicit Kubernetes evidence
      in retrieved chunks."
  ]
}`}</pre>
        </div>
      </div>
      <p className="text-xs text-slate-500 italic">
        Note: This is a schema example, not real data. The LLM returns structured output with rank, score, summary, evidence citations, and risk flags.
      </p>
    </div>
  );
}
