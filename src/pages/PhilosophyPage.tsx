import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const principles = [
  {
    number: "01",
    title: "Clean Architecture & Separation of Concerns",
    description: "Code should be written for humans first. I enforce strict boundaries between client UI components, REST API controllers, and relational database migrations to ensure systems remain maintainable over years of growth.",
  },
  {
    number: "02",
    title: "Performance by Default",
    description: "Performance isn't an afterthought — it's an engineering requirement. From normalized database indexing and eager-loading relationships to code-split bundles and responsive state updates, speed is built into the foundation.",
  },
  {
    number: "03",
    title: "Accessible & Semantic Engineering",
    description: "The web must be usable by everyone. I construct accessible layouts using semantic HTML landmarks, full keyboard navigability, clear focus indicators, and WCAG AA contrast standards.",
  },
  {
    number: "04",
    title: "Defensive Coding & Security",
    description: "I treat all client input as untrusted. Backend systems enforce server-side validation, CSRF/XSS protection, prepared SQL statements via Eloquent ORM, and token-based authentication at every boundary.",
  },
  {
    number: "05",
    title: "Scalable Data Modeling",
    description: "Relational database schema design dictates application longevity. I prioritize strict foreign-key integrity, clear entity relationships, and transactional atomicity when processing state changes.",
  },
  {
    number: "06",
    title: "Developer Ergonomics & Type Safety",
    description: "Great software is built through predictable workflows. I enforce strict TypeScript typings across client state, modular code structures, and consistent architectural patterns.",
  },
];

const PhilosophyPage = () => {
  return (
    <>
      <Helmet>
        <title>Engineering Philosophy — Aqib Jawwad Nahin</title>
        <meta
          name="description"
          content="My engineering philosophy: Clean Architecture, Performance, Accessibility, and Scalability. How I build robust web applications."
        />
        <link rel="canonical" href="https://aqibjawwad.me/philosophy" />
      </Helmet>

      <div className="min-h-screen bg-[#0D0D0D] text-white pt-32 sm:pt-40 pb-28">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Header */}
          <div className="mb-20 pb-8 border-b border-white/10">
            <Link
              to="/"
              className="inline-flex items-center text-xs text-[#888888] hover:text-white mb-6 transition-colors gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>
            <p className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
              Architectural Standards
            </p>
            <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight">
              Engineering Philosophy & Principles
            </h1>
            <p className="text-base sm:text-lg text-[#B3B3B3] max-w-2xl mt-4 font-light leading-relaxed">
              Balancing technical rigor with practical business problem-solving — building systems that are robust, accessible, and maintainable.
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((p) => (
              <div
                key={p.number}
                className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <span className="text-xs font-mono text-primary font-medium">{p.number}</span>
                  <h2 className="text-2xl font-light text-white leading-snug">
                    {p.title}
                  </h2>
                  <p className="text-sm text-[#B3B3B3] font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 text-center p-12 sm:p-16 rounded-3xl bg-[#141414] border border-white/10">
            <h3 className="text-3xl sm:text-4xl font-light text-white mb-4">
              See These Principles in Action
            </h3>
            <p className="text-base text-[#B3B3B3] max-w-xl mx-auto mb-8 font-light leading-relaxed">
              Explore the full technical case studies to examine architecture diagrams, database schemas, and engineering decisions.
            </p>
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-black font-medium px-8 py-4 rounded-full text-sm"
              asChild
            >
              <Link to="/projects">Explore Case Studies</Link>
            </Button>
          </div>

        </div>
      </div>
    </>
  );
};

export default PhilosophyPage;
