import { ExternalLink, ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-28 sm:py-36 bg-[#0D0D0D] border-t border-white/10" aria-label="Selected Projects">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Section Header */}
        <div className="mb-20 pb-8 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#888888] font-medium mb-3">
              Full Stack • AI Integrations • Systems Architecture
            </p>
            <h2 className="font-heading text-4xl sm:text-6xl font-light text-white tracking-tight">
              Recent Projects
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#B3B3B3] font-light max-w-md">
            Production-oriented software, SaaS platforms, and systems simulation built across modern full-stack technologies.
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
                    <h3 className="font-heading text-3xl sm:text-4xl font-light text-white leading-tight">
                      {project.title}
                    </h3>
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

        {/* View All Projects Button */}
        <div className="text-center mt-24 pt-12 border-t border-white/10">
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-full text-sm font-normal gap-2 transition-all duration-200"
            asChild
          >
            <Link to="/projects">
              Explore All Projects & Architecture Case Studies
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Projects;