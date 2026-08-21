import { useState, lazy, Suspense } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft, ExternalLink, Github, CheckCircle2,
  TrendingUp, Shield, Zap, Layers, GitBranch,
  Target, Lightbulb, AlertTriangle, ChevronRight, Clock, User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

// Map active project slugs to dedicated architecture diagrams
const diagramMap: Record<string, React.ComponentType> = {
  "reqs-ai": lazy(() =>
    import("@/components/diagrams/ArchitectureDiagrams").then((m) => ({ default: m.ReqsAiArchitecture }))
  ),
  clinexa: lazy(() =>
    import("@/components/diagrams/ArchitectureDiagrams").then((m) => ({ default: m.ClinexaArchitecture }))
  ),
  "clinexa-hms": lazy(() =>
    import("@/components/diagrams/ArchitectureDiagrams").then((m) => ({ default: m.ClinexaArchitecture }))
  ),
  "restaurant-management": lazy(() =>
    import("@/components/diagrams/ArchitectureDiagrams").then((m) => ({ default: m.RestaurantManagementArchitecture }))
  ),
  "restaurant-management-system": lazy(() =>
    import("@/components/diagrams/ArchitectureDiagrams").then((m) => ({ default: m.RestaurantManagementArchitecture }))
  ),
  "virtual-cpu-emulator": lazy(() =>
    import("@/components/diagrams/ArchitectureDiagrams").then((m) => ({ default: m.VirtualCpuArchitecture }))
  ),
};

const normalizeProjectSlug = (s?: string) => {
  if (!s) return "";
  if (s === "clinexa-hms" || s === "clinexa") return "clinexa";
  if (s === "restaurant-management-system" || s === "restaurant-management") return "restaurant-management";
  return s;
};

const TABS = [
  { id: "overview", label: "Overview & Impact", icon: Target },
  { id: "engineering", label: "Architecture & Decisions", icon: Layers },
  { id: "process", label: "Process & Insights", icon: Lightbulb },
] as const;

type TabId = typeof TABS[number]["id"];

