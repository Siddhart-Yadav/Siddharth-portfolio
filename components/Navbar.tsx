"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-blur ${
        scrolled
          ? "bg-[#0a0a0a]/80 border-b border-[#262626]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight gradient-text">
          SY
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-[#a0a0a0] hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume"
            className="text-sm px-4 py-2 rounded-lg border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition-all duration-200"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 nav-blur border-t border-[#262626] px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[#a0a0a0] hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume"
            onClick={() => setMobileOpen(false)}
            className="block py-3 text-[#3b82f6] hover:text-white transition-colors font-medium"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
