export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2"><span className="gradient-text">About Me</span></h2>
        <div className="w-16 h-1 bg-[#3b82f6] rounded mb-8" />
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p className="text-[#a0a0a0] text-lg leading-relaxed">I&apos;m a Software Engineer who enjoys turning complex problems into elegant, efficient solutions. My journey in tech has led me to work across the full stack, with a growing focus on AI and intelligent systems.</p>
            <p className="text-[#a0a0a0] text-lg leading-relaxed">I&apos;m passionate about building tools that make developers&apos; lives easier — from AI-powered code review agents to scalable backend systems. I believe in writing clean, maintainable code and continuously learning new technologies.</p>
            <p className="text-[#a0a0a0] text-lg leading-relaxed">When I&apos;m not coding, you can find me exploring new AI research papers, contributing to open source, or tinkering with side projects.</p>
          </div>
          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-[#262626] bg-[#111111]">
              <div className="text-3xl font-bold gradient-text mb-1">SE</div>
              <div className="text-sm text-[#a0a0a0]">Software Engineer</div>
            </div>
            <div className="p-6 rounded-xl border border-[#262626] bg-[#111111]">
              <div className="text-3xl font-bold gradient-text mb-1">AI</div>
              <div className="text-sm text-[#a0a0a0]">AI &amp; ML Enthusiast</div>
            </div>
            <div className="p-6 rounded-xl border border-[#262626] bg-[#111111]">
              <div className="text-3xl font-bold gradient-text mb-1">OS</div>
              <div className="text-sm text-[#a0a0a0]">Open Source Contributor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