function OverviewTab({ project }: { project: Project }) {
  return (
    <div className="space-y-12">
      {project.problemStatement && (
        <div className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#888888] font-medium flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-primary" /> Business Problem
          </p>
          <p className="text-[#D4D4D4] leading-relaxed text-sm sm:text-base font-light">{project.problemStatement}</p>
        </div>
      )}

      <div className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 space-y-4">
        <p className="text-xs uppercase tracking-widest text-[#888888] font-medium flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary" /> Key Capabilities & Engineering Impact
        </p>
        <p className="text-[#FAFAFA] leading-relaxed text-sm sm:text-base font-light">{project.impact}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {project.businessGoals && (
          <div className="p-8 rounded-3xl bg-[#141414] border border-white/10 space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">Project Goals</p>
            <ul className="space-y-2.5">
              {project.businessGoals.map((goal, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#B3B3B3] font-light">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.targetUsers && (
          <div className="p-8 rounded-3xl bg-[#141414] border border-white/10 space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">Target Users</p>
            <ul className="space-y-2.5">
              {project.targetUsers.map((user, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#B3B3B3] font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{user}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {project.features && (
        <div className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">Core Features</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.features.map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-[#B3B3B3] font-light">
                <ChevronRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function EngineeringTab({ project, slug }: { project: Project; slug: string }) {
  const ArchDiagram = diagramMap[slug];
  return (
    <div className="space-y-12">
      {ArchDiagram && (
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">
            System Architecture Diagram
          </p>
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#141414] p-4">
            <Suspense fallback={
              <div className="h-64 flex items-center justify-center text-xs text-[#888888] font-mono">
                Loading architecture diagram…
              </div>
            }>
              <ArchDiagram />
            </Suspense>
          </div>
          {project.architecture && (
            <p className="text-xs sm:text-sm text-[#B3B3B3] font-light leading-relaxed pt-2">{project.architecture}</p>
          )}
          {project.databaseDesign && (
            <div className="p-8 rounded-3xl bg-[#141414] border border-white/10 space-y-2 mt-6">
              <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">Relational Database Design</p>
              <p className="text-xs sm:text-sm text-[#B3B3B3] font-light leading-relaxed">{project.databaseDesign}</p>
            </div>
          )}
        </div>
      )}

      {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">
            Architectural Decisions & Trade-Offs
          </p>
          <div className="space-y-4">
            {project.engineeringDecisions.map((ed, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#141414] border border-white/10 space-y-3">
                <h4 className="text-lg font-medium text-white">{ed.decision}</h4>
                <p className="text-sm text-[#B3B3B3] font-light"><strong className="text-white">Why:</strong> {ed.why}</p>
                {ed.alternativesConsidered.length > 0 && (
                  <p className="text-xs text-[#888888]">
                    <strong>Alternatives Considered:</strong> {ed.alternativesConsidered.join(", ")}
                  </p>
                )}
                <p className="text-xs text-primary font-mono pt-1">
                  <strong>Trade-Off:</strong> {ed.tradeoffs}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 space-y-4">
        <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">Complete Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span key={t} className="px-3.5 py-1.5 text-xs rounded-full bg-[#202020] text-[#D4D4D4] border border-white/10 font-mono">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessTab({ project }: { project: Project }) {
  return (
    <div className="space-y-12">
      {project.challenges && project.challenges.length > 0 && (
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">
            Engineering Challenges & Solutions
          </p>
          <div className="space-y-4">
            {project.challenges.map((c, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#141414] border border-white/10 space-y-3">
                <h4 className="text-base font-medium text-white">{c.challenge}</h4>
                <p className="text-sm text-[#B3B3B3] font-light leading-relaxed">
                  <strong className="text-white">Solution: </strong>{c.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        {project.lessonsLearned && (
          <div className="p-8 rounded-3xl bg-[#141414] border border-white/10 space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">Lessons Learned</p>
            <ul className="space-y-2.5">
              {project.lessonsLearned.map((l, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#B3B3B3] font-light">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.futureImprovements && (
          <div className="p-8 rounded-3xl bg-[#141414] border border-white/10 space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">Future Enhancements</p>
            <ul className="space-y-2.5">
              {project.futureImprovements.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#B3B3B3] font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

const ProjectCaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const normalized = normalizeProjectSlug(slug);
  const project = projects.find((p) => p.slug === normalized || p.slug === slug);
  if (!project) return <Navigate to="/projects" replace />;

  const hasLive = Boolean(project.live && project.live !== "#" && project.live.startsWith("http"));
  const hasRepo = Boolean(project.sourceFiles && project.sourceFiles !== "#" && project.sourceFiles !== "https://github.com/Aqib2607" && project.sourceFiles.startsWith("http"));

  return (
    <>
      <Helmet>
        <title>{project.title} — Technical Case Study · Aqib Jawwad Nahin</title>
        <meta name="description" content={`${project.description || project.overview} Full stack engineering case study by Aqib Jawwad Nahin.`} />
        <link rel="canonical" href={`https://aqibjawwad.me/projects/${project.slug}`} />
        <meta property="og:title" content={`${project.title} — Case Study`} />
        <meta property="og:description" content={project.impact} />
        <meta property="og:url" content={`https://aqibjawwad.me/projects/${project.slug}`} />
      </Helmet>

      <div className="min-h-screen bg-[#0D0D0D] text-white pt-32 sm:pt-40 pb-28">
        <div className="container mx-auto px-6 max-w-5xl">

          {/* Navigation Back */}
          <div className="mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Projects & Case Studies
            </Link>
          </div>

          {/* Case Study Header */}
          <div className="mb-12 pb-8 border-b border-white/10 space-y-4">
            <p className="text-xs uppercase tracking-widest text-primary font-medium">
              {project.projectType}
            </p>

            <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#888888] font-mono pt-2">
              <span>Role: {project.role}</span>
              <span>•</span>
              <span>Year: {project.duration}</span>
            </div>
          </div>

          {/* Featured Visual Media */}
          <div className="rounded-3xl overflow-hidden bg-[#161616] border border-white/10 aspect-[16/9] mb-12 shadow-2xl">
            <img
              src={project.image}
              alt={`${project.title} Preview`}
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>

          {/* Tabs */}
          <div className="flex gap-3 mb-10 border-b border-white/10 pb-4 overflow-x-auto" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-black font-medium"
                    : "text-[#888888] hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <div>
            {activeTab === "overview" && <OverviewTab project={project} />}
            {activeTab === "engineering" && <EngineeringTab project={project} slug={slug!} />}
            {activeTab === "process" && <ProcessTab project={project} />}
          </div>

          {/* Action Links Footer */}
          <div className="flex flex-wrap items-center gap-4 mt-16 pt-8 border-t border-white/10">
            {hasLive && (
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-black font-medium rounded-full px-8 text-sm"
                asChild
              >
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                </a>
              </Button>
            )}

            {hasRepo && (
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-transparent hover:bg-white/10 text-white rounded-full px-8 text-sm"
                asChild
              >
                <a href={project.sourceFiles} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" /> Source Code
                </a>
              </Button>
            )}

            <Button
              variant="ghost"
              size="lg"
              className="text-[#888888] hover:text-white rounded-full text-sm ml-auto"
              asChild
            >
              <Link to="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProjectCaseStudy;
