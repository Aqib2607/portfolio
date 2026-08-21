import { GraduationCap, Briefcase, Bot, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const journeyItems = [
  {
    title: "Computer Science & Engineering",
    institution: "Northern University of Business and Technology Khulna",
    period: "2022 – 2026",
    description: "Completing BSc (Honours) in CSE with focus on software engineering, data structures, algorithms, relational database systems, operating systems, and computer architecture.",
    icon: GraduationCap,
  },
  {
    title: "Full-Stack Web Development",
    institution: "PIBD (Professional Institute of Business Development)",
    period: "August 2025 – February 2026",
    description: "Completed 6-month intensive full-stack internship developing web applications with React, TypeScript, Laravel, PHP, and MySQL, building REST APIs and normalized database schemas.",
    icon: Briefcase,
  },
  {
    title: "AI Workflows & Academic Research",
    institution: "Hungry Tigers & USAxplorer",
    period: "January 2026 – April 2026",
    description: "Conducted structured literature synthesis, fact checking, and citation formatting (APA/IEEE/MLA) at USAxplorer, and optimized multimodal AI video generation workflows at Hungry Tigers.",
    icon: Bot,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 sm:py-36 bg-[#0D0D0D] border-t border-white/10" aria-label="About Aqib Jawwad Nahin">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <div className="mb-20 pb-8 border-b border-white/10">
          <p className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
            About & Background
          </p>
          <h2 className="font-heading text-4xl sm:text-6xl font-light text-white tracking-tight max-w-3xl leading-tight">
            Discover my journey in software engineering.
          </h2>
          <p className="text-base sm:text-lg text-[#B3B3B3] font-light max-w-2xl mt-4 leading-relaxed">
            I bring precision, technical curiosity, and a deep focus on system reliability to build software that creates lasting value.
          </p>
        </div>

        {/* 3 Journey Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {journeyItems.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 flex flex-col justify-between space-y-6 hover:border-white/30 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#888888]">
                    <span className="font-mono text-primary">{item.period}</span>
                    <IconComp className="w-5 h-5 text-[#888888]" />
                  </div>

                  <h3 className="font-heading text-2xl font-light text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-primary font-medium">
                    {item.institution}
                  </p>

                  <p className="text-sm text-[#B3B3B3] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-16 pt-8 border-t border-white/10">
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-black font-medium px-8 py-4 rounded-full text-sm"
            asChild
          >
            <Link to="/resume">
              View Full Curriculum Vitae (Resume)
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white/20 bg-transparent hover:bg-white/10 text-white rounded-full text-sm gap-2"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1ljwGoR0H3GDo9klT0ScCGQXrAdpGEl13/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download original PDF resume (opens in new tab)"
            >
              <Download className="w-4 h-4" />
              Download Resume PDF
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
