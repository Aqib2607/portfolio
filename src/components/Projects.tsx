import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Single Doc - Health & Wellness Platform",
      description: "Comprehensive healthcare management system connecting patients with healthcare professionals, nutritionists, life coaches, and wellness experts. Features video consultations, course management, and collaborative todo lists.",
      technologies: ["Laravel", "React", "TypeScript", "MySQL", "Google Meet API"],
      image: "/single_doc.png",
      github: "https://drive.google.com/drive/folders/1eZKuDcathc3epROqBFgWKHK3lMXcjhw0?usp=sharing",
      live: "https://drive.google.com/file/d/1ntncbIWDYjoiDnVS09mepJ93okD5lSk1/view?usp=sharing",
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "TaskFlow - Task Management App",
      description: "A high-performance task management app with intuitive Kanban boards, real-time collaboration, and insightful analytics to streamline your workflow.",
      technologies: ["React", "Socket.io", "PostgreSQL", "Tailwind CSS", "OpenAI"],
      image: "/task_management_app.png",
      github: "https://drive.google.com/drive/folders/1n5AoyZ4-6aRVpgLCFNuqR8XlqYCmMYrc?usp=sharing",
      live: "https://taskflow-ten-lemon.vercel.app/",
      gradient: "from-secondary to-secondary-glow"
    },
    {
      title: "WeatherSphere - Weather Dashboard",
      description: "A modern weather dashboard providing real-time weather data. Features include hourly and 7-day forecasts, and detailed metrics like humidity, wind speed, pressure, and visibility.",
      technologies: ["JavaScript", "Chart.js", "Weather API", "CSS3"],
      image: "/weather_dashboard.png",
      github: "https://drive.google.com/drive/folders/1aAyWPTBzsX6I6Ikqfr1acED2TGDPQWfj?usp=sharing",
      live: "https://aura-weather-seven.vercel.app/",
      gradient: "from-accent to-accent-glow"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing projects and skills with modern design, smooth animations, and optimized performance.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "/portfolio_sample.svg",
      github: "https://github.com/Aqib2607/my-portfolio",
      live: "https://aqibjawwad.me",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="group glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className={`h-48 bg-gradient-to-r ${project.gradient} opacity-0 absolute inset-0`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 text-xs bg-background/20 backdrop-blur-sm text-foreground rounded-full border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-background/20 backdrop-blur-sm text-foreground rounded-full border border-white/10">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-sm bg-muted/30 text-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 hover:bg-primary/10"
                      asChild
                    >
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Preview
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:opacity-90"
                      asChild
                    >
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/10 px-8 py-4 rounded-full group"
              asChild
            >
              <a 
                href="https://github.com/Aqib2607"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;