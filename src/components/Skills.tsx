import { Code2, Server, Database, Bot, GitBranch, Layers } from "lucide-react";

const primaryStack = [
  { name: "React", category: "Frontend UI", highlight: true },
  { name: "TypeScript", category: "Type-Safe Architecture", highlight: true },
  { name: "Laravel", category: "Backend Framework", highlight: true },
  { name: "PHP", category: "Server Runtime", highlight: true },
  { name: "MySQL", category: "Relational Database", highlight: true },
  { name: "REST APIs", category: "API Design", highlight: true },
  { name: "AI APIs", category: "LLM Integration", highlight: true },
];

const capabilityCards = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "Building responsive, accessible, and performant user interfaces with component-driven state architecture.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / Semantic DOM", "Vite"],
    color: "text-primary",
    borderColor: "border-primary/30",
    bgAccent: "bg-primary/5",
  },
  {
    icon: Server,
    title: "Backend & API Systems",
    description: "Architecting structured RESTful API endpoints, request validation, authentication, and MVC domain logic.",
    technologies: ["Laravel", "PHP", "REST APIs", "MVC Architecture", "Sanctum / Auth Middleware", "Routing"],
    color: "text-secondary",
    borderColor: "border-secondary/30",
    bgAccent: "bg-secondary/5",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Designing normalized relational schemas with foreign key integrity, efficient indexing, and Eloquent ORM.",
    technologies: ["MySQL", "Relational Schema Design", "Eloquent ORM", "Query Optimization", "Data Modeling"],
    color: "text-accent",
    borderColor: "border-accent/30",
    bgAccent: "bg-accent/5",
  },
  {
    icon: Bot,
    title: "AI Integration & Workflows",
    description: "Integrating generative AI capabilities and prompt pipelines into web platforms for structured document generation.",
    technologies: ["Prompt Engineering", "AI API Integration", "Generative Content Workflows", "Multimodal Video Tools"],
    color: "text-amber-400",
    borderColor: "border-amber-400/30",
    bgAccent: "bg-amber-400/5",
  },
  {
    icon: GitBranch,
    title: "Version Control & Tooling",
    description: "Maintaining structured Git branching workflows, pull requests, automated testing, and development environments.",
    technologies: ["Git", "GitHub", "VS Code", "Postman", "XAMPP", "NPM / Vite"],
    color: "text-blue-400",
    borderColor: "border-blue-400/30",
    bgAccent: "bg-blue-400/5",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 relative" aria-label="Technical Expertise">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-white/10">
          <span className="section-kicker mb-3">Technical Expertise</span>
          <h2 className="text-3xl sm:text-5xl font-heading font-normal text-white tracking-tight">
            Core <span className="font-serif italic font-normal text-primary">Stack</span> & Engineering Capabilities
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 font-light">
            A demonstrable full-stack software engineering toolkit applied across production, portfolio, and academic systems.
          </p>
        </div>

        {/* Primary Stack Pill Showcase */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0F0F0F] border border-white/10 mb-12 shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Primary Engineering Stack
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {primaryStack.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-2xl bg-[#151515] border border-white/10 hover:border-primary/40 transition-colors text-center flex flex-col justify-center items-center gap-1"
              >
                <span className="text-base font-semibold text-white">{tech.name}</span>
                <span className="text-[11px] text-primary/80">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Grid of Engineering Capabilities */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilityCards.map((cap) => {
            const IconComp = cap.icon;
            return (
              <div
                key={cap.title}
                className={`p-7 rounded-3xl bg-[#0F0F0F] border ${cap.borderColor} hover:border-primary/50 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${cap.bgAccent} border ${cap.borderColor} flex items-center justify-center mb-6`}>
                    <IconComp className={`w-6 h-6 ${cap.color}`} />
                  </div>

                  <h3 className="text-xl font-heading font-medium text-white mb-2.5">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {cap.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-lg bg-[#181818] text-muted-foreground border border-white/5 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;