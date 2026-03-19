export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          <span className="gradient-text">About Me</span>
        </h2>
        <div className="w-16 h-1 bg-[#3b82f6] rounded mb-8" />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p className="text-[#a0a0a0] text-lg leading-relaxed">
              I&apos;m a Software Engineer pursuing my M.S. in Computer Science
              at Virginia Tech. With 5+ years of industry experience at
              companies like TATA AIG and Infosys, I&apos;ve built everything
              from serverless policy management portals on AWS to retry
              microservices that reduced failure rates by 70%.
            </p>
            <p className="text-[#a0a0a0] text-lg leading-relaxed">
              Currently, I&apos;m a Graduate Research Assistant at the
              Commonwealth Cyber Initiative, where I&apos;m developing LLM agent
              systems with MCP server integration for automated threat detection
              and security operations. I also interned at the American Chemical
              Society, where I built a GitHub PR review tool that cut manual
              review effort by 85%.
            </p>
            <p className="text-[#a0a0a0] text-lg leading-relaxed">
              My sweet spot is at the intersection of AI and software
              engineering — building multi-agent systems, fine-tuning LLMs for
              code analysis, and designing cloud-native architectures on AWS.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-[#262626] bg-[#111111]">
              <div className="text-3xl font-bold gradient-text mb-1">5+</div>
              <div className="text-sm text-[#a0a0a0]">Years of Experience</div>
            </div>
            <div className="p-6 rounded-xl border border-[#262626] bg-[#111111]">
              <div className="text-3xl font-bold gradient-text mb-1">MS</div>
              <div className="text-sm text-[#a0a0a0]">CS @ Virginia Tech</div>
            </div>
            <div className="p-6 rounded-xl border border-[#262626] bg-[#111111]">
              <div className="text-3xl font-bold gradient-text mb-1">AI</div>
              <div className="text-sm text-[#a0a0a0]">
                LLMs &amp; Multi-Agent Systems
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
