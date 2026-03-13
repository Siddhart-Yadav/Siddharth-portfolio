const skillCategories = [
  { title: "Languages", skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL"] },
  { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { title: "Backend", skills: ["Node.js", "FastAPI", "REST APIs", "GraphQL"] },
  { title: "AI / ML", skills: ["LLMs", "NLP", "LangChain", "OpenAI API"] },
  { title: "DevOps & Tools", skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD"] },
  { title: "Databases", skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2"><span className="gradient-text">Skills &amp; Technologies</span></h2>
        <div className="w-16 h-1 bg-[#3b82f6] rounded mb-8" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="card-hover p-6 rounded-xl border border-[#262626] bg-[#111111]">
              <h3 className="text-lg font-semibold mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="text-sm px-3 py-1.5 rounded-lg bg-[#1a1a1a] text-[#a0a0a0] border border-[#262626] hover:text-[#3b82f6] hover:border-[#3b82f6]/30 transition-all duration-200">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
