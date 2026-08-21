import { Code2, Server, Database, Bot } from "lucide-react";

const capabilities = [
  {
    number: "01",
    tag: "FULL STACK",
    title: "Full Stack Web Development",
    description: "Building complete, production-ready web applications with React, TypeScript, Laravel, PHP, and MySQL, with clean separation of concerns.",
    icon: Code2,
  },
  {
    number: "02",
    tag: "BACKEND & APIS",
    title: "Backend & API Systems",
    description: "Architecting structured RESTful APIs, request validation, authentication, and domain logic with Laravel and PHP.",
    icon: Server,
  },
  {
    number: "03",
    tag: "AI INTEGRATION",
    title: "AI Integration & Workflows",
    description: "Connecting generative AI APIs and structured prompt workflows into software platforms to automate documentation and business processes.",
    icon: Bot,
  },
  {
    number: "04",
    tag: "DATABASE",
    title: "Database Engineering",
    description: "Designing normalized relational database schemas with foreign key integrity, optimized queries, and Eloquent ORM.",
    icon: Database,
  },
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-28 sm:py-36 bg-[#0D0D0D] border-t border-white/10" aria-label="Engineering Capabilities">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <div className="mb-20 pb-8 border-b border-white/10">
          <p className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
            Full Stack • Architecture • AI Integration
          </p>
          <h2 className="font-heading text-4xl sm:text-6xl font-light text-white tracking-tight max-w-3xl leading-tight">
            Driven by architecture, guided by engineering excellence.
          </h2>
          <p className="text-base text-[#B3B3B3] font-light mt-4">
            What I offer & engineering capabilities
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap) => {
            const IconComp = cap.icon;
            return (
              <div
                key={cap.number}
                className="p-8 rounded-3xl bg-[#141414] border border-white/10 flex flex-col justify-between space-y-8 hover:border-white/30 transition-all duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-xs text-[#888888] font-mono">
                    <span>{cap.number}</span>
                    <span className="text-primary">{cap.tag}</span>
                  </div>

                  <h3 className="font-heading text-2xl font-light text-white leading-snug">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-[#B3B3B3] font-light leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <IconComp className="w-5 h-5 text-white/60" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Capabilities;
