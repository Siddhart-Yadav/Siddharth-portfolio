const experiences = [
  {
    company: "Commonwealth Cyber Initiative",
    role: "Graduate Research Assistant",
    period: "Jan 2025 - Present",
    location: "Arlington, VA",
    current: true,
    description:
      "Developing LLM agent system with MCP server integration for security operations that provides faster log analysis with real-time SIEM integration and automated threat detection. Developed and evaluated LLM-augmented strategies for intelligent alert triage of potential phishing attacks, significantly reducing incident response times (MTTR) while maintaining high-fidelity threat detection.",
    tags: ["LLMs", "MCP", "Python", "SIEM", "Security"],
  },
  {
    company: "American Chemical Society",
    role: "Software Engineering Intern",
    period: "May 2025 - Aug 2025",
    location: "Washington, DC",
    current: false,
    description:
      "Engineered and launched a GitHub PR review tool, automating data collection and cutting manual review effort by 85%. Leveraged the pub-sub pattern using EventBridge, AWS SQS to decouple services and handle asynchronous events within the Integration and Orchestration platform. Set up a GitHub Actions CI/CD pipeline for ACS Pubs repos, increasing deployment frequency from weekly to over 10 deployments per day.",
    tags: ["AWS SQS", "EventBridge", "GitHub Actions", "CI/CD", "Node.js"],
  },
  {
    company: "TATA AIG General Insurance",
    role: "Software Engineer",
    period: "Sep 2022 - July 2024",
    location: "Gurugram, India",
    current: false,
    description:
      "Developed backend services of a highly scalable portal for creating and modifying policies using Lambda, RDS, NodeJS, S3, achieving a 90% improvement in TAT. Built a cross-organization report and access management platform using ReactJS, EC2 and ExpressJS, reducing report generation time by 80%. Implemented product APIs with authorization and rate limiting using AWS API Gateway, VPC, Redis.",
    tags: ["AWS Lambda", "React", "Node.js", "Redis", "API Gateway"],
  },
  {
    company: "Infosys Limited",
    role: "System Engineer",
    period: "Nov 2020 - Aug 2022",
    location: "Mysore, India",
    current: false,
    description:
      "Contributed towards efficient management of client mortgage and personal loan application platform utilizing Docker and Kubernetes, reducing infrastructure cost by 15%. Designed and implemented a retrying microservice for syncing cases to downstream leveraging Step Functions and Redis, reducing failure rate by 70%. Mentored new employees on clean code and best practices.",
    tags: ["Docker", "Kubernetes", "Step Functions", "Redis", "Microservices"],
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
