import { Layers, Zap, Accessibility, ShieldCheck, Cpu, Code2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  {
    icon: Layers,
    title: "Clean Architecture & SOLID",
    description: "Strict separation of concerns between client state, REST API controllers, and relational database layers to ensure maintainability.",
  },
  {
    icon: Zap,
    title: "Performance by Default",
    description: "Fast page loads, eager loading to prevent N+1 queries, normalized indexing, and responsive user feedback states.",
  },
  {
    icon: Accessibility,
    title: "Accessible Engineering",
    description: "Semantic HTML structure, full keyboard accessibility, high contrast text, and WCAG AA compliance standards.",
  },
  {
    icon: ShieldCheck,
    title: "Defensive Coding & Security",
    description: "Sanitized inputs, prepared statements via Eloquent ORM to prevent SQL injection, and token-based authentication.",
  },
  {
    icon: Cpu,
    title: "Scalable Data Modeling",
    description: "Normalized relational schemas with foreign-key constraints designed to handle growing domain complexity.",
  },
  {
    icon: Code2,
    title: "Developer Ergonomics",
    description: "Strict TypeScript typings, consistent code standards, modular components, and predictable state lifecycles.",
  },
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-24 sm:py-32 relative" aria-label="Engineering Philosophy">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="section-kicker mb-3">Core Principles</span>
            <h2 className="text-3xl sm:text-5xl font-heading font-normal text-white tracking-tight">
              Engineering <span className="font-serif italic font-normal text-primary">Philosophy</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md">
            The architectural standards and engineering values applied across every software project.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-8 rounded-3xl bg-[#0F0F0F] border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#181818] border border-white/10 flex items-center justify-center text-primary mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-heading font-medium text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Full Philosophy Page */}
        <div className="text-right mt-8">
          <Link
            to="/philosophy"
            className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-mono"
          >
            <span>Read full philosophy write-up</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;
