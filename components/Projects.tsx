const projects = [
  {
    title: "N-PORT Filing Tool (Corgi)",
    description:
      "An automated N-PORT filing generation and compliance tool for ETF issuers. Ingests fund holdings via CSV/JSON, runs 30+ SEC compliance validations, generates EDGAR-ready XML, and enforces multi-role approval workflows with immutable audit trails. Built as a demo for Corgi â compressing weeks of fund operations into hours.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "SQLAlchemy", "Tailwind CSS"],
    github: "https://github.com/Siddhart-Yadav/nport-filing-tool",
    live: null,
    featured: true,
  },
  {
    title: "AI Code Review Agent",
    description:
      "A multi-agent code review system using LangGraph with 4 parallel specialist agents (security, performance, style, test coverage) and a multi-provider LLM abstraction supporting Groq, Gemini, OpenAI, and Anthropic. Achieved 100% context precision, 86% F1 score, and 61% token savings.",
    tags: ["Python", "LangGraph", "FastAPI", "Next.js", "Docker", "Groq"],
    github: "https://github.com/Siddhart-Yadav/ai-code-review-agent",
    live: "http://132.145.161.123",
    featured: true,
  },
  {
    title: "Bug Localization & Repair Using LLMs",
    description:
      "A dual-model system using fine-tuned Llama 3B Instruct for automated bug localization and repair, benchmarked against GPT-4 and Qwen Coder 32B. Demonstrated that targeted fine-tuning can outperform larger general-purpose LLMs.",
    tags: ["PyTorch", "Llama 3B", "GPT-4", "Fine-tuning", "Python"],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive developer portfolio built with Next.js and Tailwind CSS. Deployed on Vercel with optimized performance and SEO.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Siddhart-Yadav/Siddharth-portfolio",
    live: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-[#3b82f6] rounded mb-8" />

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-hover p-8 rounded-xl border border-[#262626] bg-[#111111] group"
            >
              <div className="flex items-start justify-between mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="1.5"
                  className="shrink-0"
                >
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a0a0a0] hover:text-[#3b82f6] transition-colors"
                      aria-label="GitHub"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a0a0a0] hover:text-[#3b82f6] transition-colors"
                      aria-label="Live demo"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#3b82f6] transition-colors">
                {project.title}
              </h3>
              <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-[#1a1a1a] text-[#3b82f6] border border-[#262626]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Siddhart-Yadav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#262626] text-[#a0a0a0] hover:border-[#3b82f6] hover:text-white transition-all duration-200"
          >
            See More on GitHub
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
const projects = [
  {
    title: "AI Code Review Agent",
    description:
      "A multi-agent code review system using LangGraph with 4 parallel specialist agents (security, performance, style, test coverage) and a multi-provider LLM abstraction supporting Groq, Gemini, OpenAI, and Anthropic. Achieved 100% context precision, 86% F1 score, and 61% token savings.",
    tags: ["Python", "LangGraph", "FastAPI", "Next.js", "Docker", "Groq"],
    github: "https://github.com/Siddhart-Yadav/ai-code-review-agent",
    live: "http://132.145.161.123",
    featured: true,
  },
  {
    title: "Bug Localization & Repair Using LLMs",
    description:
      "A dual-model system using fine-tuned Llama 3B Instruct for automated bug localization and repair, benchmarked against GPT-4 and Qwen Coder 32B. Demonstrated that targeted fine-tuning can outperform larger general-purpose LLMs.",
    tags: ["PyTorch", "Llama 3B", "GPT-4", "Fine-tuning", "Python"],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive developer portfolio built with Next.js and Tailwind CSS. Deployed on Vercel with optimized performance and SEO.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Siddhart-Yadav/Siddharth-portfolio",
    live: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-[#3b82f6] rounded mb-8" />

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-hover p-8 rounded-xl border border-[#262626] bg-[#111111] group"
            >
              <div className="flex items-start justify-between mb-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="1.5"
                  className="shrink-0"
                >
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a0a0a0] hover:text-[#3b82f6] transition-colors"
                      aria-label="GitHub"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a0a0a0] hover:text-[#3b82f6] transition-colors"
                      aria-label="Live demo"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#3b82f6] transition-colors">
                {project.title}
              </h3>
              <p className="text-[#a0a0a0] mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-[#1a1a1a] text-[#3b82f6] border border-[#262626]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Siddhart-Yadav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#262626] text-[#a0a0a0] hover:border-[#3b82f6] hover:text-white transition-all duration-200"
          >
            See More on GitHub
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
