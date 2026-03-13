export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <p className="text-[#3b82f6] text-lg mb-4 font-mono animate-fade-in">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in animate-delay-1">Siddharth Yadav</h1>
        <h2 className="text-3xl md:text-5xl font-bold text-[#a0a0a0] mb-8 animate-fade-in animate-delay-2">
          I build <span className="gradient-text">intelligent software.</span>
        </h2>
        <p className="text-[#a0a0a0] text-lg max-w-xl mx-auto mb-12 animate-fade-in animate-delay-3">
          Software Engineer focused on creating robust, scalable applications and exploring the intersection of AI and software development.
        </p>
        <div className="flex gap-4 justify-center animate-fade-in animate-delay-4">
          <a href="#projects" className="px-8 py-3 rounded-lg bg-[#3b82f6] text-white font-medium hover:bg-[#2563eb] transition-colors duration-200">View My Work</a>
          <a href="#contact" className="px-8 py-3 rounded-lg border border-[#262626] text-[#a0a0a0] hover:border-[#3b82f6] hover:text-white transition-all duration-200">Get In Touch</a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a0a0a0" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
      </div>
    </section>
  );
}
