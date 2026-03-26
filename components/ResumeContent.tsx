"use client";

import { useState, useEffect } from "react";

const technicalSkills = [
  {
    category: "Languages",
    items: "Python, SQL, JavaScript, TypeScript, Bash, HTML, CSS, YAML",
  },
  {
    category: "Frameworks & Tools",
    items:
      "React, Next.js, Node.js, Express.js, FastAPI, REST API, GraphQL, PostgreSQL, MongoDB, Supabase, Firebase, Redis, Kafka, Mongoose, MySQL, OAuth, JWT, SSO, CI/CD, Git, Agile, OpenAPI",
  },
  {
    category: "Cloud & DevOps",
    items:
      "AWS (EC2, Lambda, S3, CloudWatch, RDS, API Gateway, SQS, EKS), Vercel, GCP, Docker, Kubernetes, Linux",
  },
  {
    category: "AI/ML & Automation",
    items:
      "Claude Code, Cursor, LangGraph, LangChain, PyTorch, LLMs, Groq, OpenAI API, Anthropic API, Gemini, Semgrep, MCP",
  },
];

const experiences = [
  {
    company: "Commonwealth Cyber Initiative",
    role: "Graduate Research Assistant",
    period: "Jan 2025 \u2013 Present",
    location: "Arlington, VA",
    current: true,
    bullets: [
      "Developing LLM agent system with MCP server integration for security operations that provides faster log analysis with real-time SIEM integration and automated threat detection.",
      "Developed and evaluated LLM-augmented strategies for intelligent alert triage of potential phishing attacks, significantly reducing incident response times (MTTR) while maintaining high-fidelity threat detection.",
    ],
  },
  {
    company: "American Chemical Society",
    role: "Software Engineering Intern",
    period: "May 2025 \u2013 Aug 2025",
    location: "Washington, DC",
    current: false,
    bullets: [
      "Engineered and launched a GitHub PR review tool, automating data collection and cutting manual review effort by 85%, which led to enhanced code quality insights.",
      "Leveraged the pub-sub pattern using EventBridge, AWS SQS to decouple services and handle asynchronous events within the Integration and Orchestration platform.",
      "Set up a GitHub Actions CI/CD pipeline for ACS Pubs repos, increasing deployment frequency from weekly to over 10 deployments per day.",
    ],
  },
  {
    company: "TATA AIG General Insurance",
    role: "Software Engineer",
    period: "Sep 2022 \u2013 July 2024",
    location: "Gurugram, India",
    current: false,
    bullets: [
      "Developed the backend services of a highly scalable portal for creating and modifying policies using Lambda, RDS, NodeJS, S3, achieving a 90% improvement in TAT.",
      "Developed a cross-organization report and access management platform using ReactJS, EC2 and ExpressJS, reducing the time required for generating and sharing reports by 80%.",
      "Successfully integrated the legacy Genesis Configurator API into the backend system, modernizing the infrastructure and improving system performance.",
      "Implemented different product APIs by adding authorization and rate limiting using AWS API Gateway, VPC, Redis, directly enabling new vendor integrations and partnerships.",
    ],
  },
  {
    company: "Infosys Limited",
    role: "System Engineer",
    period: "Nov 2020 \u2013 Aug 2022",
    location: "Mysore, India",
    current: false,
    bullets: [
      "Contributed towards efficient management of client mortgage and personal loan application platform utilizing Docker and Kubernetes, reducing infrastructure cost by 15%.",
      "Designed and implemented a retrying microservice for syncing cases to downstream leveraging Step Functions, and Redis, reducing failure rate by 70% and ensuring data consistency.",
      "Mentored new employees on clean code and best practices, conducted code reviews, and led daily stand ups.",
    ],
  },
];

const projects = [
  {
    name: "AI Code Review Agent",
    tech: "Python, LangGraph, FastAPI, Next.js, Docker, Groq/Llama 3.3",
    bullets: [
      "Built a multi-agent code review system using LangGraph with 4 parallel specialist agents (security, performance, style, test coverage) and a multi-provider LLM abstraction supporting Groq, Gemini, OpenAI, and Anthropic.",
      "Implemented smart diff chunking with priority-based file ranking, achieving 100% context precision, 86% F1 score, and 61% token savings.",
    ],
  },
  {
    name: "Bug Localization and Repair Using LLMs",
    tech: "PyTorch, Llama 3B, GPT-4",
    bullets: [
      "Built a dual-model system using fine-tuned Llama 3B Instruct for automated bug localization and repair, benchmarked against GPT-4 and Qwen Coder 32B.",
      "Augmented the QuixBugs dataset with syntactic and logical single-line bugs, and demonstrated that targeted fine-tuning can outperform larger general-purpose LLMs.",
    ],
  },
];

