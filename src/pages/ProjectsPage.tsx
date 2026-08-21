import { ExternalLink, ArrowLeft, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Recent Projects & Architecture Case Studies — Aqib Jawwad Nahin</title>
        <meta
          name="description"
          content="Explore Aqib's software projects — full-stack web applications, SaaS platforms, and systems architecture. Each project includes an engineering case study."
        />
        <link rel="canonical" href="https://aqibjawwad.me/projects" />
        <meta property="og:url" content="https://aqibjawwad.me/projects" />
        <meta property="og:title" content="Recent Projects — Aqib Jawwad Nahin" />
        <meta
          property="og:description"
          content="Full-stack web applications and software projects with architecture diagrams and technical case studies."
        />
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
              Portfolio Index
            </p>
            <h1 className="text-4xl sm:text-6xl font-light text-white tracking-tight">
              Recent Projects & Selected Work
            </h1>
            <p className="text-base sm:text-lg text-[#B3B3B3] max-w-2xl mt-4 font-light leading-relaxed">
              Every project includes a complete architectural breakdown, engineering decision record, database design notes, and technical trade-offs.
            </p>
          </div>

          {/* Projects List */}
          <div className="space-y-24 sm:space-y-36">
            {projects.map((project, index) => {
              const hasLive = Boolean(project.live && project.live !== "#" && project.live.startsWith("http"));
              const hasRepo = Boolean(project.sourceFiles && project.sourceFiles !== "#" && project.sourceFiles !== "https://github.com/Aqib2607" && project.sourceFiles.startsWith("http"));

              return (
                <article
                  key={project.slug}
                  className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
                  aria-label={project.title}
                >
                  {/* Large Project Visual */}
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="block relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#161616] border border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-2xl"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={project.image}
                          alt={`${project.title} Preview`}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                          loading="lazy"
                          width={800}
                          height={500}
                        />
                      </div>
                    </Link>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    
                    {/* Category & Technologies */}
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-widest text-[#888888] font-medium">
                        {project.projectType}
                      </p>
                      <p className="text-xs text-primary font-mono">
                        {project.technologies.slice(0, 4).join(" • ")}
                      </p>
                    </div>

                    {/* Title */}
                    <Link to={`/projects/${project.slug}`} className="block group-hover:text-primary transition-colors">
                      <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
                        {project.title}
                      </h2>
                    </Link>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#B3B3B3] font-light leading-relaxed">
                      {project.description || project.overview}
                    </p>

                    {/* Action links */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <Button
                        size="sm"
                        className="bg-white hover:bg-white/90 text-black font-medium px-6 py-2.5 rounded-full text-xs transition-all duration-200 hover:scale-105"
                        asChild
                      >
                        <Link to={`/projects/${project.slug}`} aria-label={`View case study for ${project.title}`}>
                          Case Study
                        </Link>
                      </Button>

                      {hasLive && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-white/20 bg-transparent hover:bg-white/10 text-white rounded-full text-xs gap-1.5"
                          asChild
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open live demo of ${project.title}`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                          </a>
                        </Button>
                      )}

                      {hasRepo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-white/20 bg-transparent hover:bg-white/10 text-white rounded-full text-xs gap-1.5"
                          asChild
                        >
                          <a
                            href={project.sourceFiles}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View source code for ${project.title}`}
                          >
                            <Github className="w-3.5 h-3.5" /> Source
                          </a>
                        </Button>
                      )}
                    </div>

                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
