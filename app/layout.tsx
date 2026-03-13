import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siddharth Yadav | Software Engineer",
  description:
    "Software Engineer passionate about building intelligent systems. Portfolio showcasing projects, skills, and experience.",
  keywords: ["software engineer", "developer", "AI", "portfolio", "Siddharth Yadav"],
  openGraph: {
    title: "Siddharth Yadav | Software Engineer",
    description: "Software Engineer passionate about building intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
