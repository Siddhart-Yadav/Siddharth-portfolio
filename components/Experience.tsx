const experiences = [
  {
    company: "Commonwealth Cyber Initiative",
    role: "Researcher",
    period: "Jan 2025 - Present",
    location: "Arlington, VA",
    current: true,
    description:
      "Implemented an LLM agent system on LangGraph to triage security alerts and auto-generate detection rules, reducing mean time to detect by 50%. Built reusable RAG ingestion and retrieval pipelines on LlamaIndex and ChromaDB supporting vector and knowledge-graph modes, citation-aware querying, and incremental hash-based re-indexing. Designed a tool-first agent platform enabling composition of specialist AI assistants from a shared tool registry (RAG, SIEM, formal verification, web search, fine-tuning), with a provider-abstracted LLM layer and MCP server exposure for AI-IDE integration.",
    tags: ["LangGraph", "LlamaIndex", "ChromaDB", "RAG", "MCP", "SIEM"],
  },
  {
    company: "American Chemical Society",
    role: "Software Engineering Intern",
    period: "May 2025 - Aug 2025",
    location: "Washington, DC",
    current: false,
    description:
      "Architected an agentic workflow on the ACS Publications integration platform using LangGraph's ReAct loop, orchestrating multi-step API integrations across AWS services and third-party SaaS vendors, reducing edge-case integration failure resolution time by 70%. Engineered an agentic GitHub PR analytics system to eliminate manual identification of high-risk PRs by automating data collection, cutting review effort by 85%. Set up a GitHub Actions CI/CD pipeline for ACS Pubs repos, increasing deployment frequency from weekly to over 10 deployments per day.",
    tags: ["LangGraph", "ReAct", "AWS", "GitHub Actions", "CI/CD", "Python"],
  },
  {
    company: "TATA AIG General Insurance",
    role: "Software Engineer",
    period: "Sep 2022 - July 2024",
    location: "Gurugram, India",
    current: false,
    description:
      "Developed backend services of a highly scalable portal for creating and modifying policies using Lambda, RDS, NodeJS, S3, achieving a 90% improvement in TAT. Built a cross-organization report and access management platform using ReactJS, EC2 and ExpressJS, reducing report generation time by 80%. Integrated the legacy Genesis Configurator API into the backend system, and implemented product APIs with authorization and rate limiting using AWS API Gateway, VPC, Redis — enabling new vendor integrations and partnerships.",
    tags: ["AWS Lambda", "React", "Node.js", "Redis", "API Gateway"],
  },
  {
    company: "Infosys Limited",
    role: "System Engineer",
    period: "Nov 2020 - Aug 2022",
    location: "Mysore, India",
    current: false,
    description:
      "Built a data sync pipeline for a banking client to sync customer and loan records across RDS, S3, and downstream systems, implementing incremental batch processing with offset-based pagination and automated status tracking. Designed and implemented a retrying microservice for syncing cases to downstream leveraging Step Functions and Redis, reducing failure rate by 70%. Mentored new employees on clean code and best practices.",
    tags: ["AWS RDS", "S3", "Step Functions", "Redis", "Microservices"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-[#3b82f6] rounded mb-12" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#262626]" />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative pl-10">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-2 w-[16px] h-[16px] rounded-full border-2 ${
                    exp.current
                      ? "border-[#3b82f6] bg-[#3b82f6]/20"
                      : "border-[#404040] bg-[#1a1a1a]"
                  }`}
                />
                {exp.current && (
                  <div className="absolute left-[3px] top-[11px] w-[10px] h-[10px] rounded-full bg-[#3b82f6] animate-pulse" />
                )}

                {/* Card */}
                <div className="card-hover p-6 rounded-xl border border-[#262626] bg-[#111111]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {exp.company}
                      </h3>
                      <p className="text-[#a0a0a0] text-sm">{exp.role}</p>
                    </div>
                    <div className="text-right mt-1 sm:mt-0 shrink-0">
                      <p className="text-sm font-mono text-[#6366f1]">
                        {exp.period}
                      </p>
                      <p className="text-xs text-[#606060]">{exp.location}</p>
                    </div>
                  </div>

                  {exp.current && (
                    <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 mb-3">
                      Current
                    </span>
                  )}

                  <p className="text-[#a0a0a0] text-sm leading-relaxed mt-3 mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-[#1a1a1a] text-[#6366f1] border border-[#262626]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
