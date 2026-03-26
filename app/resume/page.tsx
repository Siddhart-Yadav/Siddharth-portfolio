import type { Metadata } from "next";
import ResumeContent from "@/components/ResumeContent";

export const metadata: Metadata = {
  title: "Resume | Siddharth Yadav",
  description:
    "Siddharth Yadav's resume — Software Engineer with experience in AI/ML, cloud infrastructure, and full-stack development.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <ResumeContent />
    </main>
  );
}
