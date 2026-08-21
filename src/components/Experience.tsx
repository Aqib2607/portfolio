import { Calendar, MapPin, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    company: "Hungry Tigers",
    companyFull: "Hungry Tigers",
    role: "AI Content & Business Development Executive",
    period: "March 2026 – April 2026",
    duration: "2 mos",
    location: "Sonadanga, Khulna, Bangladesh (Remote China Collaboration)",
    badgeColor: "bg-primary/10 text-primary border-primary/30",
    initials: "HT",
    responsibilities: [
      "Collaborated remotely with cross-functional teams in China to plan and deliver AI-generated digital content.",
      "Converted creative storyboards and scripts into high-quality AI-generated videos using multiple generative AI tools.",
      "Optimized prompts and AI workflows to improve content quality, consistency, and production turnaround.",
      "Coordinated project feedback with international stakeholders and revised assets to meet requirements.",
      "Researched emerging AI video-generation tools and multimodal techniques to enhance creative workflows."
    ],
    technologies: ["Generative AI", "Prompt Engineering", "Workflow Optimization", "Video Generation", "Cross-functional Collaboration"],
  },
  {
    company: "USAxplorer",
    companyFull: "USAxplorer",
    role: "Researcher",
    period: "January 2026 – February 2026",
    duration: "2 mos",
    location: "Sonadanga, Khulna, Bangladesh",
    badgeColor: "bg-secondary/10 text-secondary border-secondary/30",
    initials: "UX",
    responsibilities: [
      "Conducted comprehensive literature reviews and gathered information from scholarly databases to support research projects.",
      "Drafted, edited, and formatted research manuscripts while ensuring consistency with academic writing and citation standards (APA/IEEE/MLA).",
      "Collaborated with clients to refine research objectives, improve document quality, and meet strict submission deadlines.",
      "Performed data synthesis, fact checking, plagiarism screening, and reference management using academic research tools.",
      "Managed multiple research assignments simultaneously while maintaining accuracy and attention to detail."
    ],
    technologies: ["Academic Research", "Data Synthesis", "Fact Checking", "Citation Standards (APA/IEEE/MLA)", "Reference Management"],
  },
  {
    company: "PIBD",
    companyFull: "PIBD (Professional Institute of Business Development)",
    role: "Full-Stack Web Developer Intern",
    period: "August 2025 – February 2026",
    duration: "7 mos",
    location: "274 Khan Jahan Ali Road, Khulna, Bangladesh",
    badgeColor: "bg-accent/10 text-accent border-accent/30",
    initials: "PI",
    responsibilities: [
      "Developed responsive web applications using React, TypeScript, Laravel, PHP, and MySQL.",
      "Designed and integrated RESTful APIs for seamless frontend-backend communication.",
      "Built reusable UI components and implemented responsive layouts for improved user experience.",
      "Participated in database design, debugging, testing, and performance optimization throughout the development lifecycle.",
      "Collaborated with senior developers using Git and Agile development practices to deliver project features on schedule."
    ],
    technologies: ["React", "TypeScript", "Laravel", "PHP", "MySQL", "REST APIs", "Git & GitHub"],
    certificateLink: "https://drive.google.com/file/d/1r77XOAvbQDpPTyqpCcJAAwjsYvpvWwA2/view?usp=sharing",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-[#090909] border-t border-b border-white/5" aria-label="Work Experience">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="section-kicker mb-3">Work History</span>
            <h2 className="text-3xl sm:text-5xl font-heading font-normal text-white tracking-tight">
              Professional <span className="font-serif italic font-normal text-primary">Experience</span> & Research
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md">
            Hands-on software development, academic literature synthesis, and cross-border AI workflows.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.company + exp.role}
              className="p-8 sm:p-10 rounded-3xl bg-[#111111] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/10">
                
                {/* Company & Role */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#181818] border border-white/10 flex items-center justify-center text-lg font-heading font-bold text-white flex-shrink-0">
                    {exp.initials}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-medium text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-primary font-medium mt-0.5">
                      {exp.companyFull}
                    </p>
                  </div>
                </div>

                {/* Period & Location Pills */}
                <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs text-muted-foreground">
                  <span className={`px-3 py-1 rounded-full font-mono font-medium border ${exp.badgeColor}`}>
                    {exp.period} ({exp.duration})
                  </span>
                  <div className="flex items-center gap-1.5 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                    <span>{exp.location}</span>
                  </div>
                </div>

              </div>

              {/* Responsibilities & Tech */}
              <div className="grid lg:grid-cols-12 gap-8 pt-6">
                
                {/* Responsibilities list */}
                <div className="lg:col-span-8 space-y-2.5">
                  <h4 className="text-xs uppercase tracking-widest font-mono text-muted-foreground mb-3">
                    Key Responsibilities & Deliverables
                  </h4>
                  <ul className="space-y-2" role="list">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground font-light leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-primary/80 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills & Certificate Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-mono text-muted-foreground mb-3">
                      Technologies & Practices
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-lg bg-[#181818] text-muted-foreground border border-white/5 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate Link */}
                  {exp.certificateLink && (
                    <div className="pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-accent/40 bg-accent/5 hover:bg-accent/15 text-accent rounded-full text-xs gap-1.5"
                        asChild
                      >
                        <a
                          href={exp.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View internship certificate from ${exp.company} (opens in new tab)`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          View Internship Certificate
                        </a>
                      </Button>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
