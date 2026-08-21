import { useState } from "react";
import { Code2, Server, Database, Bot, ArrowUpRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./motion/MotionPrimitives";

const capabilities = [
  {
    number: "01",
    tag: "FULL STACK",
    title: "Full Stack Web Development",
    short: "Building end-to-end web applications with React, TypeScript & Laravel.",
    description: "Building complete, production-ready web applications with React, TypeScript, Laravel, PHP, and MySQL, with clean separation of concerns.",
    icon: Code2,
  },
  {
    number: "02",
    tag: "BACKEND & APIS",
    title: "Backend & API Systems",
    short: "Architecting structured RESTful APIs, validation guards & domain logic.",
    description: "Architecting structured RESTful APIs, request validation, authentication, and domain logic with Laravel and PHP.",
    icon: Server,
  },
  {
    number: "03",
    tag: "AI INTEGRATION",
    title: "AI Integration & Workflows",
    short: "Automating software planning, PRD generation & technical synthesis.",
    description: "Connecting generative AI APIs and structured prompt workflows into software platforms to automate documentation and business processes.",
    icon: Bot,
  },
  {
    number: "04",
    tag: "DATABASE",
    title: "Database Engineering",
    short: "Designing normalized schemas, relational indexes & Eloquent queries.",
    description: "Designing normalized relational database schemas with foreign key integrity, optimized queries, and Eloquent ORM.",
    icon: Database,
  },
];

const CAPABILITY_ROWS = [
  { label: "FULL STACK", sub: "React 18, TypeScript, Tailwind CSS, Modern UI Systems" },
  { label: "BACKEND APIS", sub: "Laravel 11, PHP 8, RESTful Endpoints, Sanctum Auth" },
  { label: "AI INTEGRATIONS", sub: "Prompt Pipelines, PRD Automation, AI SaaS Architecture" },
  { label: "DATABASE SYSTEMS", sub: "MySQL Schema Design, Relational Integrity, Performance Tuning" },
];

const Capabilities = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(0);

  return (
    <section id="capabilities" className="py-28 sm:py-36 bg-[#0D0D0D] border-t border-white/10" aria-label="Engineering Capabilities">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <FadeUp className="mb-20 pb-8 border-b border-white/10">
          <p className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
            Full Stack • Architecture • AI Integration
          </p>
          <h2 className="font-heading text-4xl sm:text-6xl font-light text-white tracking-tight max-w-3xl leading-tight">
            Driven by architecture, guided by engineering excellence.
          </h2>
          <p className="text-base text-[#B3B3B3] font-light mt-4">
            What I offer & engineering capabilities
          </p>
        </FadeUp>

        {/* Interactive Capability List matching Hampus reference video (00:41 - 00:45) */}
        <FadeUp delay={0.15} className="mb-20 space-y-2">
          {CAPABILITY_ROWS.map((row, idx) => {
            const isHovered = hoveredRow === idx;
            return (
              <div
                key={row.label}
                onMouseEnter={() => setHoveredRow(idx)}
                className={`w-full py-5 px-6 sm:px-8 rounded-2xl transition-all duration-300 cursor-default flex flex-col md:flex-row md:items-center justify-between gap-3 border ${
                  isHovered
                    ? "bg-primary text-black border-primary shadow-xl shadow-primary/10 translate-x-1"
                    : "bg-[#111111]/50 text-white/70 border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-heading text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight transition-colors ${isHovered ? "text-black font-semibold" : "text-white/80"}`}>
                    {row.label}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs sm:text-sm font-light transition-colors ${isHovered ? "text-black/80 font-medium" : "text-[#888888]"}`}>
                    {row.sub}
                  </span>
                  <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "text-black translate-x-0.5 -translate-y-0.5" : "text-white/30"}`} />
                </div>
              </div>
            );
          })}
        </FadeUp>

        {/* 4-Pillar Grid with Staggered Viewport Reveal */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap) => {
            const IconComp = cap.icon;
            return (
              <StaggerItem key={cap.number}>
                <div
                  className="p-8 rounded-3xl bg-[#141414] border border-white/10 flex flex-col justify-between space-y-8 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group h-full"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between text-xs text-[#888888] font-mono">
                      <span>{cap.number}</span>
                      <span className="text-primary group-hover:underline">{cap.tag}</span>
                    </div>

                    <h3 className="font-heading text-2xl font-light text-white leading-snug">
                      {cap.title}
                    </h3>

                    <p className="text-sm text-[#B3B3B3] font-light leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <IconComp className="w-5 h-5 text-white/60 group-hover:text-primary transition-colors" />
                    <span className="text-xs text-white/40 font-mono group-hover:text-white transition-colors">EXPLORE</span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default Capabilities;