const education = [
  {
    school: "Virginia Tech",
    degree: "M.S. in Computer Science",
    period: "Aug 2024 \u2013 Present",
    location: "Washington DC Baltimore Area, US",
  },
  {
    school: "Galgotias University",
    degree: "B.Tech in Electronics and Communication Engineering",
    period: "Aug 2016 \u2013 Jul 2020",
    location: "Greater Noida, India",
  },
];

export default function ResumeContent() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mini navbar for the resume page */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-blur ${
          scrolled
            ? "bg-[#0a0a0a]/80 border-b border-[#262626]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-bold tracking-tight gradient-text"
          >
            SY
          </a>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="text-sm text-[#a0a0a0] hover:text-white transition-colors duration-200"
            >
              \u2190 Back to Portfolio
            </a>
            <a
              href="/resume.pdf"
              download
              className="text-sm px-4 py-2 rounded-lg bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-all duration-200 flex items-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </nav>

      {/* Resume content */}
      <div className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="gradient-text">Siddharth Yadav</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-[#a0a0a0]">
              <a
                href="mailto:siddharthyadav555@gmail.com"
                className="hover:text-[#3b82f6] transition-colors"
              >
                siddharthyadav555@gmail.com
              </a>
              <span className="hidden sm:inline text-[#404040]">|</span>
              <a
                href="https://linkedin.com/in/siddharthydv"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3b82f6] transition-colors"
              >
                linkedin.com/in/siddharthydv
              </a>
              <span className="hidden sm:inline text-[#404040]">|</span>
              <a
                href="https://github.com/Siddhart-Yadav"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3b82f6] transition-colors"
              >
                github.com/Siddhart-Yadav
              </a>
            </div>
          </div>

          {/* Technical Skills */}
          <section className="mb-12 animate-fade-in-delay-1">
            <h2 className="text-2xl font-bold mb-2">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <div className="w-12 h-1 bg-[#3b82f6] rounded mb-6" />
            <div className="space-y-3">
              {technicalSkills.map((skill) => (
                <div key={skill.category} className="flex flex-col sm:flex-row sm:gap-3">
                  <span className="text-white font-semibold text-sm shrink-0 sm:w-44">
                    {skill.category}:
                  </span>
                  <span className="text-[#a0a0a0] text-sm">{skill.items}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-12 animate-fade-in-delay-2">
            <h2 className="text-2xl font-bold mb-2">
              <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-12 h-1 bg-[#3b82f6] rounded mb-6" />
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="p-6 rounded-xl border border-[#262626] bg-[#111111] card-hover"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1">
                    <div>
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        {exp.company}
                        {exp.current && (
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20">
                            Current
                          </span>
                        )}
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
                  <ul className="mt-3 space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-[#a0a0a0] text-sm leading-relaxed pl-4 relative before:content-['\u2022'] before:absolute before:left-0 before:text-[#3b82f6]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-12 animate-fade-in-delay-3">
            <h2 className="text-2xl font-bold mb-2">
              <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-12 h-1 bg-[#3b82f6] rounded mb-6" />
            <div className="space-y-8">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="p-6 rounded-xl border border-[#262626] bg-[#111111] card-hover"
                >
                  <div className="mb-1">
                    <h3 className="text-lg font-bold text-white">
                      {project.name}
                    </h3>
                    <p className="text-sm font-mono text-[#6366f1]">
                      {project.tech}
                    </p>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {project.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="text-[#a0a0a0] text-sm leading-relaxed pl-4 relative before:content-['\u2022'] before:absolute before:left-0 before:text-[#3b82f6]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-2">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-12 h-1 bg-[#3b82f6] rounded mb-6" />
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="p-6 rounded-xl border border-[#262626] bg-[#111111] card-hover"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {edu.school}
                      </h3>
                      <p className="text-[#a0a0a0] text-sm">{edu.degree}</p>
                    </div>
                    <div className="text-right mt-1 sm:mt-0 shrink-0">
                      <p className="text-sm font-mono text-[#6366f1]">
                        {edu.period}
                      </p>
                      <p className="text-xs text-[#606060]">{edu.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer download CTA */}
          <div className="text-center pt-8 border-t border-[#262626]">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#3b82f6] text-white font-medium hover:bg-[#2563eb] transition-all duration-200"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Full Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
